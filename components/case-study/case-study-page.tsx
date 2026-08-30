import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  container,
  sectionPad,
} from "@/lib/landing/constants";
import { caseStudies, caseStudyPageMeta } from "@/data/caseStudy";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function CaseStudyPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className={cn(container, sectionPad, "relative pb-10 md:pb-12")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-white/80"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden className="text-white">
                  /
                </span>
                <span className="text-white">Case Studies</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {caseStudyPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
                {caseStudyPageMeta.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <ul className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {caseStudies.map((item, i) => (
                <li key={item.slug} className="h-full">
                  <CaseStudyCard item={item} index={i} />
                </li>
              ))}
            </ul>
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
    </div>
  );
}
