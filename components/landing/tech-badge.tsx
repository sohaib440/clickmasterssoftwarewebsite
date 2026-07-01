import type { Technology } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
  tech: Technology;
  size?: "sm" | "md";
  className?: string;
};

export function TechBadge({ tech, size = "md", className }: TechBadgeProps) {
  const compact = size === "sm";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-horizon-border/90 bg-white",
        "transition-[transform,box-shadow,border-color] duration-300",
        "hover:-translate-y-px hover:border-horizon-sky/60 hover:shadow-[0_4px_14px_rgba(13,27,42,0.06)]",
        compact ? "px-2.5 py-1.5" : "px-3 py-2",
        className
      )}
    >
      <span
        className={cn(
          "shrink-0 rounded-md ring-1 ring-horizon-navy/5",
          compact ? "size-6" : "size-7"
        )}
        style={{ backgroundColor: `${tech.color}22` }}
        aria-hidden
      >
        <span
          className={cn(
            "flex h-full w-full items-center justify-center font-semibold",
            compact ? "text-[9px]" : "text-[10px]"
          )}
          style={{ color: tech.color }}
        >
          {tech.name.charAt(0)}
        </span>
      </span>
      <span
        className={cn(
          "font-medium text-horizon-navy",
          compact ? "text-xs" : "text-sm"
        )}
      >
        {tech.name}
      </span>
    </span>
  );
}
