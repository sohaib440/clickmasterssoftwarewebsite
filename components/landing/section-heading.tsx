import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";
import { overline } from "@/lib/landing/constants";

type SectionHeadingProps = {
  overlineText: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  overlineText,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "mx-auto max-w-3xl text-center", className)}>
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        <span className="motion-line h-px w-8 bg-horizon-navy/20" aria-hidden />
        <p className={overline}>{overlineText}</p>
      </div>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-normal leading-[1.15] tracking-tight text-horizon-navy md:text-4xl lg:text-[2.75rem]",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
