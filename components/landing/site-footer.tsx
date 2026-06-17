"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/landing/reveal";
import { container } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { motionStagger } from "@/lib/landing/motion";
import { footerBrand, footerColumns, footerLegal } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (columnTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(columnTitle)) {
      newExpanded.delete(columnTitle);
    } else {
      newExpanded.add(columnTitle);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <footer className="w-full bg-horizon-navy text-white">
      <div className={cn(container, "py-10 md:py-12")}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <div className="space-y-6">
              <Link href="/" className="font-heading text-xl font-medium text-white md:text-2xl">
                {siteBrand.name}
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                {footerBrand.description}
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a
                    href={`mailto:${siteBrand.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden />
                    {siteBrand.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {siteBrand.phone}
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="size-4 shrink-0" aria-hidden />
                  {siteBrand.location}
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column, i) => {
              const isExpanded = expandedSections.has(column.title);

              return (
                <Reveal key={column.title} delay={(i + 1) * motionStagger}>
                  <div className="pb-3 border-b border-white/20 lg:border-none lg:pb-0">
                    <div className="lg:hidden">
                      {/* Mobile expandable header */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleSection(column.title)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            toggleSection(column.title);
                          }
                        }}
                      >
                        <h3 className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-white/50 cursor-pointer hover:text-white/70 transition-colors">
                          {column.title}
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-300",
                              isExpanded && "rotate-180"
                            )}
                            aria-hidden
                          />
                        </h3>
                      </div>

                      {/* Mobile collapsible list */}
                      <ul
                        className="mt-3 space-y-3 transition-all duration-300 overflow-hidden"
                        style={{
                          maxHeight: isExpanded ? "1000px" : "0px",
                          opacity: isExpanded ? 1 : 0,
                        }}
                      >
                        {column.links.map((link, linkIndex) => (
                          <li key={`${column.title}-${link.href}-${linkIndex}`}>
                            <Link
                              href={link.href}
                              className="text-sm text-white/80 transition-colors hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Desktop view */}
                    <div className="hidden lg:block">
                      <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 pb-3 border-b border-white/20">
                        {column.title}
                      </h3>

                      {/* Desktop list */}
                      <ul className="mt-5 space-y-3">
                        {column.links.map((link, linkIndex) => (
                          <li key={`${column.title}-${link.href}-${linkIndex}`}>
                            <Link
                              href={link.href}
                              className="text-sm text-white/80 transition-colors hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>{footerBrand.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {footerLegal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
