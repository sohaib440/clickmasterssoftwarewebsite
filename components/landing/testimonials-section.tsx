"use client";

import { useEffect, useState } from "react";

import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { card, cardDark } from "@/lib/landing/constants";
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

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsSectionProps = {
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
  items?: readonly TestimonialItem[];
  variant?: "light" | "dark";
};

export function TestimonialsSection({
  overlineText = "Client feedback",
  title = (
    <>
      What <span className="italic">partners</span> say
    </>
  ),
  description,
  items,
  variant = "light",
}: TestimonialsSectionProps = {}) {
  const reviews = items ?? testimonials;
  const pageCount = Math.max(1, Math.ceil(reviews.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const dark = variant === "dark";

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
  const visibleItems = reviews.slice(start, start + PAGE_SIZE);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className={cn("w-full", dark ? "bg-black text-white" : "bg-horizon-cream")}
    >
      <LandingContainer>
        <SectionHeading
          dark={dark}
          overlineText={overlineText}
          title={title}
          description={description}
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
                className={cn(
                  dark ? cardDark : card,
                  "flex h-full flex-col p-4 lg:p-5"
                )}
              >
                <blockquote
                  className={cn(
                    "flex-1 text-left text-sm leading-relaxed md:text-[15px]",
                    dark ? "text-white/70" : "text-horizon-muted"
                  )}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer
                  className={cn(
                    "mt-4 flex items-center gap-3 border-t pt-4",
                    dark ? "border-white/10" : "border-horizon-border"
                  )}
                >
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-full border font-heading text-sm font-medium",
                      dark
                        ? "border-white/15 bg-white/5 text-white"
                        : "border-horizon-border bg-horizon-navy/5 text-horizon-navy"
                    )}
                    aria-hidden
                  >
                    {getInitials(item.author)}
                  </div>
                  <div className="min-w-0">
                    <p className={cn("font-medium", dark ? "text-white" : "text-horizon-navy")}>
                      {item.author}
                    </p>
                    <p className={cn("mt-1 text-sm", dark ? "text-white/55" : "text-horizon-muted")}>
                      {item.role}
                    </p>
                  </div>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>

        {pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-2" aria-label="Review pages">
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
                    ? dark
                      ? "w-6 bg-primary"
                      : "w-6 bg-horizon-navy"
                    : dark
                      ? "w-2 bg-white/25 hover:bg-white/45"
                      : "w-2 bg-horizon-navy/25 hover:bg-horizon-navy/45"
                )}
                aria-label={`Show reviews group ${index + 1}`}
                aria-current={index === page ? "true" : undefined}
              />
            ))}
          </div>
        ) : null}
      </LandingContainer>
    </section>
  );
}
