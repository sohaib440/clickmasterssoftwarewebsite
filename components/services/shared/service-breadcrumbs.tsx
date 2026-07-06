import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { ServiceBreadcrumb } from "@/lib/content/service-page-types";
import { cn } from "@/lib/utils";

type ServiceBreadcrumbsProps = {
  items: ServiceBreadcrumb[];
  className?: string;
};

export function ServiceBreadcrumbs({ items, className }: ServiceBreadcrumbsProps) {
  return (
    <nav
      className={cn("mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60", className)}
      aria-label="Breadcrumb"
    >
      {items.map((crumb, index) => (
        <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 ? <span aria-hidden>/</span> : null}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className={cn(
                "hover:text-white",
                index === 0 && "inline-flex items-center gap-1.5"
              )}
            >
              {index === 0 ? <ArrowLeft className="size-4" aria-hidden /> : null}
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
