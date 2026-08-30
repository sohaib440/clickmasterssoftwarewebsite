import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPinned, Star } from "lucide-react";

import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CountryFlag } from "@/components/location/country-flag";
import { LocationWhyChooseSection } from "@/components/location/location-why-choose-section";
import { ServiceBreadcrumbs } from "@/components/services/shared/service-breadcrumbs";
import {
  australiaLocation,
  canadaLocation,
  locationHubProjects,
  locationHubSections,
  locationPages,
  pakistanCities,
  pakistanLocation,
  uaeLocation,
  ukLocation,
  usaLocation,
} from "@/data/locations";
import { companyStats } from "@/data/landing/trust";
import type { FaqItem } from "@/data/homepage-content";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  contactPath,
  container,
  overline,
  sectionPad,
  teamPath,
} from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, itemListSchema } from "@/seo/schema";
import { cn } from "@/lib/utils";

const hubMetaTitle = "Software Development Company Locations | Next Soft Development";
const hubDescription =
  "Software development company locations across Pakistan, the USA, UK, UAE, Canada, and Australia with web, mobile, SaaS, and AI delivery for each market.";

const locationHubFaqs: FaqItem[] = [
  {
    question: "What types of software do you develop?",
    answer:
      "We build custom web applications, mobile apps, SaaS platforms, CRM and ERP systems, APIs, and AI-powered solutions based on your business requirements.",
    tag: "Services",
    column: "left",
  },
  {
    question: "Which markets do you serve?",
    answer:
      "We deliver from our Pakistan headquarters for clients in Pakistan, the USA, UK, UAE, Canada, and Australia, with market-specific focus on each location page.",
    tag: "Coverage",
    column: "right",
  },
  {
    question: "How do projects usually start?",
    answer:
      "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
    tag: "Process",
    column: "left",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
    tag: "Support",
    column: "right",
  },
  {
    question: "Do you offer fixed-price contracts?",
    answer:
      "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
    tag: "Pricing",
    column: "left",
  },
  {
    question: "Who will work on my project?",
    answer:
      "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
    tag: "Team",
    column: "right",
  },
];

export const metadata: Metadata = {
  title: { absolute: hubMetaTitle },
  description: hubDescription,
  ...selfCanonical("/location"),
  openGraph: {
    title: hubMetaTitle,
    description: hubDescription,
    type: "website",
  },
};

const internationalMarkets = [
  {
    location: usaLocation,
    shortName: "USA",
    flag: "us" as const,
    blurb:
      "Product engineering for startups, SaaS companies, and mid-market teams across the United States.",
  },
  {
    location: canadaLocation,
    shortName: "Canada",
    flag: "ca" as const,
    blurb:
      "Digital products, mobile apps, and custom software for Canadian businesses and scaling startups.",
  },
  {
    location: ukLocation,
    shortName: "UK",
    flag: "gb" as const,
    blurb:
      "English-first delivery for UK SaaS, operations, healthcare, and digital product teams.",
  },
  {
    location: australiaLocation,
    shortName: "Australia",
    flag: "au" as const,
    blurb:
      "Workflow automation, digital transformation, and custom platforms for Australian teams.",
  },
  {
    location: uaeLocation,
    shortName: "UAE",
    flag: "ae" as const,
    blurb:
      "CRM, ERP, mobile apps, and business automation for founders and operators across the UAE.",
  },
] as const;

const featuredStats = companyStats.map(({ value, label }) => ({ value, label }));

const POPULAR_CITY_NAMES = ["Islamabad", "Lahore", "Karachi", "Faisalabad", "Multan"] as const;

function WorldMapBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 800 360"
        className="absolute -right-8 top-0 h-[220px] w-[min(100%,560px)] opacity-[0.55] sm:h-[260px] lg:right-0 lg:h-[300px] lg:w-[620px]"
        fill="none"
      >
        <defs>
          <pattern id="footprint-dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.1" fill="currentColor" className="text-primary/35" />
          </pattern>
          <clipPath id="footprint-map">
            <ellipse cx="400" cy="180" rx="340" ry="140" />
          </clipPath>
        </defs>
        <g clipPath="url(#footprint-map)" className="text-primary/25">
          <rect width="800" height="360" fill="url(#footprint-dots)" />
        </g>
      </svg>
    </div>
  );
}

