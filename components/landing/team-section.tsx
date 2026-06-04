import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { card, container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { teamIntro, teamMembers } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <section id="team" className="w-full bg-horizon-peach">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="Our people"
          title={
            <>
              A small <span className="italic">crew</span>.
            </>
          }
          description="Serious about software."
          className="mb-4 md:mb-6"
        />

        <Reveal delay={motionStagger}>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-left text-horizon-muted md:mb-10 md:text-lg">
            {teamIntro}
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {teamMembers.map((member, i) => (
            <li key={member.name}>
              <Reveal delay={i * motionStagger} className={cn(card, "p-0")}>
                <div className="aspect-square w-full overflow-hidden">
                  <CardImage
                    {...member.image}
                    className="aspect-square transition-transform duration-500 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="border-t border-horizon-border bg-white p-3 text-left md:p-4">
                  <h3 className="font-heading text-lg font-medium text-horizon-navy">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-horizon-muted">{member.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-left text-horizon-muted md:text-sm">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
