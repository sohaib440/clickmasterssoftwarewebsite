"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import {
  getServiceNavCategories,
  mainCategoryPath,
  subCategoryPath,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const serviceCategories = getServiceNavCategories();

export function ServicesNavDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const active = serviceCategories[activeIndex];

  useEffect(() => {
    const matchIndex = serviceCategories.findIndex(
      (c) => pathname === `/${c.slug}` || pathname.startsWith(`/${c.slug}/`)
    );
    if (matchIndex >= 0) setActiveIndex(matchIndex);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  const goToMainCategory = (slug: string) => {
    close();
    router.push(mainCategoryPath(slug));
  };

  const goToSubCategory = (mainSlug: string, subSlug: string) => {
    close();
    router.push(subCategoryPath(mainSlug, subSlug));
  };

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-horizon-muted transition-colors hover:bg-horizon-peach/50 hover:text-horizon-navy",
          open && "bg-horizon-peach/60 text-horizon-navy"
        )}
      >
        Services
        <ChevronDown
          className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(100vw-2rem,56rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-horizon-border bg-white shadow-xl shadow-horizon-navy/10 transition-all duration-300 ease-out",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="flex min-h-[14rem]">
          <div
            className="w-52 shrink-0 border-r border-horizon-border bg-horizon-cream/40 p-2.5"
            role="navigation"
            aria-label="Service categories"
          >
            <ul className="space-y-0.5">
              {serviceCategories.map((category, index) => {
                const isActive = index === activeIndex;
                const isCurrentPage = pathname === `/${category.slug}`;

                return (
                  <li key={category.slug}>
                    <button
                      type="button"
                      id={`${panelId}-category-${index}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => goToMainCategory(category.slug)}
                      className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        isActive
                          ? "bg-white font-medium text-horizon-navy shadow-sm"
                          : "text-horizon-muted hover:bg-white/70 hover:text-horizon-navy",
                        isCurrentPage && "ring-1 ring-horizon-sky/80"
                      )}
                    >
                      <span className="leading-snug">{category.label}</span>
                      <ChevronRight
                        className={cn(
                          "size-4 shrink-0 transition-opacity",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex min-w-0 flex-1 flex-col p-6">
            <div className="mb-5">
              <button
                type="button"
                onClick={() => goToMainCategory(active.slug)}
                className="group text-left font-heading text-xl font-medium text-horizon-navy hover:underline"
              >
                {active.label}
              </button>
              {active.description ? (
                <p className="mt-1 line-clamp-2 text-sm text-horizon-muted">{active.description}</p>
              ) : null}
            </div>

            <ul className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {active.items.map((item) => (
                  <li key={item.slug}>
                    <button
                      type="button"
                      onClick={() => goToSubCategory(active.slug, item.slug)}
                      className="flex h-full min-h-[3.25rem] w-full items-center rounded-xl border border-horizon-border/60 bg-horizon-cream/30 px-3 py-3 text-left text-sm text-horizon-navy transition-colors hover:border-horizon-peach hover:bg-horizon-peach/50"
                    >
                      {item.label}
                    </button>
                  </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-horizon-border/80 pt-4">
              <button
                type="button"
                onClick={() => goToMainCategory(active.slug)}
                className="inline-flex items-center gap-1 text-sm font-medium text-horizon-navy hover:underline"
              >
                View {active.label}
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-horizon-border bg-horizon-cream/80 px-5 py-3 text-center">
          <Link
            href="/#services"
            onClick={close}
            className="text-sm font-medium text-horizon-navy hover:underline"
          >
            View all services →
          </Link>
        </div>
      </div>
    </div>
  );
}
