import { Briefcase, Layers, ShieldCheck, Users } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container, sectionPad } from "@/lib/landing/constants";
import { stats } from "@/data/landingPage";
import { cn } from "@/lib/utils";

const statIcons = {
  users: Users,
  briefcase: Briefcase,
  layers: Layers,
  "shield-check": ShieldCheck,
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
      aria-label="Trust numbers"
    >
      <div className={cn(container, sectionPad)}>
        <Reveal>
          <div
            className={cn(
              "rounded-2xl border px-4 py-6 sm:px-8",
              dark
                ? "border-white/10 bg-zinc-950/90"
                : "border-horizon-border bg-horizon-cream/60"
            )}
          >
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
              {stats.map((stat, i) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex flex-col items-center text-center sm:px-4",
                      i > 0 &&
                        (dark
                          ? "sm:border-l sm:border-white/10"
                          : "sm:border-l sm:border-horizon-border")
                    )}
                  >
                    <Icon
                      className={cn("mb-2 h-5 w-5", dark ? "text-primary" : "text-primary")}
                      aria-hidden
                    />
                    <dt
                      className={cn(
                        "font-heading text-2xl font-normal md:text-3xl",
                        dark ? "text-white" : "text-horizon-navy"
                      )}
                    >
                      {stat.value}
                    </dt>
                    <dd
                      className={cn(
                        "mt-1 text-xs sm:text-sm",
                        dark ? "text-white/60" : "text-horizon-muted"
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
