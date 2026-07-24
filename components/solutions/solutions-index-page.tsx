import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOutline,
  btnPrimary,
  cardSoft,
  contactPath,
  container,
  iconMuted,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import {
  getAllSolutions,
  getSolutionCategories,
  getSolutionsByCategory,
  solutionPath,
} from "@/lib/content/solutions";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function SolutionsIndexPage() {
  const categories = getSolutionCategories();
  const allSolutions = getAllSolutions();

  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-horizon-peach/40 blur-3xl" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <p className={overline}>Solutions</p>
            </Reveal>
            <Reveal immediate delay={motionStagger}>
              <h1 className="mt-4 max-w-3xl font-heading text-4xl font-normal leading-[1.1] tracking-tight text-horizon-navy sm:text-5xl lg:text-[3.25rem]">
                Products we&apos;ve built for <span className="italic">real teams</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
                ERP, CRM, AI agents, and more, custom platforms designed for your workflows. Browse
                our solution catalog or tell us what you need to ship next.
              </p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link href={contactPath} className={btnPrimary}>
                  Discuss your project
                </Link>
                <Link href={contactPath} className={btnOutline}>
                  Contact us
                </Link>
              </div>
            </Reveal>

            <Reveal immediate delay={motionStagger * 4} className="mt-10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-horizon-border bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-horizon-muted"
                >
                  {category}
                </span>
              ))}
              <span className="rounded-full border border-horizon-navy/15 bg-horizon-navy px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                {allSolutions.length} solutions
              </span>
            </Reveal>
          </div>
        </section>

        {categories.map((category) => {
          const items = getSolutionsByCategory(category);

          return (
            <section
              key={category}
              className="w-full border-t border-horizon-border/60 bg-white even:bg-horizon-cream/40"
              aria-labelledby={`solutions-${category.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className={cn(container, sectionPad)}>
                <Reveal>
                  <h2
                    id={`solutions-${category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
                  >
                    {category}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-horizon-muted md:text-base">
                    {items.length} solution{items.length === 1 ? "" : "s"} in this category
                  </p>
                </Reveal>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((solution, i) => (
                    <li key={solution.slug}>
                      <Reveal delay={i * motionStagger} className="h-full">
                        <Link
                          href={solutionPath(solution.slug)}
                          className={cn(
                            cardSoft,
                            "group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-horizon-sky"
                          )}
                        >
                          <CardImage
                            {...solution.heroImage}
                            className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="flex flex-1 flex-col p-5 lg:p-6">
                            <div className="flex items-start justify-between gap-3">
                              <span className="flex size-10 items-center justify-center rounded-xl bg-horizon-sky/45 ring-1 ring-horizon-sky/50">
                                <solution.icon
                                  className={cn("size-5", iconMuted)}
                                  strokeWidth={1.5}
                                  aria-hidden
                                />
                              </span>
                              <ArrowUpRight
                                className="size-5 shrink-0 text-horizon-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-horizon-navy"
                                aria-hidden
                              />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-medium text-horizon-navy group-hover:underline">
                              {solution.label}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-horizon-muted">
                              {solution.tagline}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                              {solution.summary.map((item) => (
                                <li key={item}>
                                  <span className="inline-flex rounded-full bg-horizon-cream px-2.5 py-1 text-[11px] font-medium text-horizon-navy/80">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Don&apos;t see your <span className="italic">solution</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                We build custom platforms from scratch. Describe your product and we&apos;ll map a
                path from discovery to launch.
              </p>
              <Link
                href={contactPath}
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-horizon-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a conversation
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
