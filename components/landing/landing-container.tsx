import { container, sectionHeadingGap, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

type LandingContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Apply standard vertical section padding (default: true) */
  padded?: boolean;
};

/** Shared max-width + horizontal gutters for all landing page sections */
export function LandingContainer({
  children,
  className,
  padded = true,
}: LandingContainerProps) {
  return (
    <div className={cn(container, padded && sectionPad, className)}>{children}</div>
  );
}

export { sectionHeadingGap };
