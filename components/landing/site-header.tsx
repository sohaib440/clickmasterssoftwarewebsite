"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
import { navLinks } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

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
            "rounded-full border border-horizon-border/70 bg-white/90 text-horizon-navy shadow-sm backdrop-blur-xl transition-[border-color,background-color,box-shadow,height] duration-500 ease-out",
            scrolled && "border-horizon-navy/10 bg-white/95 shadow-lg shadow-horizon-navy/8"
          )}
        >
          <div
            className={cn(
              "grid min-w-0 w-full grid-cols-[1fr_auto_1fr] items-center gap-1.5 px-3 transition-all duration-500 sm:gap-2 sm:px-4",
              scrolled ? "h-14 md:h-[3.25rem]" : "h-14 md:h-16"
            )}
          >
            <Link
              href="/"
              className="flex min-w-0 items-center justify-self-start font-heading text-lg font-medium tracking-tight transition-opacity hover:opacity-80 sm:text-xl"
            >
              Nexus
            </Link>

            <nav
              className="hidden items-center justify-center justify-self-center gap-1 lg:gap-2 md:flex"
              aria-label="Main"
            >
              <ServicesNavDropdown />

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-horizon-muted transition-colors hover:bg-horizon-peach/50 hover:text-horizon-navy"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-self-end gap-2">
              <Link
                href="/solutions"
                className="rounded-lg px-2 py-2 text-sm text-horizon-muted transition-colors hover:text-horizon-navy md:hidden"
              >
                Solutions
              </Link>
              <Link
                href={contactPath}
                className={cn(
                  btnPrimary,
                  "hidden shrink-0 sm:inline-flex",
                  "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
