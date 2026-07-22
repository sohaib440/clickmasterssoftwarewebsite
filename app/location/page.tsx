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
    "Explore Next Software Development Company locations—start with Pakistan and major cities including Islamabad, Lahore, Karachi, and more.",
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
                Start with Pakistan—our headquarters and delivery base—or explore city pages for
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

        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute top-[-20%] left-[-8%] h-[55%] w-[45%] rounded-full bg-[rgba(212,175,55,0.16)] blur-[130px] motion-safe:animate-[location-glow_9s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-25%] right-[-10%] h-[60%] w-[50%] rounded-full bg-[rgba(255,255,255,0.07)] blur-[140px] motion-safe:animate-[location-glow_11s_ease-in-out_infinite_reverse]" />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
                backgroundSize: "26px 26px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
              }}
            />
            <span className="absolute left-[12%] top-[28%] size-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(212,175,55,0.8)] motion-safe:animate-[location-ping_3.2s_ease-out_infinite]" />
            <span className="absolute left-[22%] top-[46%] size-2 rounded-full bg-primary/80 shadow-[0_0_14px_rgba(212,175,55,0.7)] motion-safe:animate-[location-ping_3.8s_ease-out_infinite_0.6s]" />
            <span className="absolute right-[18%] top-[34%] size-2 rounded-full bg-white/70 motion-safe:animate-[location-ping_4.2s_ease-out_infinite_1.1s]" />
            <span className="absolute right-[28%] bottom-[22%] size-2.5 rounded-full bg-primary/70 motion-safe:animate-[location-ping_3.5s_ease-out_infinite_0.3s]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-12">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5">
                  <Globe2 className="size-3.5 text-primary" aria-hidden />
                  <span className={cn(overline, "text-white/85")}>Global footprint</span>
                </div>
                <h2 className="mt-5 max-w-xl font-heading text-3xl font-normal leading-[1.1] tracking-tight md:text-4xl lg:text-[2.85rem]">
                  One delivery hub today.{" "}
                  <span className="italic text-primary/95">More markets</span> on the way.
                </h2>
              </Reveal>
              <Reveal delay={motionStagger}>
                <p className="max-w-md text-base leading-relaxed text-white/65 md:text-lg lg:justify-self-end lg:text-right">
                  Explore our live Pakistan coverage now—city pages, local case work, and senior
                  teams ready to build. International location pages launch next.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-7">
              <Reveal direction="left">
                <Link
                  href={pakistanLocation.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-[#152536] via-horizon-navy to-black p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-[0_36px_90px_-36px_rgba(212,175,55,0.45)] sm:p-8 lg:p-10"
                >
                  <div
                    className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                    aria-hidden
                  />

                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/35 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <MapPinned className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                          Featured location
                        </p>
                        <h3 className="mt-1 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                          Pakistan
                        </h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                      <span className="size-1.5 rounded-full bg-horizon-navy motion-safe:animate-pulse" />
                      Live now
                    </span>
                  </div>

                  <p className="relative mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    Headquarters and primary delivery base—HMS, ERP, mobile apps, and SaaS across
                    Islamabad, Lahore, Karachi, and 10+ more cities.
                  </p>

                  <dl className="relative mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                    {featuredStats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="font-heading text-2xl text-white sm:text-3xl">{stat.value}</dt>
                        <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="relative mt-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                      Spotlight cities
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {spotlightCities.map((city) => (
                        <li
                          key={city.slug}
                          className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-white"
                        >
                          {city.city}
                        </li>
                      ))}
                      <li className="rounded-full border border-dashed border-white/20 px-3 py-1.5 text-xs text-white/50">
                        +{Math.max(pakistanCities.length - spotlightCities.length, 0)} more
                      </li>
                    </ul>
                  </div>

                  <span className="relative mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-primary">
                    Open Pakistan location page
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>

              <div className="flex flex-col gap-4">
                <Reveal delay={motionStagger}>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                    <Sparkles className="size-4 text-primary" aria-hidden />
                    <p className="text-sm text-white/70">
                      <span className="font-medium text-white">Coming soon</span> — country pages for
                      global markets
                    </p>
                  </div>
                </Reveal>

                <ul className="flex flex-1 flex-col gap-3">
                  {upcomingMarkets.map((market, index) => (
                    <li key={market.name} className="flex-1">
                      <Reveal delay={(index + 1) * motionStagger} direction="right" className="h-full">
                        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] p-5 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-white/25 hover:from-white/[0.1] sm:p-6">
                          <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"
                            aria-hidden
                          />
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                                {market.region}
                              </p>
                              <h3 className="mt-1.5 font-heading text-xl font-medium text-white sm:text-2xl">
                                {market.name}
                              </h3>
                            </div>
                            <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                              Soon
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-white/60">{market.blurb}</p>
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
          description="Software tailored to the workflows, compliance needs, and growth goals of every sector we work with—across Pakistan and global markets."
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
                Tell us your city and project—we’ll reply within one business day with a clear next
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
