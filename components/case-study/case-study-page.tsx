import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  btnPrimary,
  cardSoft,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { caseStudies, caseStudyPageMeta } from "@/data/caseStudyPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function CaseStudyCard({ item, index }: { item: (typeof caseStudies)[number]; index: number }) {
  return (
    <Reveal delay={index * motionStagger}>
      <article
        id={item.slug}
        className={cn(
          "group overflow-hidden rounded-2xl border border-horizon-border bg-white",
          "transition-[border-color,box-shadow,transform] duration-300",
          "hover:-translate-y-1 hover:border-horizon-sky hover:shadow-[0_22px_56px_-28px_rgba(13,27,42,0.16)]",
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            {item.category}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <h2 className="font-heading text-2xl font-medium text-horizon-navy">{item.title}</h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The problem
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-horizon-muted">{item.problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The solution
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-horizon-muted">{item.solution}</p>
            </div>
          </div>

          {item.outcomes.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-full border border-horizon-border bg-horizon-cream px-3 py-1 text-xs font-medium text-horizon-navy"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          ) : null}

          <Link
            href={contactPath}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-horizon-navy transition-colors group-hover:text-primary"
          >
            Discuss a similar build
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

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
