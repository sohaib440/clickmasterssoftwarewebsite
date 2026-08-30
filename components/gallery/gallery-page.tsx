import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { TeamSection } from "@/components/landing/team-section";
import {
  btnOnDark,
  contactPath,
  container,
  sectionPad,
} from "@/lib/landing/constants";
import {
  galleryPageMeta,
  gallerySections,
  type GalleryGroup,
  type GalleryImage,
} from "@/data/galleryPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type GalleryGridSize = "default" | "compact";

function GalleryImageGrid({
  images,
  imageIndexOffset = 0,
  size = "default",
  fit = "cover",
}: {
  images: GalleryImage[];
  imageIndexOffset?: number;
  size?: GalleryGridSize;
  /** cover crops to fill the frame; contain shows the full image (use for screenshots) */
  fit?: "cover" | "contain";
}) {
  const compact = size === "compact";
  const contain = fit === "contain";

  return (
    <ul
      className={cn(
        "grid",
        compact
          ? "max-w-5xl gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          : cn(
              "gap-4 sm:gap-5",
              images.length === 1 ? "max-w-md" : "sm:grid-cols-2 lg:grid-cols-3"
            )
      )}
    >
      {images.map((image, index) => (
        <li key={`${image.src}-${index}`} className="h-full">
          <Reveal delay={(imageIndexOffset + index) * motionStagger} className="h-full">
            <figure
              className={cn(
                "group flex h-full flex-col overflow-hidden border border-horizon-border bg-[#f0f1f3]/40",
                compact ? "rounded-xl" : "rounded-2xl"
              )}
            >
              <div
                className={cn(
                  "relative flex w-full items-center justify-center overflow-hidden bg-horizon-cream/60",
                  compact ? "aspect-[16/10]" : "aspect-[16/10]"
                )}
              >
                <CardImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={cn(
                    "max-h-full max-w-full transition-transform duration-500 group-hover:scale-[1.02]",
                    contain
                      ? "!h-full !w-full !object-contain"
                      : "h-full w-full object-cover"
                  )}
                  sizes={
                    compact
                      ? "(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
              </div>
              {image.caption ? (
                <figcaption
                  className={cn(
                    "mt-auto border-t border-horizon-border/50 font-medium text-horizon-navy",
                    compact ? "px-2.5 py-2 text-xs" : "px-4 py-3 text-sm"
                  )}
                >
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

function GalleryGroupBlock({
  group,
  index,
  compact = false,
  fit = "cover",
}: {
  group: GalleryGroup;
  index: number;
  compact?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-horizon-border/80 bg-white",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8",
        index > 0 && "mt-8"
      )}
    >
      <Reveal delay={index * motionStagger}>
        <h3
          className={cn(
            "font-heading font-normal text-horizon-navy",
            compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          )}
        >
          {group.title}
        </h3>
        {group.description ? (
          <p className="mt-3 max-w-3xl text-justify text-sm leading-relaxed text-horizon-muted md:text-base">
            {group.description}
          </p>
        ) : null}
      </Reveal>
      <div className={cn(group.description ? "mt-5" : "mt-4")}>
        <GalleryImageGrid
          images={group.images}
          imageIndexOffset={index * 2}
          size={compact ? "compact" : "default"}
          fit={fit}
        />
      </div>
    </article>
  );
}

export function GalleryPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className={cn(container, sectionPad, "relative !pt-6 md:!pt-8 lg:!pt-10")}>
            <Reveal immediate>
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Gallery</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {galleryPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {galleryPageMeta.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        {gallerySections.map((section, sectionIndex) =>
          section.layout === "team" ? (
            <div
              key={section.title}
              className={cn(sectionIndex > 0 && "border-t border-horizon-border/60")}
            >
              <TeamSection />
            </div>
          ) : (
            <section
              key={section.title}
              className={cn(
                sectionIndex % 2 === 0 ? "bg-white" : "bg-[#f0f1f3]",
                sectionIndex > 0 && "border-t border-horizon-border/60"
              )}
            >
              <div className={cn(container, sectionPad)}>
                <Reveal delay={sectionIndex * motionStagger}>
                  <h2 className="max-w-3xl font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                    {section.title}
                  </h2>
                  {section.description ? (
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-horizon-muted md:text-base">
                      {section.description}
                    </p>
                  ) : null}
                </Reveal>

                {section.groups ? (
                  <div className="mt-10">
                    {section.groups.map((group, groupIndex) => (
                      <GalleryGroupBlock
                        key={group.title}
                        group={group}
                        index={groupIndex}
                        fit={section.title === "Projects" ? "contain" : "cover"}
                      />
                    ))}
                  </div>
                ) : null}

                {section.images ? (
                  <div className="mt-10">
                    <GalleryImageGrid
                      images={section.images}
                      imageIndexOffset={sectionIndex * 3}
                    />
                  </div>
                ) : null}
              </div>
            </section>
          )
        )}

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Want to build the next chapter with us?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell us about your product. We will reply within one business day.
              </p>
              <Link href={contactPath} className={cn("mt-8 inline-flex", btnOnDark)}>
                Get a Free Quote
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
