import { Mail, MapPin } from "lucide-react";

import { SocialIconLinks } from "@/components/landing/social-icon-links";
import { siteBrand } from "@/lib/landing/brand";
import { container } from "@/lib/landing/constants";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-black md:block">
      <div className={container}>
        <div className="flex h-9 items-center justify-between gap-4 text-xs text-white/75">
          <div className="flex min-w-0 items-center gap-5 lg:gap-8">
            <span className="inline-flex min-w-0 items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{siteBrand.location}</span>
            </span>
            <a
              href={`mailto:${siteBrand.email}`}
              className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{siteBrand.email}</span>
            </a>
          </div>

          <SocialIconLinks iconClassName="size-7" />
        </div>
      </div>
    </div>
  );
}
