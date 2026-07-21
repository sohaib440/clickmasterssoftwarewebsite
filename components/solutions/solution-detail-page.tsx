import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOutline,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  iconMuted,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { SolutionContent } from "@/lib/content/solutions.types";
import {
  getAllSolutions,
  solutionPath,
  solutionsIndexPath,
} from "@/lib/content/solutions";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type Props = {
  solution: SolutionContent;
};

export function SolutionDetailPage({ solution }: Props) {
  const related = getAllSolutions().filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky">
          <div className={cn(container, sectionPad)}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-horizon-muted">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-horizon-navy">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={solutionsIndexPath} className="hover:text-horizon-navy">
                  Solutions
                </Link>
                <span aria-hidden>/</span>
                <span className="text-horizon-navy">{solution.label}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={overline}>{solution.category}</p>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-horizon-sky/50 ring-1 ring-horizon-sky/50">
                      <solution.icon
                        className={cn("size-4", iconMuted)}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </span>
                  </div>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-horizon-navy sm:text-5xl lg:text-[3.25rem]">
                    {solution.label}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                    {solution.tagline}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-horizon-muted">
                    {solution.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 5}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Request a demo
                    </Link>
                    <Link href={contactPath} className={btnOutline}>
                      Contact us
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className={cn(card, "overflow-hidden p-0")}>
                  <CardImage
                    {...solution.heroImage}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-white" aria-labelledby="features-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2
                id="features-heading"
                className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
              >
                Core <span className="italic">capabilities</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.features.map((feature, i) => (
                <li key={feature.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {feature.description}
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
                  What&apos;s <span className="italic">included</span>
                </h2>
                <p className="mt-3 text-horizon-muted">
                  Modules and features we typically deliver for {solution.label.toLowerCase()}{" "}
                  engagements.
                </p>
              </Reveal>
              <Reveal delay={motionStagger}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {solution.capabilities.map((item) => (
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

        <section className="w-full bg-horizon-sky/35">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Use <span className="italic">cases</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.useCases.map((item, i) => (
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

        <section className="w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.highlights.map((item, i) => (
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

        <section className="w-full bg-horizon-cream">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                How we <span className="italic">deliver</span>
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solution.approach.map((step, i) => (
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

        {related.length > 0 ? (
          <section className="w-full border-t border-horizon-border bg-white">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  More <span className="italic">solutions</span>
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {related.map((item, i) => (
                  <li key={item.slug}>
                    <Reveal delay={i * motionStagger}>
                      <Link
                        href={solutionPath(item.slug)}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-horizon-sky"
                        )}
                      >
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-horizon-muted">
                            {item.category}
                          </p>
                          <p className="mt-1 font-heading text-lg font-medium text-horizon-navy">
                            {item.label}
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

        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Ready to build your <span className="italic">{solution.label}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell us about your users, integrations, and timeline—we&apos;ll reply within one
                business day.
              </p>
              <Link
                href={contactPath}
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-horizon-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in touch
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
