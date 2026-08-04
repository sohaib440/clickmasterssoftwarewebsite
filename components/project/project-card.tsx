import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { projectCaseStudyMeta } from "@/data/caseStudy";
import { projectDetailPath } from "@/data/projects";
import { undashList, undashText } from "@/lib/case-study-text";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type ProjectCardItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type ProjectCardProps = {
  item: ProjectCardItem;
  index: number;
};

function techTagsForSlug(slug: string): string[] {
  const meta = projectCaseStudyMeta[slug];
  if (!meta) return [];

  const tags = [
    ...meta.technologyStack.frontend.slice(0, 2),
    meta.technologyStack.backend[0],
    meta.technologyStack.database[0],
  ].filter(Boolean);

  return undashList(tags)
    .filter((tech, index, arr) => arr.indexOf(tech) === index)
    .slice(0, 4);
}

export function ProjectCard({ item, index }: ProjectCardProps) {
  const href = projectDetailPath(item.slug);
  const technologies = techTagsForSlug(item.slug);

  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <article
        id={item.slug}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#e5eaf0] bg-white",
          "shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]",
          "transition-[border-color,box-shadow,transform] duration-300",
          "hover:-translate-y-1 hover:border-horizon-sky/50 hover:shadow-[0_22px_48px_-22px_rgba(15,23,42,0.35)]",
        )}
      >
        <Link href={href} className="flex h-full flex-col">
          <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/25" />
            <div className="absolute left-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2">
              <span className="max-w-full truncate rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-horizon-navy shadow-sm">
                {undashText(item.category)}
              </span>
              <span className="rounded-full bg-[#5b6b8c]/90 px-3 py-1 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
                Completed
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4 md:px-6 md:pb-5 md:pt-5">
            <h2 className="line-clamp-2 text-[1.05rem] font-semibold leading-snug tracking-tight text-[#0f172a] md:text-[1.125rem]">
              {item.title}
            </h2>

            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
              {undashText(item.category)}
            </p>

            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748b]">
              {item.description}
            </p>

            {technologies.length > 0 ? (
              <ul className="mt-3 flex flex-wrap content-start gap-2">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-[#eef4fb] px-2.5 py-1 text-[11px] font-medium text-[#1e3a5f]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}

            <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-[#0d9488] transition-colors group-hover:text-primary">
              View project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
