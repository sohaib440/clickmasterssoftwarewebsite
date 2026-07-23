import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { ServiceBreadcrumbs } from "@/components/services/shared/service-breadcrumbs";
import {
  btnOutlineDark,
  btnPrimary,
  cardDark,
  contactPath,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import type { LocationPageContent } from "@/data/locations";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type LocationHeroProps = {
  location: LocationPageContent;
};

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <Reveal immediate>
          <ServiceBreadcrumbs
            className="mb-6"
            items={
              location.breadcrumbs ?? [
                { label: "Home", href: "/" },
                { label: "Locations", href: "/location" },
                { label: location.country },
              ]
            }
          />
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex min-w-0 flex-col gap-5 lg:max-w-2xl lg:pt-1 xl:max-w-3xl">
            <Reveal immediate delay={motionStagger}>
              <p className={cn(overline, "text-white/60")}>{location.eyebrow}</p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <h1 className="font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]">
                {location.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <div className="flex flex-col gap-4">
                <p className="text-justify text-base leading-relaxed text-white/70 md:text-lg">
                  {location.description}
                </p>
                {location.descriptionSecondary ? (
                  <p className="text-justify text-base leading-relaxed text-white/70 md:text-lg">
                    {location.descriptionSecondary}
                  </p>
                ) : null}
              </div>
            </Reveal>
            <Reveal immediate delay={motionStagger * 4}>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link href={contactPath} className={btnPrimary}>
                  Get a Free Quote
                </Link>
                <Link href={projectPath} className={btnOutlineDark}>
                  See Our Work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={motionStagger * 2}
            direction="right"
            className="mx-auto w-full min-w-0 max-w-[380px] sm:max-w-[420px] lg:mx-0 lg:justify-self-end"
          >
            <div className="flex flex-col gap-4">
              <div className={cn(cardDark, "overflow-hidden p-0")}>
                <CardImage
                  {...location.heroImage}
                  className="aspect-[5/4] w-full"
                  priority
                  sizes="(max-width: 1024px) 420px, 380px"
                />
              </div>
              <RatingBadges variant="dark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