export default function LocationsPage() {
  const cityCount = pakistanCities.length;
  const spotlightCities = POPULAR_CITY_NAMES.map((name) =>
    pakistanCities.find((city) => city.city === name)
  ).filter((city): city is (typeof pakistanCities)[number] => Boolean(city));
  const moreCitiesCount = Math.max(cityCount - spotlightCities.length, 0);

  const schemas = [
    itemListSchema({
      name: "Locations",
      description: hubDescription,
      path: "/location",
      items: [
        ...locationPages.map((page) => ({
          name: page.country,
          path: page.href,
        })),
        ...pakistanCities.map((city) => ({
          name: city.city,
          path: city.href,
        })),
      ],
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/location" },
    ]),
  ];

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className={cn(container, sectionPad, "relative !pt-6 md:!pt-8 lg:!pt-10")}>
            <Reveal immediate>
              <ServiceBreadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Locations" }]}
              />
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="mt-2 max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]">
                Software Development Company{" "}
                <span className="!text-primary">Locations</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger}>
              <div className="mt-5 max-w-2xl space-y-4 text-justify text-base leading-relaxed text-white/70 md:text-lg">
                <p>
                  Browse our software development company locations, starting from our Pakistan
                  headquarters, for startups, growing businesses, and enterprises across{" "}
                  <span className="font-medium text-white">
                    Pakistan, the USA, UK, UAE, Canada, and Australia
                  </span>
                  .
                </p>
                <p>
                  Each location page shows how{" "}
                  <span className="font-medium text-white">Next Software Development</span> supports
                  that market with web applications, mobile apps, SaaS platforms, AI solutions, and
                  custom software.
                </p>
                <p className="font-medium text-white">
                  One senior delivery team, market-specific focus, local and global clients.
                </p>
              </div>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link href={pakistanLocation.href} className={btnPrimary}>
                  Explore Pakistan
                </Link>
                <Link href={contactPath} className={btnOutlineDark}>
                  Get a Free Quote
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />

        <section className="relative w-full overflow-hidden bg-white text-horizon-navy">
          <WorldMapBackdrop />

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="motion-line h-px w-8 bg-horizon-navy/20" aria-hidden />
                <p className={overline}>Global footprint</p>
              </div>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-normal leading-[1.15] tracking-tight text-horizon-navy md:text-4xl lg:text-[2.75rem]">
                Six Live Country Pages.
                <br />
                <span className="italic text-primary">One Delivery Team.</span>
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                Start with our Pakistan HQ and easily connect with a dedicated team for the USA, UK,
                UAE, Canada, or Australia.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-6">
              <Reveal direction="left">
                <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-primary/70 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(13,27,42,0.22)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_-30px_rgba(13,27,42,0.28)] sm:p-8 lg:p-9">
                  <Link
                    href={pakistanLocation.href}
                    className="absolute inset-0 z-20 rounded-[1.5rem] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Open Pakistan location page"
                  />

                  {/* Headquarters photo , top-right, same size feel as mock with soft white fade */}
                  <div
                    className="pointer-events-none absolute right-0 top-0 z-0 h-[11.5rem] w-[min(58%,22rem)] sm:h-[14rem] sm:w-[min(52%,26rem)] lg:h-[15.5rem] lg:w-[min(50%,28rem)]"
                    aria-hidden
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src="/locations/islamabad-headquater.png"
                        alt=""
                        fill
                        priority
                        className="object-cover object-[58%_42%]"
                        sizes="(max-width: 1024px) 55vw, 28rem"
                      />
                      {/* Soft white dissolve , no hard edge into the card */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/90 via-25% to-transparent to-65%" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/90 via-35% to-transparent to-75%" />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <CountryFlag code="pk" title="Pakistan" />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Headquarters
                        </p>
                        <h3 className="mt-0.5 font-heading text-3xl font-medium tracking-tight text-horizon-navy sm:text-4xl">
                          Pakistan
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-sm">
                      <Star className="size-3.5 fill-current" aria-hidden />
                      Our home
                    </span>
                  </div>

                  <p className="relative z-10 mt-5 max-w-[34rem] text-sm leading-relaxed text-horizon-muted sm:text-[0.95rem]">
                    Headquarters and primary delivery base for HMS, ERP, mobile apps, and SaaS across{" "}
                    {cityCount} cities, including Islamabad, Lahore, Karachi, and every market we
                    cover nationwide.
                  </p>

                  <dl className="relative z-10 mt-8 grid grid-cols-2 gap-x-4 gap-y-5 py-5 sm:grid-cols-4 sm:gap-0">
                    {featuredStats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className={cn(
                          "sm:px-3 lg:px-4",
                          index > 0 && "sm:border-l sm:border-[#ebebeb]",
                          index === 0 && "sm:pl-0"
                        )}
                      >
                        <dt className="font-heading text-2xl text-horizon-navy sm:text-[1.85rem]">
                          {stat.value}
                        </dt>
                        <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-horizon-muted">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="relative z-10 mt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-horizon-muted">
                      Popular cities
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {spotlightCities.map((city) => (
                        <li
                          key={city.slug}
                          className="inline-flex items-center gap-1.5 rounded-full border border-horizon-border bg-[#f7f5f1] px-3 py-1.5 text-xs text-horizon-navy"
                        >
                          <MapPinned className="size-3 text-primary" aria-hidden />
                          {city.city}
                        </li>
                      ))}
                      <li className="inline-flex items-center rounded-full border border-dashed border-horizon-border px-3 py-1.5 text-xs text-horizon-muted">
                        +{moreCitiesCount} more
                      </li>
                    </ul>
                  </div>

                  <span className="relative z-10 mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-horizon-navy transition-colors group-hover:text-primary">
                    <span className="border-b border-primary pb-0.5">
                      Open Pakistan location page
                    </span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </article>
              </Reveal>

              {/*
                height:0 + min-height:100% locks this column to the Pakistan card height
                so the five market cards distribute inside it instead of pushing longer.
              */}
              <ul className="flex flex-col gap-2 lg:h-0 lg:min-h-full lg:justify-between lg:gap-2.5">
                {internationalMarkets.map((market, index) => (
                  <li key={market.location.slug} className="min-h-0 lg:flex-1">
                    <Reveal
                      delay={(index + 1) * motionStagger * 0.7}
                      direction="right"
                      className="h-full"
                    >
                      <Link
                        href={market.location.href}
                        className="group flex h-full items-center gap-3 rounded-2xl border border-horizon-border/80 bg-white px-4 py-3 shadow-[0_10px_30px_-24px_rgba(13,27,42,0.35)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_16px_36px_-22px_rgba(13,27,42,0.28)] sm:gap-3.5 sm:px-4 sm:py-2.5 lg:py-0"
                      >
                        <CountryFlag
                          code={market.flag}
                          title={market.shortName}
                          className="size-9 sm:size-10"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-heading text-base font-medium tracking-tight text-horizon-navy sm:text-lg">
                            {market.shortName}
                          </h3>
                          <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-horizon-muted sm:text-sm">
                            {market.blurb}
                          </p>
                        </div>
                        <ChevronRight
                          className="size-4 shrink-0 text-horizon-muted/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary sm:size-5"
                          aria-hidden
                        />
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ServicesSection
          overlineText={locationHubSections.services.overlineText}
          title={locationHubSections.services.title}
          description={locationHubSections.services.description}
          serviceOverrides={locationHubSections.services.items}
        />
        <LocationWhyChooseSection
          cityName="our markets"
          values={locationHubSections.whyChoose.values}
          overlineText={locationHubSections.whyChoose.overlineText}
          title={locationHubSections.whyChoose.title}
          description={locationHubSections.whyChoose.description}
        />
        <IndustriesSection
          overlineText="Industries"
          title={
            <>
              Industries we serve <span className="italic">worldwide</span>
            </>
          }
          description="Software tailored to the workflows, compliance needs, and growth goals of every sector we work with, across Pakistan and global markets."
        />
        <ProjectsSection
          projects={locationHubProjects}
          overlineText={locationHubSections.projects.overlineText}
          title={locationHubSections.projects.title}
        />
        <ProcessSection
          overlineText={locationHubSections.process.overlineText}
          title={
            <>
              {locationHubSections.process.title}{" "}
              <span className="italic">{locationHubSections.process.titleItalic}</span>
            </>
          }
          description={locationHubSections.process.description}
          steps={locationHubSections.process.steps}
          ctaLabel={locationHubSections.process.ctaLabel}
        />
        <TestimonialsSection />
        <TeamSection />
        <div className={cn(container, "pb-10 md:pb-12")}>
          <Link href={teamPath} className={cn(btnPrimary, "inline-flex")}>
            Meet our delivery team
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <FaqSection
          overlineText="Locations FAQs"
          title={
            <>
              Location questions, <span className="italic">answered</span>
            </>
          }
          items={locationHubFaqs}
        />

        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Have a software project in mind?
              </h2>
              <div className="mx-auto mt-4 max-w-lg space-y-3 text-sm text-white/75 md:text-base">
                <p>
                  Tell us what you&apos;re building, what problem you&apos;re trying to solve, and
                  where you want to take it. We&apos;ll help you define the right technical approach.
                </p>
                <p>
                  Looking for a software development partner across Pakistan, the USA, UK, UAE,
                  Canada, or Australia? Let&apos;s talk.
                </p>
              </div>
              <Link href={contactPath} className={cn("mt-8 inline-flex", btnOnDark)}>
                Get a Free Quote
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
