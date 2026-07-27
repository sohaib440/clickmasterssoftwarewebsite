"use client";

import { Mail, MapPin, Search, X } from "lucide-react";
import { useState } from "react";

import { container } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { SocialIconLinks } from "@/components/landing/social-icon-links";

function TopBarSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    window.open(
      `https://www.google.com/search?q=site:${new URL(siteBrand.url).hostname}+${encodeURIComponent(trimmed)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
    setQuery("");
  };

  if (open) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-1">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search site..."
          autoFocus
          className="h-7 w-36 rounded-md border border-white/15 bg-white/5 px-2 text-xs text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none sm:w-44"
        />
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setQuery("");
          }}
          className="inline-flex size-7 items-center justify-center rounded-md text-white/60 transition-colors hover:text-white"
          aria-label="Close search"
        >
          <X className="size-3.5" />
        </button>
      </form>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="inline-flex size-7 items-center justify-center rounded-md text-white/70 transition-colors hover:text-white"
      aria-label="Open search"
    >
      <Search className="size-4" />
    </button>
  );
}

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-black md:block">
      <div className={container}>
        <div className="flex h-9 items-center justify-between gap-4 text-xs text-white/75">
          <div className="flex min-w-0 items-center gap-5 lg:gap-8">
            <span className="inline-flex min-w-0 items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{siteBrand.location}</span>
            </span>
            <a
              href={`mailto:${siteBrand.email}`}
              className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{siteBrand.email}</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <TopBarSearch />

            <SocialIconLinks iconClassName="size-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
