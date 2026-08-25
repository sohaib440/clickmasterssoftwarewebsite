import { siteBrand, sitePhoneTel } from "@/lib/landing/brand";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
};

/** Click-to-call using a proper tel: href (works on mobile dialers). */
export function PhoneLink({ className, children, ariaLabel, onClick }: PhoneLinkProps) {
  return (
    <a
      href={sitePhoneTel}
      className={cn("cursor-pointer", className)}
      aria-label={ariaLabel ?? `Call ${siteBrand.phone}`}
      onClick={onClick}
    >
      {children ?? siteBrand.phone}
    </a>
  );
}
