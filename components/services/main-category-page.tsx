import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import {
  btnOutline,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { CleanCategoryUrl } from "@/components/services/clean-category-url";
import type { MainCategoryContent } from "@/lib/content/types";
import { getAllMainCategories, mainCategoryPath, subCategoryPath } from "@/lib/content";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const defaultSections = {
  offerings: {
    title: "What we deliver", // use plain text; add italic in sections.offerings.title override if needed
    subtitle: (label: string) =>
      `Focused capabilities within ${label.toLowerCase()}—each scoped to your timeline and team.`,
  },
  highlights: { title: "Why teams choose us" },
  approach: { title: "Our approach" },
  related: { title: "Explore more capabilities" },
  cta: {
    title: "Ready to build with Software Development Company?",
    description: (label: string) =>
      `Tell us about your ${label.toLowerCase()} needs—we'll respond within one business day.`,
    buttonLabel: "Get in touch",
    buttonHref: contactPath,
  },
};

type Props = {
  category: MainCategoryContent;
};

/**
 * Reusable main category page renders any entry from lib/content/categories.data.ts
 */
export function MainCategoryPage({ category }: Props) {
  const siblings = getAllMainCategories().filter((c) => c.slug !== category.slug);
  const sections = {
    offerings: {
      title: category.sections?.offerings?.title ?? defaultSections.offerings.title,
      subtitle:
        category.sections?.offerings?.subtitle ??
        defaultSections.offerings.subtitle(category.label),
    },
    highlights: {
      title: category.sections?.highlights?.title ?? defaultSections.highlights.title,
    },
    approach: {
      title: category.sections?.approach?.title ?? defaultSections.approach.title,
    },
    related: {
      title: category.sections?.related?.title ?? defaultSections.related.title,
    },
    cta: {
      title: category.sections?.cta?.title ?? defaultSections.cta.title,
      description: category.sections?.cta?.description ?? defaultSections.cta.description(category.label),
      buttonLabel: category.sections?.cta?.buttonLabel ?? defaultSections.cta.buttonLabel,
      buttonHref: category.sections?.cta?.buttonHref ?? defaultSections.cta.buttonHref,
    },
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <CleanCategoryUrl mainSlug={category.slug} />
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
                <span className="text-horizon-navy">{category.label}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <p className={overline}>{category.label}</p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-horizon-navy sm:text-5xl lg:text-[3.25rem]">
                    {category.tagline}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                    {category.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Start a project
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
                    {...category.heroImage}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-white" aria-labelledby="offerings-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2
                id="offerings-heading"
                className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
              >
                {sections.offerings.title}
              </h2>
              <p className="mt-3 max-w-2xl text-horizon-muted">{sections.offerings.subtitle}</p>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {category.subCategories.map((sub, i) => (
                <li key={sub.slug}>
                  <Reveal delay={i * motionStagger} className="h-full">
                    <Link
                      href={subCategoryPath(category.slug, sub.slug)}
                      className={cn(
                        cardSoft,
                        "group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-horizon-sky"
                      )}
                    >
                      {sub.image ? (
                        <CardImage
                          {...sub.image}
                          className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                      <div className="flex flex-1 flex-col p-6 lg:p-7">
                        <h3 className="font-heading text-xl font-medium text-horizon-navy group-hover:underline">
                          {sub.label}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-horizon-muted">
                          {sub.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy">
                          Learn more
                          <ArrowUpRight className="size-4" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="w-full bg-horizon-peach/50">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {category.highlights.map((item, i) => (
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

        <section className="w-full bg-horizon-sky/40">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                {sections.approach.title}
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.approach.map((step, i) => (
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

        {siblings.length > 0 ? (
          <section className="w-full bg-horizon-cream">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  Explore more <span className="italic">capabilities</span>
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {siblings.map((sibling, i) => (
                  <li key={sibling.slug}>
                    <Reveal delay={i * motionStagger}>
                      <Link
                        href={mainCategoryPath(sibling.slug)}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-horizon-sky"
                        )}
                      >
                        <div>
                          <p className="font-heading text-lg font-medium text-horizon-navy">
                            {sibling.label}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-horizon-muted">
                            {sibling.tagline}
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
                {sections.cta.title.includes("Software Development Company") ? (
                  <>
                    Ready to build with <span className="italic">Software Development Company</span>?
                  </>
                ) : (
                  sections.cta.title
                )}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {sections.cta.description}
              </p>
              <Link
                href={sections.cta.buttonHref}
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-horizon-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {sections.cta.buttonLabel}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
