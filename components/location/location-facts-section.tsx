import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";
import { container, sectionPad } from "@/lib/landing/constants";
import type { LocationPageContent } from "@/data/locations";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type LocationFactsSectionProps = {
  facts: LocationPageContent["facts"];
  overlineText?: string;
};

export function LocationFactsSection({
  facts,
  overlineText = "Facts & figures",
}: LocationFactsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white text-horizon-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-horizon-sky/40 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-horizon-peach/35 blur-3xl" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <SectionHeading
          overlineText={overlineText}
          title={facts.title}
          description={facts.subtitle}
          className="mb-8 md:mb-10"
        />

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {facts.items.map((fact, index) => (
            <Reveal key={fact.label} delay={index * motionStagger} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-horizon-border/80 bg-horizon-cream/35 p-6 transition-colors hover:border-primary/30 hover:bg-white sm:p-7">
                <dt className="font-heading text-4xl font-normal tracking-tight text-horizon-navy md:text-[2.75rem]">
                  {fact.value}
                </dt>
                <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-horizon-navy/75">
                  {fact.label}
                </dd>
                {fact.detail ? (
                  <p className="mt-4 text-sm leading-relaxed text-horizon-muted">{fact.detail}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
