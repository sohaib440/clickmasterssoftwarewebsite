import type { Metadata } from "next";

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
} from "@/components/landing";
import { siteBrand } from "@/lib/landing/brand";
import { homepageSeo, testimonials } from "@/data/homepage-content";
import { selfCanonical } from "@/seo/canonical";
import {
  breadcrumbSchema,
  homepageFaqSchema,
  homepageServiceSchema,
  jsonLdGraph,
  localBusinessSchema,
  organizationSchema,
  reviewSchema,
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
  const homepageReviews = testimonials.slice(0, 3).map((item, index) =>
    reviewSchema({
      authorName: item.author,
      reviewBody: item.quote,
      jobTitle: item.role,
      idSuffix: String(index + 1),
    }),
  );

  const schemas = jsonLdGraph([
    organizationSchema,
    {
      ...localBusinessSchema,
      review: homepageReviews.map((review) => ({
        "@id": review["@id"],
      })),
    },
    webSiteSchema,
    homepageServiceSchema,
    homepageFaqSchema,
    breadcrumbSchema([{ name: "Home", path: "/" }]),
    ...homepageReviews,
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
          <AboutSection />
        </DeferredSection>
        <DeferredSection>
          <ServicesSection />
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
        <TestimonialsSection />
        <BlogSection />
        <DeferredSection>
          <FaqSection />
        </DeferredSection>
        <ContactSection />
      </main>
    </div>
  );
}
