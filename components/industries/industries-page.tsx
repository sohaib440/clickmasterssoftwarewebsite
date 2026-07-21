import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2 } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  btnPrimary,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { industries, industriesPageMeta } from "@/data/industriesPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function IndustryCard({ item, index }: { item: (typeof industries)[number]; index: number }) {
  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <article
        id={item.slug}
        className={cn(
          "group relative flex h-full min-h-[240px] flex-col border border-horizon-border bg-[#f5f6f8] p-7 transition-all duration-300",
          "hover:-translate-y-0.5 hover:border-horizon-sky hover:bg-white hover:shadow-[0_18px_48px_-28px_rgba(13,27,42,0.18)]",
          "sm:min-h-[260px] sm:p-8 lg:p-9",
        )}
      >
        <span
          className="absolute left-0 top-0 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
          aria-hidden
        />

        <div className="flex flex-1 flex-col">
          <h2 className="font-heading text-xl font-medium leading-snug text-horizon-navy sm:text-[1.35rem]">
            {item.industry}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-horizon-muted sm:text-[0.95rem]">
            {item.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-horizon-border bg-white px-2.5 py-0.5 text-[11px] font-medium text-horizon-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <Link
            href={contactPath}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-horizon-navy transition-colors group-hover:text-primary"
          >
            Learn about {item.industry}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function IndustriesPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/[0.04] blur-[110px]" />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className={cn(container, sectionPad, "relative pb-10 md:pb-12")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Industries</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
                <Building2 className="size-3.5 text-primary" aria-hidden />
                <span className={cn(overline, "text-white/90")}>
                  {industriesPageMeta.hero.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2}>
              <h1 className="mt-5 max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {industriesPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {industriesPageMeta.hero.description}
              </p>
            </Reveal>

            <Reveal immediate delay={motionStagger * 3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                  {industries.length}+ sectors
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                  USA · UK · UAE · Canada · Australia
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
                  Compliance-aware delivery
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              backgroundImage: `
                linear-gradient(118deg, transparent 42%, rgba(255, 255, 255, 0.85) 42%, rgba(255, 255, 255, 0.35) 58%, transparent 58%),
                linear-gradient(242deg, transparent 38%, rgba(228, 231, 236, 0.65) 38%, rgba(228, 231, 236, 0.25) 54%, transparent 54%)
              `,
            }}
          />

          <div className={cn(container, "relative py-8 md:py-10 lg:py-12")}>
            <Reveal>
              <h2 className="font-heading text-2xl font-normal text-horizon-navy md:text-3xl">
                Industries we <span className="italic">serve</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-horizon-muted md:text-base">
                Software tailored to the workflows, compliance needs, and growth goals of every
                sector we work with.
              </p>
            </Reveal>

            <div className="mt-8 overflow-hidden rounded-2xl border border-horizon-border bg-white/50 md:mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {industries.map((item, i) => (
                  <div
                    key={item.slug}
                    className={cn(
                      "border-horizon-border md:border-r md:border-b",
                      i % 3 === 2 && "lg:border-r-0",
                      i >= industries.length - (industries.length % 3 || 3) && "lg:border-b-0",
                    )}
                  >
                    <IndustryCard item={item} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="border-y border-horizon-border bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-normal text-horizon-navy md:text-3xl">
                {industriesPageMeta.cta.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-horizon-muted md:text-base">
                {industriesPageMeta.cta.description}
              </p>
              <Link href={industriesPageMeta.cta.href} className={cn(btnPrimary, "mt-6")}>
                {industriesPageMeta.cta.button} →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Ready to build for your <span className="italic">industry</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Share your sector, constraints, and goals we&apos;ll respond within one business
                day with a clear path forward.
              </p>
              <Link href={contactPath} className={cn("mt-8", btnOnDark)}>
                Get a free quote →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
