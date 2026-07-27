import { Mail, MapPin } from "lucide-react";

import { SocialIconLinks } from "@/components/landing/social-icon-links";
import { siteBrand } from "@/lib/landing/brand";
import { container } from "@/lib/landing/constants";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-black">
      <div className={container}>
        <div className="flex min-h-9 flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 text-[11px] text-white/75 sm:flex-nowrap sm:gap-x-4 sm:py-0 sm:text-xs">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1.5 sm:gap-x-5 lg:gap-8">
            <span className="inline-flex min-w-0 max-w-full items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{siteBrand.location}</span>
            </span>
            <a
              href={`mailto:${siteBrand.email}`}
              className="inline-flex min-w-0 max-w-full items-center gap-1.5 transition-colors hover:text-white"
              aria-label={`Email ${siteBrand.email}`}
            >
              <Mail className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate sm:max-w-none">{siteBrand.email}</span>
            </a>
          </div>

          <SocialIconLinks className="shrink-0" iconClassName="size-7 sm:size-8" />
        </div>
      </div>
    </div>
  );
}
