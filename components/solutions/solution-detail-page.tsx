import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { BlogSection } from "@/components/landing/blog-section";
import { FaqSection } from "@/components/landing/faq-section";
import { RatingBadges } from "@/components/landing/rating-badges";
import { Reveal } from "@/components/landing/reveal";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { ProjectCard } from "@/components/project/project-card";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOutline,
  btnOutlineDark,
  btnPrimary,
  card,
  cardSoft,
  contactPath,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import type { SolutionContent } from "@/lib/content/solutions.types";
import { getProjectBySlug } from "@/data/projects";
import { solutionsIndexPath } from "@/lib/content/solutions";
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

const erpEngagementModels = [
  {
    title: "Fixed Scope",
    description: "Best for projects with clearly defined requirements, deliverables, milestones, and acceptance criteria.",
  },
  {
    title: "Dedicated Development Team",
    description: "A dedicated team works continuously with your stakeholders to develop, improve, and maintain your ERP platform.",
  },
  {
    title: "Product Partnership",
    description: "An ongoing development relationship covering discovery, development, integrations, optimization, and future product improvements.",
  },
] as const;

const deliveryStages = ["Discover", "Design", "Build", "Deploy"] as const;

const businessBenefits = [
  {
    title: "Faster decision-making",
    description: "Unify reporting and performance data so teams act on live numbers instead of stale spreadsheets.",
  },
  {
    title: "Lower operational overhead",
    description: "Reduce duplicate tasks, manual updates, and disconnected tools across day-to-day workflows.",
  },
  {
    title: "Scalable growth foundations",
    description: "Build a platform that supports more users, more locations, more products, and more complex operations over time.",
  },
] as const;

const supportAndMaintenance = [
  {
    title: "Ongoing optimization",
    description: "We monitor performance, review usage, and improve workflows as your business evolves.",
  },
  {
    title: "Issue response and fixes",
    description: "Fast turnaround for bugs, gaps, and change requests to keep operations stable and dependable.",
  },
  {
    title: "Roadmap support",
    description: "We help prioritize the next improvements based on real data, team feedback, and business priorities.",
  },
] as const;

const erpSupportAndMaintenance = [
  {
    title: "Ongoing Optimization",
    description: "Review system performance, workflows, user feedback, and operational requirements to identify opportunities for improvement.",
  },
  {
    title: "Issue Resolution",
    description: "Address software bugs, integration issues, workflow problems, and technical issues that affect daily operations.",
  },
  {
    title: "Feature Development",
    description: "Add new modules, reports, integrations, dashboards, workflows, and functionality as your business grows.",
  },
  {
    title: "Infrastructure Support",
    description: "Monitor application infrastructure, deployments, performance, backups, and system health according to the project's requirements.",
  },
  {
    title: "Roadmap Planning",
    description: "Prioritize future improvements based on business objectives, user feedback, operational data, and changing requirements.",
  },
] as const;

const securityAndReliability = [
  {
    title: "Role-based access control",
    description: "Protect critical workflows and sensitive data with access policies that match team responsibilities.",
  },
  {
    title: "Secure architecture",
    description: "We implement safe defaults, secure integrations, and clean separation between internal and external data flows.",
  },
  {
    title: "Resilience and observability",
    description: "Monitoring, error tracking, backups, and operational safeguards help your system stay dependable.",
  },
] as const;

