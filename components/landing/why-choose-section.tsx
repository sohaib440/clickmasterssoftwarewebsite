import { Check } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { aboutSection } from "@/data/landingPage";
import { cardSoft, container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type WhyChooseValue = {
  title: string;
  description: string;
};

type WhyChooseSectionProps = {
  values?: WhyChooseValue[];
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
};

export function WhyChooseSection({
  values = aboutSection.values,
  overlineText = "Why choose us",
  title = (
    <>
      Why businesses <span className="italic">choose us</span>
    </>
  ),
  description = "Genuine differentiators from a software house that stays accountable from discovery through launch and ongoing support.",
}: WhyChooseSectionProps = {}) {
  if (!values.length) return null;

  return (
    <section id="why-choose-us" className="w-full bg-white text-horizon-navy">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText={overlineText}
          title={title}
          description={description}
          className="mb-8 md:mb-10"
        />

        <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <li key={item.title} className="h-full min-h-0">
              <Reveal
                delay={index * motionStagger}
                className={cn(cardSoft, "flex h-full flex-col p-6")}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-horizon-navy/5 text-primary ring-1 ring-horizon-border">
                  <Check className="size-4" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-lg font-medium text-horizon-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-horizon-muted">
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
