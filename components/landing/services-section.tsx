"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { serviceRoutes, services, type ServiceCard as ServiceCardData } from "@/data/services";
import { motionStagger } from "@/lib/landing/motion";
import { btnPrimary } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

type ServiceOverride = {
  title: string;
  description: string;
  tag?: string;
};

type ServicesSectionProps = {
  overlineText?: string;
  title?: React.ReactNode;
  description?: string;
  serviceOverrides?: readonly ServiceOverride[];
};

function ServiceCard({ service, index }: { service: ServiceCardData; index: number }) {
  const route = serviceRoutes[service.title] || "/software-development";

  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <Link
        href={route}
        className={cn(
          "group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-500 sm:min-h-[21rem] md:min-h-[22rem] sm:p-5",
          "hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.055]",
          "hover:shadow-[0_24px_48px_-20px_color-mix(in_srgb,var(--service-accent)_55%,transparent)]"
        )}
        style={{ ["--service-accent" as string]: service.accent }}
      >
        <div className="flex justify-end">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-white/70">
            {service.tag}
          </span>
        </div>

        {service.image ? (
          <div className="relative mx-auto -mt-1 mb-1 flex h-[17.5rem] w-full max-w-[19.5rem] shrink-0 items-center justify-center sm:h-[19rem] sm:max-w-[21rem]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
              style={{
                background: `radial-gradient(circle, ${service.accent}55 0%, transparent 70%)`,
              }}
            />
            <Image
              src={service.image}
              alt={service.imageAlt ?? `${service.title} service image`}
              width={320}
              height={320}
              className="relative z-10 size-[17.5rem] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 sm:size-[19rem]"
              sizes="320px"
            />
          </div>
        ) : null}

        <div className="mt-auto flex flex-col pt-1">
          <h3 className="font-heading text-lg font-medium leading-snug tracking-tight text-white md:text-xl">
            {service.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/60 sm:text-sm">
            {service.description}
          </p>

          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-300 group-hover:text-primary">
            Explore {service.title}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServicesSection({
  overlineText = "What we deliver",
  title = (
    <>
      Innovating your <span className="italic">digital future</span>
    </>
  ),
  description = "As a leading software company, we blend modern engineering with thoughtful product design to ship platforms teams can rely on every day.",
  serviceOverrides,
}: ServicesSectionProps = {}) {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 9;

  const resolvedServices = serviceOverrides?.length
    ? services.map((service) => {
        const override = serviceOverrides.find((item) => item.title === service.title);
        if (!override) return service;
        return {
          ...service,
          description: override.description,
          tag: override.tag ?? service.tag,
        };
      })
    : services;

  const visibleServices = showAll
    ? resolvedServices
    : resolvedServices.slice(0, initialVisibleCount);
  const hiddenCount = Math.max(resolvedServices.length - initialVisibleCount, 0);

  return (
    <section id="services" className="relative overflow-hidden bg-black text-white">
      <LandingContainer className="relative z-10">
        <SectionHeading
          overlineText={overlineText}
          title={title}
          description={description}
          align="left"
          dark
          className={sectionHeadingGap}
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {visibleServices.map((service, index) => (
            <li key={service.title} className="h-full">
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>

        {hiddenCount > 0 ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className={cn(btnPrimary, "px-5 py-3 text-sm")}
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show fewer services" : `See ${hiddenCount} more services`}
            </button>
          </div>
        ) : null}
      </LandingContainer>
    </section>
  );
}
