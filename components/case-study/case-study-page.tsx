import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  btnPrimary,
  cardSoft,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { caseStudies, caseStudyPageMeta } from "@/data/caseStudyPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function CaseStudyPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-white text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative pb-10 md:pb-12")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Case Studies</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
                <FileText className="size-3.5 text-primary" aria-hidden />
                <span className={cn(overline, "text-white/90")}>
                  {caseStudyPageMeta.hero.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2}>
              <h1 className="mt-5 max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {caseStudyPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {caseStudyPageMeta.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-horizon-peach/30">
          <div className={cn(container, sectionPad)}>
            <ul className="grid gap-8 lg:grid-cols-2">
              {caseStudies.map((item, i) => (
                <li key={item.slug}>
                  <CaseStudyCard item={item} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-horizon-border bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal className={cn(cardSoft, "mx-auto max-w-3xl p-6 text-center md:p-10")}>
              <h2 className="font-heading text-2xl font-medium text-horizon-navy md:text-3xl">
                {caseStudyPageMeta.bookCall.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-horizon-muted md:text-base">
                {caseStudyPageMeta.bookCall.description}
              </p>
              <Link href={caseStudyPageMeta.bookCall.href} className={cn(btnPrimary, "mt-6")}>
                {caseStudyPageMeta.bookCall.cta} →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {caseStudyPageMeta.closing.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {caseStudyPageMeta.closing.description}
              </p>
              <Link href={caseStudyPageMeta.closing.href} className={cn("mt-8", btnOnDark)}>
                {caseStudyPageMeta.closing.cta} →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
