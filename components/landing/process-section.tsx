import Link from "next/link";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad, btnPrimary, contactPath } from "@/lib/landing/constants";
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
              Our software development process <span className="italic">transparent, agile, and built around you</span>
            </>
          }
          description="Every software development company claims to follow best practices. At Software Development Company, we show you exactly what that means at every stage of your project."
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
                <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-left text-horizon-muted">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link href={contactPath} className={btnPrimary}>
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
}
