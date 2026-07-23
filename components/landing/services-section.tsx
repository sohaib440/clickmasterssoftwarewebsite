"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { btnPrimary } from "@/lib/landing/constants";
import { serviceRoutes, services, type ServiceCard as ServiceCardData } from "@/data/services";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function ServiceCard({ service, index }: { service: ServiceCardData; index: number }) {
  const Icon = service.Icon;
  const route = serviceRoutes[service.title] || "/services";

  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <Link
        href={route}
        className={cn(
          "group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300",
          "hover:border-white/25 hover:bg-white/[0.07]"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
            <Icon className="size-5" strokeWidth={1.5} aria-hidden />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
            {service.tag}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-xl font-medium leading-snug text-white md:text-[1.35rem]">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{service.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-primary">
          Learn more
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </Link>
    </Reveal>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black text-white">
      <LandingContainer className="relative z-10">
        <SectionHeading
          overlineText="What we do"
          title={
            <>
              Innovating your <span className="italic">digital future</span>
            </>
          }
          description="We blend cutting-edge technology with world-class design to build products that define industries."
          align="left"
          dark
          className={sectionHeadingGap}
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <li key={service.title} className="h-full">
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 flex justify-center">
          <Link href="/services" className={btnPrimary}>
            Explore all services
          </Link>
        </div>
      </LandingContainer>
    </section>
  );
}
