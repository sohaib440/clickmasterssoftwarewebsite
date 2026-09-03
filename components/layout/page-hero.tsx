import { Reveal } from "@/components/landing/reveal";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  overlineText: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  /** Black hero for blog and similar marketing pages */
  dark?: boolean;
};

export function PageHero({
  overlineText,
  title,
  description,
  className,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        dark
          ? "bg-black text-white"
          : "bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {dark ? (
          <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        ) : (
          <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-horizon-peach/40 blur-3xl" />
        )}
      </div>
      <div className={cn(container, sectionPad, "relative")}>
        <Reveal immediate>
          <p className={cn(overline, dark && "text-white/55")}>{overlineText}</p>
        </Reveal>
        <Reveal immediate delay={motionStagger}>
          <h1
            className={cn(
              "mt-4 max-w-3xl font-heading text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]",
              dark ? "text-white" : "text-horizon-navy"
            )}
          >
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal immediate delay={motionStagger * 2}>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
                dark ? "text-white/70" : "text-horizon-muted"
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
