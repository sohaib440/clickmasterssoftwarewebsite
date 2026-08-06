import { siteSocial } from "@/lib/landing/brand";

export type ReviewPlatformSlug = "facebook" | "clutch" | "trustpilot" | "google";

export type ReviewPlatform = {
  slug: ReviewPlatformSlug;
  name: string;
  href: string;
  /** 0–5 average rating from the live profile when known */
  rating: number;
  /** Optional review count from the profile */
  reviewCount?: number;
  /** How stars are painted to match each platform */
  starTone: "white" | "clutch" | "trustpilot" | "google";
  /** Prefer showing "4.9/5.0" under the name (Clutch-style) */
  showScore?: boolean;
};

/**
 * Profile links + last-known scores.
 * Live fetch in `getReviewPlatforms()` overrides these when a public score is found.
 */
export const reviewPlatformFallbacks: ReviewPlatform[] = [
  {
    slug: "facebook",
    name: "facebook",
    href: siteSocial.facebook,
    rating: 5,
    starTone: "white",
  },
  {
    slug: "clutch",
    name: "Clutch",
    href: siteSocial.clutch,
    rating: 4.9,
    showScore: true,
    starTone: "clutch",
  },
  {
    slug: "trustpilot",
    name: "Trustpilot",
    href: siteSocial.trustpilot,
    rating: 5,
    starTone: "trustpilot",
  },
  {
    slug: "google",
    name: "Google",
    href: siteSocial.googleReviews,
    rating: 5,
    starTone: "google",
  },
];
