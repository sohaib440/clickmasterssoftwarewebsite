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
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import {
  getAllPakistanCitySlugs,
  getPakistanCityBySlug,
} from "@/data/cities-in-pakistan";
import { btnOnDark, container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

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

  return {
    title: location.metaTitle ?? location.title,
    description: location.metaDescription ?? location.description,
    openGraph: {
      title: location.metaTitle ?? location.title,
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

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
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
          overlineText={location.caseWork?.overlineText ?? "Case work"}
          title={
            <>
              Case studies from <span className="italic">{cityName}</span>
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

      <SiteFooter />
    </div>
  );
}
