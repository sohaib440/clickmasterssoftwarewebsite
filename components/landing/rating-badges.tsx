import Image from "next/image";
import Link from "next/link";

import { getReviewPlatforms } from "@/lib/ratings/get-review-platforms";
import type { ReviewPlatform } from "@/lib/ratings/platforms";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "dark";
};

function StarIcon({
  filled,
  className,
  square,
  pureWhite,
}: {
  filled: boolean;
  className?: string;
  square?: boolean;
  /** Solid white fill (no muted opacity) for dark badges without a live score */
  pureWhite?: boolean;
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

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-3.5 sm:size-4", className)}
      aria-hidden
    >
      <path
        d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"
        className={
          pureWhite
            ? "fill-white"
            : filled
              ? "fill-current"
              : "fill-current opacity-25"
        }
      />
    </svg>
  );
}

function Stars({
  platform,
  variant,
}: {
  platform: ReviewPlatform;
  variant: "default" | "dark";
}) {
  const rating = Math.max(0, Math.min(5, platform.rating));
  const full = Math.round(rating);
  const clutchWhite =
    platform.starTone === "clutch" && variant === "dark" && rating <= 0;

  const toneClass =
    platform.starTone === "clutch"
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
          pureWhite={clutchWhite}
          square={platform.starTone === "trustpilot"}
        />
      ))}
    </span>
  );
}

function PlatformMark({
  platform,
  variant,
}: {
  platform: ReviewPlatform;
  variant: "default" | "dark";
}) {
  const lightText = variant === "dark" ? "text-white" : "text-horizon-navy";

  if (platform.slug === "google") {
    return (
      <span className="font-heading text-[15px] font-medium tracking-tight sm:text-base" aria-hidden>
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc04]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
    );
  }

  if (platform.slug === "clutch") {
    return (
      <Image
        src={
          variant === "dark"
            ? "/ratings/clutch-logo-white.png"
            : "/ratings/clutch-logo.png"
        }
        alt="Clutch"
        width={92}
        height={31}
        className="h-[18px] w-auto object-contain object-center sm:h-5"
      />
    );
  }

  if (platform.slug === "trustpilot") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 font-heading text-[15px] font-medium tracking-tight sm:text-base",
          lightText
        )}
      >
        <span
          className="inline-flex size-4 items-center justify-center rounded-[2px] bg-[#00b67a]"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="size-2.5 fill-white">
            <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
          </svg>
        </span>
        Trustpilot
      </span>
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

export async function RatingBadges({ className, variant = "default" }: Props) {
  const platforms = await getReviewPlatforms();

  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {platforms.map((platform) => {
        const label =
          platform.rating > 0
            ? `${platform.name} ${platform.rating.toFixed(1)} out of 5`
            : `${platform.name} profile`;

        return (
          <Link
            key={platform.slug}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border px-3 py-3 transition-colors",
              variant === "dark"
                ? "border-white/10 bg-zinc-950/80 hover:border-white/25 hover:bg-zinc-900"
                : "border-horizon-border/20 bg-white/90 shadow-sm hover:border-primary/30"
            )}
          >
            <PlatformMark platform={platform} variant={variant} />
            {platform.showScore && platform.rating > 0 ? (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs",
                  variant === "dark" ? "text-white/85" : "text-horizon-navy/80"
                )}
              >
                <span className="tabular-nums font-medium">
                  {platform.rating.toFixed(1)}/5.0
                </span>
                <Stars platform={platform} variant={variant} />
              </span>
            ) : (
              <Stars platform={platform} variant={variant} />
            )}
          </Link>
        );
      })}
    </div>
  );
}
