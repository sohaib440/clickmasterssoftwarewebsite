"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type BlogTableOfContentsProps = {
  items: TocItem[];
  className?: string;
};

const NAV_OFFSET = 120;

function getScrollParentOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
  return rect.top + scrollTop - NAV_OFFSET;
}

export function BlogTableOfContents({ items, className }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const scrollingToId = useRef<string | null>(null);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingToId.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
          return;
        }

        const above = headings
          .filter((heading) => heading.getBoundingClientRect().top < NAV_OFFSET + 8)
          .at(-1);

        if (above) setActiveId(above.id);
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -45% 0px`,
        threshold: [0, 0.25, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => {
      observer.disconnect();
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [items]);

  function scrollToHeading(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    scrollingToId.current = id;
    setActiveId(id);

    // Force reveal wrappers visible before measuring, then scroll to stable position.
    el.querySelectorAll(".motion-reveal").forEach((node) => {
      node.classList.add("motion-reveal--visible");
    });

    const top = getScrollParentOffset(el);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);

    if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      // Re-measure after smooth scroll / reveal settle
      const settled = document.getElementById(id);
      if (settled) {
        const corrected = getScrollParentOffset(settled);
        if (Math.abs(corrected - (window.pageYOffset || document.documentElement.scrollTop)) > 8) {
          window.scrollTo({ top: Math.max(0, corrected), behavior: "auto" });
        }
      }
      scrollingToId.current = null;
    }, 700);
  }

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-xl border border-horizon-border/80 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-5 lg:p-6",
        className
      )}
    >
      <p className="font-heading text-sm font-semibold tracking-tight text-horizon-navy md:text-lg">
        In this article
      </p>
      <div className="mt-3 h-px w-full bg-primary/55" aria-hidden />

      <ol className="relative mt-3 space-y-2.5 border-l border-horizon-border pl-3 md:mt-5 md:space-y-4 md:pl-5 lg:space-y-2.5">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="relative">
              {isActive ? (
                <span
                  className="absolute -left-[1.41rem] top-[0.45rem] size-2 rounded-full bg-primary ring-[3px] ring-white"
                  aria-hidden
                />
              ) : null}
              <a
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHeading(item.id);
                }}
                className={cn(
                  "block font-heading text-[0.72rem] leading-snug transition-colors md:text-[0.95rem] lg:text-[0.84rem]",
                  item.level === 3 && "pl-2 text-[0.7rem] md:text-[0.9rem] lg:text-[0.8rem]",
                  isActive
                    ? "font-medium text-primary"
                    : "text-horizon-navy/85 hover:text-horizon-navy"
                )}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
