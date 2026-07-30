import Link from "next/link";

import { siteSocial } from "@/lib/landing/brand";
import { cn } from "@/lib/utils";

export const socialIconLinks = [
  {
    label: "LinkedIn",
    href: siteSocial.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7 md:size-8" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: siteSocial.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7 md:size-8" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteSocial.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7 md:size-8" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: siteSocial.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7 md:size-8" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: siteSocial.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7 md:size-8" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Clutch",
    href: siteSocial.clutch,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-5.5 13.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4v.5H6.5v-.5z" />
      </svg>
    ),
  },
] as const;

type SocialIconLinksProps = {
  className?: string;
  iconClassName?: string;
  /** `onLight` for white/top-bar surfaces; `onDark` for the black footer */
  variant?: "onLight" | "onDark";
};

const variantIconClass = {
  onLight:
    "size-7 sm:size-8 md:size-9 p-2 border-black/10 bg-black/5 text-black/70 hover:border-black/20 hover:bg-black/10 hover:text-black",
  onDark:
    "size-8 sm:size-10 lg:size-10 p-2 border-white/20 bg-white/10 text-white/80 hover:border-white/30 hover:bg-white/15 hover:text-white",
} as const;

export function SocialIconLinks({
  className,
  iconClassName,
  variant = "onLight",
}: SocialIconLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {socialIconLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            "inline-flex items-center justify-center rounded-full transition-colors",
            variantIconClass[variant],
            iconClassName
          )}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
