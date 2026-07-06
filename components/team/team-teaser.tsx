import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { btnOutline, teamPath } from "@/lib/landing/constants";
import { teamIntro, teamMembers } from "@/data/landing/team";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

/** Compact team preview for the About page links to the full /team page */
export function TeamTeaser() {
  const preview = teamMembers.slice(0, 6);

  return (
    <section className="w-full bg-white text-horizon-navy">
      <LandingContainer>
        <SectionHeading
          overlineText="Our people"
          title={
            <>
              A small <span className="italic">crew</span>.
            </>
          }
          description="Serious about software."
          className={sectionHeadingGap}
        />

        <Reveal delay={motionStagger}>
          <p className="max-w-3xl text-base leading-relaxed text-horizon-navy md:text-lg">
            {teamIntro}
          </p>
        </Reveal>

        <ul
          className="mt-8 grid grid-cols-3 gap-[5px] bg-horizon-border/40 sm:grid-cols-6"
          aria-label="Team preview"
        >
          {preview.map((member, i) => (
            <li key={member.name} className="aspect-square overflow-hidden bg-white">
              <Reveal delay={i * motionStagger} className="h-full w-full">
                <figure className="group relative h-full w-full overflow-hidden">
                  <CardImage
                    {...member.image}
                    className="aspect-square h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 33vw, 16vw"
                  />
                  <figcaption className="sr-only">
                    {member.name}, {member.role}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href={teamPath} className={cn(btnOutline)}>
            Meet the full team →
          </Link>
        </div>
      </LandingContainer>
    </section>
  );
}
