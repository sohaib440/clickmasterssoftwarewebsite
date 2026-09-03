import Link from "next/link";
import { ArrowRight, MessageSquareQuote } from "lucide-react";

import { contactPath } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

type BlogSidebarCtaProps = {
  className?: string;
};

export function BlogSidebarCta({ className }: BlogSidebarCtaProps) {
  return (
    <div className={cn("rounded-xl border border-primary/20 bg-primary/10 p-5 sm:p-6", className)}>
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <MessageSquareQuote className="size-5" aria-hidden />
      </div>

      <p className="mt-4 font-heading text-lg font-semibold leading-snug tracking-tight text-horizon-navy">
        Have a project in mind?
      </p>
      <p className="mt-2 text-sm leading-relaxed text-horizon-navy/75">
        Let&apos;s build something great together.
      </p>

      <Link
        href={contactPath}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-horizon-navy px-4 text-sm font-medium text-white transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Get a Free Quote
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}
