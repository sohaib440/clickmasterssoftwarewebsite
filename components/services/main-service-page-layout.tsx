import { AboutSection } from "@/components/landing/about-section";
import { BlogSection } from "@/components/landing/blog-section";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { TeamSection } from "@/components/landing/team-section";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustNumbersSection } from "@/components/landing/trust-numbers-section";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { ServiceHero } from "@/components/services/service-hero";
import { CleanCategoryUrl } from "@/components/services/clean-category-url";
import { CaseStudiesSection } from "@/components/case-study/case-studies-section";
import { caseStudies } from "@/data/caseStudy";
import {
  btnOnDark,
  cardDark,
  cardSoft,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { MainServicePageContent } from "@/lib/content/service-page-types";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Layers } from "lucide-react";

/** Renders `[label](/path)` markers from data/services.tsx copy */
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
          "underline decoration-primary/45 underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary",
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

type MainServicePageLayoutProps = {
  content: MainServicePageContent;
};

export function MainServicePageLayout({ content }: MainServicePageLayoutProps) {
  const {
    mainSlug,
    breadcrumbs,
    hero,
    capabilities,
    highlights,
    related,
    cta,
  } = content;

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <CleanCategoryUrl mainSlug={mainSlug} />
      <SiteHeader />

      <main className="flex-1">
        <ServiceHero breadcrumbs={breadcrumbs} hero={hero} />

        <TrustNumbersSection className="[&>div]:!pt-2 [&>div]:md:!pt-3 [&>div]:!pb-6 [&>div]:md:!pb-8" />
        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />
        <AboutSection showValues={false} />

        {capabilities.items.length > 0 ? (
          <section className="w-full bg-black text-white" aria-labelledby="capabilities-heading">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2
                  id="capabilities-heading"
                  className="font-heading text-3xl font-normal text-white md:text-4xl"
                >
                  {capabilities.title}
                </h2>
                {capabilities.subtitle ? (
                  <p className="mt-3 max-w-2xl text-white/70">
                    {textWithLinks(
                      capabilities.subtitle,
                      "font-semibold text-primary decoration-primary/70 hover:text-primary/80"
                    )}
                  </p>
                ) : null}
              </Reveal>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.items.map((item, index) => (
                  <li key={`${item.href}-${index}`} className="h-full">
                    <Reveal delay={index * motionStagger} className="h-full">
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300",
                          "hover:border-white/25 hover:bg-white/[0.07]"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                            <Layers className="size-5" strokeWidth={1.5} aria-hidden />
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                            Capability
                          </span>
                        </div>

                        <h3 className="mt-6 font-heading text-xl font-medium leading-snug text-white md:text-[1.35rem]">
                          {item.label}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                          {item.description}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-primary">
                          Learn more
                          <ArrowUpRight
                            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </span>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

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
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * motionStagger} className={cn(cardDark, "h-full p-6")}>
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-primary">
                      <Check className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <TeamSection />

        {related && related.items.length > 0 ? (
          <section className="w-full bg-horizon-cream text-horizon-navy">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-3xl font-normal md:text-4xl">
                  Explore more <span className="italic">capabilities</span>
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {related.items.map((item, index) => (
                  <li key={item.href}>
                    <Reveal delay={index * motionStagger}>
                      <Link
                        href={item.href}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-horizon-sky"
                        )}
                      >
                        <div>
                          <p className="font-heading text-lg font-medium text-horizon-navy">
                            {item.label}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-horizon-muted">
                            {item.tagline}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="size-5 shrink-0 text-horizon-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-horizon-navy"
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
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">{cta.title}</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {cta.description}
              </p>
              <Link href={cta.buttonHref} className={cn("mt-8", btnOnDark)}>
                {cta.buttonLabel}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
