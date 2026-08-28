import type { Metadata } from "next";

import {
  AboutSection,
  BlogSection,
  ContactSection,
  TrustNumbersSection,
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
  TrustedPartnersSection,
  WhyChooseSection,
} from "@/components/landing";
import { siteBrand } from "@/lib/landing/brand";
import {
  homepageAbout,
  homepageContact,
  homepageFaqIntro,
  homepageFaqs,
  homepageIndustries,
  homepageProcessSteps,
  homepageServiceOverrides,
  homepageServicesIntro,
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
        <TrustNumbersSection />
        <TrustedPartnersSection />
        <DeferredSection>
          <AboutSection content={homepageAbout} showValues={false} />
        </DeferredSection>
        <DeferredSection>
          <ServicesSection
            description={homepageServicesIntro}
            serviceOverrides={homepageServiceOverrides}
          />
        </DeferredSection>
        <DeferredSection>
          <WhyChooseSection
            values={homepageWhyChoose.values}
            overlineText={homepageWhyChoose.overlineText}
            title={homepageWhyChoose.title}
            description={homepageWhyChoose.description}
          />
        </DeferredSection>
        <IndustriesSection
          overlineText="Industries We Serve"
          title="Software Solutions for Every Industry, In Every Market We Serve"
          description="As a software house trusted by clients across Pakistan, the USA, UK, UAE, Canada, and Australia, we tailor software to the workflows, compliance requirements, and growth goals of each industry we support."
          items={homepageIndustries}
        />
        <DeferredSection>
          <TechStackSection />
        </DeferredSection>
        <DeferredSection>
          <ProcessSection
            overlineText="How We Work"
            title="Our Delivery Process — Transparent, Agile, and Built Around You"
            steps={homepageProcessSteps}
          />
        </DeferredSection>
        <DeferredSection>
          <ProjectsSection />
        </DeferredSection>
        <TeamSection />
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
