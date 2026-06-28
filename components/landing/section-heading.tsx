import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";
import { overline } from "@/lib/landing/constants";

type SectionHeadingProps = {
  overlineText: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  overlineText,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "mx-auto max-w-3xl text-center", className)}>
      <div className={cn("flex items-center gap-3", centered && "justify-center")}> 
        <span
          className={cn(
            "motion-line h-px w-8",
            dark ? "bg-white/30" : "bg-horizon-navy/20"
          )}
          aria-hidden
        />
        <p className={cn(overline, dark ? "text-white/70" : "")}>{overlineText}</p>
      </div>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-horizon-navy",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-base leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-horizon-muted",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
