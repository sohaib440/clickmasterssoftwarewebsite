import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { pakistanCities, pakistanLocation } from "@/data/locations";
import { btnOutline, card, cardSoft, container, sectionPad, teamPath } from "@/lib/landing/constants";
import { aboutSection } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type AboutSectionContent = {
  overlineText?: string;
  title: string;
  paragraphs: string[];
  values: {
    title: string;
    description: string;
  }[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  teamLink: string;
  teamCta: string;
};

type AboutSectionProps = {
  content?: AboutSectionContent;
  /** When false, hides the values grid (use a dedicated Why Choose section instead). */
  showValues?: boolean;
};

/**
 * Resolve `[[anchor text]]` to a real internal URL.
 * Team → /team; city names → that city page; Pakistan / software-company anchors → Pakistan hub.
 */
export function resolveInternalWikiHref(label: string): string {
  const lower = label.toLowerCase().trim();

  if (
    lower === "team" ||
    lower === "our team" ||
    lower === "the team" ||
    lower === "dedicated team" ||
    lower === "experienced team" ||
    lower === "experienced & certified team"
  ) {
    return teamPath;
  }

  const cities = [...pakistanCities].sort((a, b) => b.city.length - a.city.length);

  for (const city of cities) {
    if (lower.includes(city.city.toLowerCase())) {
      return city.href;
    }
  }

  return pakistanLocation.href;
}

/** Renders `[[anchor text]]` as contextual internal links (city, Pakistan hub, or team). */
export function renderParagraphWithCountryLinks(paragraph: string): ReactNode {
  const parts = paragraph.split(/(\[\[[^\]]+\]\])/g);
  if (parts.length === 1) return paragraph;

  return parts.map((part, i) => {
    const match = /^\[\[([^\]]+)\]\]$/.exec(part);
    if (!match) return part;
    const label = match[1];
    return (
      <Link
        key={`${label}-${i}`}
        href={resolveInternalWikiHref(label)}
        className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-[#b8941f]"
      >
        {label}
      </Link>
    );
  });
}

export function AboutSection({ content, showValues = true }: AboutSectionProps = {}) {
  const data = content ?? {
    overlineText: "About us",
    title: "Who we are?",
    paragraphs: aboutSection.paragraphs,
    values: aboutSection.values,
    image: aboutSection.image,
    teamLink: aboutSection.teamLink,
    teamCta: aboutSection.teamCta,
  };

  return (
    <section id="about" className="w-full bg-white text-horizon-navy">
      <div className={cn(container, sectionPad)}>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,30rem)] lg:gap-10 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,36rem)] xl:gap-12">
          <div className="min-w-0">
            <SectionHeading
              as="h2"
              overlineText={data.overlineText ?? "About us"}
              title={data.title}
              className="mb-4 md:mb-5"
            />

            <div className="max-w-4xl space-y-5">
              {data.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * motionStagger}>
                  <p className="text-base leading-relaxed text-justify text-horizon-navy md:text-lg">
                    {renderParagraphWithCountryLinks(paragraph)}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={motionStagger * 2}>
                <Link href={data.teamLink} className={btnOutline}>
                  <span>{data.teamCta}</span>
                  <ArrowRight className="ml-2 size-4" aria-hidden />
                </Link>
              </Reveal>
            </div>
          </div>

          <Reveal
            delay={motionStagger}
            direction="right"
            className="w-full max-w-xl justify-self-center"
          >
            <div className={cn(card, "mx-auto w-full max-w-xl overflow-hidden p-0")}>
              <CardImage
                {...data.image}
                className="aspect-[5/4] w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 576px"
              />
            </div>
          </Reveal>
        </div>

        {showValues && data.values.length > 0 ? (
          <ul className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
            {data.values.map((value, i) => (
              <li key={value.title}>
                <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6 lg:p-7")}>
                  <h3 className="font-heading text-xl font-medium text-horizon-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-justify text-horizon-muted">
                    {value.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
