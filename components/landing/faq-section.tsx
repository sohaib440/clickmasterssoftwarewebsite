import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad } from "@/lib/landing/constants";
import { faqIntro, faqs } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function FaqColumn({ column, startIndex }: { column: "left" | "right"; startIndex: number }) {
  const items = faqs.filter((f) => f.column === column);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => {
        const index = startIndex + i;
        return (
          <Reveal key={faq.question} delay={i * motionStagger}>
            <details
              className={cn(
                "faq-item group rounded-2xl border border-horizon-border/90 bg-white/85",
                "shadow-[0_2px_12px_rgba(13,27,42,0.03)] backdrop-blur-sm",
                "transition-[border-color,box-shadow,background-color] duration-300",
                "open:border-horizon-sky/70 open:bg-white open:shadow-[0_8px_28px_rgba(13,27,42,0.08)]"
              )}
            >
              <summary
                className={cn(
                  "flex cursor-pointer list-none items-start gap-4",
                  "px-5 py-4 md:px-6 md:py-5",
                  "[&::-webkit-details-marker]:hidden"
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full",
                    "bg-horizon-cream font-heading text-sm font-medium text-horizon-navy ring-1 ring-horizon-border",
                    "transition-colors duration-300 group-open:bg-horizon-sky/50 group-open:ring-horizon-sky/60"
                  )}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1 pt-0.5">
                  <span className="inline-flex rounded-full border border-horizon-border/80 bg-horizon-cream/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-horizon-muted">
                    {faq.tag}
                  </span>
                  <span className="mt-2 block font-heading text-lg font-medium leading-snug text-horizon-navy md:text-xl">
                    {faq.question}
                  </span>
                </span>

                <span
                  className={cn(
                    "mt-1 flex size-9 shrink-0 items-center justify-center rounded-full",
                    "border border-horizon-border bg-white text-horizon-muted",
                    "transition-[transform,background-color,border-color] duration-300",
                    "group-open:rotate-180 group-open:border-horizon-sky/50 group-open:bg-horizon-sky/30 group-open:text-horizon-navy"
                  )}
                  aria-hidden
                >
                  <ChevronDown className="size-4" strokeWidth={2} />
                </span>
              </summary>

              <div className="faq-answer border-t border-horizon-border/70">
                <div className="faq-answer-inner px-5 pb-5 pt-1 md:px-6 md:pb-6 md:pl-[4.25rem]">
                  <p className="text-sm leading-relaxed text-left text-horizon-muted md:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FaqSection() {
  const leftCount = faqs.filter((f) => f.column === "left").length;

  return (
    <section
      id="faqs"
      className="relative w-full overflow-hidden bg-white text-horizon-navy"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-horizon-sky/35 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-horizon-peach/50 blur-3xl" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <SectionHeading
          overlineText="Frequently asked questions"
          title={
            <>
              Questions, <span className="italic">answered</span>
            </>
          }
          description={faqIntro}
          className="mb-10 md:mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          <FaqColumn column="left" startIndex={0} />
          <FaqColumn column="right" startIndex={leftCount} />
        </div>
      </div>
    </section>
  );
}
