import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  locationSoftwareSolutions,
} from "@/data/location-software-solutions";
import { cardSoft, container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type LocationSoftwareSolutionsSectionProps = {
  cityName: string;
};

export function LocationSoftwareSolutionsSection({
  cityName,
}: LocationSoftwareSolutionsSectionProps) {
  return (
    <section id="software-solutions" className="w-full bg-horizon-cream text-horizon-navy">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="Software solutions"
          title={
            <>
              Ready-to-scope platforms for <span className="italic">{cityName}</span> teams
            </>
          }
          description={`CRM, ERP, HMS, POS, inventory, and HR systems we build and tailor for operators in ${cityName}.`}
          className="mb-8 md:mb-10"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationSoftwareSolutions.map((solution, index) => {
            const Icon = solution.Icon;
            return (
              <li key={solution.title}>
                <Reveal delay={index * motionStagger} className="h-full">
                  <Link
                    href={solution.href}
                    className={cn(
                      cardSoft,
                      "group flex h-full flex-col p-6 transition-colors hover:border-primary/40"
                    )}
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-horizon-navy/5 text-horizon-navy ring-1 ring-horizon-border">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-medium text-horizon-navy">
                      {solution.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-horizon-muted">
                      {solution.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-horizon-navy transition-colors group-hover:text-primary">
                      Explore {solution.title}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
