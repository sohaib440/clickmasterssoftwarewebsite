import { Reveal } from "@/components/landing/reveal";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  overlineText: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function PageHero({ overlineText, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky/40",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-horizon-peach/40 blur-3xl" />
      </div>
      <div className={cn(container, sectionPad, "relative")}>
        <Reveal immediate>
          <p className={overline}>{overlineText}</p>
        </Reveal>
        <Reveal immediate delay={motionStagger}>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-normal leading-[1.1] tracking-tight text-horizon-navy sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal immediate delay={motionStagger * 2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
