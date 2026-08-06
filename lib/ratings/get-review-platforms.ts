import "server-only";

import {
  reviewPlatformFallbacks,
  type ReviewPlatform,
  type ReviewPlatformSlug,
} from "@/lib/ratings/platforms";
import { siteSocial } from "@/lib/landing/brand";

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; NextSoftwareBot/1.0; +https://nextsoftwaredevelopment.com)",
        Accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: 60 * 60 * 12 },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function firstMatch(html: string, patterns: RegExp[]): number | null {
  for (const pattern of patterns) {
    const match = pattern.exec(html);
    if (match?.[1]) {
      const value = Number.parseFloat(match[1]);
      if (Number.isFinite(value) && value > 0 && value <= 5) return value;
    }
  }
  return null;
}

function firstCount(html: string, patterns: RegExp[]): number | undefined {
  for (const pattern of patterns) {
    const match = pattern.exec(html);
    if (match?.[1]) {
      const value = Number.parseInt(match[1].replace(/,/g, ""), 10);
      if (Number.isFinite(value) && value >= 0) return value;
    }
  }
  return undefined;
}

async function fetchClutchOverride(): Promise<Partial<ReviewPlatform> | null> {
  const html = await fetchHtml(siteSocial.clutch);
  if (!html) return null;

  if (/Not yet reviewed/i.test(html)) {
    return { rating: 0, reviewCount: 0 };
  }

  const rating = firstMatch(html, [
    /"ratingValue"\s*:\s*"?([\d.]+)"?/i,
    /itemprop="ratingValue"\s+content="([\d.]+)"/i,
    /([\d.]+)\s*\/\s*5(?:\.0)?/i,
  ]);
  const reviewCount = firstCount(html, [
    /"reviewCount"\s*:\s*"?(\d+)"?/i,
    /itemprop="reviewCount"\s+content="(\d+)"/i,
    /(\d+)\s+reviews?/i,
  ]);

  if (rating == null) return null;
  return { rating, reviewCount };
}

async function fetchTrustpilotOverride(): Promise<Partial<ReviewPlatform> | null> {
  const html = await fetchHtml(siteSocial.trustpilot);
  if (!html || /Verifying Connection/i.test(html)) return null;

  const rating = firstMatch(html, [
    /"ratingValue"\s*:\s*"?([\d.]+)"?/i,
    /itemprop="ratingValue"[^>]*content="([\d.]+)"/i,
  ]);
  const reviewCount = firstCount(html, [
    /"reviewCount"\s*:\s*"?(\d+)"?/i,
    /itemprop="reviewCount"[^>]*content="(\d+)"/i,
  ]);

  if (rating == null) return null;
  return { rating, reviewCount };
}

async function fetchGoogleOverride(): Promise<Partial<ReviewPlatform> | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total,url&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 60 * 60 * 12 } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      result?: { rating?: number; user_ratings_total?: number; url?: string };
    };
    const rating = data.result?.rating;
    if (typeof rating !== "number") return null;
    return {
      rating,
      reviewCount: data.result?.user_ratings_total,
      href: data.result?.url ?? siteSocial.googleReviews,
    };
  } catch {
    return null;
  }
}

async function fetchFacebookOverride(): Promise<Partial<ReviewPlatform> | null> {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  if (!token || !pageId) return null;

  try {
    const url = `https://graph.facebook.com/v21.0/${encodeURIComponent(pageId)}?fields=overall_star_rating,rating_count,link&access_token=${encodeURIComponent(token)}`;
    const res = await fetch(url, { next: { revalidate: 60 * 60 * 12 } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      overall_star_rating?: number;
      rating_count?: number;
      link?: string;
    };
    if (typeof data.overall_star_rating !== "number") return null;
    return {
      rating: data.overall_star_rating,
      reviewCount: data.rating_count,
      href: data.link ?? siteSocial.facebook,
    };
  } catch {
    return null;
  }
}

const fetchers: Record<
  ReviewPlatformSlug,
  () => Promise<Partial<ReviewPlatform> | null>
> = {
  clutch: fetchClutchOverride,
  trustpilot: fetchTrustpilotOverride,
  google: fetchGoogleOverride,
  facebook: fetchFacebookOverride,
};

/** Merge live profile data onto configured platforms (no logo images). */
export async function getReviewPlatforms(): Promise<ReviewPlatform[]> {
  const overrides = await Promise.all(
    reviewPlatformFallbacks.map(async (platform) => {
      const override = await fetchers[platform.slug]();
      return [platform.slug, override] as const;
    })
  );
  const bySlug = Object.fromEntries(overrides) as Record<
    ReviewPlatformSlug,
    Partial<ReviewPlatform> | null
  >;

  return reviewPlatformFallbacks.map((platform) => {
    const override = bySlug[platform.slug];
    if (!override) return platform;

    // Clutch with zero reviews: keep the profile link, hide a fake score.
    if (platform.slug === "clutch" && override.rating === 0) {
      return {
        ...platform,
        rating: 0,
        reviewCount: 0,
        showScore: false,
      };
    }

    return {
      ...platform,
      ...override,
      rating: override.rating ?? platform.rating,
    };
  });
}
