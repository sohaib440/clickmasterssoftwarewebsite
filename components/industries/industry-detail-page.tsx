import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  industriesPath,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import { type IndustryPageContent } from "@/data/industries";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type Props = {
  industry: IndustryPageContent;
};

export function IndustryDetailPage({ industry }: Props) {
  const [heroOverview, ...restOverview] = industry.overview;
  const heroSolutions = industry.solutions.slice(0, 4);
  const heroAudiences = industry.whoWeServe.slice(0, 4);
  const heroOutcomes = industry.outcomes.slice(0, 3);

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-white/[0.04] blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/[0.03] blur-[110px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={industriesPath} className="hover:text-white">
                  Industries
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{industry.label}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <h1 className="font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                    {industry.label} software development
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    {industry.tagline}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                    {industry.description}
                  </p>
                </Reveal>
                {heroOverview ? (
                  <Reveal immediate delay={motionStagger * 4}>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
                      {heroOverview}
                    </p>
                  </Reveal>
                ) : null}
                <Reveal immediate delay={motionStagger * 5}>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                {heroSolutions.length > 0 ? (
                  <Reveal immediate delay={motionStagger * 6}>
                    <div className="mt-7">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                        What we build
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {heroSolutions.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-snug text-white/75"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-primary"
                              strokeWidth={2}
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ) : null}
                {heroAudiences.length > 0 ? (
                  <Reveal immediate delay={motionStagger * 7}>
                    <div className="mt-7">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                        Who we work with
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {heroAudiences.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ) : null}
                <Reveal immediate delay={motionStagger * 8}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Discuss your {industry.label.toLowerCase()} project
                    </Link>
                    <Link href={projectPath} className={btnOutlineDark}>
                      See our work
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <CardImage
                    {...industry.heroImage}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {heroOutcomes.length > 0 ? (
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {heroOutcomes.map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-2.5 text-sm leading-snug text-white/75"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <RatingBadges variant="dark" className="mt-5" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Software for <span className="italic">{industry.label.toLowerCase()}</span>
              </h2>
            </Reveal>
            <div className="mt-6 max-w-3xl space-y-4">
              {(restOverview.length > 0 ? restOverview : industry.overview).map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-horizon-muted md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {industry.whoWeServe.length > 0 ? (
              <div className="mt-8">
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-horizon-muted">
                  Who we work with
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {industry.whoWeServe.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-horizon-border bg-[#f5f6f8] px-3 py-1.5 text-sm text-horizon-navy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        <section className="w-full bg-[#f5f6f8]">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Problems we <span className="italic">solve</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {industry.challenges.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
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

        <section className="w-full bg-horizon-sky/30">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Typical <span className="italic">use cases</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {industry.useCases.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
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

        <section className="w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2
                id="capabilities-heading"
                className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
              >
                What we <span className="italic">deliver</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {industry.capabilities.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
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

        <section className="w-full bg-horizon-peach/40">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  Systems we <span className="italic">build</span>
                </h2>
                <p className="mt-3 text-horizon-muted">
                  Typical {industry.label.toLowerCase()} products and modules we design, build, and
                  support.
                </p>
              </Reveal>
              <Reveal delay={motionStagger}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {industry.solutions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-horizon-border/80 bg-white/90 px-4 py-3 text-sm text-horizon-navy"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-horizon-navy/60"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f5f6f8]">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  Integrations we <span className="italic">connect</span>
                </h2>
                <p className="mt-3 text-horizon-muted">
                  {industry.label} systems rarely live alone. We wire the tools you already run so
                  staff are not retyping the same fact in three places.
                </p>
              </Reveal>
              <Reveal delay={motionStagger}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {industry.integrations.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-horizon-border/80 bg-white px-4 py-3 text-sm text-horizon-navy"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-horizon-navy/60"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {industry.highlights.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
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

        <section className="w-full bg-horizon-peach/30">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                What good <span className="italic">looks like</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {industry.outcomes.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
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

        <section className="w-full bg-horizon-cream">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                How we <span className="italic">deliver</span>
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industry.approach.map((step, i) => (
                <li key={step.step}>
                  <Reveal delay={i * motionStagger}>
                    <span className="font-heading text-2xl text-horizon-navy/25">{step.step}</span>
                    <h3 className="mt-2 font-heading text-lg font-medium text-horizon-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {industry.faqs.length > 0 ? (
          <FaqSection
            items={industry.faqs.map((faq, index) => ({
              question: faq.question,
              answer: faq.answer,
              tag: industry.label,
              column: index % 2 === 0 ? "left" : "right",
            }))}
            intro={`Answers about ${industry.label.toLowerCase()} software: workflows, integrations, timelines, and how we deliver.`}
            overlineText={`${industry.label} FAQs`}
            title={
              <>
                Questions, <span className="italic">answered</span>
              </>
            }
          />
        ) : null}

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Ready to build for <span className="italic">{industry.label.toLowerCase()}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Share your workflows, constraints, and goals. We will respond within one business
                day with a clear path forward.
              </p>
              <Link href={contactPath} className={cn("mt-8", btnOnDark)}>
                Get a free quote →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
