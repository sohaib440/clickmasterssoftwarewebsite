import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { Reveal } from "@/components/landing/reveal";
import { ProjectCard } from "@/components/project/project-card";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOutline,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  iconMuted,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { SolutionContent } from "@/lib/content/solutions.types";
import { getProjectBySlug } from "@/data/projects";
import {
  getAllSolutions,
  solutionPath,
  solutionsIndexPath,
} from "@/lib/content/solutions";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const architectureLayers = [
  {
    title: "Users and teams",
    description: "Clear roles, permissions, and interfaces for everyone who relies on the system.",
  },
  {
    title: "Core workflows",
    description: "The business rules, approvals, records, and automations that make the solution useful.",
  },
  {
    title: "Data and integrations",
    description: "Reliable APIs, migrations, third-party connections, and reporting foundations.",
  },
] as const;

const engagementModels = [
  {
    title: "Fixed scope",
    description: "A defined roadmap, milestones, and acceptance criteria for a focused delivery.",
  },
  {
    title: "Dedicated team",
    description: "A senior product team that works continuously with your stakeholders and users.",
  },
  {
    title: "Product partnership",
    description: "Ongoing discovery, delivery, and improvement as your solution grows after launch.",
  },
] as const;

const deliveryStages = ["Discover", "Design", "Build", "Deploy"] as const;

const erpModules = ["Finance", "Inventory", "Procurement", "Sales", "HR", "Analytics"] as const;
const erpIntegrations = ["APIs", "Payments", "Accounting", "Logistics", "Third-party systems"] as const;

function solutionFaqs(label: string) {
  return [
    {
      question: `How long does a ${label.toLowerCase()} project take?`,
      answer: "The timeline depends on scope, integrations, and rollout needs. We confirm milestones after discovery and can phase the first release around the highest-value workflow.",
      tag: "Timeline",
      column: "left" as const,
    },
    {
      question: "Can you integrate it with our existing tools?",
      answer: "Yes. We map your current systems and connect the APIs, data sources, and workflows that matter to the first release.",
      tag: "Integrations",
      column: "right" as const,
    },
    {
      question: "Can the solution grow with our team?",
      answer: "We design the data model, permissions, and architecture for the next stage of growth, not only the first demo.",
      tag: "Scale",
      column: "left" as const,
    },
    {
      question: "What happens after launch?",
      answer: "We support rollout, training, monitoring, fixes, and the next product decisions so ownership continues beyond go-live.",
      tag: "Support",
      column: "right" as const,
    },
  ];
}

type Props = {
  solution: SolutionContent;
};

