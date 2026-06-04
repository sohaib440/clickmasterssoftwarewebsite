import Link from "next/link";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { btnOutline, card, container, sectionPad, sectionPadBottom } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { projects } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-horizon-cream">
      <div className={cn(container, sectionPad, "pb-6")}>
        <SectionHeading
          overlineText="Our work"
          title={
            <>
              Recent <span className="italic">projects</span>
            </>
          }
        />
      </div>

      <ul className={cn(container, sectionPadBottom, "grid gap-4 md:grid-cols-2")}>
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * motionStagger}>
              <article
                className={cn(
                  card,
                  "overflow-hidden transition-shadow hover:border-horizon-sky hover:shadow-lg"
                )}
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <CardImage
                    {...project.image}
                    className="aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-heading text-2xl font-medium text-horizon-navy md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-horizon-muted">{project.category}</p>
                  <p className="mt-3 text-sm leading-relaxed text-left text-horizon-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className={cn(container, "pb-10 md:pb-14")}>
        <Reveal>
          <Link href="#projects" className={btnOutline}>
            View all projects →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
