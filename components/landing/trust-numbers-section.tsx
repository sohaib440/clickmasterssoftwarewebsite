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
      <div className={cn(container, "pt-2 pb-5 md:pt-3 md:pb-6")}>
        <Reveal>
          <div
            className={cn(
              "rounded-2xl border px-4 py-4 sm:px-5 sm:py-5",
              dark
                ? "border-white/10 bg-zinc-950"
                : "border-horizon-border bg-horizon-cream/60"
            )}
          >
            <dl className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
              {stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex flex-col items-center text-center sm:px-4",
                      "sm:border-l sm:border-white/10 sm:first:border-l-0",
                      !dark && "sm:border-horizon-border"
                    )}
                  >
                    <Icon
                      className="mb-2 h-4 w-4 text-primary sm:h-5 sm:w-5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <dt
                      className={cn(
                        "font-heading text-2xl font-normal tracking-tight md:text-3xl",
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
                    {stat.detail ? (
                      <p
                        className={cn(
                          "mt-1.5 max-w-[14rem] text-[10px] leading-snug",
                          dark ? "text-white/45" : "text-horizon-muted"
                        )}
                      >
                        {stat.detail}
                      </p>
                    ) : null}
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
