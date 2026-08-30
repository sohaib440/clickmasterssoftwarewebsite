import { ArrowRight, Briefcase, Calendar, Code2, Globe, Users } from "lucide-react";
import Link from "next/link";

import { renderParagraphWithCountryLinks } from "@/components/landing/about-section";
import { CardImage } from "@/components/landing/card-image";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import {
  btnOutlineDark,
  btnPrimary,
  contactPath,
  container,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import type { LocationPageContent } from "@/data/locations";
import { companyStats } from "@/data/landing/trust";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const statIcons = {
  users: Users,
  briefcase: Briefcase,
  code: Code2,
  globe: Globe,
} as const;

type LocationHeroProps = {
  location: LocationPageContent;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getHeroPlace(location: LocationPageContent): string {
  const inMatch = location.title.match(/\bin\s+(.+)$/i);
  if (inMatch?.[1]) return inMatch[1].trim();

  const lastCrumb = location.breadcrumbs?.at(-1)?.label;
  if (lastCrumb && lastCrumb !== "Home" && lastCrumb !== "Locations") {
    return lastCrumb;
  }

  const countryShort: Record<string, string> = {
    "United States": "USA",
    "United Kingdom": "UK",
    "United Arab Emirates": "UAE",
  };

  return countryShort[location.country] ?? location.country;
}

function renderHighlightedTitle(title: string, place: string) {
  const escaped = escapeRegExp(place);
  const inPlace = new RegExp(`(\\bin\\s+${escaped})$`, "i");
  const inPlaceMatch = title.match(inPlace);

  if (inPlaceMatch && inPlaceMatch.index != null) {
    return (
      <>
        {title.slice(0, inPlaceMatch.index)}
        <span className="!text-primary">{inPlaceMatch[1]}</span>
      </>
    );
  }

  const placeRe = new RegExp(`(${escaped})`, "i");
  const parts = title.split(placeRe);
  if (parts.length === 1) return title;

  return parts.map((part, index) =>
    part.toLowerCase() === place.toLowerCase() ? (
      <span key={index} className="!text-primary">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

function statBlurb(label: string, place: string) {
  switch (label) {
    case "Happy Clients":
      return `Businesses across ${place} trust our solutions.`;
    case "Years of Experience":
      return `Hands-on product delivery for teams in ${place} since 2019.`;
    case "Software Engineers":
      return `Senior engineers building software for businesses in ${place}.`;
    case "Countries Served":
      return `Global delivery that includes ${place} and five other markets.`;
    default:
      return `Proven results for teams in ${place}.`;
  }
}

function iconForLabel(label: string) {
  const match = companyStats.find((stat) => stat.label === label);
  return match ? statIcons[match.icon] : Globe;
}

export function LocationHero({ location }: LocationHeroProps) {
  const place = getHeroPlace(location);
  const eyebrow = location.eyebrow ?? `Software development company in ${place} —`;

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        {/*
          Text + CTAs left, image right. Trust cards sit under the left content
          and intentionally extend over the image (4th card overlaps), matching
          the location-hero design mock.
        */}
        <div className="relative grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <div className="relative z-20 flex min-w-0 flex-col gap-5 lg:pt-1">
            <Reveal immediate>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] !text-primary">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal immediate delay={motionStagger}>
              <h1 className="font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]">
                {renderHighlightedTitle(location.title, place)}
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <p className="text-justify text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                  {renderParagraphWithCountryLinks(location.description, {
                    currentPath: location.href,
                  })}
                </p>
                {location.descriptionSecondary ? (
                  <p className="text-justify text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                    {renderParagraphWithCountryLinks(location.descriptionSecondary, {
                      currentPath: location.href,
                    })}
                  </p>
                ) : null}
                {location.descriptionTertiary ? (
                  <p className="text-justify text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                    {renderParagraphWithCountryLinks(location.descriptionTertiary, {
                      currentPath: location.href,
                    })}
                  </p>
                ) : null}
              </div>
            </Reveal>
            <Reveal immediate delay={motionStagger * 3}>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link
                  href={contactPath}
                  className={cn(btnPrimary, "!text-black hover:!text-white")}
                >
                  <Calendar className="size-4" aria-hidden />
                  Get a Free Quote
                </Link>
                <Link href={projectPath} className={btnOutlineDark}>
                  See Our Work
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            {/* Spacer on desktop so absolute cards don't cover CTAs */}
            <div className="hidden h-[7.5rem] lg:block" aria-hidden />
          </div>

          <Reveal
            immediate
            delay={motionStagger * 2}
            direction="right"
            className="relative z-0 min-h-[16rem] w-full min-w-0 sm:min-h-[20rem] lg:min-h-0"
          >
            <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[1.5rem] border border-white/15 lg:absolute lg:inset-0 lg:min-h-0">
              <CardImage
                {...location.heroImage}
                className="h-full min-h-[16rem] w-full object-cover sm:min-h-[20rem] lg:min-h-full"
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Blackish fade under the overlapping 4th trust card */}
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

        <Reveal immediate delay={motionStagger * 5}>
          <div
            className="mt-8 rounded-[1.5rem] border border-white/10 bg-zinc-950 px-4 py-5 sm:mt-10 sm:rounded-[2rem] sm:px-6 sm:py-6 lg:mt-12"
            aria-label={`${place} delivery stats`}
          >
            <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-0">
              {location.facts.items.map((stat, index) => {
                const Icon = iconForLabel(stat.label);
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "relative flex flex-col items-center px-2 text-center sm:px-4",
                      index < location.facts.items.length - 1 &&
                        "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-primary/70 lg:after:to-transparent"
                    )}
                  >
                    <span
                      className="mb-2 inline-flex size-8 items-center justify-center rounded-full border border-primary/45 !text-primary sm:size-9"
                      aria-hidden
                    >
                      <Icon className="size-4 !text-primary sm:size-[1.15rem]" strokeWidth={1.6} />
                    </span>
                    <dt className="font-heading text-2xl font-normal tracking-tight text-white sm:text-3xl md:text-[2.15rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white">
                      {stat.label}
                    </dd>
                    <p className="mt-1 max-w-[15rem] text-[11px] leading-snug text-white/55 sm:text-xs">
                      {statBlurb(stat.label, place)}
                    </p>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
