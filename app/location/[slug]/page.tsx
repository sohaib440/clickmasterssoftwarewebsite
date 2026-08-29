import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
import {
  getAllPakistanCitySlugs,
  getPakistanCityBySlug,
} from "@/data/cities-in-pakistan";
import { getNearbyCitiesFor } from "@/data/nearby-cities";
import { btnOnDark, container, sectionPad } from "@/lib/landing/constants";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { cn } from "@/lib/utils";
import { siteBrand } from "@/lib/landing/brand";
import {
  breadcrumbSchema,
  faqPageSchema,
  locationLocalBusinessSchema,
  organizationSchema,
} from "@/seo/schema";

type CityLocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPakistanCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CityLocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getPakistanCityBySlug(slug);

  if (!location) {
    return { title: "Location not found" };
  }

  const titleSegment = location.metaTitle ?? location.title;

  return {
    title: pageTitle(titleSegment),
    description: location.metaDescription ?? location.description,
    ...selfCanonical(`/location/${slug}`),
    openGraph: {
      title: pageTitleString(titleSegment),
      description: location.metaDescription ?? location.description,
      type: "website",
    },
  };
}

export default async function CityLocationPage({ params }: CityLocationPageProps) {
  const { slug } = await params;
  const location = getPakistanCityBySlug(slug);

  if (!location) {
    notFound();
  }

  const cityName =
    location.breadcrumbs?.[location.breadcrumbs.length - 1]?.label ?? location.country;
  const { sections } = location;
  const nearbyCities = getNearbyCitiesFor(cityName);

  const breadcrumbItems =
    location.breadcrumbs?.map((crumb) => ({
      name: crumb.label,
      path: crumb.href ?? location.href,
    })) ?? [
      { name: "Home", path: "/" },
      { name: "Locations", path: "/location" },
      { name: cityName, path: location.href },
    ];

  const schemas = [
    organizationSchema,
    locationLocalBusinessSchema({
      areaServedName: cityName,
      areaServedType: "City",
      pageUrl: location.href,
      description: location.metaDescription ?? location.description,
      idSuffix: slug,
    }),
    breadcrumbSchema(breadcrumbItems),
    ...(location.faqs.length
      ? [
          faqPageSchema(location.faqs, {
            id: `${siteBrand.url}${location.href}#faq`,
            pageUrl: `${siteBrand.url}${location.href}`,
          }),
        ]
      : []),
  ];

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
          cityName={cityName}
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
              Modern tools for <span className="text-primary">{cityName}</span> products
            </>
          }
          description={sections.tech.description}
          badgeText={`Technology for ${cityName} delivery`}
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

        {nearbyCities.length > 0 ? (
          <SubLocationsSection
            country={cityName}
            cities={nearbyCities}
            overlineText="Service areas"
            title={
              <>
                {cityName} and surrounding <span className="italic text-primary/95">areas</span>
              </>
            }
            description={`We support businesses in ${cityName} and nearby cities with the same software house delivery standards — discovery, build, launch, and ongoing support.`}
            metricLabel="nearby cities · regional delivery"
          />
        ) : null}

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
              sections.testimonials.title
            )
          }
          description={sections.testimonials.description}
          items={sections.testimonials.items}
        />

        <TeamSection
          overlineText={sections.team.overlineText}
          title={
            <>
              The team behind <span className="italic">{cityName}</span> delivery
            </>
          }
          intro={sections.team.intro}
        />

        <FaqSection
          items={location.faqs}
          intro={location.faqIntro}
          overlineText={`${cityName} FAQs`}
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
