import { CardImage } from "@/components/landing/card-image";
import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { motionStagger } from "@/lib/landing/motion";
import { teamIntro, teamMembers } from "@/data/landingPage";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <section id="team" className="w-full bg-white text-horizon-navy">
      <LandingContainer>
        <SectionHeading
          overlineText="Our people"
          title={
            <>
              A small <span className="italic">team</span>.
            </>
          }
          description="Serious about software."
          className={sectionHeadingGap}
        />

        <Reveal delay={motionStagger}>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-left text-horizon-navy md:mb-10 md:text-lg">
            {teamIntro}
          </p>
        </Reveal>

        <ul
          className="grid grid-cols-2 gap-[5px] bg-horizon-border/40 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Team portraits"
        >
          {teamMembers.map((member, i) => (
            <li
              key={member.name}
              className="aspect-[3/4] overflow-hidden bg-white sm:aspect-square"
            >
              <Reveal delay={i * motionStagger} className="h-full w-full">
                <figure className="group relative h-full w-full overflow-hidden">
                  <CardImage
                    {...member.image}
                    className="h-full w-full object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-[1.03] sm:object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 z-10",
                      "bg-gradient-to-t from-black via-black/55 to-transparent",
                      "px-2.5 pb-2.5 pt-8 sm:px-3 sm:pb-3 sm:pt-10",
                      "opacity-100 transition-opacity duration-300",
                      "md:from-black/90 md:via-black/75 md:to-transparent",
                      "md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
                    )}
                    aria-hidden
                  >
                    <p className="font-heading text-sm font-medium leading-tight !text-white sm:text-base md:text-lg md:translate-y-2 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug !text-white/90 sm:text-xs md:text-sm md:translate-y-2 md:transition-transform md:duration-300 md:delay-75 md:group-hover:translate-y-0">
                      {member.role}
                    </p>
                  </div>
                  <figcaption className="sr-only">
                    {member.name}, {member.role}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </LandingContainer>
    </section>
  );
}
