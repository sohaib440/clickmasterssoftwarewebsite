import { Reveal } from "@/components/landing/reveal";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import type { ApproachStep } from "@/lib/content/types";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type ServiceApproachSectionProps = {
  title: string;
  steps: ApproachStep[];
  subtitle?: string;
};

export function ServiceApproachSection({
  title,
  steps,
  subtitle = "A transparent, repeatable path from first conversation to production launch and beyond.",
}: ServiceApproachSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white text-horizon-navy">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-horizon-sky/50 blur-3xl"
        aria-hidden
      />

      <div className={cn(container, sectionPad, "relative")}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className={overline}>How we work</p>
          <h2 className="mt-3 font-heading text-3xl font-normal leading-[1.15] md:text-4xl lg:text-[2.75rem]">
            {title.includes("approach") ? (
              <>
                Our <span className="italic">approach</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-horizon-muted md:text-lg">
            {subtitle}
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-horizon-border to-transparent lg:left-0 lg:top-6 lg:block lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-transparent lg:via-primary/45 lg:to-transparent"
            aria-hidden
          />

          {steps.map((step, index) => (
            <li key={step.step} className="relative min-w-0 list-none">
                <Reveal delay={index * motionStagger} className="h-full">
                  <article
                    className={cn(
                      "group relative flex h-full flex-col rounded-2xl border border-horizon-border/80 bg-horizon-cream/40 p-6 transition-all duration-300",
                      "hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white hover:shadow-[0_20px_50px_-28px_rgba(13,27,42,0.18)]",
                      "lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:pt-2 lg:shadow-none lg:hover:translate-y-0 lg:hover:bg-transparent lg:hover:shadow-none"
                    )}
                  >
                    <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                      <span
                        className={cn(
                          "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-white font-heading text-sm font-medium text-horizon-navy",
                          "shadow-[0_4px_18px_rgba(212,175,55,0.18)] transition-transform duration-300 group-hover:scale-105"
                        )}
                      >
                        {step.step}
                      </span>

                      <div className="min-w-0 flex-1 lg:mt-5">
                        <h3 className="font-heading text-xl font-medium leading-snug text-horizon-navy md:text-[1.35rem]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-horizon-muted md:text-[15px]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < steps.length - 1 ? (
                      <span
                        className="absolute -bottom-5 left-6 h-10 w-px bg-horizon-border/80 lg:hidden"
                        aria-hidden
                      />
                    ) : null}
                  </article>
                </Reveal>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
}
