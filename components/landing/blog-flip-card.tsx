"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type FlipCardShellProps = {
  index: number;
  frontTitle: string;
  front: ReactNode;
  back: ReactNode;
  className?: string;
};

function FlipCardShell({ index, frontTitle, front, back, className }: FlipCardShellProps) {
  const [flipped, setFlipped] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "group/blog-flip h-[380px] w-full [perspective:1200px] sm:h-[420px] lg:h-[480px] xl:h-[520px]",
        flipped && "is-flipped",
        className
      )}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFlipped(false);
        }
      }}
      onClick={() => {
        if (window.matchMedia("(hover: none)").matches) {
          setFlipped((value) => !value);
        }
      }}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]",
          "group-hover/blog-flip:[transform:rotateY(180deg)] group-[.is-flipped]/blog-flip:[transform:rotateY(180deg)]",
          "motion-reduce:transition-none motion-reduce:group-hover/blog-flip:[transform:none] motion-reduce:group-[.is-flipped]/blog-flip:[transform:none]"
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-[0_18px_48px_rgba(0,0,0,0.45)] [backface-visibility:hidden] 2xl:rounded-[1.25rem]">
          {front}
          <span
            className="pointer-events-none absolute bottom-16 right-4 select-none font-heading text-[5.5rem] font-bold leading-none tracking-tight text-white/15 sm:bottom-20 sm:text-[6.5rem] lg:text-[7.5rem]"
            aria-hidden
          >
            {number}
          </span>
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-16 text-center sm:px-6 sm:pb-8">
            <p className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
              {frontTitle}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col rounded-2xl border border-white/15 bg-black p-6 shadow-[0_18px_48px_rgba(0,0,0,0.55)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7 2xl:rounded-[1.25rem]">
          {back}
        </div>
      </div>
    </div>
  );
}

export type BlogFlipCardProps = {
  href: string;
  image: { src: string; alt: string; width: number; height: number };
  index: number;
  frontTitle: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export function BlogFlipCard({
  href,
  image,
  index,
  frontTitle,
  category,
  title,
  excerpt,
  date,
  readTime,
}: BlogFlipCardProps) {
  return (
    <FlipCardShell
      index={index}
      frontTitle={frontTitle}
      front={
        <>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover grayscale-[35%] brightness-[0.72] contrast-[1.08] saturate-[0.85]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#1e3a8a]/45 to-[#1e40af]/25" />
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
        </>
      }
      back={
        <>
          <div className="flex items-start justify-between gap-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-primary">{category}</p>
            <span className="font-heading text-3xl font-bold text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 font-heading text-xl font-medium leading-snug text-white sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">{excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/45">
            <span>{date}</span>
            <span aria-hidden>·</span>
            <span>{readTime} read</span>
          </div>

          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary"
          >
            Read article
            <ArrowUpRight className="size-4" />
          </Link>
        </>
      }
    />
  );
}

export function BlogViewAllFlipCard({
  index,
  image,
}: {
  index: number;
  image: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <FlipCardShell
      index={index}
      frontTitle="All articles"
      front={
        <>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover grayscale-[35%] brightness-[0.72] contrast-[1.08] saturate-[0.85]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#1e3a8a]/45 to-[#1e40af]/25" />
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
        </>
      }
      back={
        <>
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-primary">Blog</p>
          <h3 className="mt-4 font-heading text-xl font-medium leading-snug text-white sm:text-2xl">
            Explore every post
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
            Browse the full archive for more on product strategy, engineering, and delivery.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary"
          >
            View all posts
            <ArrowUpRight className="size-4" />
          </Link>
        </>
      }
    />
  );
}
