"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { serviceNavItems } from "@/components/landing/navbar";

export { serviceNavItems };

export function ServicesNavDropdown() {
  return (
    <div className="relative inline-flex group">
      <Link
        href="/software-development"
        className="inline-flex items-center gap-0.5 rounded-lg px-1.5 py-2 text-[13px] text-white/70 transition-colors whitespace-nowrap hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 xl:gap-1 xl:px-2.5 xl:text-sm 2xl:px-3"
      >
        Services
        <ChevronDown
          className="size-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180 xl:size-4"
          aria-hidden
        />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[16rem] max-w-[min(20rem,80vw)] overflow-hidden rounded-2xl border border-white/10 bg-black opacity-0 shadow-xl shadow-black/40 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
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
