import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Play } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectDetailPath,
  projectDetails,
} from "@/data/projects";
import {
  btnOnDark,
  btnOutlineDark,
  btnPrimary,
  contactPath,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      type: "article",
    },
  };
}

function SectionHeading({
  overlineText,
  title,
  light = false,
}: {
  overlineText: string;
  title: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={cn(overline, light ? "text-white/55" : "text-horizon-muted")}>{overlineText}</p>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-normal tracking-tight md:text-4xl",
          light ? "text-white" : "text-horizon-navy"
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = projectDetails.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-black text-foreground">
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col overflow-x-clip">
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
                <Link href={projectPath} className="hover:text-white">
                  Projects
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{project.title}</span>
              </nav>
            </Reveal>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
              <div>
                <Reveal immediate delay={motionStagger}>
                  <p className={cn(overline, "text-white/60")}>{project.category}</p>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem]">
                    {project.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                    {project.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Start a similar project
                    </Link>
                    <Link href={projectPath} className={btnOutlineDark}>
                      All projects
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <CardImage
                    {...project.image}
                    className="aspect-[16/10] w-full"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading overlineText="Overview" title="Project overview" />
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-horizon-muted md:text-lg">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal>
                <SectionHeading overlineText="Problem" title="The challenge" light />
                <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                  {project.problem}
                </p>
              </Reveal>
              <Reveal delay={motionStagger}>
                <SectionHeading overlineText="Solutions" title="What we built" light />
                <ul className="mt-6 space-y-3">
                  {project.solutions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-white/70 md:text-lg"
                    >
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading
                overlineText="Why this product"
                title={project.whyNeedProduct.title || "Why do you need this product"}
              />
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-horizon-muted md:text-lg">
                {project.whyNeedProduct.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {project.whyNeedProduct.reasons.map((reason, index) => (
                <li key={reason}>
                  <Reveal delay={index * motionStagger}>
                    <article className="h-full rounded-2xl border border-horizon-border bg-horizon-cream/40 p-6">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-horizon-navy md:text-base">
                        {reason}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading overlineText="Procedure" title="How we delivered" light />
            </Reveal>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {project.procedure.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * motionStagger}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="font-heading text-3xl text-primary">
                        {String(item.step).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-heading text-xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <TestimonialsSection
          overlineText="Client feedback"
          title={
            <>
              What the <span className="italic">client</span> said
            </>
          }
        />

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading overlineText="Module pictures" title="Product modules" light />
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {project.modulePictures.map((slide, index) => (
                <li key={`${slide.label}-${index}`}>
                  <Reveal delay={index * motionStagger}>
                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <CardImage
                        {...slide.image}
                        className="aspect-[4/3] w-full"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="p-5">
                        <h3 className="font-heading text-lg text-white">{slide.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">
                          {slide.caption}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading overlineText="Video" title={project.video.title} />
            </Reveal>
            <Reveal delay={motionStagger}>
              <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-horizon-border bg-zinc-950">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${project.video.youtubeId}`}
                  title={project.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0">
                  <Play className="size-12 text-white" aria-hidden />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <SectionHeading overlineText="Outcome" title="Results & impact" light />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.outcome.map((item, index) => (
                <li key={item}>
                  <Reveal delay={index * motionStagger}>
                    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                        Outcome {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 font-heading text-xl text-white">{item}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqSection
          items={project.faqs}
          intro={`Common questions about ${project.title} and how Next Software Development Company delivered this build.`}
          overlineText="Project FAQs"
          title={
            <>
              Project questions, <span className="italic">answered</span>
            </>
          }
        />

        {related.length > 0 ? (
          <section className="bg-white text-horizon-navy">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <SectionHeading overlineText="More work" title="Related projects" />
              </Reveal>
              <ul className="mt-10 grid gap-6 md:grid-cols-3">
                {related.map((item, index) => (
                  <li key={item.slug}>
                    <Reveal delay={index * motionStagger}>
                      <Link
                        href={projectDetailPath(item.slug)}
                        className="group block overflow-hidden rounded-2xl border border-horizon-border transition-colors hover:border-primary/40"
                      >
                        <CardImage
                          {...item.image}
                          className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="p-5">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-horizon-muted">
                            {item.category}
                          </p>
                          <h3 className="mt-2 font-heading text-xl text-horizon-navy">{item.title}</h3>
                          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy group-hover:text-primary">
                            View project
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Want a similar software product?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell Next Software Development Company about your goals. We will reply within one
                business day.
              </p>
              <Link href={contactPath} className={cn("mt-8 inline-flex", btnOnDark)}>
                Get a Free Quote
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
