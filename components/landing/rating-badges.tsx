import Image from "next/image";

import { ratingBadges } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function RatingBadges({ className }: Props) {
  return (
    <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-4", className)}>
      {ratingBadges.map((badge, index) => (
        <div
          key={badge.slug}
          className={cn(
            "flex items-center justify-center rounded-3xl border p-3 shadow-sm",
            index < 3
              ? "border-transparent bg-horizon-navy text-white"
              : "border-horizon-border/20 bg-white/90"
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