const erpModules = [
  { title: "Finance & Accounting", description: "Manage financial transactions, accounts, expenses, income, budgets, invoices, payments, transfers, and financial reporting within a centralized system. Custom financial workflows can be aligned with your accounting structure, approval policies, and reporting requirements." },
  { title: "Inventory Management", description: "Track products, stock levels, warehouses, stock movements, purchases, transfers, adjustments, and inventory history. Real-time inventory information helps teams understand what is available, where it is located, and when additional stock may be required." },
  { title: "Procurement Management", description: "As a custom procurement software development company, we create structured purchasing workflows for purchase requests, supplier management, purchase orders, approvals, receiving, and procurement reporting. Automated approval processes can help reduce delays and improve purchasing control." },
  { title: "Sales Management", description: "Manage customers, quotations, orders, invoices, payments, sales representatives, and sales reporting from one system. Sales information can be connected with inventory and finance so departments work from consistent data." },
  { title: "Human Resources", description: "Manage employee records, departments, roles, attendance, leave, payroll-related information, documents, and HR workflows according to your organization's requirements." },
  { title: "Manufacturing & Production", description: "For manufacturing organizations, ERP systems can connect production planning, raw materials, bills of materials, work orders, production activity, inventory, suppliers, and financial information." },
  { title: "Customer Relationship Management", description: "Connect customer records, leads, sales activities, communication, opportunities, orders, and customer history with the rest of the ERP environment." },
  { title: "Analytics & Reporting", description: "Give managers access to dashboards and reports covering financial performance, sales, inventory, procurement, operations, employees, branches, and other important business metrics." },
] as const;

const erpBusinessProblems = [
  { title: "Disconnected Data", description: "Finance, inventory, procurement, sales, and operations may maintain separate records, making it difficult to establish one reliable source of business information." },
  { title: "Manual Processes", description: "Employees spend time entering the same information into multiple systems, preparing spreadsheets, sending approval requests, and manually reconciling records." },
  { title: "Limited Visibility", description: "Management may not have real-time visibility into sales, inventory, expenses, procurement, cash flow, operational performance, or branch-level activity." },
  { title: "Slow Approvals", description: "Important purchases, expenses, transfers, and operational requests can become delayed when approvals depend on emails, spreadsheets, or manual communication." },
  { title: "Difficult Reporting", description: "Teams may need to combine information from multiple systems before they can produce accurate management reports." },
  { title: "Systems That Cannot Scale", description: "A system that works for a small organization may become difficult to maintain when the company adds more employees, branches, products, customers, or business processes." },
] as const;

const erpSolutionItems = [
  "Finance and accounting",
  "Procurement and purchasing",
  "Inventory and warehouse management",
  "Sales and order management",
  "Customer management",
  "Human resources",
  "Employee management",
  "Manufacturing and production",
  "Project management",
  "Expense management",
  "Business analytics",
  "Management dashboards",
  "Document and approval workflows",
  "Third-party integrations",
] as const;

const erpServiceItems = [
  { title: "ERP Discovery & Business Analysis", description: "As a custom ERP software developer, we analyze your existing processes, systems, departments, users, pain points, reporting requirements, integrations, and future goals. The objective is to understand what the ERP needs to accomplish before development begins." },
  { title: "ERP Architecture & System Design", description: "We define the system architecture, database structure, modules, APIs, permissions, workflows, integrations, and infrastructure requirements." },
  { title: "ERP UI/UX Design", description: "We design interfaces that make complex business workflows easier for employees to understand and use. Dashboards, forms, tables, reports, approval screens, and role-specific interfaces are designed around actual user requirements." },
  { title: "Custom ERP Development", description: "Our developers build the required modules, business rules, workflows, APIs, dashboards, integrations, and administrative functionality." },
  { title: "ERP Integration", description: "We connect the ERP with existing business applications and external services through APIs and integration workflows." },
  { title: "Data Migration", description: "We help move relevant information from spreadsheets, legacy applications, databases, and existing systems into the new ERP environment." },
  { title: "Testing & Quality Assurance", description: "We test business workflows, permissions, integrations, calculations, reports, performance, and user journeys before deployment." },
  { title: "Deployment & Training", description: "We deploy the system, configure the production environment, migrate approved data, train users, and support the transition to the new platform." },
  { title: "Ongoing ERP Support", description: "After launch, we can continue improving the platform through maintenance, optimization, monitoring, new features, integrations, and support." },
] as const;

