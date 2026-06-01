import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { TechBadge } from "@/components/landing/tech-badge";
import { card, container, iconMuted, sectionPad } from "@/lib/landing/constants";
import { allTechnologies, techStackCategories } from "@/lib/landing/data";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const categoryAccent = {
  sky: {
    card: "border-l-horizon-sky",
    icon: "bg-horizon-sky/50 text-horizon-navy ring-horizon-sky/40",
  },
  peach: {
    card: "border-l-horizon-peach",
    icon: "bg-horizon-peach/80 text-horizon-navy ring-horizon-peach",
  },
  navy: {
    card: "border-l-horizon-navy",
    icon: "bg-horizon-navy text-white ring-horizon-navy/30",
  },
  cream: {
    card: "border-l-horizon-border",
    icon: "bg-horizon-cream text-horizon-navy ring-horizon-border",
  },
} as const;

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative w-full overflow-hidden bg-gradient-to-b from-horizon-sky/30 via-white to-white"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-horizon-peach/30 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-horizon-sky/40 blur-3xl" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <SectionHeading
          overlineText="Tools & stack"
          title={
            <>
              Built with a <span className="italic">modern</span> toolkit
            </>
          }
          description="Proven technologies across the full stack—chosen for longevity, not trends."
          className="mb-8 md:mb-10"
        />

        <Reveal className={cn(card, "mb-8 border-horizon-border/80 bg-white/90 p-5 backdrop-blur-sm md:mb-10 md:p-6")}>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-horizon-muted">
            Stack at a glance
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <li key={`${tech.category}-${tech.name}`}>
                <TechBadge tech={tech} size="sm" />
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {techStackCategories.map((category, i) => {
            const accent = categoryAccent[category.accent];

            return (
              <li key={category.title}>
                <Reveal
                  delay={i * motionStagger}
                  className={cn(
                    card,
                    "h-full border-l-4 bg-white/95 p-6 lg:p-7",
                    accent.card
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-xl ring-1",
                        accent.icon
                      )}
                    >
                      <category.icon
                        className={cn(
                          "size-5",
                          category.accent === "navy" ? "text-white" : iconMuted
                        )}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-xl font-medium text-horizon-navy">
                        {category.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-horizon-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul
                    className="mt-5 grid gap-2 sm:grid-cols-2"
                    aria-label={`${category.title} technologies`}
                  >
                    {category.technologies.map((tech) => (
                      <li key={tech.name}>
                        <TechBadge tech={tech} className="w-full justify-start" />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
