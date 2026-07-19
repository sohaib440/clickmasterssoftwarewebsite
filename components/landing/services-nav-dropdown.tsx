"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { serviceNavItems } from "@/components/landing/navbar";

export { serviceNavItems };

export function ServicesNavDropdown() {
  return (
    <div className="relative hidden md:inline-flex group">
      <Link
        href="/software-development"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors whitespace-nowrap hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        Services
        <ChevronDown
          className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden
        />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[16rem] overflow-hidden rounded-2xl border border-white/10 bg-black opacity-0 shadow-xl shadow-black/40 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <div className="p-3">
          <div className="space-y-1">
            {serviceNavItems.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
