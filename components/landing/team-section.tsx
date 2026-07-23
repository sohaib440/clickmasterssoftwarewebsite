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
              A small <span className="italic">crew</span>.
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
            <li key={member.name} className="aspect-square overflow-hidden bg-white">
              <Reveal delay={i * motionStagger} className="h-full w-full">
                <figure className="group relative h-full w-full overflow-hidden">
                  <CardImage
                    {...member.image}
                    className="aspect-square h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-black/85 p-3 pt-12 sm:p-4",
                      "opacity-100 transition-opacity duration-300",
                      "md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
                    )}
                    aria-hidden
                  >
                    <p className="font-heading text-base font-medium !text-white sm:text-lg md:translate-y-2 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-xs !text-white sm:text-sm md:translate-y-2 md:transition-transform md:duration-300 md:delay-75 md:group-hover:translate-y-0">
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
