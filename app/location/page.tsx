import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";

import { AboutSection } from "@/components/landing/about-section";
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
import { pakistanLocation } from "@/data/locations";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  cardDark,
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

const countries = [
  {
    name: "Pakistan",
    href: pakistanLocation.href,
    blurb:
      "Our primary delivery hub—custom software, HMS, ERP, and digital products across 13+ cities.",
    status: "live" as const,
  },
  {
    name: "United States",
    href: "#",
    blurb: "Timezone-friendly product partnerships for US startups and mid-market teams.",
    status: "soon" as const,
  },
  {
    name: "Europe",
    href: "#",
    blurb: "English-first delivery for UK and EU clients who want senior Pakistani engineering.",
    status: "soon" as const,
  },
  {
    name: "Middle East",
    href: "#",
    blurb: "Strong overlap with UAE and regional business hours for ERP and ops platforms.",
    status: "soon" as const,
  },
];

export default function LocationsPage() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        {/* Hero */}
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

        {/* Trust */}
        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />

        {/* Countries */}
        <section className="w-full bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Countries</p>
              <h2 className="mt-3 font-heading text-3xl font-normal md:text-4xl">
                Where we build <span className="italic">software</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
                Pakistan is live today. Additional country pages will open as we expand local
                content for each market.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {countries.map((country, index) => {
                const isLive = country.status === "live";
                const card = (
                  <div
                    className={cn(
                      cardDark,
                      "flex h-full flex-col bg-horizon-navy p-6 text-white transition-colors",
                      isLive && "hover:border-primary/40"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                        <MapPinned className="size-4" aria-hidden />
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                        {isLive ? "Available" : "Coming soon"}
                      </span>
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-medium">{country.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                      {country.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/80">
                      {isLive ? "View location" : "Coming soon"}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </div>
                );

                return (
                  <li key={country.name}>
                    <Reveal delay={index * motionStagger} className="h-full">
                      {isLive ? (
                        <Link href={country.href} className="block h-full">
                          {card}
                        </Link>
                      ) : (
                        <div className="h-full opacity-80" aria-disabled="true">
                          {card}
                        </div>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Common sections */}
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

        {/* CTA */}
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
