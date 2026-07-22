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
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "#" },
              { label: location.country },
            ]}
          />
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 lg:max-w-xl">
            <Reveal immediate delay={motionStagger}>
              <p className={cn(overline, "text-white/60")}>{location.eyebrow}</p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]">
                {location.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                {location.description}
              </p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 4}>
              <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link href={contactPath} className={btnPrimary}>
                  Get a Free Quote
                </Link>
                <Link href={projectPath} className={btnOutlineDark}>
                  See Our Work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal immediate delay={motionStagger * 2} direction="right" className="min-w-0">
            <div className={cn(cardDark, "overflow-hidden p-0")}>
              <CardImage
                {...location.heroImage}
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <RatingBadges variant="dark" className="mt-6" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
