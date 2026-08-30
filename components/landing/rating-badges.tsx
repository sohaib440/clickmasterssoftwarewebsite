import Image from "next/image";
import Link from "next/link";

import { getReviewPlatforms } from "@/lib/ratings/get-review-platforms";
import type { ReviewPlatform, ReviewPlatformSlug } from "@/lib/ratings/platforms";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "dark";
  /** Compact inline badges (default) or stacked review cards for location heroes */
  appearance?: "compact" | "cards";
};

/** Same order on homepage + location heroes: Google → Clutch → Trustpilot → Facebook */
const PLATFORM_ORDER: ReviewPlatformSlug[] = [
  "google",
  "clutch",
  "trustpilot",
  "facebook",
];

/** Display defaults matching the location-hero trust card design */
const CARD_DISPLAY: Record<
  ReviewPlatformSlug,
  { rating: number; reviewCount: number }
> = {
  google: { rating: 5, reviewCount: 60 },
  clutch: { rating: 5, reviewCount: 30 },
  trustpilot: { rating: 4.9, reviewCount: 45 },
  facebook: { rating: 5, reviewCount: 70 },
};

function StarIcon({
  filled,
  className,
  square,
  pureWhite,
  gold,
}: {
  filled: boolean;
  className?: string;
  square?: boolean;
  /** Solid white fill (no muted opacity) for dark badges without a live score */
  pureWhite?: boolean;
  gold?: boolean;
}) {
  if (square) {
    return (
      <span
        className={cn(
          "inline-flex size-3.5 items-center justify-center rounded-[2px] sm:size-4",
          filled ? "bg-[#00b67a]" : "bg-white/20",
          className
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-2.5 fill-white sm:size-3">
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
        </svg>
      </span>
    );
  }

  const fillClass = gold
    ? filled
      ? "fill-[#F5C518]"
      : "fill-[#F5C518]/40"
    : pureWhite
      ? "fill-white"
      : filled
        ? "fill-current"
        : "fill-current opacity-25";

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-3.5 sm:size-4", className)}
      aria-hidden
    >
      <path
        d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"
        className={fillClass}
      />
    </svg>
  );
}

function Stars({
  platform,
  variant,
  gold,
  ratingOverride,
}: {
  platform: ReviewPlatform;
  variant: "default" | "dark";
  gold?: boolean;
  ratingOverride?: number;
}) {
  const rating = Math.max(
    0,
    Math.min(5, ratingOverride ?? platform.rating)
  );
  const full = Math.round(rating);
  const clutchWhite =
    platform.starTone === "clutch" && variant === "dark" && rating <= 0;

  const toneClass = gold
    ? "text-[#F5C518]"
    : platform.starTone === "clutch"
      ? variant === "dark"
        ? "text-white"
        : "text-horizon-navy"
      : platform.starTone === "google"
        ? "text-[#fbbc04]"
        : platform.starTone === "trustpilot"
          ? "text-[#00b67a]"
          : variant === "dark"
            ? "text-white"
            : "text-horizon-navy";

  return (
    <span className={cn("inline-flex items-center gap-0.5", toneClass)} aria-hidden>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          filled={rating > 0 && index < full}
          pureWhite={clutchWhite && !gold}
          gold={gold}
          square={!gold && platform.starTone === "trustpilot"}
        />
      ))}
    </span>
  );
}

function GoogleMark({ colored }: { colored?: boolean }) {
  if (colored) {
    return (
      <Image
        src="/ratings/google-logo.png"
        alt="Google"
        width={92}
        height={30}
        className="h-5 w-auto object-contain object-left sm:h-6"
      />
    );
  }

  return (
    <span className="font-heading text-[15px] font-medium tracking-tight sm:text-base" aria-hidden>
      <span className="!text-[#4285f4]">G</span>
      <span className="!text-[#ea4335]">o</span>
      <span className="!text-[#fbbc04]">o</span>
      <span className="!text-[#4285f4]">g</span>
      <span className="!text-[#34a853]">l</span>
      <span className="!text-[#ea4335]">e</span>
    </span>
  );
}

function ClutchMark({ colored, variant }: { colored?: boolean; variant: "default" | "dark" }) {
  return (
    <Image
      src={
        colored || variant === "dark"
          ? "/ratings/clutch-logo-white.png"
          : "/ratings/clutch-logo.png"
      }
      alt="Clutch"
      width={92}
      height={31}
      className={cn(
        "w-auto object-contain",
        colored ? "h-5 object-left sm:h-6" : "h-[18px] object-center sm:h-5"
      )}
    />
  );
}

function TrustpilotMark({
  colored,
  lightText,
}: {
  colored?: boolean;
  lightText: string;
}) {
  return (
    <span
        className={cn(
          "inline-flex items-center gap-1.5 font-heading font-medium tracking-tight",
        colored ? "text-base !text-white sm:text-[1.05rem]" : "text-[15px] sm:text-base",
        !colored && lightText
      )}
    >
      <span
        className="inline-flex size-[1.125rem] items-center justify-center rounded-[2px] bg-[#00b67a] sm:size-5"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-2.5 fill-white sm:size-3">
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
        </svg>
      </span>
      Trustpilot
    </span>
  );
}

