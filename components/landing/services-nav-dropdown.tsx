"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const serviceItems = [
  { label: "Software Development", href: "/software-development" },
  { label: "Website Development", href: "/software-development/web-development" },
  { label: "Mobile Development", href: "/software-development/mobile-app-development" },
  { label: "Design UI/UX", href: "/design-ux" },
  { label: "Database Services", href: "/data-services" },
  { label: "Cloud Services", href: "/cloud-devops" },
  { label: "DevOps Services", href: "/cloud-devops" },
];

export function ServicesNavDropdown() {
  return (
    <div className="relative hidden md:inline-flex group">
      <Link
        href="/software-development"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-horizon-muted transition-colors whitespace-nowrap hover:bg-horizon-peach/50 hover:text-horizon-navy focus:outline-none focus:ring-2 focus:ring-horizon-sky/50"
      >
        Services
        <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[12rem] overflow-hidden rounded-2xl border border-horizon-border bg-white shadow-xl shadow-horizon-navy/10 opacity-0 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <div className="p-3">
          <div className="space-y-1">
            {serviceItems.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-horizon-navy transition-colors hover:bg-horizon-sky/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
