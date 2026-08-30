import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { ServiceBreadcrumbs } from "@/components/services/shared/service-breadcrumbs";
import {
  btnOutlineDark,
  btnPrimary,
  contactPath,
  container,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import type {
  ServiceBreadcrumb,
  ServiceHeroContent,
} from "@/lib/content/service-page-types";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type ServiceHeroProps = {
  breadcrumbs: ServiceBreadcrumb[];
  hero: ServiceHeroContent;
};

/**
 * Service-page hero matched to the location-page layout:
 * text + CTAs left, full image right, rating cards overlapping the seam.
 */
export function ServiceHero({ breadcrumbs, hero }: ServiceHeroProps) {
  const primaryCta = hero.primaryCta ?? {
    label: "Get a Free Quote",
    href: contactPath,
  };
  const secondaryCta = hero.secondaryCta ?? {
    label: "See Our Work",
    href: projectPath,
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className={cn(container, sectionPad, "relative")}>
        <Reveal immediate>
          <ServiceBreadcrumbs items={breadcrumbs} />
        </Reveal>

        <div className="relative mt-6 grid items-stretch gap-8 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <div className="relative z-20 flex min-w-0 flex-col gap-5 lg:pt-1">
            <Reveal immediate delay={motionStagger}>
              <h1 className="font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]">
                {hero.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <p className="text-justify text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                {hero.description}
              </p>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link
                  href={primaryCta.href}
                  className={cn(btnPrimary, "!text-black hover:!text-white")}
                >
                  <Calendar className="size-4" aria-hidden />
                  {primaryCta.label}
                </Link>
                <Link href={secondaryCta.href} className={btnOutlineDark}>
                  {secondaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            {/* Spacer on desktop so absolute cards don't cover CTAs */}
            <div className="hidden h-[7.5rem] lg:block" aria-hidden />
          </div>

          <Reveal
            immediate
            delay={motionStagger}
            direction="right"
            className="relative z-0 min-h-[16rem] w-full min-w-0 sm:min-h-[20rem] lg:min-h-0"
          >
            <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[1.5rem] border border-white/15 lg:absolute lg:inset-0 lg:min-h-0">
              {hero.image ? (
                <CardImage
                  {...hero.image}
                  className="h-full min-h-[16rem] w-full object-cover sm:min-h-[20rem] lg:min-h-full"
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="h-full min-h-[16rem] w-full bg-zinc-900 sm:min-h-[20rem] lg:min-h-full" />
              )}
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 40%, transparent 72%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
                }}
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal
            immediate
            delay={motionStagger * 4}
            className="relative z-30 w-full min-w-0 lg:absolute lg:bottom-0 lg:left-0 lg:w-[calc(50%+6.5rem)] xl:w-[calc(50%+7.5rem)]"
          >
            <RatingBadges variant="dark" appearance="cards" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
