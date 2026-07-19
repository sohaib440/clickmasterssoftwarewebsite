import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { AboutSection } from "@/components/landing/about-section";
import { BlogSection } from "@/components/landing/blog-section";
import { CardImage } from "@/components/landing/card-image";
import { TrustedPartnersSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { Reveal } from "@/components/landing/reveal";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
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

type SubServicePageLayoutProps = {
  content: SubServicePageContent;
};

export function SubServicePageLayout({ content }: SubServicePageLayoutProps) {
  const {
    breadcrumbs,
    parent,
    hero,
    contentParagraphs,
    highlights,
    approach,
    relatedSubs,
    cta,
  } = content;

  const primaryCta = hero.primaryCta ?? { label: "Get a Free Quote", href: contactPath };
  const secondaryCta = hero.secondaryCta ?? { label: "See Our Work", href: projectPath };

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        {/* Compact hero */}
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
                  <p className={cn(overline, "text-primary/90")}>{hero.eyebrow}</p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-3 font-heading text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                    {hero.title}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                    {hero.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={primaryCta.href} className={btnPrimary}>
                      {primaryCta.label}
                    </Link>
                    <Link href={secondaryCta.href} className={btnOutlineDark}>
                      {secondaryCta.label}
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <CardImage
                    {...hero.image}
                    className="aspect-[5/4] w-full object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />
        <AboutSection />

        {/* Detail copy */}
        <section className="w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-start">
              <div className="space-y-5">
                {contentParagraphs.map((paragraph, index) => (
                  <Reveal key={index} delay={index * motionStagger}>
                    <p className="text-base leading-relaxed text-horizon-muted md:text-lg">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={motionStagger} className={cn(cardSoft, "p-6 lg:sticky lg:top-24")}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-horizon-muted">
                  Part of
                </p>
                <Link
                  href={parent.href}
                  className="mt-2 inline-flex items-center gap-1 font-heading text-xl text-horizon-navy hover:text-primary"
                >
                  {parent.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-horizon-muted">
                  Explore the full range of {parent.label.toLowerCase()} services, process, and
                  related capabilities.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <ServicesSection />
        <IndustriesSection />
        <TechStackSection />

        {/* Benefits dark cards */}
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

        <ProcessSection />

        {/* Process timeline */}
        <section className="w-full border-y border-horizon-border/60 bg-horizon-cream">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                {approach.title}
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-0">
              {approach.steps.map((step, index) => (
                <li
                  key={step.step}
                  className={cn(
                    "grid gap-4 border-horizon-border/70 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6",
                    index > 0 && "border-t"
                  )}
                >
                  <Reveal delay={index * motionStagger}>
                    <span className="font-heading text-3xl text-primary/80">{step.step}</span>
                  </Reveal>
                  <Reveal delay={index * motionStagger}>
                    <h3 className="font-heading text-xl font-medium text-horizon-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-horizon-muted md:text-base">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ProjectsSection />
        <TeamSection />

        {/* Related sub-services */}
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

        {/* CTA */}
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

      <SiteFooter />
    </div>
  );
}
