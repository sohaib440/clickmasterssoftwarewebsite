import { Check } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cardSoft, container, sectionPad } from "@/lib/landing/constants";
import type { LocationAboutContent } from "@/data/locations";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type LocationWhyChooseSectionProps = {
  cityName: string;
  values: LocationAboutContent["values"];
};

export function LocationWhyChooseSection({
  cityName,
  values,
}: LocationWhyChooseSectionProps) {
  if (!values.length) return null;

  return (
    <section id="why-choose-us" className="w-full bg-white text-horizon-navy">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="Why choose us"
          title={
            <>
              Why businesses in <span className="italic">{cityName}</span> work with us
            </>
          }
          description={`Genuine differentiators from a software house that stays accountable from discovery through launch and support in ${cityName}.`}
          className="mb-8 md:mb-10"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                <span className="flex size-9 items-center justify-center rounded-full bg-horizon-navy/5 text-primary ring-1 ring-horizon-border">
                  <Check className="size-4" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-lg font-medium text-horizon-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
