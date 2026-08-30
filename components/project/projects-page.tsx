import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProjectCard } from "@/components/project/project-card";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  contactPath,
  container,
  sectionPad,
} from "@/lib/landing/constants";
import { projects } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export const projectPageContent = {
  metaTitle: "Our Work & Software Projects",
  metaDescription:
    "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.",
  hero: {
    eyebrow: "Our Work",
    title: "Projects built for real businesses",
    description:
      "A selection of platforms we've designed, engineered, and deployed from SaaS products and ERP systems to healthcare and retail software.",
  },
  cta: {
    title: "Have a project in mind?",
    description:
      "Tell us what you're building. We'll respond within one business day with a clear path forward.",
    button: "Start your project",
  },
} as const;

export function ProjectsPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-white">
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
                <span className="text-white">Projects</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {projectPageContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {projectPageContent.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

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

            <ul className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projects.map((project, i) => (
                <li key={project.slug} className="h-full">
                  <ProjectCard item={project} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {projectPageContent.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {projectPageContent.cta.description}
              </p>
              <Link href={contactPath} className={cn("mt-8", btnOnDark)}>
                {projectPageContent.cta.button} →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
