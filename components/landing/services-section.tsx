"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { btnPrimary } from "@/lib/landing/constants";
import { serviceRoutes, services, type ServiceCard as ServiceCardData } from "@/data/services";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const serviceImagesWithAssets = new Set([
  "/services/Web-Development.png",
  "/services/Mobile-Development.png",
  "/services/UIUX-Design.png",
]);

function ServiceCard({ service, index }: { service: ServiceCardData; index: number }) {
  const Icon = service.Icon;
  const route = serviceRoutes[service.title] || "/services";
  const hasImage = serviceImagesWithAssets.has(service.image);

  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <Link
        href={route}
        className={cn(
          "group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-300 sm:min-h-[24rem]",
          "hover:border-white/25 hover:bg-white/[0.07]"
        )}
      >
        {hasImage ? (
          <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48 md:h-52">
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-2 p-4">
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-white/15 bg-black/35 text-white backdrop-blur-sm">
                <Icon className="size-4" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="rounded-md bg-black/35 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                {service.tag}
              </span>
            </div>

            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain object-center p-3 pt-10 transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-5">
            <span className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
              <Icon className="size-4" strokeWidth={1.5} aria-hidden />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
              {service.tag}
            </span>
          </div>
        )}

        <div className={cn("flex flex-1 flex-col px-5 pb-5", hasImage ? "pt-2" : "pt-5")}>
          <h3 className="font-heading text-lg font-medium leading-snug text-white md:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/65">
            {service.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-primary">
            Learn more
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
