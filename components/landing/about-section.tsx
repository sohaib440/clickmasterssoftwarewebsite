import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { btnOutline, card, cardSoft, container, sectionPad } from "@/lib/landing/constants";
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
};

export function AboutSection({ content }: AboutSectionProps = {}) {
  const data = content ?? {
    overlineText: "About us",
    title: "Who Is Next Software Development Company?",
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
              overlineText={data.overlineText ?? "About us"}
              title={data.title}
              className="mb-4 md:mb-5"
            />

            <div className="max-w-4xl space-y-5">
              {data.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * motionStagger}>
                  <p className="text-base leading-relaxed text-left text-horizon-navy md:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={motionStagger * 2}>
                <Link href={data.teamLink} className={btnOutline}>
                  {data.teamCta} →
                </Link>
              </Reveal>
            </div>
          </div>

          <Reveal delay={motionStagger} direction="right" className="w-full justify-self-end">
            <div className={cn(card, "mx-auto w-full max-w-xl overflow-hidden p-0 lg:mx-0 lg:max-w-none")}>
              <CardImage
                {...data.image}
                className="aspect-[5/4] w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 576px"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {data.values.map((value, i) => (
            <li key={value.title}>
              <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6 lg:p-7")}>
                <h3 className="font-heading text-xl font-medium text-horizon-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-left text-horizon-muted">
                  {value.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
