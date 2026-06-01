import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cardSoft, container, iconMuted, sectionPad, sectionPadBottom } from "@/lib/landing/constants";
import { getAllMainCategories, mainCategoryPath } from "@/lib/content";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const categories = getAllMainCategories();

  return (
    <section id="services" className="w-full bg-horizon-cream">
      <div className={cn(container, sectionPad, "pb-6")}>
        <SectionHeading
          overlineText="What we do"
          title={
            <>
              Four <span className="italic">disciplines</span>
            </>
          }
          description="Everything you need to go from idea to production—with one team that stays with you."
        />
      </div>

      <ul
        className={cn(
          container,
          sectionPadBottom,
          "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4"
        )}
      >
        {categories.map((category, i) => (
          <li key={category.slug}>
            <Reveal
              delay={i * motionStagger}
              className={cn(
                cardSoft,
                "h-full overflow-hidden p-0 transition-colors hover:border-horizon-sky/80 hover:bg-horizon-peach/20"
              )}
            >
              <Link
                href={mainCategoryPath(category.slug)}
                className="group flex h-full flex-col"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <CardImage
                    {...category.heroImage}
                    className="aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 lg:p-5">
                  <category.icon
                    className={cn("size-5", iconMuted)}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-3 font-heading text-xl font-medium text-horizon-navy group-hover:underline">
                    {category.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-horizon-muted">
                    {category.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy">
                    Explore {category.label.toLowerCase()}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
