import dynamic from "next/dynamic";

import {
  AboutSection,
  ClientsSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  TechStackSection,
} from "@/components/landing";

const TeamSection = dynamic(
  () => import("@/components/landing/team-section").then((m) => ({ default: m.TeamSection }))
);

const TestimonialsSection = dynamic(() =>
  import("@/components/landing/testimonials-section").then((m) => ({
    default: m.TestimonialsSection,
  }))
);

const BlogSection = dynamic(() =>
  import("@/components/landing/blog-section").then((m) => ({ default: m.BlogSection }))
);

const ContactSection = dynamic(() =>
  import("@/components/landing/contact-section").then((m) => ({ default: m.ContactSection }))
);

function DeferredSection({ children }: { children: React.ReactNode }) {
  return <div className="landing-section-deferred">{children}</div>;
}

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />
      <HeroSection />
      <main className="flex w-full flex-1 flex-col">
        <ClientsSection />
        <DeferredSection>
          <AboutSection />
        </DeferredSection>
        <DeferredSection>
          <ServicesSection />
        </DeferredSection>
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
