import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { processSteps } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-horizon-sky">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="How we work"
          title={
            <>
              From sketch to <span className="italic">shore</span>
            </>
          }
          className="mb-8 md:mb-10"
        />

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((item, i) => (
            <li key={item.step}>
              <Reveal delay={i * motionStagger} className="flex flex-col text-left">
                <span className="flex size-10 items-center justify-center rounded-full border border-horizon-navy/15 bg-white/90 font-heading text-lg text-horizon-navy shadow-sm transition-transform duration-300 hover:scale-105">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-horizon-navy">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-horizon-muted">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
