"use client";

import { Reveal } from "@/components/landing/reveal";
import { motionStagger } from "@/lib/landing/motion";
import { processSteps } from "@/data/landingPage";

export function ProcessStepsGrid() {
  return (
    <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
      {processSteps.map((item, i) => (
        <li key={item.step} className="min-w-0">
          <Reveal delay={i * motionStagger} className="flex h-full flex-col text-left">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-white font-heading text-lg text-horizon-navy shadow-[0_2px_12px_rgba(212,175,55,0.12)]">
              {item.step}
            </span>
            <h3 className="mt-5 font-heading text-2xl font-medium leading-snug text-horizon-navy md:text-[1.65rem]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-horizon-navy/85 md:text-lg">
              {item.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
