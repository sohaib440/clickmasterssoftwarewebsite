import { Briefcase, Globe, Layers, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

import { HeroCtaForm } from "@/components/landing/hero-cta-form";
import { LandingContainer } from "@/components/landing/landing-container";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import {
  btnOutlineDark,
  btnPrimary,
  contactPath,
} from "@/lib/landing/constants";
import { heroBackgroundVideo, heroFeatures, homeHero, stats } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const statIcons = {
  users: Users,
  briefcase: Briefcase,
  layers: Layers,
  "shield-check": ShieldCheck,
} as const;

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-black text-white"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-bg-video h-full w-full object-cover opacity-35"
          src={heroBackgroundVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      <div
        className="pointer-events-none absolute -right-24 top-16 z-[1] h-72 w-72 rounded-full border border-primary/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-32 z-[1] h-48 w-48 rounded-full border border-primary/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-8 top-8 z-[1] h-24 w-24 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-48 left-6 z-[1] h-16 w-16 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
        aria-hidden
      />

      <LandingContainer className="relative z-10">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <Reveal immediate delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-1.5">
                <Globe className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-[11px]">
                  {homeHero.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="mt-5 max-w-2xl font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {homeHero.headlineBefore}{" "}
                <span className="text-primary">{homeHero.headlineEmphasis}</span>{" "}
                {homeHero.headlineAfter}
              </h1>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                {homeHero.subtextBefore}
                <span className="font-medium text-primary">{homeHero.subtextHighlight}</span>
                {homeHero.subtextAfter}
              </p>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2.5}>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate delay={motionStagger * 3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={contactPath} className={btnPrimary}>
                  {homeHero.primaryCta} →
                </Link>
                <Link href={homeHero.secondaryHref} className={btnOutlineDark}>
                  {homeHero.secondaryCta} →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={motionStagger * 2}
            direction="right"
            className="relative mx-auto w-full min-w-0 max-w-[400px] shrink-0 lg:mx-0 lg:w-[400px]"
          >
            <HeroCtaForm />
          </Reveal>
        </div>

        <Reveal immediate delay={motionStagger * 3.5}>
          <RatingBadges variant="dark" className="mt-10" />
        </Reveal>

        <Reveal immediate delay={motionStagger * 4}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-6 sm:px-8">
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
              {stats.map((stat, i) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex flex-col items-center text-center sm:px-4",
                      i > 0 && "sm:border-l sm:border-white/10"
                    )}
                  >
                    <Icon className="mb-2 h-5 w-5 text-primary" aria-hidden />
                    <dt className="font-heading text-2xl font-normal text-white md:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </LandingContainer>
    </section>
  );
}
