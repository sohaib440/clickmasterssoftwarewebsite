"use client";

import { useEffect, useState } from "react";

import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { card } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { testimonials } from "@/data/landingPage";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 3;
const ROTATE_MS = 6000;

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialsSection() {
  const pageCount = Math.max(1, Math.ceil(testimonials.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (pageCount <= 1) return;

    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setPage((current) => (current + 1) % pageCount);
        setVisible(true);
      }, 280);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [pageCount]);

  const start = page * PAGE_SIZE;
  const visibleItems = testimonials.slice(start, start + PAGE_SIZE);

  return (
    <section id="testimonials" className="w-full bg-horizon-cream">
      <LandingContainer>
        <SectionHeading
          overlineText="Testimonials"
          title={
            <>
              What <span className="italic">partners</span> say
            </>
          }
          className={sectionHeadingGap}
        />

        <ul
          className={cn(
            "grid grid-cols-1 gap-4 transition-all duration-300 ease-out md:grid-cols-3",
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
          aria-live="polite"
        >
          {visibleItems.map((item, i) => (
            <li key={`${item.author}-${page}`}>
              <Reveal
                delay={i * motionStagger}
                className={cn(card, "flex h-full flex-col p-4 lg:p-5")}
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-left text-horizon-muted md:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 flex items-center gap-3 border-t border-horizon-border pt-4">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-full border border-horizon-border bg-horizon-navy/5 font-heading text-sm font-medium text-horizon-navy"
                    aria-hidden
                  >
                    {getInitials(item.author)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-horizon-navy">{item.author}</p>
                    <p className="mt-1 text-sm text-horizon-muted">{item.role}</p>
                  </div>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>

        {pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-2" aria-label="Testimonial pages">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setVisible(false);
                  window.setTimeout(() => {
                    setPage(index);
                    setVisible(true);
                  }, 200);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === page
                    ? "w-6 bg-horizon-navy"
                    : "w-2 bg-horizon-navy/25 hover:bg-horizon-navy/45"
                )}
                aria-label={`Show testimonials group ${index + 1}`}
                aria-current={index === page ? "true" : undefined}
              />
            ))}
          </div>
        ) : null}
      </LandingContainer>
    </section>
  );
}
