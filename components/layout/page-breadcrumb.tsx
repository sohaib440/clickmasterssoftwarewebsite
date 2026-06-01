import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  return (
    <div className={cn("w-full border-b border-horizon-border/60 bg-white/80", className)}>
      <div className={cn(container, "py-4 md:py-5")}>
        <Reveal immediate>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-horizon-muted" aria-label="Breadcrumb">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-horizon-navy"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Home
            </Link>
            {items.map((item, i) => (
              <span key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
                <span aria-hidden>/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-horizon-navy">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-horizon-navy">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
      </div>
    </div>
  );
}
