import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import {
  btnOutlineDark,
  btnPrimary,
  btnOnDark,
  cardDark,
  cardSoft,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { SubCategoryPageData } from "@/lib/content/types";
import { mainCategoryPath, subCategoryPath } from "@/lib/content";
import { defaultSubCategorySections } from "@/data/subServices";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type Props = {
  data: SubCategoryPageData;
};

/**
 * Reusable sub-category page renders any /{mainSlug}/{subSlug} from data/subServices.tsx
 */
export function SubCategoryPage({ data }: Props) {
  const { main, sub } = data;
  const heroImage = sub.image ?? main.heroImage;
  const tagline = sub.tagline ?? sub.description;
  const highlights = sub.highlights ?? main.highlights;
  const siblings = main.subCategories.filter((s) => s.slug !== sub.slug);

  return (
    <div className="flex min-h-full w-full flex-col bg-black text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={mainCategoryPath(main.slug)} className="hover:text-white">
                  {main.label}
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{sub.label}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <p className={cn(overline, "text-white/60")}>{main.label}</p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                    {sub.label}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    {tagline}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Start a project
                    </Link>
                    <Link href={contactPath} className={btnOutlineDark}>
                      Contact us
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className={cn(cardDark, "overflow-hidden p-0")}>
                  <CardImage
                    {...heroImage}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <RatingBadges className="mt-6" />
              </Reveal>
            </div>
          </div>
        </section>

        {(sub.content?.length ?? 0) > 0 ? (
          <section className="w-full bg-white">
            <div className={cn(container, sectionPad)}>
              <div className="mx-auto max-w-3xl space-y-5">
                {sub.content!.map((paragraph, i) => (
                  <Reveal key={i} delay={i * motionStagger}>
                    <p className="text-base leading-relaxed text-horizon-muted md:text-lg">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="w-full bg-white">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-horizon-muted md:text-lg">
                  {sub.description}
                </p>
              </Reveal>
            </div>
          </section>
        )}

        <section className="w-full bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal text-white md:text-4xl">
                Why <span className="italic">{sub.label}</span> with Software Development Company
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardDark, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-white">
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

        {siblings.length > 0 ? (
          <section className="w-full bg-horizon-cream">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  More in <span className="italic">{main.label}</span>
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {siblings.map((sibling, i) => (
                  <li key={sibling.slug}>
                    <Reveal delay={i * motionStagger}>
                      <Link
                        href={subCategoryPath(main.slug, sibling.slug)}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-horizon-sky"
                        )}
                      >
                        <span className="font-medium text-horizon-navy">{sibling.label}</span>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-horizon-muted group-hover:text-horizon-navy"
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
                Let&apos;s talk about <span className="italic">{sub.label}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {defaultSubCategorySections.cta.description(sub.label)}
              </p>
              <Link href={defaultSubCategorySections.cta.buttonHref} className={cn("mt-8", btnOnDark)}>
                {defaultSubCategorySections.cta.buttonLabel}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
