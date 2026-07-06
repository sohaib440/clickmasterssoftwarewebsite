"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";

import { serviceNavItems } from "@/components/landing/services-nav-dropdown";
import { SiteLogo } from "@/components/landing/site-logo";
import { btnPrimary, contactPath } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import type { NavLink } from "@/data/landing/navigation";
import { navCtaLabel, navLinks } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

function getMobileChildren(link: NavLink) {
  if (link.label === "Services") {
    return serviceNavItems.map((item) => ({ label: item.label, href: item.href }));
  }
  return link.children ?? [];
}

function MobileNavAccordion({
  link,
  onClose,
  defaultOpen = false,
}: {
  link: NavLink;
  onClose: () => void;
  defaultOpen?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const children = getMobileChildren(link);
  const hasChildren = children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white transition-colors active:bg-white/10"
      >
        {link.label}
        <ArrowRight className="size-4 text-white/35" aria-hidden />
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-medium text-white transition-colors active:bg-white/5"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "size-4 text-primary transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-0.5 border-t border-white/8 px-2 pb-2 pt-1">
            {children.map((child, index) => (
              <Link
                key={`${child.href}-${index}`}
                href={child.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-2.5 text-sm text-white/70 transition-colors active:bg-white/10 active:text-white"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-x-0 top-0 z-[70] flex max-h-[100dvh] flex-col bg-zinc-950 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-[transform,opacity] duration-300 ease-out lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <SiteLogo
            className="min-w-0"
            imageClassName="h-10 w-auto max-w-[11rem] sm:max-w-[13rem]"
            onNavigate={onClose}
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-colors active:bg-white/10"
            aria-label="Close navigation menu"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav
          className="flex-1 space-y-2 overflow-y-auto overscroll-contain px-5 py-5"
          aria-label="Main"
        >
          <p className="px-1 pb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Menu
          </p>

          {navLinks.map((link, linkIndex) => (
            <MobileNavAccordion
              key={`${link.href}-${linkIndex}`}
              link={link}
              onClose={onClose}
              defaultOpen={link.label === "Services"}
            />
          ))}
        </nav>

        <div className="border-t border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
          <Link
            href={contactPath}
            onClick={onClose}
            className={cn(btnPrimary, "flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold")}
          >
            {navCtaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <p className="mt-3 text-center text-xs text-white/45">
            <a
              href={`mailto:${siteBrand.email}`}
              className="text-white/65 underline-offset-2 hover:text-white hover:underline"
            >
              {siteBrand.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
