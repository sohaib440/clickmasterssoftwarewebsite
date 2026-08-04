import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad } from "@/lib/landing/constants";
import type { CaseStudy } from "@/data/caseStudy";
import { cn } from "@/lib/utils";

type CaseStudiesSectionProps = {
  items: CaseStudy[];
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
  className?: string;
};

export function CaseStudiesSection({
  items,
  overlineText = "Case studies",
  title = "Selected case studies",
  description,
  className,
}: CaseStudiesSectionProps) {
  return (
    <section
      className={cn("w-full bg-white text-horizon-navy", className)}
      aria-labelledby="case-studies-heading"
    >
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText={overlineText}
          title={title}
          description={description}
          className="mb-8 md:mb-10"
        />

        <ul className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => (
            <li key={item.slug} className="h-full">
              <CaseStudyCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
