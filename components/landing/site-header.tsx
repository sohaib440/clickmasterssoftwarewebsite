"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import dynamic from "next/dynamic";

import { btnPrimary, contactPath, container } from "@/lib/landing/constants";
import { SiteLogo } from "@/components/landing/site-logo";
import { footerColumns, navCtaLabel, navLinks } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

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

export function SiteHeader() {
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
            "grid min-w-0 w-full grid-cols-[auto_1fr_auto] items-center gap-1.5 border-b border-white/10 px-1 transition-all duration-300 sm:gap-2 sm:px-2",
            scrolled ? "h-[4.5rem] lg:h-20" : "h-[4.75rem] lg:h-[5.25rem]"
          )}
        >
          {/* <SiteLogo
            priority
            className="min-w-0 max-w-[58vw] justify-self-start sm:max-w-none"
            imageClassName="h-12 w-auto max-w-[17rem] sm:h-[3.25rem] sm:max-w-[19rem] md:h-14 md:max-w-[22rem] lg:h-16 lg:max-w-[24rem]"
          /> */}

          <nav
            className="hidden min-w-0 items-center justify-center justify-self-center gap-1 lg:flex lg:gap-2"
            aria-label="Main"
          >
            {navLinks.map((link, linkIndex) =>
              link.label === "Services" ? (
                <ServicesNavDropdown key="services-dropdown" />
              ) : (
                <div key={`${link.href}-${linkIndex}`} className={link.children ? "relative inline-flex group" : ""}>
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                    {link.children ? (
                      <ChevronDown
                        className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                        aria-hidden
                      />
                    ) : null}
                  </Link>

                  {link.children ? (
                    <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[9rem] max-w-[12rem] overflow-hidden rounded-2xl border border-white/10 bg-black opacity-0 shadow-xl shadow-black/40 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      <div className="flex flex-col p-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={`${child.href}-${childIndex}`}
                            href={child.href}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              </span>
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
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

        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={cn(
            "overflow-x-hidden overflow-y-auto border-b border-white/10 transition-[max-height,opacity,padding] duration-300 ease-out lg:hidden",
            mobileMenuOpen
              ? "max-h-[calc(100vh-6rem)] opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          )}
        >
          <nav className="space-y-4">
            <div className="space-y-3 rounded-3xl border border-white/10 bg-black p-4">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
                  Main menu
                </p>
                {navLinks.map((link, linkIndex) => (
                  <div key={`${link.href}-${linkIndex}`}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block w-full rounded-2xl px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                    {link.children ? (
                      <div className="space-y-2 pl-4 pt-1">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={`${child.href}-${childIndex}`}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="block w-full rounded-2xl px-3 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <Link
                  href={contactPath}
                  onClick={closeMobileMenu}
                  className={cn(btnPrimary, "mt-2 block w-full rounded-2xl px-3 py-3 text-center text-sm font-semibold")}
                >
                  {navCtaLabel}
                </Link>
              </div>

              {footerColumns.map((column) => (
                <div key={column.title} className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
                    {column.title}
                  </p>
                  <div className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <Link
                        key={`${column.title}-${link.href}-${linkIndex}`}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="block w-full rounded-2xl px-3 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
