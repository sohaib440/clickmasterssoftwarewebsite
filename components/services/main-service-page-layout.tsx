import Link from "next/link";
import { ArrowUpRight, Check, Layers } from "lucide-react";

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
import { CardImage } from "@/components/landing/card-image";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { ServiceBreadcrumbs } from "@/components/services/shared/service-breadcrumbs";
import { ServiceApproachSection } from "@/components/services/service-approach-section";
import { CleanCategoryUrl } from "@/components/services/clean-category-url";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  card,
  cardDark,
  cardSoft,
  contactPath,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import type { MainServicePageContent } from "@/lib/content/service-page-types";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

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
    approach,
    related,
    cta,
  } = content;

  const primaryCta = hero.primaryCta ?? { label: "Get a Free Quote", href: contactPath };
  const secondaryCta = hero.secondaryCta ?? { label: "See Our Work", href: projectPath };

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <CleanCategoryUrl mainSlug={mainSlug} />
      <SiteHeader />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <ServiceBreadcrumbs items={breadcrumbs} />
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <p className={cn(overline, "text-white/60")}>{hero.eyebrow}</p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                    {hero.title}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    {hero.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
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
                <div className={cn(cardDark, "overflow-hidden p-0")}>
                  <CardImage
                    {...hero.image}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <RatingBadges variant="dark" className="mt-6" />
              </Reveal>
            </div>
          </div>
        </section>

        <TrustedPartnersSection className="border-horizon-border/60 bg-white" />
        <AboutSection />

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
                  <p className="mt-3 max-w-2xl text-white/70">{capabilities.subtitle}</p>
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

        <section className="w-full bg-horizon-peach/50 text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * motionStagger} className={cn(card, "h-full p-6")}>
                    <span className="flex size-9 items-center justify-center rounded-full bg-horizon-sky/60 text-horizon-navy">
                      <Check className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-medium text-horizon-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProcessSection />
        <ServiceApproachSection title={approach.title} steps={approach.steps} />

        <ProjectsSection />
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

      <SiteFooter />
    </div>
  );
}
