"use client";

import { siteBrand, siteEmailComposeHref, siteEmailMailto } from "@/lib/landing/brand";
import { cn } from "@/lib/utils";

type EmailLinkProps = {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
};

/**
 * Email CTA that works on laptop/desktop even when no mail app is installed.
 * Prefers opening Gmail compose in a new tab; keeps mailto: for crawlers / copy-link.
 */
export function EmailLink({ className, children, ariaLabel }: EmailLinkProps) {
  return (
    <a
      href={siteEmailMailto}
      className={cn("cursor-pointer", className)}
      aria-label={ariaLabel ?? `Email ${siteBrand.email}`}
      onClick={(event) => {
        event.preventDefault();
        window.open(siteEmailComposeHref, "_blank", "noopener,noreferrer");
      }}
    >
      {children ?? siteBrand.email}
    </a>
  );
}
