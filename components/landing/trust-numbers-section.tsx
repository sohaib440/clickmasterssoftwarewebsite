import { Briefcase, Code2, Globe, Users } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container } from "@/lib/landing/constants";
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
      <div className={cn(container, "px-4 py-6 sm:px-6 md:px-8 md:py-8")}>
        <Reveal>
          <div
            className={cn(
              "rounded-2xl border px-4 py-4 sm:rounded-[1.25rem] sm:px-6 sm:py-5",
              dark
                ? "border-white/10 bg-zinc-950"
                : "border-horizon-border bg-horizon-cream/60"
            )}
          >
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
              {stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center sm:px-3"
                  >
                    <Icon
                      className="mb-0.5 h-4 w-4 text-primary sm:h-5 sm:w-5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <dt
                      className={cn(
                        "font-heading text-2xl font-normal leading-none tracking-tight sm:text-3xl md:text-[2rem]",
                        dark ? "text-white" : "text-horizon-navy"
                      )}
                    >
                      {stat.value}
                    </dt>
                    <dd
                      className={cn(
                        "mt-1 text-xs font-medium sm:text-sm",
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
