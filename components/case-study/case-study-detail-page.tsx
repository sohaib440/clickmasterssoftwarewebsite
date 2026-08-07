import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { ProjectHeroSlideshow } from "@/components/project/project-hero-slideshow";
import {
  caseStudies,
  caseStudyDetailPath,
  type CaseStudyDetail,
} from "@/data/caseStudy";
import { projectDetailPath } from "@/data/projects";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  caseStudyPath,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function SectionHeading({
  overlineText,
  title,
  light = false,
}: {
  overlineText: string;
  title: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={cn(overline, light ? "text-white/55" : "text-horizon-muted")}
      >
        {overlineText}
      </p>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-normal tracking-tight md:text-4xl",
          light ? "text-white" : "text-horizon-navy",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

type CaseStudyDetailPageProps = {
  study: CaseStudyDetail;
};

export function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);
  const stackSections = [
    { label: "Frontend", items: study.technologyStack.frontend },
    { label: "Backend", items: study.technologyStack.backend },
    { label: "Database", items: study.technologyStack.database },
    ...(study.technologyStack.cloud?.length
      ? [
          {
            label: "Cloud / Infrastructure",
            items: study.technologyStack.cloud,
          },
        ]
      : []),
  ];

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={caseStudyPath} className="hover:text-white">
                  Case Studies
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{study.headline}</span>
              </nav>
            </Reveal>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
              <div>
                <Reveal immediate delay={motionStagger}>
                  <p className={cn(overline, "text-white/60")}>Case Study</p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    {study.clientName}
                  </p>
                  <h1 className="mt-3 font-heading text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem]">
                    {study.headline}
                  </h1>
                  <p className="mt-5 max-w-2xl text-justify text-base leading-relaxed text-white/70 md:text-lg">
                    {study.lede}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {study.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Discuss a similar challenge
                    </Link>
                    <Link href={caseStudyPath} className={btnOutlineDark}>
                      All case studies
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <ProjectHeroSlideshow
                  slides={study.slides}
                  fallbackImage={study.image}
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Engagement"
                title="Engagement snapshot"
              />
            </Reveal>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Client", value: study.clientName },
                { label: "Industry", value: study.industry },
                { label: "Duration", value: study.duration },
                {
                  label: "Technologies Used",
                  value: study.technologiesUsed.join(", "),
                },
              ].map((item, index) => (
                <Reveal key={item.label} delay={index * motionStagger}>
                  <div className="rounded-2xl border border-horizon-border bg-horizon-cream/40 p-5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {item.label}
                    </dt>
                    <dd className="mt-3 font-heading text-lg leading-snug text-horizon-navy">
                      {item.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={motionStagger}>
              <div className="mt-8 max-w-3xl space-y-4 text-justify text-base leading-relaxed text-horizon-muted md:text-lg">
                {study.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Challenge"
                title="The business challenge"
                light
              />
              <div className="mt-6 max-w-3xl space-y-4 text-justify text-base leading-relaxed text-white/70 md:text-lg">
                {study.challenge.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Approach"
                title="How we approached it"
              />
              <p className="mt-6 max-w-3xl text-justify text-base leading-relaxed text-horizon-muted md:text-lg">
                {study.approach}
              </p>
            </Reveal>
            <ul className="mt-10 space-y-3">
              {study.approachPoints.map((item, index) => (
                <li key={item}>
                  <Reveal delay={index * motionStagger}>
                    <div className="flex gap-3 text-justify text-base leading-relaxed text-horizon-muted md:text-lg">
                      <CheckCircle2
                        className="mt-1 size-5 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-horizon-cream text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Capabilities"
                title="What the solution included"
              />
            </Reveal>
            <ul className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.keyFeatures.map((feature, index) => (
                <li key={feature} className="h-full">
                  <Reveal delay={index * motionStagger} className="h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-horizon-border bg-white p-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                        Capability {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 flex-1 font-heading text-xl leading-snug text-horizon-navy">
                        {feature}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Stack"
                title="Technology stack"
                light
              />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackSections.map((section, index) => (
                <li key={section.label}>
                  <Reveal delay={index * motionStagger}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {section.label}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-relaxed text-white/75"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Results"
                title="Business outcomes"
              />
            </Reveal>
            <ul className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.outcomes.map((item, index) => (
                <li key={item} className="h-full">
                  <Reveal delay={index * motionStagger} className="h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-horizon-border bg-horizon-cream/40 p-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                        Outcome {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 flex-1 font-heading text-xl leading-snug text-horizon-navy">
                        {item}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-horizon-cream text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Insights"
                title="What we learned delivering it"
              />
            </Reveal>
            <ul className="mt-10 space-y-3">
              {study.insights.map((item, index) => (
                <li key={item}>
                  <Reveal delay={index * motionStagger}>
                    <div className="flex gap-3 text-justify text-base leading-relaxed text-horizon-muted md:text-lg">
                      <CheckCircle2
                        className="mt-1 size-5 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Screenshots"
                title="Selected product screens"
                light
              />
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                Interface snapshots from the live build. For full module
                documentation, see the{" "}
                <Link
                  href={projectDetailPath(study.slug)}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {study.title} project page
                </Link>
                .
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
              {study.modulePictures.map((slide, index) => (
                <li key={`${slide.label}-${index}`} className="contents">
                  <Reveal
                    delay={index * motionStagger}
                    className="row-span-2 grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <div className="min-w-0 self-start">
                      <CardImage
                        {...slide.image}
                        className="h-auto w-full"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col p-5">
                      <h3 className="font-heading text-lg text-white">
                        {slide.label}
                      </h3>
                      <p className="mt-2 text-justify text-sm leading-relaxed text-white/65">
                        {slide.caption}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {study.clientQuote ? (
          <section className="bg-white text-horizon-navy">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <SectionHeading
                  overlineText="Testimonial"
                  title={
                    <>
                      Client <span className="italic">feedback</span>
                    </>
                  }
                />
                <blockquote className="relative mt-8 max-w-3xl rounded-2xl border border-horizon-border bg-horizon-cream/40 p-6 md:p-8">
                  <Quote
                    className="absolute right-6 top-6 size-8 text-primary/20"
                    aria-hidden
                  />
                  <p className="text-justify text-base leading-relaxed text-horizon-muted md:text-lg">
                    {study.clientQuote}
                  </p>
                  <footer className="mt-4 text-sm font-medium text-horizon-navy">
                    {study.clientName}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </section>
        ) : null}

        <FaqSection
          items={study.faqs}
          intro={`Questions about this engagement: how we scoped, sequenced, and measured outcomes for ${study.clientName}.`}
          overlineText="Case study FAQs"
          justify
          title={
            <>
              Engagement questions, <span className="italic">answered</span>
            </>
          }
        />

        {related.length > 0 ? (
          <section className="bg-black text-white">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <SectionHeading
                  overlineText="More work"
                  title="Related case studies"
                  light
                />
              </Reveal>
              <ul className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3">
                {related.map((item, index) => (
                  <li key={item.slug} className="h-full">
                    <Reveal delay={index * motionStagger} className="h-full">
                      <Link
                        href={caseStudyDetailPath(item.slug)}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-primary/40"
                      >
                        <CardImage
                          {...item.image}
                          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                            {item.category}
                          </p>
                          <h3 className="mt-2 font-heading text-xl text-white">
                            {item.cardTitle}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60">
                            {item.summary}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-white group-hover:text-primary">
                            View case study
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Facing a similar operational challenge?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell Next Software Development Company about your goals. We will
                reply within one business day.
              </p>
              <Link
                href={contactPath}
                className={cn("mt-8 inline-flex", btnOnDark)}
              >
                Get a Free Quote
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
