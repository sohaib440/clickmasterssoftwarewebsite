import Link from "next/link";

import { SectionHeading } from "@/components/landing/section-heading";
import { contactPath, container, sectionPad } from "@/lib/landing/constants";
import { industries } from "@/data/industriesPage";
import { cn } from "@/lib/utils";

function IndustryCell({
  item,
  className,
}: {
  item: (typeof industries)[number];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[220px] flex-col bg-[#f5f6f8] p-8 transition-colors duration-300 hover:bg-white sm:min-h-[240px] sm:p-9 lg:min-h-[260px] lg:p-10 xl:p-12",
        className
      )}
    >
      <span
        className="absolute left-0 top-0 z-10 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
        aria-hidden
      />

      <div className="flex flex-1 flex-col">
        <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-horizon-navy sm:text-[1.35rem]">
          {item.industry}
        </h3>
        <p className="mt-3 max-w-md flex-1 text-sm leading-relaxed text-horizon-muted sm:text-[0.95rem]">
          {item.description}
        </p>
        <Link
          href={contactPath}
          className="mt-8 inline-block text-sm font-bold text-horizon-navy transition-colors group-hover:text-primary"
        >
          Learn About {item.industry}
        </Link>
      </div>
    </div>
  );
}

type IndustriesSectionProps = {
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
};

export function IndustriesSection({
  overlineText = "Industries",
  title = "Industries We Serve",
  description = "Software tailored to the workflows, compliance needs, and growth goals of every sector we work with.",
}: IndustriesSectionProps = {}) {
  return (
    <section id="industries" className="relative w-full overflow-hidden bg-[#f0f1f3] text-horizon-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(118deg, transparent 42%, rgba(255, 255, 255, 0.85) 42%, rgba(255, 255, 255, 0.35) 58%, transparent 58%),
            linear-gradient(242deg, transparent 38%, rgba(228, 231, 236, 0.65) 38%, rgba(228, 231, 236, 0.25) 54%, transparent 54%)
          `,
        }}
      />

      <div className={cn(container, sectionPad, "relative")}>
        <SectionHeading
          overlineText={overlineText}
          title={title}
          description={description}
          className="mb-8 md:mb-10"
        />
      </div>

      <div className={cn(container, "relative pb-8 md:pb-10 lg:pb-12")}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 border-l border-t border-horizon-border md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <IndustryCell
                key={item.slug}
                item={item}
                className="border-r border-b border-horizon-border"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
