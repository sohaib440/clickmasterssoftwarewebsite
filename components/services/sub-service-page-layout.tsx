import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AboutSection } from "@/components/landing/about-section";
import { BlogSection } from "@/components/landing/blog-section";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustNumbersSection } from "@/components/landing/trust-numbers-section";
import { CaseStudiesSection } from "@/components/case-study/case-studies-section";
import { caseStudies } from "@/data/caseStudy";
import { ServiceHero } from "@/components/services/service-hero";
import {
  btnOnDark,
  cardDark,
  cardSoft,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { SubServicePageContent } from "@/lib/content/service-page-types";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Renders `[label](/path)` markers from data/subServices.tsx copy */
function textWithLinks(text: string, linkClassName?: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <Link
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        className={cn(
          "font-semibold text-primary underline decoration-primary/70 underline-offset-[3px] transition-colors hover:text-primary/80",
          linkClassName
        )}
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

type SubServicePageLayoutProps = {
  content: SubServicePageContent;
};

export function SubServicePageLayout({ content }: SubServicePageLayoutProps) {
  const {
    breadcrumbs,
    hero,
    contentParagraphs,
    overviewTitle,
    highlights,
    relatedSubs,
    cta,
  } = content;

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <ServiceHero breadcrumbs={breadcrumbs} hero={hero} />

        <TrustNumbersSection />
        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />
        <AboutSection />

        <section className="w-full bg-black text-white" aria-labelledby="sub-service-overview-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/55")}>Service overview</p>
              <h2
                id="sub-service-overview-heading"
                className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl"
              >
                {overviewTitle}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {contentParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * motionStagger}>
                  <p className="text-justify text-base leading-relaxed text-white/70 md:text-lg">
                    {textWithLinks(
                      paragraph,
                      "font-semibold text-primary decoration-primary/70 hover:text-primary/80"
                    )}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <IndustriesSection />
        <TechStackSection />

        <ProcessSection />

        <ProjectsSection />
        {caseStudies.length > 0 ? (
          <CaseStudiesSection
            items={caseStudies.slice(0, 6)}
            overlineText="Case studies"
            title={
              <>
                Results from <span className="italic">real engagements</span>
              </>
            }
            description="Selected case studies showing how we deliver outcomes across products and industries."
          />
        ) : null}

        <section className="w-full bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">{highlights.title}</h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * motionStagger} className={cn(cardDark, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <TeamSection />

        {relatedSubs.items.length > 0 ? (
          <section className="w-full bg-white">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-2xl font-normal text-horizon-navy md:text-3xl">
                  {relatedSubs.title}
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedSubs.items.map((item, index) => (
                  <li key={item.href}>
                    <Reveal delay={index * motionStagger}>
                      <Link
                        href={item.href}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-primary/30"
                        )}
                      >
                        <div className="min-w-0">
                          <p className="font-medium text-horizon-navy group-hover:text-primary">
                            {item.label}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-horizon-muted">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-horizon-muted group-hover:text-primary"
                          aria-hidden
                        />
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />

        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-normal md:text-4xl">{cta.title}</h2>
              <p className="mt-4 text-white/70">{cta.description}</p>
              <Link href={cta.buttonHref} className={cn(btnOnDark, "mt-8")}>
                {cta.buttonLabel}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
