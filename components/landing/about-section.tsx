import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { btnOutline, card, cardSoft, container, sectionPad } from "@/lib/landing/constants";
import { aboutSection } from "@/lib/landing/data";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="About us"
          title="Who Is Software Development Company?"
          className="mb-10 md:mb-12"
        />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 space-y-5">
            {aboutSection.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * motionStagger}>
                <p className="text-base leading-relaxed text-left text-horizon-muted md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={motionStagger * 2}>
              <Link href={aboutSection.teamLink} className={btnOutline}>
                {aboutSection.teamCta} →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={motionStagger} direction="right">
            <div className={cn(card, "overflow-hidden p-0")}>
              <CardImage
                {...aboutSection.image}
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {aboutSection.values.map((value, i) => (
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
