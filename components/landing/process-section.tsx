import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { ProcessStepsGrid } from "@/components/landing/process-steps-grid";
import { SectionHeading } from "@/components/landing/section-heading";
import { btnPrimary, contactPath } from "@/lib/landing/constants";
import { processSteps as defaultSteps } from "@/data/landingPage";

type ProcessStep = (typeof defaultSteps)[number];

type ProcessSectionProps = {
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
  steps?: readonly ProcessStep[];
  ctaLabel?: string;
};

export function ProcessSection({
  overlineText = "How we work",
  title = (
    <>
      Our delivery process{" "}
      <span className="italic">transparent, agile, and built around you</span>
    </>
  ),
  description = "Many teams talk about best practices. We show you exactly what delivery looks like at every stage of your project.",
  steps,
  ctaLabel = "Start your project",
}: ProcessSectionProps = {}) {
  return (
    <section id="process" className="w-full bg-white text-horizon-navy">
      <LandingContainer>
        <SectionHeading
          overlineText={overlineText}
          title={title}
          description={description}
          className={sectionHeadingGap}
        />

        <ProcessStepsGrid steps={steps} />

        <div className="mt-12 text-center md:mt-14">
          <Link href={contactPath} className={`${btnPrimary} group`}>
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </LandingContainer>
    </section>
  );
}
