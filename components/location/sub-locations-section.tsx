import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import type { LocationCity } from "@/data/locations";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type SubLocationsSectionProps = {
  country: string;
  cities: LocationCity[];
  description?: string;
};

function CityCard({ city, index }: { city: LocationCity; index: number }) {
  const isPlaceholder = !city.href || city.href === "#";
  const order = String(index + 1).padStart(2, "0");

  const className = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10",
    "bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-6",
    "shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm",
    "transition-[transform,border-color,background-color] duration-300",
    !isPlaceholder && "hover:-translate-y-0.5 hover:border-primary/40 hover:from-white/[0.1]"
  );

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="font-heading text-2xl leading-none text-white/20">{order}</span>
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
          <MapPinned className="size-4" aria-hidden />
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-heading text-xl font-medium tracking-tight text-white">{city.city}</h3>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
          {city.label}
        </p>
        {city.blurb ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{city.blurb}</p>
        ) : null}
      </div>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors group-hover:text-primary">
        {isPlaceholder ? "Coming soon" : "Explore city"}
        <ArrowUpRight
          className={cn(
            "size-4 transition-transform",
            !isPlaceholder && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          )}
          aria-hidden
        />
      </span>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className={className} aria-disabled="true">
        {body}
      </div>
    );
  }

  return (
    <Link href={city.href} className={className}>
      {body}
    </Link>
  );
}

export function SubLocationsSection({
  country,
  cities,
  description,
}: SubLocationsSectionProps) {
  const copy =
    description ??
    `We partner with founders and operators nationwide—building HMS for Islamabad clinics, school platforms in Lahore, and retail systems in Karachi. Choose a city to see how a dedicated software house can support your market.`;

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white"
      aria-labelledby="sub-locations-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-[-15%] left-[-10%] h-[40%] w-[40%] rounded-full bg-[rgba(212,175,55,0.18)] blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-[rgba(255,255,255,0.08)] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full bg-[rgba(212,175,55,0.12)] blur-[120px]" />
      </div>

      <div className={cn(container, sectionPad, "relative")}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className={cn(overline, "text-white/55")}>Coverage</p>
            <h2
              id="sub-locations-heading"
              className="mt-3 max-w-xl font-heading text-3xl font-normal leading-[1.12] tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              Cities we serve across <span className="italic text-primary/95">{country}</span>
            </h2>
          </Reveal>

          <Reveal delay={motionStagger}>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:justify-self-end lg:text-right">
              {copy}
            </p>
            <p className="mt-4 text-sm font-medium text-white/45 lg:text-right">
              <span className="text-primary">{cities.length}</span> cities · nationwide delivery
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {cities.map((city, index) => (
            <li key={city.slug}>
              <Reveal delay={Math.min(index, 9) * motionStagger * 0.35} className="h-full">
                <CityCard city={city} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