export function SolutionDetailPage({ solution }: Props) {
  const isErp = solution.slug === "custom-erp-software-development";
  const related = getAllSolutions().filter((s) => s.slug !== solution.slug).slice(0, 3);
  const projects = solution.projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="relative order-1 w-full overflow-hidden bg-gradient-to-b from-horizon-cream via-horizon-cream to-horizon-sky">
          <div className={cn(container, sectionPad, "!pt-6 md:!pt-8 lg:!pt-10")}>
            <Reveal immediate>
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-sm text-horizon-muted">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-horizon-navy">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={solutionsIndexPath} className="hover:text-horizon-navy">
                  Solutions
                </Link>
                <span aria-hidden>/</span>
                <span className="text-horizon-navy">{solution.label}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Reveal immediate delay={motionStagger}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={overline}>{solution.category}</p>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-horizon-sky/50 ring-1 ring-horizon-sky/50">
                      <solution.icon
                        className={cn("size-4", iconMuted)}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </span>
                  </div>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-horizon-navy sm:text-5xl lg:text-[3.25rem]">
                    {solution.label}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-horizon-muted md:text-lg">
                    {solution.tagline}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-horizon-muted">
                    {solution.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 5}>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={btnPrimary}>
                      Request a demo
                    </Link>
                    <Link href={contactPath} className={btnOutline}>
                      Contact us
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={motionStagger * 2} direction="right">
                <div className={cn(card, "overflow-hidden p-0")}>
                  <CardImage
                    {...solution.heroImage}
                    className="aspect-[4/3] w-full lg:aspect-[5/4]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="order-2 w-full bg-white" aria-labelledby="business-problem-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>The business problem</p>
              <h2 id="business-problem-heading" className="mt-3 max-w-3xl font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                When work is spread across <span className="italic">too many places</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
                Teams often outgrow disconnected tools, manual handoffs, and reporting they cannot trust. {solution.label} brings the critical workflow into one system built around how your business actually operates.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {["Disconnected data and duplicate work", "Slow decisions without live visibility", "Processes that break as the team grows"].map((problem, i) => (
                <li key={problem}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <p className="font-heading text-lg font-medium text-horizon-navy">{problem}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-3 w-full bg-horizon-sky/35" aria-labelledby="our-solution-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Our solution</p>
              <h2 id="our-solution-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                A platform shaped around your <span className="italic">priorities</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.summary.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <p className="font-heading text-xl font-medium text-horizon-navy">{item}</p>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      A practical capability aligned to your people, processes, and growth goals.
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {isErp ? (
          <section className="order-4 w-full bg-white" aria-labelledby="key-modules-heading">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <p className={overline}>Key modules</p>
                <h2 id="key-modules-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  One ERP for every <span className="italic">core function</span>
                </h2>
              </Reveal>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {erpModules.map((module, i) => (
                  <li key={module}>
                    <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                      <h3 className="font-heading text-lg font-medium text-horizon-navy">{module}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                        Configurable {module.toLowerCase()} workflows, permissions, and reporting aligned to your operation.
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="order-5 w-full bg-horizon-cream" aria-labelledby="how-we-solve-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>{isErp ? "How we build it" : "How we solve it"}</p>
              <h2 id="how-we-solve-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Discover <span className="italic">to deploy</span>
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solution.approach.map((step, i) => (
                <li key={step.step}>
                  <Reveal delay={i * motionStagger}>
                    <span className="font-heading text-2xl text-horizon-navy/25">{step.step}</span>
                    <h3 className="mt-2 font-heading text-lg font-medium text-horizon-navy">
                      {deliveryStages[i] ?? step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="order-6 w-full bg-white" aria-labelledby="features-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Features / capabilities</p>
              <h2
                id="features-heading"
                className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
              >
                Core <span className="italic">capabilities</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.features.map((feature, i) => (
                <li key={feature.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {feature.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-8 w-full bg-horizon-peach/40" aria-labelledby="integrations-heading">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  {isErp ? "Integrations" : <>What&apos;s <span className="italic">included</span></>}
                </h2>
                <p className="mt-3 text-horizon-muted">
                  {isErp
                    ? "Connect your ERP to the systems your teams already use."
                    : `Modules and features we typically deliver for ${solution.label.toLowerCase()} engagements.`}
                </p>
              </Reveal>
              <Reveal delay={motionStagger}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {(isErp ? erpIntegrations : solution.capabilities).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-horizon-border/80 bg-white/90 px-4 py-3 text-sm text-horizon-navy"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-horizon-navy/60"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="order-7 w-full bg-horizon-sky/35">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Industries &amp; use cases</p>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Built for <span className="italic">real work</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.useCases.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-10 w-full bg-white" aria-labelledby="technology-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Technology</p>
              <h2 id="technology-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                The right stack for <span className="italic">the job</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-horizon-muted">
                We choose dependable technologies around your product requirements, integrations, security needs, and long-term ownership plan.
              </p>
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-3">
              {["Web and mobile interfaces", "APIs and integrations", "Cloud-ready deployment", "Role-based security", "Analytics and reporting", "Testing and monitoring"].map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * motionStagger}>
                    <span className="inline-flex rounded-full border border-horizon-border bg-horizon-cream px-4 py-2 text-sm text-horizon-navy">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-9 w-full bg-horizon-peach/40" aria-labelledby="architecture-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Architecture / workflow</p>
              <h2 id="architecture-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                A foundation your team can <span className="italic">own</span>
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {architectureLayers.map((layer, i) => (
                <li key={layer.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <span className="font-heading text-2xl text-horizon-navy/25">0{i + 1}</span>
                    <h3 className="mt-3 font-heading text-lg font-medium text-horizon-navy">{layer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{layer.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="order-11 w-full bg-white" aria-labelledby="case-study-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Case study</p>
              <h2 id="case-study-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Real products, <span className="italic">shipped</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-horizon-muted">
                See related projects that show how we turn this type of solution into working software for real teams.
              </p>
            </Reveal>
            {projects.length > 0 ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {projects.map((project, i) => (
                  <ProjectCard key={project.slug} item={project} index={i} />
                ))}
              </div>
            ) : null}
            <Reveal delay={motionStagger} className="mt-8">
              <Link href="/projects" className={btnOutline}>
                View all projects
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="order-12 w-full bg-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Why Next Software Development</p>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Why teams <span className="italic">choose us</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {solution.highlights.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <span className="flex size-9 items-center justify-center rounded-full bg-horizon-sky/60 text-horizon-navy">
                      <Check className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-medium text-horizon-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-13 w-full bg-horizon-cream" aria-labelledby="engagement-models-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Engagement models</p>
              <h2 id="engagement-models-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                A delivery model that fits <span className="italic">your team</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {engagementModels.map((model, i) => (
                <li key={model.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">{model.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{model.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="order-14 w-full border-t border-horizon-border bg-white">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  More <span className="italic">solutions</span>
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {related.map((item, i) => (
                  <li key={item.slug}>
                    <Reveal delay={i * motionStagger}>
                      <Link
                        href={solutionPath(item.slug)}
                        className={cn(
                          cardSoft,
                          "group flex items-center justify-between gap-3 p-5 transition-colors hover:border-horizon-sky"
                        )}
                      >
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-horizon-muted">
                            {item.category}
                          </p>
                          <p className="mt-1 font-heading text-lg font-medium text-horizon-navy">
                            {item.label}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="size-5 shrink-0 text-horizon-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-horizon-navy"
                          aria-hidden
                        />
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <div className="order-15">
        <FaqSection
          items={solutionFaqs(solution.label)}
          overlineText={`${solution.label} FAQs`}
          title={
            <>
              Questions, <span className="italic">answered</span>
            </>
          }
          intro={`Common questions about planning, building, and growing a ${solution.label.toLowerCase()} solution.`}
          footerCta="Ask about your project"
          footerHref={contactPath}
        />
        </div>

        <section className="order-16 w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                Start your <span className="italic">{solution.label}</span> project
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                Tell us about your users, integrations, and timeline, we&apos;ll reply within one
                business day.
              </p>
              <Link
                href={contactPath}
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-horizon-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Project
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
