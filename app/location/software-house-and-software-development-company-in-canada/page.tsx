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
import { CaseStudiesSection } from "@/components/case-study/case-studies-section";
import { canadaLocation } from "@/data/locations";
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
  title: pageTitle(canadaLocation.metaTitle ?? canadaLocation.title),
  description: canadaLocation.metaDescription ?? canadaLocation.description,
  ...selfCanonical("/location/software-house-and-software-development-company-in-canada"),
  openGraph: {
    title: pageTitleString(canadaLocation.metaTitle ?? canadaLocation.title),
    description: canadaLocation.metaDescription ?? canadaLocation.description,
    type: "website",
  },
};

export default function CanadaLocationPage() {
  const location = canadaLocation;
  const { sections } = location;

  const schemas = jsonLdGraph([
    organizationSchema,
    locationLocalBusinessSchema({
      areaServedName: "Canada",
      areaServedType: "Country",
      pageUrl: location.href,
      description: location.metaDescription ?? location.description,
      idSuffix: "canada",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/location" },
      { name: "Canada", path: location.href },
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

        <AboutSection
          content={{ ...location.about, overlineText: "Who we are" }}
          showValues={false}
          currentPath={location.href}
        />

        <ServicesSection
          overlineText={sections.services.overlineText}
          title={sections.services.title}
          description={sections.services.description}
          serviceOverrides={sections.services.items}
        />

        <LocationWhyChooseSection
          cityName="Canada"
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
              Regions we serve across <span className="italic text-primary/95">Canada</span>
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
            sections.testimonials.title === "Local engagement examples" ? (
              <>
                Local <span className="italic">engagement</span> examples
              </>
            ) : (
              <>
                What Our <span className="italic">{sections.testimonials.titleItalic}</span> Say
              </>
            )
          }
          description={sections.testimonials.description}
          items={sections.testimonials.items}
        />

        <TeamSection
          overlineText={sections.team.overlineText}
          title={
            sections.team.titleItalic ? (
              <>
                A senior <span className="italic">{sections.team.titleItalic}</span>
              </>
            ) : (
              sections.team.title
            )
          }
          intro={sections.team.intro}
        />

        <FaqSection
          items={location.faqs}
          intro={location.faqIntro}
          overlineText="Canada FAQs"
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
              <div className="mx-auto mt-4 max-w-lg space-y-3 text-sm text-white/75 md:text-base">
                {location.cta.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
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