function FacebookMark({ colored, lightText }: { colored?: boolean; lightText: string }) {
  if (colored) {
    return (
      <svg viewBox="0 0 24 24" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path
          fill="#fff"
          d="M13.32 8.1h1.68V5.88h-1.68c-2.04 0-3.42 1.32-3.42 3.36V10.5H8.4v2.22h1.5V18h2.52v-5.28h1.98l.42-2.22h-2.4V9.48c0-.72.36-1.38 1.2-1.38z"
        />
      </svg>
    );
  }

  return (
    <span
      className={cn(
        "font-heading text-[15px] font-medium lowercase tracking-tight sm:text-base",
        lightText
      )}
    >
      facebook
    </span>
  );
}

function PlatformMark({
  platform,
  variant,
  colored,
}: {
  platform: ReviewPlatform;
  variant: "default" | "dark";
  colored?: boolean;
}) {
  const lightText = variant === "dark" ? "text-white" : "text-horizon-navy";

  if (platform.slug === "google") {
    return <GoogleMark colored={colored} />;
  }

  if (platform.slug === "clutch") {
    return <ClutchMark colored={colored} variant={variant} />;
  }

  if (platform.slug === "trustpilot") {
    return <TrustpilotMark colored={colored} lightText={lightText} />;
  }

  return <FacebookMark colored={colored} lightText={lightText} />;
}

/** Card footer CTAs — invite clicks instead of fabricated review counts */
const CARD_CTA: Record<ReviewPlatformSlug, string> = {
  google: "View Google reviews",
  clutch: "See Clutch profile",
  trustpilot: "Read Trustpilot reviews",
  facebook: "Check Facebook ratings",
};

function cardStats(platform: ReviewPlatform) {
  // Location-hero / homepage cards: display score + golden stars.
  return CARD_DISPLAY[platform.slug];
}

export async function RatingBadges({
  className,
  variant = "default",
  appearance = "compact",
}: Props) {
  const platforms = await getReviewPlatforms();
  const ordered = [...platforms].sort(
    (a, b) => PLATFORM_ORDER.indexOf(a.slug) - PLATFORM_ORDER.indexOf(b.slug)
  );
  const cards = appearance === "cards";
  /** Homepage + location dark badges use real platform marks and golden stars */
  const useBrandMarks = cards || variant === "dark";
  /** Always paint golden stars on rating badges */
  const useGoldStars = true;

  return (
    <div
      className={cn(
        "grid w-full min-w-0 gap-2.5 sm:gap-3",
        cards
          ? "grid-cols-2 sm:grid-cols-4"
          : "grid-cols-2 gap-3 sm:grid-cols-4",
        className
      )}
    >
      {ordered.map((platform) => {
        const stats = cards ? cardStats(platform) : null;
        const compactRating =
          !cards && useGoldStars
            ? platform.rating > 0
              ? platform.rating
              : CARD_DISPLAY[platform.slug].rating
            : undefined;
        const label =
          (stats?.rating ?? compactRating ?? platform.rating) > 0
            ? `${platform.name} ${(stats?.rating ?? compactRating ?? platform.rating).toFixed(1)} out of 5`
            : `${platform.name} profile`;

        return (
          <Link
            key={platform.slug}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group flex min-w-0 flex-col rounded-[0.75rem] border transition-colors",
              cards
                ? "items-start justify-start gap-2 px-3 py-3 sm:px-3.5 sm:py-3.5"
                : "min-h-[4.25rem] items-center justify-center gap-1.5 px-3 py-3",
              variant === "dark"
                ? "border-white/15 bg-[#141414] hover:border-white/30 hover:bg-zinc-900"
                : "border-horizon-border/20 bg-white/90 shadow-sm hover:border-primary/30"
            )}
          >
            <PlatformMark
              platform={platform}
              variant={variant}
              colored={useBrandMarks}
            />
            {cards && stats ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={cn(
                      "text-base font-semibold tabular-nums leading-none sm:text-[1.125rem]",
                      variant === "dark" ? "text-white" : "text-horizon-navy"
                    )}
                  >
                    {stats.rating.toFixed(1)}
                  </span>
                  <Stars
                    platform={platform}
                    variant={variant}
                    gold
                    ratingOverride={stats.rating}
                  />
                </span>
                <span
                  className={cn(
                    "text-[11px] leading-tight underline-offset-2 transition-colors group-hover:underline sm:text-xs",
                    variant === "dark" ? "text-white/70" : "text-horizon-muted"
                  )}
                >
                  {CARD_CTA[platform.slug]}
                </span>
              </>
            ) : platform.showScore && platform.rating > 0 ? (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs",
                  variant === "dark" ? "text-white/85" : "text-horizon-navy/80"
                )}
              >
                <span className="tabular-nums font-medium">
                  {platform.rating.toFixed(1)}/5.0
                </span>
                <Stars
                  platform={platform}
                  variant={variant}
                  gold={useGoldStars}
                  ratingOverride={compactRating}
                />
              </span>
            ) : (
              <Stars
                platform={platform}
                variant={variant}
                gold={useGoldStars}
                ratingOverride={compactRating}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
