import Link from "next/link";

import { ProcessStepsGrid } from "@/components/landing/process-steps-grid";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad, btnPrimary, contactPath } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-white text-horizon-navy">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="How we work"
          title={
            <>
              Our software development process{" "}
              <span className="italic">transparent, agile, and built around you</span>
            </>
          }
          description="Every software development company claims to follow best practices. At Software Development Company, we show you exactly what that means at every stage of your project."
          className="mb-10 md:mb-12"
        />

        <ProcessStepsGrid />

        <div className="mt-12 text-center md:mt-14">
          <Link href={contactPath} className={btnPrimary}>
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
}
