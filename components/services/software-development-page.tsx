import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Check,
  Globe,
  Layers,
  ShieldCheck,
  Users,
} from "lucide-react";

import { HeroCtaForm } from "@/components/landing/hero-cta-form";
import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import {
  btnOnDark,
  btnOutline,
  btnOutlineDark,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import {
  softwareDevelopmentAbout,
  softwareDevelopmentCaseStudies,
  softwareDevelopmentClosingCta,
  softwareDevelopmentFaqSection,
  softwareDevelopmentFaqs,
  softwareDevelopmentHero,
  softwareDevelopmentProjects,
  softwareDevelopmentServices,
  softwareDevelopmentStats,
  softwareDevelopmentTeam,
  softwareDevelopmentTestimonials,
} from "@/data/softwareDevelopmentPage";
import { teamMembers } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const statIcons = {
  users: Users,
  briefcase: Briefcase,
  layers: Layers,
  "shield-check": ShieldCheck,
} as const;

export function SoftwareDevelopmentPage() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-black text-white" aria-label="Introduction">
          <div className={cn(container, sectionPad)}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Software Development</span>
              </nav>
            </Reveal>

            <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
              <div className="min-w-0">
                <Reveal immediate delay={0}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-1.5">
                    <Globe className="size-3.5 shrink-0 text-primary" aria-hidden />
                    <span className={cn(overline, "text-white/90")}>
                      {softwareDevelopmentHero.eyebrow}
                    </span>
                  </div>
                </Reveal>

                <Reveal immediate delay={motionStagger}>
                  <h1 className="mt-5 max-w-3xl font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
                    {softwareDevelopmentHero.headline}
                  </h1>
                </Reveal>

                <Reveal immediate delay={motionStagger * 2}>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                    {softwareDevelopmentHero.subheading}
                  </p>
                </Reveal>

                <Reveal immediate delay={motionStagger * 2.5}>
                  <ul className="mt-6 space-y-2.5">
                    {softwareDevelopmentHero.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/85 md:text-base">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal immediate delay={motionStagger * 3}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={softwareDevelopmentHero.primaryHref} className={btnPrimary}>
                      {softwareDevelopmentHero.primaryCta} →
                    </Link>
                    <Link href={softwareDevelopmentHero.secondaryHref} className={btnOutlineDark}>
                      {softwareDevelopmentHero.secondaryCta} →
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal
                immediate
                delay={motionStagger * 2}
                direction="right"
                className="relative mx-auto w-full min-w-0 max-w-[400px] shrink-0 lg:mx-0 lg:w-[400px]"
              >
                <HeroCtaForm />
              </Reveal>
            </div>

            <Reveal immediate delay={motionStagger * 3.5}>
              <RatingBadges variant="dark" className="mt-10" />
            </Reveal>

            <Reveal immediate delay={motionStagger * 4}>
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-6 sm:px-8">
                <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
                  {softwareDevelopmentStats.map((stat, i) => {
                    const Icon = statIcons[stat.icon];
                    return (
                      <div
                        key={stat.label}
                        className={cn(
                          "flex flex-col items-center text-center sm:px-4",
                          i > 0 && "sm:border-l sm:border-white/10",
                        )}
                      >
                        <Icon className="mb-2 size-5 text-primary" aria-hidden />
                        <dt className="font-heading text-2xl font-normal text-white md:text-3xl">
                          {stat.value}
                        </dt>
                        <dd className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="w-full bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentAbout.overline}
              title={softwareDevelopmentAbout.title}
              className="mb-8 md:mb-10"
            />

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="space-y-5">
                {softwareDevelopmentAbout.paragraphs.map((paragraph, i) => (
                  <Reveal key={i} delay={i * motionStagger}>
                    <p className="text-base leading-relaxed text-horizon-navy md:text-lg">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
                <Reveal delay={motionStagger * 2}>
                  <Link href={softwareDevelopmentAbout.ctaHref} className={btnOutline}>
                    {softwareDevelopmentAbout.cta} →
                  </Link>
                </Reveal>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {softwareDevelopmentAbout.reasons.map((reason, i) => (
                  <li key={reason.title}>
                    <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-5")}>
                      <h3 className="font-heading text-base font-medium text-horizon-navy">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                        {reason.description}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full bg-horizon-peach/40 text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentServices.overline}
              title={softwareDevelopmentServices.title}
              description={softwareDevelopmentServices.intro}
              className="mb-8 md:mb-10"
            />

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {softwareDevelopmentServices.items.map((service, i) => (
                <li key={service.label} id={service.href.startsWith("#") ? service.href.slice(1) : undefined}>
                  <Reveal delay={i * motionStagger} className="h-full">
                    <Link
                      href={service.href}
                      className={cn(
                        card,
                        "group flex h-full flex-col p-5 transition-colors hover:border-horizon-sky lg:p-6",
                      )}
                    >
                      <h3 className="font-heading text-lg font-medium text-horizon-navy group-hover:text-primary">
                        {service.label}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-horizon-muted">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy">
                        Learn more
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="w-full bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentProjects.overline}
              title={softwareDevelopmentProjects.title}
              description={softwareDevelopmentProjects.intro}
              className="mb-8 md:mb-10"
            />

            <ul className="grid gap-5 md:grid-cols-2">
              {softwareDevelopmentProjects.items.map((project, i) => (
                <li key={project.title}>
                  <Reveal delay={i * motionStagger} className="h-full">
                    <Link
                      href={projectPath}
                      className={cn(
                        cardSoft,
                        "group flex h-full flex-col p-6 transition-colors hover:border-horizon-sky lg:p-7",
                      )}
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-horizon-muted">
                        {project.industry}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-medium text-horizon-navy group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-horizon-muted">
                        {project.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-full border border-horizon-border bg-horizon-cream px-3 py-1 text-xs text-horizon-navy"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy group-hover:text-primary">
                        View project
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={motionStagger * 2} className="mt-10 text-center">
              <Link href={softwareDevelopmentProjects.ctaHref} className={btnPrimary}>
                {softwareDevelopmentProjects.cta} →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Testimonials fallback */}
        <section id="testimonials" className="w-full bg-horizon-cream text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentTestimonials.overline}
              title={softwareDevelopmentTestimonials.title}
              className="mb-6"
            />
            <Reveal>
              <div className={cn(card, "mx-auto max-w-3xl p-6 text-center md:p-8")}>
                <p className="text-base leading-relaxed text-horizon-muted md:text-lg">
                  {softwareDevelopmentTestimonials.fallback}
                </p>
                <Link
                  href={softwareDevelopmentTestimonials.referenceHref}
                  className={cn(btnOutline, "mt-6")}
                >
                  {softwareDevelopmentTestimonials.referenceCta} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Case studies fallback */}
        <section id="case-studies" className="w-full bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentCaseStudies.overline}
              title={softwareDevelopmentCaseStudies.title}
              description={softwareDevelopmentCaseStudies.intro}
              className="mb-8"
            />
            <Reveal>
              <div className={cn(cardSoft, "mx-auto max-w-3xl p-6 text-center md:p-10")}>
                <h3 className="font-heading text-2xl font-medium text-horizon-navy md:text-3xl">
                  {softwareDevelopmentCaseStudies.fallbackTitle}
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-horizon-muted md:text-base">
                  {softwareDevelopmentCaseStudies.fallbackBody}
                </p>
                <Link
                  href={softwareDevelopmentCaseStudies.fallbackHref}
                  className={cn(btnPrimary, "mt-6")}
                >
                  {softwareDevelopmentCaseStudies.fallbackCta} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="w-full bg-horizon-peach/30 text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <SectionHeading
              overlineText={softwareDevelopmentTeam.overline}
              title={softwareDevelopmentTeam.title}
              description={softwareDevelopmentTeam.intro}
              className="mb-8 md:mb-10"
            />

            <ul
              className="grid grid-cols-2 gap-[5px] bg-horizon-border/40 sm:grid-cols-3 lg:grid-cols-6"
              aria-label="Team portraits"
            >
              {teamMembers.map((member, i) => (
                <li key={member.name} className="aspect-square overflow-hidden bg-white">
                  <Reveal delay={i * motionStagger} className="h-full w-full">
                    <figure className="group relative h-full w-full overflow-hidden">
                      <CardImage
                        {...member.image}
                        className="aspect-square h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                      <figcaption className="sr-only">
                        {member.name}, {member.role}
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={motionStagger * 2} className="mt-8">
              <Link href={softwareDevelopmentTeam.ctaHref} className={btnOutline}>
                {softwareDevelopmentTeam.cta} →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection
          items={softwareDevelopmentFaqs}
          intro={softwareDevelopmentFaqSection.intro}
          overlineText={softwareDevelopmentFaqSection.overline}
          title={softwareDevelopmentFaqSection.title}
          footerCta={softwareDevelopmentFaqSection.footerCta}
          footerHref={softwareDevelopmentFaqSection.footerHref}
        />

        {/* Closing CTA */}
        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl lg:text-5xl">
                {softwareDevelopmentClosingCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/75 md:text-base">
                {softwareDevelopmentClosingCta.body}
              </p>
              <Link href={softwareDevelopmentClosingCta.ctaHref} className={cn("mt-8", btnOnDark)}>
                {softwareDevelopmentClosingCta.cta} →
              </Link>
              <p className="mt-4 text-xs text-white/50 md:text-sm">
                {softwareDevelopmentClosingCta.subtext}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
