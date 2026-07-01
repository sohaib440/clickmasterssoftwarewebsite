"use client";

import { useState } from "react";

import { card, iconMuted } from "@/lib/landing/constants";
import { techStackTabs } from "@/data/landingPage";
import { cn } from "@/lib/utils";

export function TechStackTabs() {
  const [activeId, setActiveId] = useState(techStackTabs[0]?.id ?? "frontend");
  const active = techStackTabs.find((tab) => tab.id === activeId) ?? techStackTabs[0];

  if (!active) return null;

  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Technology categories"
      >
        {techStackTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls={`tech-panel-${tab.id}`}
            id={`tech-tab-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              tab.id === activeId
                ? "border-horizon-navy bg-horizon-navy text-white"
                : "border-horizon-border bg-white text-horizon-muted hover:border-horizon-sky hover:bg-horizon-sky/30 hover:text-horizon-navy"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`tech-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tech-tab-${active.id}`}
        className={cn(card, "border-horizon-border/80 bg-white/95 p-6 md:p-8")}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-horizon-muted">
          {active.label}
        </p>
        <p className="mt-4 text-base leading-relaxed text-horizon-navy md:text-lg">
          {active.items.join(" · ")}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-hidden>
          {active.items.map((item) => (
            <li
              key={item}
              className={cn(
                "rounded-full border border-horizon-border bg-horizon-cream/80 px-3 py-1.5 text-sm",
                iconMuted
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
