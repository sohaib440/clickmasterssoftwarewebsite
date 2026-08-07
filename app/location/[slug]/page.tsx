import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  LocationFactsSection,
  LocationHero,
} from "@/components/location";
import { AboutSection } from "@/components/landing/about-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import {
  getAllPakistanCitySlugs,
  getPakistanCityBySlug,
} from "@/data/cities-in-pakistan";
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

        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />

        <AboutSection content={location.about} />

        <ServicesSection />

        <IndustriesSection
          overlineText="Industries"
          title={
            <>
              Industries we serve in <span className="italic">{cityName}</span>
            </>
          }
          description={location.industries.subtitle}
        />

        <LocationFactsSection facts={location.facts} />

        <ProjectsSection
          id="case-work"
          projects={location.projects}
          overlineText={location.caseWork?.overlineText ?? "Recent projects"}
          title={
            <>
              Recent projects from <span className="italic">{cityName}</span>
            </>
          }
        />

        <TestimonialsSection />

        <TeamSection />

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
