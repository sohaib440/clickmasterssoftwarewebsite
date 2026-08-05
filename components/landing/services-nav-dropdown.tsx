"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { serviceNavItems } from "@/components/landing/navbar";

export { serviceNavItems };

export function ServicesNavDropdown() {
  const menuId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-0.5 rounded-lg px-1.5 py-2 text-[13px] text-white/70 transition-colors whitespace-nowrap hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 xl:gap-1 xl:px-2.5 xl:text-sm 2xl:px-3"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Services
        <ChevronDown
          className="size-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180 xl:size-4"
          aria-hidden
        />
      </button>

      <div
        id={menuId}
        role="menu"
        className="pointer-events-none absolute left-0 top-full z-50 mt-1 min-w-[16rem] max-w-[min(22rem,80vw)] overflow-hidden rounded-2xl border border-white/10 bg-black opacity-0 shadow-xl shadow-black/40 transition-all duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 data-[open=true]:pointer-events-auto data-[open=true]:opacity-100 data-[open=true]:translate-y-0"
        data-open={open}
      >
        <div className="scrollbar-dark max-h-[min(28rem,70vh)] overflow-y-auto overflow-x-hidden overscroll-contain py-3 pl-3 pr-1.5">
          <div className="space-y-1 pr-1.5">
            {serviceNavItems.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                role="menuitem"
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
