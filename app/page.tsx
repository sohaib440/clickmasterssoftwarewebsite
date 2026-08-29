import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import {
  AboutSection,
  BlogSection,
  ContactSection,
  TrustedPartnersSection,
  FaqSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SiteHeader,
  TeamSection,
  TechStackSection,
  TestimonialsSection,
  WhyChooseSection,
} from "@/components/landing";
import { siteBrand } from "@/lib/landing/brand";
import { container, sectionPad } from "@/lib/landing/constants";
import {
  homepageAbout,
  homepageContact,
  homepageFaqIntro,
  homepageFaqs,
  homepageSeo,
  homepageTestimonials,
  homepageTestimonialsIntro,
  homepageWhyChoose,
} from "@/data/homepage-content";
import { selfCanonical } from "@/seo/canonical";
import {
  breadcrumbSchema,
  homepageFaqSchema,
  homepageServiceSchema,
  jsonLdGraph,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/seo/schema";

export const metadata: Metadata = {
  title: { absolute: homepageSeo.title },
  description: homepageSeo.description,
  ...selfCanonical("/"),
  openGraph: {
    title: homepageSeo.title,
    description: homepageSeo.description,
    type: "website",
    locale: "en_PK",
    url: siteBrand.url,
    siteName: siteBrand.name,
    images: [
      {
        url: siteBrand.logo.src,
        width: siteBrand.logo.width,
        height: siteBrand.logo.height,
        alt: siteBrand.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageSeo.title,
    description: homepageSeo.description,
    images: [siteBrand.logo.src],
  },
};

function DeferredSection({ children }: { children: React.ReactNode }) {
  return <div className="landing-section-deferred">{children}</div>;
}

const countryNavigationItems = [
  {
    country: "Pakistan",
    label: "Software company in Pakistan",
    description:
      "Custom software development, enterprise systems, and digital transformation for businesses across Pakistan and global clients.",
    href: "/location/software-house-and-software-company-in-pakistan",
  },
  {
    country: "USA",
    label: "Software company in the USA",
    description:
      "Remote software development and product engineering support for startups, SaaS companies, and growing businesses in the United States.",
    href: "/location/software-house-and-software-company-in-usa",
  },
  {
    country: "UK",
    label: "Software company in the UK",
    description:
      "UK-focused software delivery for SaaS, operations, healthcare, and digital product teams seeking dependable product partners.",
    href: "/location/software-house-and-software-company-in-uk",
  },
  {
    country: "UAE",
    label: "Software company in the UAE",
    description:
      "Software development company in the UAE helping founders and teams build CRM, ERP, mobile apps, and business automation platforms.",
    href: "/location/software-house-and-software-company-in-uae",
  },
  {
    country: "Canada",
    label: "Software company in Canada",
    description:
      "Digital product development, mobile apps, and custom software solutions for Canadian businesses and scaling startups.",
    href: "/location/software-house-and-software-company-in-canada",
  },
  {
    country: "Australia",
    label: "Software company in Australia",
    description:
      "Software development services in Australia for workflow automation, digital transformation, and custom business platforms.",
    href: "/location/software-house-and-software-company-in-australia",
  },
] as const;

export default function Home() {
  const schemas = jsonLdGraph([
    organizationSchema,
    localBusinessSchema,
    webSiteSchema,
    homepageServiceSchema,
    homepageFaqSchema,
    breadcrumbSchema([{ name: "Home", path: "/" }]),
  ]);

  return (
    <div className="flex min-h-full w-full max-w-full flex-col overflow-x-clip bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SiteHeader />
      <HeroSection />
      <main className="flex w-full max-w-full flex-1 flex-col overflow-x-clip">
        <TrustedPartnersSection />
        <DeferredSection>
          <AboutSection content={homepageAbout} showValues={false} />
        </DeferredSection>
        <DeferredSection>
          <ServicesSection />
        </DeferredSection>
        <DeferredSection>
          <WhyChooseSection
            values={homepageWhyChoose.values}
            overlineText={homepageWhyChoose.overlineText}
            title={
              <>
                Why businesses <span className="italic">choose us</span>
              </>
            }
            description={homepageWhyChoose.description}
          />
        </DeferredSection>
        <IndustriesSection />
        <DeferredSection>
          <TechStackSection />
        </DeferredSection>
        <DeferredSection>
          <ProcessSection />
        </DeferredSection>
        <DeferredSection>
          <ProjectsSection />
        </DeferredSection>
        <TeamSection />
        <section className="w-full bg-black text-white">
          <div className={`${container} ${sectionPad}`}>
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3">
                <span className="motion-line h-px w-8 bg-white/30" aria-hidden />
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                  Country-specific delivery
                </p>
              </div>

              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-normal leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                Software partners across <span className="italic text-primary">the world</span>
              </h2>

              <p
                className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg"
                style={{ textAlign: "justify" }}
              >
                We work with founders, operators, and product teams in the USA, UK, UAE, Canada,
                Australia, and Pakistan with a delivery rhythm built around clear communication,
                timezone overlap, and measurable outcomes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {countryNavigationItems.map(({ country, label, description, href }) => (
                <a
                  key={country}
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-heading text-2xl font-bold tracking-tight text-white">
                      {country}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      region
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-white">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-primary">
                    <span>Explore {country}</span>
                    <ArrowUpRight className="size-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <TestimonialsSection
          items={homepageTestimonials}
          description={homepageTestimonialsIntro}
          overlineText="Client testimonials"
          title={
            <>
              What our <span className="italic">clients</span> say
            </>
          }
        />
        <BlogSection />
        <DeferredSection>
          <FaqSection items={homepageFaqs} intro={homepageFaqIntro} />
        </DeferredSection>
        <ContactSection content={homepageContact} />
      </main>
    </div>
  );
}
