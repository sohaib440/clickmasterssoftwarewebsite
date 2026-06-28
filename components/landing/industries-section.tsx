"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad } from "@/lib/landing/constants";

type Client = {
  name: string;
  industry: string;
  image: string;
  description: string;
};

const trustedClients: Client[] = [
  {
    name: "TechCorp",
    industry: "Manufacturing",
    image: "/industries/manufacturing.jpg",
    description:
      "Automate production lines and streamline factory operations with intelligent control systems.",
  },
  {
    name: "HealthPlus",
    industry: "Healthcare",
    image: "/industries/healthcare.jpg",
    description:
      "Build intelligent diagnostic tools and automated patient management systems to improve care accuracy and streamline clinical workflows.",
  },
  {
    name: "RetailHub",
    industry: "Retail",
    image: "/industries/retail.jpg",
    description:
      "Modernize storefronts and online shops with smart inventory, checkout, and loyalty experiences.",
  },
  {
    name: "EstatePro",
    industry: "Real Estate",
    image: "/industries/realestate.jpg",
    description:
      "Manage listings, contracts, and tenant relationships with unified property platforms.",
  },
  {
    name: "EduSmart",
    industry: "Education",
    image: "/industries/education.jpg",
    description:
      "Deliver adaptive learning experiences and digital classrooms that scale with every student.",
  },
  {
    name: "FinTrust",
    industry: "Finance",
    image: "/industries/finance.jpg",
    description:
      "Secure trading platforms and analytics dashboards built for speed, accuracy, and compliance.",
  },
  {
    name: "LogiFlow",
    industry: "Logistics",
    image: "/industries/logistics.jpg",
    description:
      "Track shipments end-to-end and optimize fleets with real-time routing intelligence.",
  },
  {
    name: "MediaWave",
    industry: "Media",
    image: "/industries/media.jpg",
    description:
      "Power broadcasting, streaming, and content workflows with high-performance production tools.",
  },
  {
    name: "NovaBank",
    industry: "Banking",
    image: "/industries/banking.jpg",
    description:
      "Modern core banking, digital onboarding, and fraud protection for next-generation institutions.",
  },
  {
    name: "GreenField",
    industry: "Agriculture",
    image: "/industries/agriculture.jpg",
    description:
      "Precision farming software that turns sensor data into higher yields and lower waste.",
  },
  {
    name: "Skyline Hotels",
    industry: "Hospitality",
    image: "/industries/hospitality.jpg",
    description:
      "Reservation, guest experience, and operations platforms for premium hotel brands.",
  },
  {
    name: "Pulse Fitness",
    industry: "Health & Fitness",
    image: "/industries/fitness.jpg",
    description:
      "Member apps, class booking, and performance tracking to grow modern fitness communities.",
  },
  {
    name: "Quantum Dynamics",
    industry: "Technology",
    image: "/industries/technology.jpg",
    description:
      "Cutting-edge platforms, APIs, and infrastructure for software-first technology companies.",
  },
  {
    name: "Lumina Insurance",
    industry: "Insurance",
    image: "/industries/insurance.jpg",
    description:
      "Quote, underwrite, and service policies faster with automated insurance workflows.",
  },
  {
    name: "Vertex Solutions",
    industry: "Consulting",
    image: "/industries/consulting.jpg",
    description:
      "Client portals, analytics, and engagement tooling tailored for high-performing consultancies.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function ClientCard({
  client,
  index,
  visible,
  isActive,
  onHover,
  onLeave,
}: {
  client: Client;
  index: number;
  visible: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      className="group relative overflow-hidden min-h-[320px] cursor-pointer outline-none border border-black/20 bg-black/10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 40}ms, transform 0.5s ease ${index * 40}ms`,
      }}
    >
      {isActive && (
        <div
          className="absolute inset-0 backdrop-blur-md transition-all duration-500"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-7 text-white">
        <h3 className="text-2xl font-semibold tracking-tight">{client.industry}</h3>

        <div
          className={
            "grid transition-[grid-template-rows] duration-500 ease-out " +
            (isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
          }
        >
          <div className="overflow-hidden">
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              {client.description}
            </p>
          </div>
        </div>

        <div
          className={
            "mt-5 flex items-center gap-2 text-sm font-medium transition-all duration-500 delay-100 " +
            (isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1")
          }
        >
          <span>Explore More</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export function IndustriesSection() {
  const { ref, visible } = useInView();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full bg-white text-black">
      <div className={`${container} ${sectionPad}`}>
        <div className="mb-12">
            <SectionHeading
              overlineText="Industries"
              title="Industries We Serve"
              description="Join 3,500+ businesses that trust ClickMasters to deliver exceptional software solutions"
              align="left"
              className="mb-10 md:mb-12"
            />
          </div>
      </div>

      <div className="relative w-full overflow-hidden border border-white/60 shadow-lg">
        {trustedClients.map((c, i) => (
          <div
            key={c.name}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{
              opacity: (activeIndex === null && i === 0) || activeIndex === i ? 1 : 0,
            }}
          >
            <Image src={c.image} alt={c.name} fill className="object-cover" priority={i === 0} />
          </div>
        ))}

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px]">
          {trustedClients.map((client, idx) => (
            <ClientCard
              key={client.name}
              client={client}
              index={idx}
              visible={visible}
              isActive={activeIndex === idx}
              onHover={() => setActiveIndex(idx)}
              onLeave={() => setActiveIndex((curr) => (curr === idx ? null : curr))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
