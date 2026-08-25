"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { EmailLink } from "@/components/landing/email-link";
import { PhoneLink } from "@/components/landing/phone-link";
import { SocialIconLinks } from "@/components/landing/social-icon-links";
import { siteBrand } from "@/lib/landing/brand";
import { container } from "@/lib/landing/constants";

export function TopBar() {
  return (
    <div className="site-top-bar border-b border-black bg-white text-horizon-navy">
      <div className={container}>
        <div className="flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 text-[11px] sm:text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 sm:gap-x-5 lg:gap-8">
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <MapPin className="size-4 shrink-0" aria-hidden />
              <span className="whitespace-nowrap">{siteBrand.location}</span>
            </span>
            <PhoneLink className="inline-flex shrink-0 items-center gap-1.5 underline-offset-2 transition-colors hover:underline">
              <Phone className="size-4 shrink-0" aria-hidden />
              <span className="whitespace-nowrap">{siteBrand.phone}</span>
            </PhoneLink>
            <EmailLink className="inline-flex shrink-0 items-center gap-1.5 underline-offset-2 transition-colors hover:underline">
              <Mail className="size-4 shrink-0" aria-hidden />
              <span className="whitespace-nowrap">{siteBrand.email}</span>
            </EmailLink>
          </div>

          <SocialIconLinks className="shrink-0" iconClassName="size-6 sm:size-7 text-horizon-navy" />
        </div>
      </div>
    </div>
  );
}
