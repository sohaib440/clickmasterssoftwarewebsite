import Link from "next/link";

import { SectionHeading } from "@/components/landing/section-heading";
import { contactPath, container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

type Industry = {
  name: string;
  industry: string;
  description: string;
};

const industries: Industry[] = [
  {
    name: "TechCorp",
    industry: "Manufacturing",
    description:
      "Automate production lines and streamline factory operations with intelligent control systems.",
  },
  {
    name: "HealthPlus",
    industry: "Healthcare",
    description:
      "Build intelligent diagnostic tools and automated patient management systems to improve care accuracy and streamline clinical workflows.",
  },
  {
    name: "RetailHub",
    industry: "Retail",
    description:
      "Modernize storefronts and online shops with smart inventory, checkout, and loyalty experiences.",
  },
  {
    name: "EstatePro",
    industry: "Real Estate",
    description:
      "Manage listings, contracts, and tenant relationships with unified property platforms.",
  },
  {
    name: "EduSmart",
    industry: "Education",
    description:
      "Deliver adaptive learning experiences and digital classrooms that scale with every student.",
  },
  {
    name: "FinTrust",
    industry: "Finance",
    description:
      "Secure trading platforms and analytics dashboards built for speed, accuracy, and compliance.",
  },
  {
    name: "LogiFlow",
    industry: "Logistics",
    description:
      "Track shipments end-to-end and optimize fleets with real-time routing intelligence.",
  },
  {
    name: "MediaWave",
    industry: "Media",
    description:
      "Power broadcasting, streaming, and content workflows with high-performance production tools.",
  },
  {
    name: "NovaBank",
    industry: "Banking",
    description:
      "Modern core banking, digital onboarding, and fraud protection for next-generation institutions.",
  },
  {
    name: "GreenField",
    industry: "Agriculture",
    description:
      "Precision farming software that turns sensor data into higher yields and lower waste.",
  },
  {
    name: "Skyline Hotels",
    industry: "Hospitality",
    description:
      "Reservation, guest experience, and operations platforms for premium hotel brands.",
  },
  {
    name: "Pulse Fitness",
    industry: "Health & Fitness",
    description:
      "Member apps, class booking, and performance tracking to grow modern fitness communities.",
  },
  {
    name: "Quantum Dynamics",
    industry: "Technology",
    description:
      "Cutting-edge platforms, APIs, and infrastructure for software-first technology companies.",
  },
  {
    name: "Lumina Insurance",
    industry: "Insurance",
    description:
      "Quote, underwrite, and service policies faster with automated insurance workflows.",
  },
  {
    name: "Vertex Solutions",
    industry: "Consulting",
    description:
      "Client portals, analytics, and engagement tooling tailored for high-performing consultancies.",
  },
];

function IndustryCell({ item, className }: { item: Industry; className?: string }) {
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

export function IndustriesSection() {
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
          overlineText="Industries"
          title="Industries We Serve"
          description="Software tailored to the workflows, compliance needs, and growth goals of every sector we work with."
          className="mb-8 md:mb-10"
        />
      </div>

      <div className={cn(container, "relative pb-8 md:pb-10 lg:pb-12")}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 border-l border-t border-horizon-border md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <IndustryCell
                key={item.name}
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
