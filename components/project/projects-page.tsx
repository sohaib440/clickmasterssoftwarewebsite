import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { projectPageMeta } from "@/data/projectPage";
import { projects } from "@/data/landingPage";
import { softwareDevelopmentProjects } from "@/data/softwareDevelopmentPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const customProjects = softwareDevelopmentProjects.items.map((item, index) => ({
  slug: `custom-${index + 1}`,
  title: item.title,
  category: item.industry,
  description: item.description,
  highlights: item.highlights,
  image: projects[index % projects.length]?.image ?? projects[0].image,
}));

export function ProjectsPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Projects</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <p className={cn(overline, "text-white/60")}>{projectPageMeta.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {projectPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {projectPageMeta.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-2xl font-normal text-horizon-navy md:text-3xl">
                Featured <span className="italic">deliveries</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-horizon-muted md:text-base">
                Production software across healthcare, fintech, retail, logistics, and more.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
              {projects.map((project, i) => (
                <li key={project.slug} id={project.slug}>
                  <Reveal delay={i * motionStagger}>
                    <article
                      className={cn(
                        "group overflow-hidden rounded-2xl border border-horizon-border bg-white",
                        "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-horizon-sky hover:shadow-[0_20px_50px_-24px_rgba(13,27,42,0.18)]",
                      )}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <CardImage
                          {...project.image}
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      <div className="p-5 md:p-6">
                        <h3 className="font-heading text-xl font-medium text-horizon-navy md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-horizon-muted md:text-[15px]">
                          {project.description}
                        </p>
                        <Link
                          href={contactPath}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-horizon-navy transition-colors group-hover:text-primary"
                        >
                          Discuss a similar build
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>



        {/* CTA */}
        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {projectPageMeta.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {projectPageMeta.cta.description}
              </p>
              <Link href={contactPath} className={cn("mt-8", btnOnDark)}>
                {projectPageMeta.cta.button} →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
