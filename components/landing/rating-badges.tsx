import Image from "next/image";

import { ratingBadges } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "dark";
};

export function RatingBadges({ className, variant = "default" }: Props) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {ratingBadges.map((badge) => (
        <div
          key={badge.slug}
          className={cn(
            "flex items-center justify-center rounded-2xl border p-3",
            variant === "dark"
              ? "border-white/10 bg-zinc-950/80"
              : "border-horizon-border/20 bg-white/90 shadow-sm"
          )}
        >
          <Image
            src={badge.logo}
            alt={badge.name}
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
