import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { contactPath } from "@/lib/landing/constants";
import type { CaseStudy } from "@/data/caseStudyPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  item: CaseStudy;
  index: number;
};

export function CaseStudyCard({ item, index }: CaseStudyCardProps) {
  return (
    <Reveal delay={index * motionStagger}>
      <article
        id={item.slug}
        className={cn(
          "group overflow-hidden rounded-2xl border border-horizon-border bg-white",
          "transition-[border-color,box-shadow,transform] duration-300",
          "hover:-translate-y-1 hover:border-horizon-sky hover:shadow-[0_22px_56px_-28px_rgba(13,27,42,0.16)]"
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            {item.category}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <h2 className="font-heading text-2xl font-medium text-horizon-navy">{item.title}</h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The problem
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-horizon-muted">{item.problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The solution
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-horizon-muted">{item.solution}</p>
            </div>
          </div>

          {item.outcomes.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-full border border-horizon-border bg-horizon-cream px-3 py-1 text-xs font-medium text-horizon-navy"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          ) : null}

          <Link
            href={contactPath}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-horizon-navy transition-colors group-hover:text-primary"
          >
            Discuss a similar build
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
