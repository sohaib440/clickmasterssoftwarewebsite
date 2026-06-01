import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { btnOutline, btnPrimary, card, contactPath, container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { heroImages, stats } from "@/lib/landing/data";
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
              <h1 className="max-w-3xl font-heading text-4xl font-normal leading-[1.12] tracking-tight text-horizon-navy sm:text-5xl lg:text-6xl">
                We build software at the{" "}
                <span className="italic">edge of light</span>
              </h1>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                A boutique studio pairing thoughtful design with rigorous engineering—for products
                that feel as clear as the horizon.
              </p>
            </Reveal>

            <Reveal immediate delay={motionStagger * 2}>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link href={contactPath} className={btnPrimary}>
                  Start a project
                </Link>
                <Link href={contactPath} className={btnOutline}>
                  Contact us
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal immediate delay={motionStagger * 2} direction="right" className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
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
          </Reveal>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-horizon-navy/10 pt-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              immediate
              delay={motionStagger * 3 + i * motionStagger}
              direction="up"
            >
              <div
                className={cn(
                  "text-left",
                  i > 0 && "sm:border-l sm:border-horizon-navy/10 sm:pl-4"
                )}
              >
                <dt className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-horizon-muted">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
