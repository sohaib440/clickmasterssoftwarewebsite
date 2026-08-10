import { Briefcase, Code2, Globe, Users } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container, sectionPad } from "@/lib/landing/constants";
import { stats } from "@/data/landingPage";
import { cn } from "@/lib/utils";

const statIcons = {
  users: Users,
  briefcase: Briefcase,
  code: Code2,
  globe: Globe,
} as const;

type TrustNumbersSectionProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function TrustNumbersSection({
  className,
  variant = "dark",
}: TrustNumbersSectionProps) {
  const dark = variant === "dark";

  return (
    <section
      className={cn(
        "w-full",
        dark ? "bg-black text-white" : "bg-white text-horizon-navy",
        className
      )}
      aria-label="Local trust"
    >
      <div className={cn(container, sectionPad)}>
        <Reveal>
          <div
            className={cn(
              "rounded-[2rem] border px-5 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-10",
              dark
                ? "border-white/10 bg-zinc-950"
                : "border-horizon-border bg-horizon-cream/60"
            )}
          >
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">
              {stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center sm:px-4"
                  >
                    <Icon
                      className="mb-3 h-5 w-5 text-primary sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <dt
                      className={cn(
                        "font-heading text-3xl font-normal tracking-tight md:text-4xl lg:text-[2.75rem]",
                        dark ? "text-white" : "text-horizon-navy"
                      )}
                    >
                      {stat.value}
                    </dt>
                    <dd
                      className={cn(
                        "mt-2 text-sm font-medium sm:text-base",
                        dark ? "text-white" : "text-horizon-muted"
                      )}
                    >
                      {stat.label}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