const erpIntegrations = [
  "CRM systems",
  "Accounting platforms",
  "Payment gateways",
  "Banking services",
  "E-commerce platforms",
  "POS systems",
  "Inventory systems",
  "Logistics platforms",
  "HR systems",
  "Customer communication tools",
  "Email and SMS services",
  "Business APIs",
  "External databases",
] as const;

function solutionFaqs(label: string) {
  if (label === "Custom ERP Software Development") {
    return [
      {
        question: "What is custom ERP software development?",
        answer: "Custom ERP software development is the process of designing and building an enterprise resource planning system around a company's specific business processes, departments, workflows, users, integrations, and reporting requirements.",
        tag: "ERP",
        column: "left" as const,
      },
      {
        question: "Why choose a custom ERP instead of an off-the-shelf ERP?",
        answer: "A custom ERP can be designed around your existing workflows and specific requirements. It can also provide greater flexibility for custom modules, integrations, reporting, permissions, and business processes that may not be supported by standard software.",
        tag: "Custom Build",
        column: "right" as const,
      },
      {
        question: "How long does custom ERP development take?",
        answer: "The timeline depends on the number of modules, complexity of workflows, integrations, data migration requirements, number of users, and deployment environment. We define the implementation roadmap after analyzing the project requirements.",
        tag: "Timeline",
        column: "left" as const,
      },
      {
        question: "Can you integrate CRM, ERP, and accounting systems?",
        answer: "Yes. We can develop integrations between CRM, ERP, accounting, payment, inventory, e-commerce, logistics, and other business systems using APIs and appropriate integration methods.",
        tag: "Integrations",
        column: "right" as const,
      },
      {
        question: "Can you migrate our existing business data?",
        answer: "Yes. Data migration can include information from spreadsheets, legacy applications, databases, accounting systems, and other existing platforms. The migration process can include data mapping, cleaning, transformation, validation, and production migration.",
        tag: "Migration",
        column: "left" as const,
      },
      {
        question: "Can the ERP support multiple branches?",
        answer: "Yes. A custom ERP can be designed to support multiple branches, locations, warehouses, departments, and business units with centralized reporting and role-based access.",
        tag: "Scale",
        column: "right" as const,
      },
      {
        question: "Can we add new modules later?",
        answer: "Yes. A modular architecture allows businesses to start with the most important functions and add additional modules as their requirements grow.",
        tag: "Growth",
        column: "left" as const,
      },
      {
        question: "Can the ERP be accessed from mobile devices?",
        answer: "Yes. Depending on the project requirements, we can develop responsive web interfaces or mobile applications for selected ERP functions.",
        tag: "Access",
        column: "right" as const,
      },
      {
        question: "Do you provide ERP support after launch?",
        answer: "Yes. We can provide ongoing maintenance, bug fixes, optimization, new features, integrations, infrastructure support, and roadmap development after deployment.",
        tag: "Support",
        column: "left" as const,
      },
      {
        question: "Can the ERP support multiple departments with different roles and permissions?",
        answer: "Yes. We can design role-based access, department-specific workflows, and permission levels that match how different teams use the ERP while keeping the platform centralized and controlled.",
        tag: "Security",
        column: "right" as const,
      },
    ];
  }

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
  const heroParagraphs = solution.description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const projects = solution.projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const processSteps = isErp
    ? erpServiceItems.map((step, index) => ({
        key: step.title,
        number: `0${index + 1}`,
        title: step.title,
        description: step.description,
      }))
    : solution.approach.map((step, index) => ({
        key: step.step,
        number: step.step,
        title: deliveryStages[index] ?? step.title,
        description: step.description,
      }));

  return (
    <div className="flex min-h-full w-full flex-col bg-black text-foreground">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="relative order-1 w-full overflow-hidden bg-black text-white">
          <div
            className={cn(
              container,
              sectionPad,
              "relative !pb-4 !pt-5 md:!pb-5 md:!pt-7 lg:!pb-6 lg:!pt-8"
            )}
          >
            <Reveal immediate>
              <nav className="mb-2 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href={solutionsIndexPath} className="hover:text-white">
                  Solutions
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{solution.label}</span>
              </nav>
            </Reveal>

            <div className="relative mt-3 grid items-stretch gap-8 lg:mt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
              <div className="relative z-20 flex min-w-0 flex-col gap-5 lg:pt-1">
                <Reveal immediate delay={motionStagger}>
                  <h1 className="font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]">
                    {solution.label}
                  </h1>
                </Reveal>
                <Reveal immediate delay={motionStagger * 2}>
                  <p className="whitespace-pre-line text-justify text-base leading-relaxed text-white/85 md:text-[1.05rem]">
                    {solution.tagline}
                  </p>
                </Reveal>
                <Reveal immediate delay={motionStagger * 3}>
                  <div className="max-w-2xl space-y-4">
                    {heroParagraphs.map((paragraph, index) => (
                      <p
                        key={`${solution.slug}-hero-paragraph-${index}`}
                        className="text-justify text-sm leading-relaxed text-white/70 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
                <Reveal immediate delay={motionStagger * 4}>
                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                    <Link href={contactPath} className={cn(btnPrimary, "!text-black hover:!text-white")}>
                      Request a demo
                    </Link>
                    <Link href={projectPath} className={btnOutlineDark}>
                      See our work
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </Reveal>
                <div className="hidden h-[7.5rem] lg:block" aria-hidden />
              </div>

              <Reveal immediate delay={motionStagger} direction="right" className="relative z-0 min-h-[16rem] w-full min-w-0 sm:min-h-[20rem] lg:min-h-0">
                <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[1.5rem] border border-white/15 lg:absolute lg:inset-0 lg:min-h-0">
                  {solution.heroImage ? (
                    <CardImage
                      {...solution.heroImage}
                      className="h-full min-h-[16rem] w-full object-cover sm:min-h-[20rem] lg:min-h-full"
                      priority
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="h-full min-h-[16rem] w-full bg-zinc-900 sm:min-h-[20rem] lg:min-h-full" />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 hidden lg:block"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 40%, transparent 72%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
                    }}
                    aria-hidden
                  />
                </div>
              </Reveal>

              <Reveal
                immediate
                delay={motionStagger * 4}
                className="relative z-30 w-full min-w-0 lg:absolute lg:bottom-0 lg:left-0 lg:w-[calc(50%+6.5rem)] xl:w-[calc(50%+7.5rem)]"
              >
                <RatingBadges variant="dark" appearance="cards" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="order-2 w-full bg-white" aria-labelledby="business-problem-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>The business problem</p>
              <h2 id="business-problem-heading" className="mt-3 max-w-3xl font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                {isErp ? "When Your Business Outgrows Disconnected Systems" : <>When work is spread across <span className="italic">too many places</span></>}
              </h2>
              {isErp ? (
                <div className="mt-4 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
                  <p>As a business grows, operational complexity grows with it. Different departments often start using different tools for accounting, purchasing, inventory, sales, HR, and reporting.</p>
                  <p className="mt-4">This creates fragmented information and unnecessary manual work.</p>
                </div>
              ) : (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-horizon-muted md:text-lg">
                  Teams often outgrow disconnected tools, manual handoffs, and reporting they cannot trust. {solution.label} brings the critical workflow into one system built around how your business actually operates.
                </p>
              )}
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(isErp ? erpBusinessProblems : [
                { title: "Disconnected data and duplicate work" },
                { title: "Slow decisions without live visibility" },
                { title: "Processes that break as the team grows" },
              ]).map((problem, i) => (
                <li key={problem.title}>
                  <Reveal delay={i * motionStagger} className={cn(cardSoft, "h-full p-6")}>
                    <p className="font-heading text-lg font-medium text-horizon-navy">{problem.title}</p>
                    {"description" in problem ? <p className="mt-3 text-sm leading-relaxed text-horizon-muted">{problem.description}</p> : null}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-3 w-full bg-black text-white" aria-labelledby="our-solution-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>{isErp ? "Our ERP Solution" : "Our solution"}</p>
              <h2 id="our-solution-heading" className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl">
                {isErp ? "A Custom ERP Platform Built Around Your Business" : <>A platform shaped around your <span className="italic">priorities</span></>}
              </h2>
            </Reveal>
            {isErp ? (
              <div className="mt-8 max-w-4xl text-base leading-relaxed text-white/75 md:text-lg">
                <p>Our approach to ERP development starts with understanding how your organization actually works.</p>
                <p className="mt-4">Rather than forcing your business into a predefined workflow, we design the platform around your departments, approval structures, data relationships, reporting requirements, and operational goals.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {erpSolutionItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="mt-1 size-2 rounded-full bg-white/80" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">The result is a centralized operating platform that gives employees the tools they need while giving management better visibility and control.</p>
              </div>
            ) : (
              <ul className="mt-10 grid gap-4 md:grid-cols-3">
                {solution.summary.map((item, i) => (
                  <li key={item}>
                    <Reveal delay={i * motionStagger} className={cn("h-full rounded-2xl border border-white/10 bg-zinc-950 p-6")}>
                      <p className="font-heading text-xl font-medium text-white">{item}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        A practical capability aligned to your people, processes, and growth goals.
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {isErp ? (
          <section className="order-4 w-full bg-white" aria-labelledby="key-modules-heading">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <p className={overline}>ERP Modules</p>
                <h2 id="key-modules-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  One Platform for Your Core Business Functions
                </h2>
              </Reveal>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-horizon-muted md:text-lg">
                Every organization has different requirements. We can develop the modules you need and expand the platform as your business evolves.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {erpModules.map((module, i) => (
                  <li key={module.title}>
                    <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                      <h3 className="font-heading text-lg font-medium text-horizon-navy">{module.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{module.description}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="order-5 w-full bg-black text-white" aria-labelledby="how-we-solve-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>{isErp ? "Custom ERP Software Development Services" : "How we solve it"}</p>
              <h2 id="how-we-solve-heading" className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl">
                {isErp ? "ERP Development From Discovery to Deployment" : <>Discover <span className="italic">to deploy</span></>}
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, i) => (
                <li key={step.key}>
                  <Reveal delay={i * motionStagger}>
                    <span className="font-heading text-2xl text-white/20">{step.number}</span>
                    <h3 className="mt-2 font-heading text-lg font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="order-6 w-full bg-white" aria-labelledby="features-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>{isErp ? "Core Capabilities" : "Features / capabilities"}</p>
              <h2
                id="features-heading"
                className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl"
              >
                {isErp ? "A Scalable Foundation for Business Operations" : <>Core <span className="italic">capabilities</span></>}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="order-8 w-full bg-white" aria-labelledby="integrations-heading">
          <div className={cn(container, sectionPad)}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <p className={overline}>{isErp ? "CRM, ERP & Accounting Integrations" : "Integrations"}</p>
                <h2 className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  {isErp ? "Connect Your Existing Business Systems" : <>What&apos;s <span className="italic">included</span></>}
                </h2>
                <div className="mt-4 text-horizon-muted">
                  {isErp ? (
                    <>
                      <p>Many businesses do not want to replace every application they already use.</p>
                      <p className="mt-4">Our custom ERP development approach supports CRM and ERP integration with existing business software and third-party services.</p>
                      <p className="mt-4">As a custom integration software development company for CRM and ERP systems, we also deliver custom software development for integrating CRM, ERP and accounting tools when standard connectors are not enough.</p>
                      <p className="mt-4">Common integration areas include:</p>
                    </>
                  ) : (
                    <p>
                      {`Modules and features we typically deliver for ${solution.label.toLowerCase()} engagements.`}
                    </p>
                  )}
                </div>
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
                {isErp ? (
                  <p className="mt-5 text-sm leading-relaxed text-horizon-muted">
                    We can also develop custom integration software for CRM and ERP systems when existing connectors are not sufficient.
                  </p>
                ) : null}
              </Reveal>
            </div>
          </div>
        </section>

        {isErp ? (
          <section className="order-10 w-full bg-white" aria-labelledby="migration-heading">
            <div className={cn(container, sectionPad)}>
              <Reveal>
                <p className={overline}>Data Migration</p>
                <h2 id="migration-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  Move From Legacy Systems With Confidence
                </h2>
              </Reveal>
              <div className="mt-5 max-w-4xl text-base leading-relaxed text-horizon-muted md:text-lg">
                <p>Replacing an existing business system requires more than building the new application.</p>
                <p className="mt-4">Your historical and operational data may need to be moved from spreadsheets, databases, legacy applications, accounting systems, or other business platforms.</p>
                <p className="mt-4">Our migration process can include:</p>
              </div>
              <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  "Data discovery",
                  "Data mapping",
                  "Data cleaning",
                  "Data transformation",
                  "Migration planning",
                  "Test migration",
                  "Data validation",
                  "Production migration",
                  "Post-migration verification",
                ].map((step, index) => (
                  <li key={step}>
                    <Reveal delay={index * motionStagger} className={cn(card, "h-full p-5")}> 
                      <span className="font-heading text-2xl text-horizon-navy/25">0{index + 1}</span>
                      <p className="mt-2 font-heading text-lg font-medium text-horizon-navy">{step}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-horizon-muted">
                We work to ensure that important business information is structured correctly before users begin operating on the new ERP.
              </p>
            </div>
          </section>
        ) : null}

        <section className="order-12 w-full bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Industries &amp; use cases</p>
              <h2 className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Built for <span className="italic">real work</span>
              </h2>
            </Reveal>
            <div className="mt-10 overflow-hidden">
              <div className="grid grid-cols-1 border-l border-t border-horizon-border md:grid-cols-2 lg:grid-cols-3">
                {solution.useCases.map((item, i) => (
                  <Reveal key={item.title} delay={i * motionStagger}>
                    <div className="group relative flex min-h-[220px] flex-col bg-[#f5f6f8] p-8 transition-colors duration-300 hover:bg-white sm:min-h-[240px] sm:p-9 lg:min-h-[260px] lg:p-10 xl:p-12 border-r border-b border-horizon-border">
                      <span
                        className="absolute left-0 top-0 z-10 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
                        aria-hidden
                      />
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-horizon-navy sm:text-[1.35rem]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-md flex-1 text-sm leading-relaxed text-horizon-muted sm:text-[0.95rem]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="order-11">
          <TechStackSection
            overlineText={`${solution.label} technology`}
            title={
              <>
                The right stack for <span className="text-primary">{solution.label}</span>
              </>
            }
            description={`We select proven technologies around your ${solution.label.toLowerCase()} requirements, integrations, security needs, and long-term ownership plan.`}
            badgeText={`Built for ${solution.label}`}
          />
        </div>

        <section className="order-7 w-full bg-black text-white" aria-labelledby="architecture-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>Architecture / workflow</p>
              <h2 id="architecture-heading" className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl">
                A foundation your team can <span className="italic">own</span>
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {architectureLayers.map((layer, i) => (
                <li key={layer.title}>
                  <Reveal delay={i * motionStagger} className={cn("h-full rounded-2xl border border-white/10 bg-zinc-950 p-6")}>
                    <span className="font-heading text-2xl text-white/20">0{i + 1}</span>
                    <h3 className="mt-3 font-heading text-lg font-medium text-white">{layer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{layer.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="order-9 w-full bg-black text-white" aria-labelledby="case-study-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>Case study</p>
              <h2 id="case-study-heading" className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl">
                Real products, <span className="italic">shipped</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
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

        <section className="order-12 w-full bg-white" aria-labelledby="business-benefits-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Business benefits / outcomes</p>
              <h2 id="business-benefits-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Measurable value for <span className="italic">your business</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {businessBenefits.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-13 w-full bg-black text-white">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>{isErp ? "Why Choose Next Software Development Company" : "Why Next Software Development"}</p>
              <h2 className="font-heading text-3xl font-normal text-white md:text-4xl">
                {isErp ? <>A Development Partner for Long-Term ERP Growth</> : <>Why teams <span className="italic">choose us</span></>}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(isErp ? [
                { title: "Phased Implementation", description: "We can launch essential modules first, validate them with users, and expand the platform in controlled stages." },
                { title: "Business-Focused Development", description: "We focus on your actual workflows, business rules, users, and reporting requirements rather than building features that do not solve operational problems." },
                { title: "Transparent Development", description: "Regular demonstrations, feedback cycles, and defined milestones help stakeholders understand progress throughout the project." },
                { title: "Scalable Architecture", description: "We design the platform with future modules, integrations, users, and operational growth in mind." },
                { title: "Long-Term Ownership", description: "As a custom ERP development company, we provide documentation, training, maintainable architecture, and ongoing development support so your organization can continue improving the platform." },
              ] : solution.highlights).map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn("h-full rounded-2xl border border-white/10 bg-zinc-950 p-6")}>
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white">
                      <Check className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-14 w-full bg-white" aria-labelledby="engagement-models-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>{isErp ? "Engagement Models" : "Engagement models"}</p>
              <h2 id="engagement-models-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                {isErp ? "A Delivery Model That Fits Your Organization" : <>A delivery model that fits <span className="italic">your team</span></>}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(isErp ? erpEngagementModels : engagementModels).map((model, i) => (
                <li key={model.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">{model.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{model.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-15 w-full bg-black text-white" aria-labelledby="support-maintenance-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={cn(overline, "text-white/60")}>{isErp ? "Support & Maintenance" : "Support & maintenance"}</p>
              <h2 id="support-maintenance-heading" className="mt-3 font-heading text-3xl font-normal text-white md:text-4xl">
                {isErp ? <>Long-Term Support for Your ERP Platform</> : <>Long-term care for <span className="italic">your product</span></>}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(isErp ? erpSupportAndMaintenance : supportAndMaintenance).map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn("h-full rounded-2xl border border-white/10 bg-zinc-950 p-6")}>
                    <h3 className="font-heading text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-16 w-full bg-white" aria-labelledby="security-reliability-heading">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <p className={overline}>Security &amp; reliability</p>
              <h2 id="security-reliability-heading" className="mt-3 font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                Protected by design, <span className="italic">built to last</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {securityAndReliability.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * motionStagger} className={cn(card, "h-full p-6")}>
                    <h3 className="font-heading text-lg font-medium text-horizon-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="order-17">
          <BlogSection />
        </div>

        <div className="order-18">
          <FaqSection
            items={solutionFaqs(solution.label)}
            overlineText={`${solution.label} FAQs`}
            title={
              <>
                Frequently <span className="italic text-primary">Asked Questions</span>
              </>
            }
            intro={`Common questions about planning, building, and growing a ${solution.label.toLowerCase()} solution.`}
          />
        </div>

        <section className="order-19 w-full bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {isErp ? <>Build an ERP Around the Way Your Business Works</> : <>Start your <span className="italic">{solution.label}</span> project</>}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
                {isErp
                  ? "Whether you are replacing spreadsheets, connecting disconnected business systems, modernizing a legacy application, or building an ERP platform from the ground up, we can help you plan and develop the right solution. Tell us about your business, users, existing systems, workflows, integrations, and goals. Our team will review your requirements and help define a practical ERP development roadmap."
                  : "Tell us about your users, integrations, and timeline, we&apos;ll reply within one business day."}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={contactPath}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-horizon-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isErp ? "Start Your Project" : "Start Your Project"}
                </Link>
                {isErp ? (
                  <Link
                    href={contactPath}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-transparent px-8 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Talk to Next Software Development Company
                  </Link>
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
