"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Share2 } from "lucide-react";

// import { SiteLogo } from "@/components/landing/site-logo";
import { siteBrand } from "@/lib/landing/brand";
import {
  aboutPath,
  btnPrimary,
  caseStudyPath,
  contactPath,
  container,
  industriesPath,
  projectPath,
  teamPath,
} from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

const MobileNav = dynamic(
  () => import("@/components/landing/mobile-nav").then((m) => ({ default: m.MobileNav }))
);

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const serviceNavItems: readonly NavChild[] = [
  { label: "Software Development Company", href: "/software-development" },
  {
    label: "Custom Software Development",
    href: "/software-development/custom-software-development",
  },
  { label: "Web Development", href: "/software-development/web-development" },
  {
    label: "Mobile App Development",
    href: "/software-development/mobile-app-development",
  },
  { label: "UI/UX Design", href: "/design-ux" },
  { label: "Cloud & DevOps Services", href: "/cloud-devops" },
  { label: "AI Development", href: "/artificial-intelligence-ai" },
];

export const navLinks: readonly NavLink[] = [
  {
    label: "Services",
    href: "/software-development",
    children: [...serviceNavItems],
  },
  {
    label: "Locations",
    href: "/location",
    children: [
      { label: "Pakistan", href: "/location/software-house-and-software-company-in-pakistan" },
      { label: "United States", href: "#" },
      { label: "Europe", href: "#" },
      { label: "Middle East", href: "#" },
    ],
  },
  { label: "Industries", href: industriesPath },
  {
    label: "Portfolio",
    href: projectPath,
    children: [
      { label: "Case Studies", href: caseStudyPath },
      { label: "Recent Projects", href: projectPath },
      { label: "Demos", href: "#" },
      { label: "Templates", href: "#" },
    ],
  },
  { label: "Hire Developers", href: "#" },
  {
    label: "About",
    href: aboutPath,
    children: [
      { label: "Our Team", href: teamPath },
      { label: "Certification & Awards", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Jobs", href: "#" },
    ],
  },
  { label: "Contact", href: contactPath },
];

export const navCtaLabel = "Get a Free Quote";

export const footerBrand = {
  description:
    "A globally trusted software development company headquartered in Pakistan. Building software that lasts for clients in the USA, UK, UAE, Canada, Australia, and beyond.",
  copyright: "© 2026 Software Development Company. All rights reserved.",
} as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "Web Development", href: "/software-development/web-development" },
      {
        label: "Mobile Development",
        href: "/software-development/mobile-app-development",
      },
      { label: "UI/UX Design", href: "/design-ux" },
      { label: "E-Commerce Development", href: "/solutions/ecommerce" },
      { label: "AI & Automation", href: "/solutions/ai-agent" },
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "QA & Testing", href: "/testing-and-qa" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: aboutPath },
      { label: "Our Work", href: projectPath },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: contactPath },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "Clutch", href: "https://clutch.co" },
    ],
  },
];

export const footerLegal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
] as const;

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { label: "GitHub", href: "https://github.com", icon: Share2 },
  { label: "Email", href: `mailto:${siteBrand.email}`, icon: Mail },
];

const ServicesNavDropdown = dynamic(
  () =>
    import("@/components/landing/services-nav-dropdown").then((m) => ({
      default: m.ServicesNavDropdown,
    })),
  {
    loading: () => (
      <span className="rounded-lg px-3 py-2 text-sm text-white/60">Services</span>
    ),
  }
);

const navLinkClass =
  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors whitespace-nowrap hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40";

function stopPlaceholderNav(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "#") event.preventDefault();
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-black text-white transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      )}
    >
      <div className={container}>
        <div
          className={cn(
            "grid min-w-0 w-full grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-white/10 transition-all duration-300",
            scrolled ? "h-[4.25rem] lg:h-20" : "h-[4.5rem] lg:h-[5.25rem]"
          )}
        >
          {/* <SiteLogo
            priority
            className="min-w-0 max-w-[58vw] justify-self-start sm:max-w-none lg:hidden"
            imageClassName="h-10 w-auto max-w-[11rem] sm:h-11 sm:max-w-[13rem]"
          />

          <SiteLogo
            priority
            className="hidden min-w-0 justify-self-start lg:inline-flex"
            imageClassName="h-12 w-auto max-w-[17rem] md:h-14 md:max-w-[22rem] lg:h-16 lg:max-w-[24rem]"
          /> */}

          <nav
            className="hidden min-w-0 items-center justify-center justify-self-center gap-1 lg:flex lg:gap-2"
            aria-label="Main"
          >
            {navLinks.map((link, linkIndex) =>
              link.label === "Services" ? (
                <ServicesNavDropdown key="services-dropdown" />
              ) : (
                <div
                  key={`${link.href}-${linkIndex}`}
                  className={link.children ? "relative inline-flex group" : ""}
                >
                  <Link
                    href={link.href}
                    className={navLinkClass}
                    onClick={(event) => stopPlaceholderNav(event, link.href)}
                  >
                    {link.label}
                    {link.children ? (
                      <ChevronDown
                        className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                        aria-hidden
                      />
                    ) : null}
                  </Link>

                  {link.children ? (
                    <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[12rem] max-w-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-black opacity-0 shadow-xl shadow-black/40 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      <div className="flex flex-col p-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={`${child.href}-${childIndex}`}
                            href={child.href}
                            onClick={(event) => stopPlaceholderNav(event, child.href)}
                            className="rounded-xl px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            )}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-white transition-colors lg:hidden",
                mobileMenuOpen
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-white/20 bg-white/5 active:bg-white/10"
              )}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              </span>
              <Menu className="size-5" aria-hidden />
            </button>

            <Link
              href={contactPath}
              className={cn(
                btnPrimary,
                "hidden shrink-0 sm:inline-flex",
                "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              )}
            >
              {navCtaLabel}
            </Link>
          </div>
        </div>
      </div>

      <MobileNav open={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}

/** @deprecated Prefer `Navbar` kept for existing imports */
export const SiteHeader = Navbar;
