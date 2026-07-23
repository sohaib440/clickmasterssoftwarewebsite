"use client";

import { useEffect, useState } from "react";

import { CardImage } from "@/components/landing/card-image";
import type { ProjectSlide } from "@/data/projects";
import { cn } from "@/lib/utils";

const ROTATE_MS = 3500;

type ProjectHeroSlideshowProps = {
  slides: ProjectSlide[];
  fallbackImage: ProjectSlide["image"];
};

export function ProjectHeroSlideshow({
  slides,
  fallbackImage,
}: ProjectHeroSlideshowProps) {
  const images = slides.length > 0 ? slides : [{ label: "", caption: "", image: fallbackImage }];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="relative w-full overflow-hidden">
        {images.map((slide, index) => (
          <div
            key={`${slide.image.src}-${index}`}
            className={cn(
              "transition-opacity duration-700 ease-in-out",
              index === active
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            )}
            aria-hidden={index !== active}
          >
            <CardImage
              {...slide.image}
              className="h-auto w-full"
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        ))}

        {images[active]?.label ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-4 pt-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
              {images[active].label}
            </p>
            {images[active].caption ? (
              <p className="mt-1 text-sm text-white/80">{images[active].caption}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-black px-4 py-3">
          {images.map((slide, index) => (
            <button
              key={`${slide.image.src}-dot-${index}`}
              type="button"
              aria-label={`Show ${slide.label || `image ${index + 1}`}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-primary" : "w-1.5 bg-white/30 hover:bg-white/55"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
