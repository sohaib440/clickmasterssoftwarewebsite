"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

import { EmailLink } from "@/components/landing/email-link";
import { SiteLogo } from "@/components/landing/site-logo";
import { SocialIconLinks } from "@/components/landing/social-icon-links";
import { container } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { footerBrand, footerColumns, footerLegal } from "@/components/landing/navbar";
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
    <footer className="site-footer relative z-10 w-full bg-black">
      <div className={cn(container, "py-8 sm:py-10 md:py-12")}>
        <div className="grid gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="space-y-5 sm:space-y-6">
              {/* <SiteLogo
                className="max-w-[min(100%,16rem)] sm:max-w-[18rem] md:max-w-[20rem]"
                imageClassName="h-10 w-auto max-w-full sm:h-12 md:h-14"
              /> */}
              <p className="site-footer__muted max-w-sm text-sm leading-relaxed">
                {footerBrand.description}
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <EmailLink className="site-footer__link inline-flex max-w-full items-start gap-2 break-all sm:break-words">
                    <Mail className="site-footer__icon mt-0.5 size-4 shrink-0" aria-hidden />
                    {siteBrand.email}
                  </EmailLink>
                </li>
                <li className="site-footer__link inline-flex max-w-full items-start gap-2">
                  <Phone className="site-footer__icon mt-0.5 size-4 shrink-0" aria-hidden />
                  <span className="min-w-0 break-words">{siteBrand.phone}</span>
                </li>
                <li className="site-footer__link inline-flex max-w-full items-start gap-2">
                  <MapPin className="site-footer__icon mt-0.5 size-4 shrink-0" aria-hidden />
                  <span className="min-w-0 break-words">{siteBrand.location}</span>
                </li>
              </ul>
              <SocialIconLinks className="pt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column) => {
              const isExpanded = expandedSections.has(column.title);

              return (
                <div key={column.title} className="border-b border-white/20 pb-3 sm:border-none sm:pb-0">
                  <div className="sm:hidden">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => toggleSection(column.title)}
                      className="flex w-full items-center justify-between py-1 text-left"
                    >
                      <h3 className="site-footer__heading text-xs font-medium uppercase tracking-[0.15em]">
                        {column.title}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "site-footer__icon size-4 shrink-0 transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>

                    <ul
                      className="mt-3 space-y-3 overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isExpanded ? "1000px" : "0px",
                        opacity: isExpanded ? 1 : 0,
                      }}
                    >
                      {column.links.map((link, linkIndex) => (
                        <li key={`${column.title}-${link.href}-${linkIndex}`}>
                          <Link
                            href={link.href}
                            onClick={(event) => {
                              if (link.href === "#") event.preventDefault();
                            }}
                            className="site-footer__link text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden sm:block">
                    <h3 className="site-footer__heading border-b border-white/20 pb-3 text-xs font-medium uppercase tracking-[0.15em]">
                      {column.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={`${column.title}-${link.href}-${linkIndex}`}>
                          <Link
                            href={link.href}
                            onClick={(event) => {
                              if (link.href === "#") event.preventDefault();
                            }}
                            className="site-footer__link text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-5 text-sm sm:mt-10 sm:pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="site-footer__muted text-center sm:text-left">{footerBrand.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
              {footerLegal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    if (link.href === "#") event.preventDefault();
                  }}
                  className="site-footer__link"
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
