import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { card, container, sectionPad, sectionPadBottom } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { projects } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-horizon-cream">
      <div className={cn(container, sectionPad, "pb-6")}>
        <SectionHeading
          overlineText="Selected work"
          title={
            <>
              Recent <span className="italic">crossings</span>
            </>
          }
        />
      </div>

      <ul className={cn(container, sectionPadBottom, "grid gap-4 md:grid-cols-2")}>
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * motionStagger}>
              <Link
                href={`#projects-${project.slug}`}
                className={cn(
                  card,
                  "group block overflow-hidden transition-shadow hover:border-horizon-sky hover:shadow-lg"
                )}
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <CardImage
                    {...project.image}
                    className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-end justify-between gap-3 p-4 md:p-5">
                  <div>
                    <h3 className="font-heading text-2xl font-medium text-horizon-navy md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-horizon-muted">{project.category}</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-horizon-border bg-white text-horizon-navy transition-colors group-hover:border-horizon-navy group-hover:bg-horizon-navy group-hover:text-white">
                    <ArrowUpRight className="size-4" aria-hidden />
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
