import type { Metadata } from "next";

import { HomeJsonLd } from "@/components/seo/home-json-ld";
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
  SiteFooter,
  SiteHeader,
  TeamSection,
  TechStackSection,
  TestimonialsSection,
} from "@/components/landing";
import { siteMetadata } from "@/lib/landing/brand";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: [...siteMetadata.keywords],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website",
    locale: "en_PK",
  },
};

function DeferredSection({ children }: { children: React.ReactNode }) {
  return <div className="landing-section-deferred">{children}</div>;
}

export default function Home() {
  return (
    <div className="flex min-h-full w-full max-w-full flex-col overflow-x-clip bg-black text-white">
      <HomeJsonLd />
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
      <SiteFooter />
    </div>
  );
}
