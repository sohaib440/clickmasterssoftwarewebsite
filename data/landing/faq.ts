import type { FaqItem } from "./types";

export type { FaqItem };

export const faqIntro =
  "Everything you need to know before starting a project with our software development company. Still have questions? We're happy to walk you through everything on a free call.";

export const faqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What kinds of products do you build?",
    answer:
      "We design, build, test, and maintain products tailored to your business: web applications, mobile apps, enterprise systems, SaaS platforms, APIs, and integrations. Instead of forcing off-the-shelf tools, we shape solutions around how your teams actually work.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "How much does a typical engagement cost?",
    answer:
      "Cost depends on scope, complexity, and team composition. We provide competitive global rates and a detailed, transparent quote after a free discovery call. Engagements range from focused MVPs to full enterprise platforms.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long does it take to build a product?",
    answer:
      "Timelines depend on scope. A simple web app or MVP can ship in 6-10 weeks. A mid-complexity mobile application often takes 3-5 months. A full enterprise platform can take 6-12 months. We share a detailed timeline during planning and protect milestones with clear ownership.",
  },
  {
    column: "left",
    tag: "Global",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. Most of our clients are international, including the USA, UK, UAE, Canada, and Australia. We run remote-first collaboration with clear communication rhythms and timezone overlap, using Slack, Zoom, Jira, and Confluence so stakeholders stay informed.",
  },
  {
    column: "right",
    tag: "Process",
    question: "How do you run delivery day to day?",
    answer:
      "We work in short iterations with visible demos, shared backlog priorities, and clear ownership. You see progress early, give feedback while changes are still cheap, and stay aligned on scope, quality, and launch readiness.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "Can I hire dedicated developers from your team?",
    answer:
      "Absolutely. You can hire one developer or an entire squad on a dedicated basis, working exclusively on your project during business hours. Dedicated engineers integrate with your existing team, follow your processes, and report directly to you—an efficient way to scale capacity quickly.",
  },
  {
    column: "right",
    tag: "Support",
    question: "What happens after launch?",
    answer:
      "Post-launch support is part of how we work. We help with monitoring, fixes, improvements, and knowledge transfer so your team is not left maintaining unfamiliar code alone.",
  },
  {
    column: "right",
    tag: "Security",
    question: "How do you handle security and data protection?",
    answer:
      "We follow secure development practices, least-privilege access, and environment separation. For sensitive domains we discuss compliance needs up front and design controls into architecture, delivery, and operations—not as an afterthought.",
  },
  {
    column: "right",
    tag: "Quality",
    question: "How do you ensure product quality?",
    answer:
      "Quality is built into every stage, not added at the end. We run code reviews, unit and integration tests, manual QA, automated regression checks, and security reviews before release. QA works in parallel with development so issues are caught early.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Is my project idea safe with you? Do you sign NDAs?",
    answer:
      "Yes. We sign a mutual Non-Disclosure Agreement before detailed project discussions begin. Your idea, business data, and project details stay confidential. We follow internal data security policies and can involve your legal team in reviewing our standard NDA.",
  },
];
