import Image from "next/image";
import Link from "next/link";

import { siteBrand } from "@/lib/landing/brand";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onNavigate?: () => void;
};

export function SiteLogo({ className, imageClassName, priority = false, onNavigate }: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}
      aria-label={siteBrand.name}
    >
      <Image
        src={siteBrand.logo.src}
        alt={siteBrand.logo.alt}
        width={siteBrand.logo.width}
        height={siteBrand.logo.height}
        priority={priority}
        className={cn("h-auto w-auto object-contain", imageClassName)}
      />
    </Link>
  );
}
