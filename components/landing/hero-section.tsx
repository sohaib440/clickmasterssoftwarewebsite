import Image from "next/image";
import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { btnOutline, btnPrimary, card, contactPath, container, overline, sectionPad } from "@/lib/landing/constants";
import { heroImages, homeHero, ratingBadges, stats } from "@/lib/landing/data";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [main, topRight, bottomRight] = heroImages;

  return (
    <section
      className="relative w-full bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky"
      aria-label="Introduction"
    >
      <div className={cn(container, sectionPad)}>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="min-w-0">
            <Reveal immediate delay={0}>
              <p className={overline}>{homeHero.eyebrow}</p>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="mt-3 max-w-3xl font-heading text-4xl font-normal leading-[1.12] tracking-tight text-horizon-navy sm:text-5xl lg:text-6xl">
                {homeHero.headlineBefore}{" "}
                <span className="italic">{homeHero.headlineEmphasis}</span>
              </h1>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-left text-horizon-muted md:text-lg">
                {homeHero.subtext}
              </p>
            </Reveal>

            <Reveal immediate delay={motionStagger * 3}>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Link href={contactPath} className={btnPrimary}>
                    {homeHero.primaryCta}
                  </Link>
                  <Link href={homeHero.secondaryHref} className={btnOutline}>
                    {homeHero.secondaryCta} →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={motionStagger * 2}
            direction="right"
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <div className="grid grid-cols-12 gap-1.5">
              <div className={cn(card, "col-span-12 p-0 sm:col-span-7 sm:row-span-2")}>
                <CardImage
                  {...main}
                  className="aspect-[4/3] h-full sm:aspect-auto sm:min-h-[280px]"
                  priority
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              <div className={cn(card, "col-span-12 p-0 sm:col-span-5")}>
                <CardImage
                  {...topRight}
                  className="aspect-[4/5]"
                  sizes="(max-width: 1024px) 40vw, 280px"
                  quality={70}
                />
              </div>

              <div className={cn(card, "col-span-12 p-0 sm:col-span-5")}>
                <CardImage
                  {...bottomRight}
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 40vw, 280px"
                  quality={70}
                />
              </div>
            </div>

            {/* Rating badges: show after the images so they sit at the bottom of the images column */}
            <div className="mt-6 items-end">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {ratingBadges.map((badge, index) => (
                  <div
                    key={badge.slug}
                    className={
                      "flex items-center justify-center rounded-3xl border p-3 shadow-sm " +
                      (index < 3
                        ? "border-transparent bg-horizon-navy text-white"
                        : "border-horizon-border/20 bg-white/90")
                    }
                  >
                    <Image
                      src={badge.logo}
                      alt={badge.name}
                      width={160}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </Reveal>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              immediate
              delay={i * motionStagger}
              direction="up"
              className={cn(i > 0 && "sm:border-l sm:border-horizon-navy/10 sm:pl-4")}
            >
              <dt className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-horizon-muted">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
