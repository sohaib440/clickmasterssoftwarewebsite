"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";

import {
  navCtaLabel,
  navLinks,
  type NavLink,
} from "@/components/landing/navbar";
import { SiteLogo } from "@/components/landing/site-logo";
import { btnPrimary, contactPath } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

function MobileNavAccordion({
  link,
  onClose,
  defaultOpen = false,
  menuOpen = false,
}: {
  link: NavLink;
  onClose: () => void;
  defaultOpen?: boolean;
  menuOpen?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const children = link.children ?? [];
  const hasChildren = children.length > 0;

  // Re-apply default open state each time the drawer opens (avoids stale /
  // double-click accordion state after the panel was hidden).
  useEffect(() => {
    if (menuOpen) {
      setExpanded(defaultOpen);
    }
  }, [menuOpen, defaultOpen]);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={(event) => {
          if (link.href === "#") event.preventDefault();
          else onClose();
        }}
        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white transition-colors active:bg-white/10"
      >
        {link.label}
        <ArrowRight className="size-4 text-white/35" aria-hidden />
      </Link>
    );
  }

  const showChildren = menuOpen && expanded;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
      <button
        type="button"
        aria-expanded={showChildren}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-medium text-white transition-colors active:bg-white/5"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "size-4 text-primary transition-transform duration-200",
            showChildren && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
          showChildren ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-0.5 border-t border-white/8 px-2 pb-2 pt-1">
            {children.map((child, index) => (
              <Link
                key={`${child.href}-${index}`}
                href={child.href}
                onClick={(event) => {
                  if (child.href === "#") event.preventDefault();
                  else onClose();
                }}
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
          "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
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
          "fixed inset-x-0 top-0 z-[70] flex max-h-[100dvh] flex-col bg-zinc-950 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-[transform,opacity] duration-300 ease-out xl:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
          <SiteLogo
            className="min-w-0 max-w-[min(70vw,14rem)]"
            imageClassName="h-9 w-auto max-w-full sm:h-10"
            onNavigate={onClose}
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-colors active:bg-white/10 sm:h-11 sm:w-11"
            aria-label="Close navigation menu"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav
          className="flex-1 space-y-2 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5"
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
              menuOpen={open}
            />
          ))}
        </nav>

        <div className="border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-md sm:px-5">
          <Link
            href={contactPath}
            onClick={onClose}
            className={cn(
              btnPrimary,
              "flex h-11 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold sm:h-12"
            )}
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
