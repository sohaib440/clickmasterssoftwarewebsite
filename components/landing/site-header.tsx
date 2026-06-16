"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import dynamic from "next/dynamic";

const ServicesNavDropdown = dynamic(
  () =>
    import("@/components/landing/services-nav-dropdown").then((m) => ({
      default: m.ServicesNavDropdown,
    })),
  {
    loading: () => (
      <span className="rounded-lg px-3 py-2 text-sm text-horizon-muted">Services</span>
    ),
  }
);
import { btnPrimary, contactPath, container } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { navCtaLabel, navLinks } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

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
    <header className="sticky top-0 z-50 w-full pt-2 pb-2">
      <div className={container}>
        <div
          className={cn(
            "rounded-[1.75rem] border border-horizon-border/70 bg-white/90 text-horizon-navy shadow-sm backdrop-blur-xl transition-[border-color,background-color,box-shadow,height] duration-500 ease-out",
            scrolled && "border-horizon-navy/10 bg-white/95 shadow-lg shadow-horizon-navy/8"
          )}
        >
          <div
            className={cn(
              "grid min-w-0 w-full grid-cols-[auto_1fr_auto] items-center gap-1.5 px-3 transition-all duration-500 sm:gap-2 sm:px-4",
              scrolled ? "h-14 lg:h-13" : "h-14 lg:h-16"
            )}
          >
            <Link
              href="/"
              className="flex min-w-0 items-center justify-self-start font-heading text-sm font-medium tracking-tight transition-opacity hover:opacity-80 sm:text-base md:text-lg"
            >
              <span className="truncate">{siteBrand.name}</span>
            </Link>

            <nav
              className="hidden min-w-0 items-center justify-center justify-self-center gap-1 lg:flex lg:gap-2"
              aria-label="Main"
            >
              <ServicesNavDropdown />

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-horizon-muted transition-colors hover:bg-horizon-peach/50 hover:text-horizon-navy whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-self-end gap-2 lg:justify-self-end">
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-horizon-border bg-white text-horizon-navy transition-colors hover:bg-horizon-peach/50 lg:hidden"
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
              "lg:hidden overflow-x-hidden overflow-y-auto transition-[max-height,opacity,padding] duration-300 ease-out",
              mobileMenuOpen
                ? "max-h-[calc(100vh-6rem)] opacity-100 pt-3 pb-4"
                : "max-h-0 opacity-0 py-0"
            )}
          >
            <nav className="space-y-2 px-3 sm:px-4">
              <div className="space-y-2 rounded-3xl border border-horizon-border bg-white/95 p-3 shadow-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block w-full rounded-2xl px-3 py-3 text-sm font-medium text-horizon-navy transition-colors hover:bg-horizon-sky/20"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={contactPath}
                  onClick={closeMobileMenu}
                  className="block w-full rounded-2xl bg-horizon-navy px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-horizon-navy/90"
                >
                  {navCtaLabel}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
