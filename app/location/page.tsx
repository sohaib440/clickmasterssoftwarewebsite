import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, MapPinned, Sparkles } from "lucide-react";

import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ServiceBreadcrumbs } from "@/components/services/shared/service-breadcrumbs";
import { pakistanCities, pakistanLocation } from "@/data/locations";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Locations | Software House & Software Company Worldwide",
  description:
    "Explore Next Software Development Company locations. Start with Pakistan and major cities including Islamabad, Lahore, Karachi, and more.",
  openGraph: {
    title: "Locations | Next Software Development Company",
    description:
      "Software house coverage across Pakistan and global markets. Pick a country or city to learn how we deliver custom software locally.",
    type: "website",
  },
};

const upcomingMarkets = [
  {
    name: "United States",
    region: "Americas",
    blurb: "Timezone-friendly product partnerships for startups and mid-market teams.",
  },
  {
    name: "Europe",
    region: "UK & EU",
    blurb: "English-first delivery for clients who want senior Pakistani engineering.",
  },
  {
    name: "Middle East",
    region: "UAE & GCC",
    blurb: "Strong business-hour overlap for ERP, ops platforms, and digital products.",
  },
];

const featuredStats = [
  { value: "13+", label: "Cities live" },
  { value: "250+", label: "Projects" },
  { value: "60+", label: "Engineers" },
];

export default function LocationsPage() {
  const spotlightCities = pakistanCities.slice(0, 6);

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <ServiceBreadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Locations" }]}
              />
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <p className={cn(overline, "text-white/60")}>Locations</p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <h1 className="mt-4 max-w-3xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]">
                Software house coverage,{" "}
                <span className="italic text-primary/95">worldwide</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Start with Pakistan, our headquarters and delivery base, or explore city pages for
                Islamabad, Lahore, Karachi, and more. Global markets are next.
              </p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 4}>
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
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-horizon-sky/35 blur-[110px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-12">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5">
                  <Globe2 className="size-3.5 text-primary" aria-hidden />
                  <span className={cn(overline, "text-horizon-navy/80")}>Global footprint</span>
                </div>
                <h2 className="mt-5 max-w-xl font-heading text-3xl font-normal leading-[1.1] tracking-tight md:text-4xl lg:text-[2.85rem]">
                  One delivery hub today.{" "}
                  <span className="italic text-primary">More markets</span> on the way.
                </h2>
              </Reveal>
              <Reveal delay={motionStagger}>
                <p className="max-w-md text-base leading-relaxed text-horizon-muted md:text-lg lg:justify-self-end lg:text-right">
                  Explore our live Pakistan coverage now: city pages, local case work, and senior
                  teams ready to build. International location pages launch next.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-7">
              <Reveal direction="left">
                <Link
                  href={pakistanLocation.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-horizon-border bg-horizon-cream/40 p-7 shadow-[0_18px_50px_-32px_rgba(13,27,42,0.2)] transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_28px_60px_-28px_rgba(13,27,42,0.22)] sm:p-8 lg:p-10"
                >
                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <MapPinned className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                          Featured location
                        </p>
                        <h3 className="mt-1 font-heading text-3xl font-medium tracking-tight text-horizon-navy sm:text-4xl">
                          Pakistan
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                      <span className="size-1.5 rounded-full bg-horizon-navy motion-safe:animate-pulse" />
                      Live now
                    </span>
                  </div>

                  <p className="relative mt-6 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                    Headquarters and primary delivery base for HMS, ERP, mobile apps, and SaaS across
                    Islamabad, Lahore, Karachi, and 10+ more cities.
                  </p>

                  <dl className="relative mt-8 grid grid-cols-3 gap-3 border-y border-horizon-border py-5">
                    {featuredStats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="font-heading text-2xl text-horizon-navy sm:text-3xl">
                          {stat.value}
                        </dt>
                        <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-horizon-muted">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="relative mt-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-horizon-muted">
                      Spotlight cities
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {spotlightCities.map((city) => (
                        <li
                          key={city.slug}
                          className="rounded-full border border-horizon-border bg-white px-3 py-1.5 text-xs text-horizon-navy transition-colors duration-300 group-hover:border-primary/35"
                        >
                          {city.city}
                        </li>
                      ))}
                      <li className="rounded-full border border-dashed border-horizon-border px-3 py-1.5 text-xs text-horizon-muted">
                        +{Math.max(pakistanCities.length - spotlightCities.length, 0)} more
                      </li>
                    </ul>
                  </div>

                  <span className="relative mt-9 inline-flex items-center gap-2 text-sm font-semibold text-horizon-navy transition-colors group-hover:text-primary">
                    Open Pakistan location page
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>

              <div className="flex flex-col gap-4">
                <Reveal delay={motionStagger}>
                  <div className="flex items-center gap-2 rounded-2xl border border-horizon-border bg-horizon-cream/50 px-4 py-3">
                    <Sparkles className="size-4 text-primary" aria-hidden />
                    <p className="text-sm text-horizon-muted">
                      <span className="font-medium text-horizon-navy">Coming soon</span>: country
                      pages for global markets
                    </p>
                  </div>
                </Reveal>

                <ul className="flex flex-1 flex-col gap-3">
                  {upcomingMarkets.map((market, index) => (
                    <li key={market.name} className="flex-1">
                      <Reveal delay={(index + 1) * motionStagger} direction="right" className="h-full">
                        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-horizon-border bg-horizon-cream/30 p-5 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white sm:p-6">
                          <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"
                            aria-hidden
                          />
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-horizon-muted">
                                {market.region}
                              </p>
                              <h3 className="mt-1.5 font-heading text-xl font-medium text-horizon-navy sm:text-2xl">
                                {market.name}
                              </h3>
                            </div>
                            <span className="rounded-full border border-horizon-border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-horizon-muted">
                              Soon
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-horizon-muted">
                            {market.blurb}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <IndustriesSection
          overlineText="Industries"
          title={
            <>
              Industries we serve <span className="italic">worldwide</span>
            </>
          }
          description="Software tailored to the workflows, compliance needs, and growth goals of every sector we work with, across Pakistan and global markets."
        />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <FaqSection
          overlineText="Locations FAQs"
          title={
            <>
              Location questions, <span className="italic">answered</span>
            </>
          }
        />

        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Looking for a software house near you?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell us your city and project. We’ll reply within one business day with a clear next
                step.
              </p>
              <Link href={contactPath} className={cn("mt-8 inline-flex", btnOnDark)}>
                Get a Free Quote
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
