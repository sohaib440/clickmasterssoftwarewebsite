import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers } from "lucide-react";

import { AboutSection } from "@/components/landing/about-section";
import { BlogSection } from "@/components/landing/blog-section";
import { CardImage } from "@/components/landing/card-image";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustNumbersSection } from "@/components/landing/trust-numbers-section";
import { CaseStudiesSection } from "@/components/case-study/case-studies-section";
import { caseStudies } from "@/data/caseStudy";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  cardDark,
  cardSoft,
  contactPath,
  container,
  overline,
  projectPath,
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
    parent,
    hero,
    highlights,
    relatedSubs,
    serviceFamily,
    cta,
  } = content;

  const primaryCta = hero.primaryCta ?? { label: "Get a Free Quote", href: contactPath };
  const secondaryCta = hero.secondaryCta ?? { label: "See Our Work", href: projectPath };

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/12 blur-[90px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative pb-10 md:pb-12")}>
            <Reveal immediate>
              <nav
                className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                {breadcrumbs.slice(1).map((crumb, index) => (
                  <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                    <span aria-hidden>/</span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <p className={cn(overline, "text-primary/90")}>
                    <Link href={parent.href} className="hover:text-primary">
                      {hero.eyebrow}
                    </Link>
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-3 font-heading text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                    {hero.title}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                    {textWithLinks(hero.description, "text-white decoration-primary/50 hover:text-primary")}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                    <Link href={primaryCta.href} className={btnPrimary}>
                      {primaryCta.label}
                    </Link>
                    <Link href={secondaryCta.href} className={btnOutlineDark}>
                      {secondaryCta.label}
                    </Link>
                    {/* <Link
                      href={parent.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/70 underline-offset-4 hover:text-primary/80"
                    >
                      View all {parent.label} services
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link> */}
                  </div>
                </Reveal>
                <Reveal immediate delay={motionStagger * 5}>
                  <RatingBadges variant="dark" className="mt-8" />
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                {hero.image ? (
                  <div className="mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:ml-auto lg:mr-0 lg:max-w-[20rem]">
                    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                      <CardImage
                        {...hero.image}
                        className="aspect-square w-full object-cover"
                        priority
                        sizes="(max-width: 1024px) 288px, 280px"
                      />
                    </div>
                  </div>
                ) : null}
              </Reveal>
            </div>
          </div>
        </section>

        <TrustNumbersSection />
        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />
        <AboutSection />

        {serviceFamily.items.length > 0 ? (
          <section className="w-full bg-black text-white" aria-labelledby="service-family-heading">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <p className={cn(overline, "text-white/55")}>Our services</p>
                <h2
                  id="service-family-heading"
                  className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl"
                >
                  {serviceFamily.title}
                </h2>
                <Link
                  href={serviceFamily.parent.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-primary"
                >
                  Parent: {serviceFamily.parent.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </Reveal>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceFamily.items.map((item, index) => {
                  const isCurrent = item.href === serviceFamily.currentHref;
                  return (
                    <li key={item.href} className="h-full">
                      <Reveal delay={index * motionStagger} className="h-full">
                        <Link
                          href={item.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={cn(
                            "group flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300",
                            isCurrent
                              ? "border-primary/50 bg-primary/10"
                              : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                              <Layers className="size-5" strokeWidth={1.5} aria-hidden />
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                              {isCurrent ? "Current" : "Child service"}
                            </span>
                          </div>
                          <h3 className="mt-6 font-heading text-xl font-medium leading-snug text-white md:text-[1.35rem]">
                            {item.label}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                            {item.description}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-primary">
                            {isCurrent ? "You are here" : "Learn more"}
                            <ArrowUpRight
                              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden
                            />
                          </span>
                        </Link>
                      </Reveal>
                    </li>
                  );
                })}
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
