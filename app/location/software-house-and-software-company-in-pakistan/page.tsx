import type { Metadata } from "next";
import Link from "next/link";

import {
  LocationHero,
  LocationWhyChooseSection,
  SubLocationsSection,
} from "@/components/location";
import { AboutSection } from "@/components/landing/about-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustNumbersSection } from "@/components/landing/trust-numbers-section";
import { CaseStudiesSection } from "@/components/case-study/case-studies-section";
import { pakistanLocation } from "@/data/locations";
import { btnOnDark, container, sectionPad } from "@/lib/landing/constants";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { cn } from "@/lib/utils";
import {
  locationLocalBusinessSchema,
  organizationSchema,
  breadcrumbSchema,
  faqPageSchema,
  jsonLdGraph,
} from "@/seo/schema";
import { siteBrand } from "@/lib/landing/brand";

export const metadata: Metadata = {
  title: pageTitle(pakistanLocation.metaTitle ?? pakistanLocation.title),
  description: pakistanLocation.metaDescription ?? pakistanLocation.description,
  ...selfCanonical("/location/software-house-and-software-company-in-pakistan"),
  openGraph: {
    title: pageTitleString(pakistanLocation.metaTitle ?? pakistanLocation.title),
    description: pakistanLocation.metaDescription ?? pakistanLocation.description,
    type: "website",
  },
};

export default function PakistanLocationPage() {
  const location = pakistanLocation;
  const { sections } = location;

  const schemas = jsonLdGraph([
    organizationSchema,
    locationLocalBusinessSchema({
      areaServedName: "Pakistan",
      areaServedType: "Country",
      pageUrl: location.href,
      description: location.metaDescription ?? location.description,
      idSuffix: "pakistan",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/location" },
      { name: "Pakistan", path: location.href },
    ]),
    ...(location.faqs.length
      ? [
          faqPageSchema(location.faqs, {
            id: `${siteBrand.url}${location.href}#faq`,
            pageUrl: `${siteBrand.url}${location.href}`,
          }),
        ]
      : []),
  ]);

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        <LocationHero location={location} />

        <TrustNumbersSection />

        <AboutSection
          content={{ ...location.about, overlineText: "Who we are" }}
          showValues={false}
        />

        <ServicesSection
          overlineText={sections.services.overlineText}
          title={
            <>
              {sections.services.title}{" "}
              <span className="italic">{sections.services.titleItalic}</span>
            </>
          }
          description={sections.services.description}
          serviceOverrides={sections.services.items}
        />

        <LocationWhyChooseSection
          cityName="Pakistan"
          values={sections.whyChoose.values}
          overlineText={sections.whyChoose.overlineText}
          title={sections.whyChoose.title}
          description={sections.whyChoose.description}
        />

        <ProjectsSection
          id="recent-projects"
          projects={location.projects}
          overlineText={sections.projects.overlineText}
          title={sections.projects.title}
        />

        <IndustriesSection
          overlineText={sections.industries.overlineText}
          title={sections.industries.title}
          description={sections.industries.description}
          items={sections.industries.items}
        />

        <TechStackSection
          overlineText={sections.tech.overlineText}
          title={
            <>
              Built with <span className="text-primary">{sections.tech.titleItalic}</span>
            </>
          }
          description={sections.tech.description}
          badgeText={`Technology for ${location.country} delivery`}
        />

        <ProcessSection
          overlineText={sections.process.overlineText}
          title={
            <>
              {sections.process.title}{" "}
              <span className="italic">{sections.process.titleItalic}</span>
            </>
          }
          description={sections.process.description}
          steps={sections.process.steps}
          ctaLabel={sections.process.ctaLabel}
        />

        <SubLocationsSection
          country={location.country}
          cities={location.cities}
          description={location.coverageDescription}
          overlineText="Service areas"
          title={
            <>
              Cities we serve across <span className="italic text-primary/95">Pakistan</span>
            </>
          }
        />

        {sections.caseStudies.items.length > 0 ? (
          <CaseStudiesSection
            items={sections.caseStudies.items}
            overlineText={sections.caseStudies.overlineText}
            title={sections.caseStudies.title}
            description={sections.caseStudies.description}
          />
        ) : null}

        <TestimonialsSection
          variant="dark"
          overlineText={sections.testimonials.overlineText}
          title={
            <>
              What <span className="italic">{sections.testimonials.titleItalic}</span> say
            </>
          }
          description={sections.testimonials.description}
          items={sections.testimonials.items}
        />

        <TeamSection
          overlineText={sections.team.overlineText}
          title={
            <>
              A senior <span className="italic">{sections.team.titleItalic}</span>
            </>
          }
          intro={sections.team.intro}
        />

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
      </main>
    </div>
  );
}
