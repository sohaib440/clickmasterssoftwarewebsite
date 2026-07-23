import type { Metadata } from "next";
import Link from "next/link";

import {
  LocationFactsSection,
  LocationHero,
  SubLocationsSection,
} from "@/components/location";
import { AboutSection } from "@/components/landing/about-section";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { pakistanLocation } from "@/data/locations";
import { btnOnDark, container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pakistanLocation.metaTitle ?? pakistanLocation.title,
  description: pakistanLocation.metaDescription ?? pakistanLocation.description,
  openGraph: {
    title: pakistanLocation.metaTitle ?? pakistanLocation.title,
    description: pakistanLocation.metaDescription ?? pakistanLocation.description,
    type: "website",
  },
};

export default function PakistanLocationPage() {
  const location = pakistanLocation;

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        {/* 1. Hero */}
        <LocationHero location={location} />

        {/* 2. Trust */}
        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />

        {/* 3. About */}
        <AboutSection content={location.about} />

        {/* 4. Coverage map of cities */}
        <SubLocationsSection
          country={location.country}
          cities={location.cities}
          description={location.coverageDescription}
        />

        {/* 5. Industry focus */}
        <IndustriesSection
          overlineText="Industries"
          title={
            <>
              Industries we serve in <span className="italic">Pakistan</span>
            </>
          }
          description={location.industries.subtitle}
        />

        {/* 6. What we deliver */}
        <ServicesSection />

        {/* 7. Local proof metrics */}
        <LocationFactsSection facts={location.facts} />

        {/* 8. Location case work ,  same design as Recent projects */}
        <ProjectsSection
          id="case-work"
          projects={location.projects}
          overlineText={location.caseWork?.overlineText ?? "Case work"}
          title={
            <>
              Case studies from <span className="italic">Pakistan</span>
            </>
          }
        />

        {/* 9. Social proof */}
        <TestimonialsSection />

        {/* 10. People */}
        <TeamSection />

        {/* 11. Objections */}
        <FaqSection
          items={location.faqs}
          intro={location.faqIntro}
          overlineText="Pakistan FAQs"
          title={
            <>
              Software house questions, <span className="italic">answered</span>
            </>
          }
        />

        {/* 12. Convert */}
        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {location.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {location.cta.description}
              </p>
              <Link href={location.cta.buttonHref} className={cn("mt-8 inline-flex", btnOnDark)}>
                {location.cta.buttonLabel}
              </Link>
            </Reveal>
          </div>
        </section>

        {/* <ContactSection /> */}
      </main>

      <SiteFooter />
    </div>
  );
}
