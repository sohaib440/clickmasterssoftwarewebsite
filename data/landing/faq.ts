import type { FaqItem } from "./types";

export type { FaqItem };

export const faqIntro =
  "Everything you need to know before starting a project with us. Still have questions? We're happy to walk you through everything on a free call.";

export const faqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What does a software development company do?",
    answer:
      "A software development company designs, builds, tests, and maintains custom software products tailored to your specific business needs. This includes web applications, mobile apps, enterprise systems, SaaS platforms, APIs, and more. Unlike buying off-the-shelf software, we build exactly what your business requires from the ground up.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "How much does it cost to hire a software development company?",
    answer:
      "Software development costs vary widely based on project scope, complexity, and the team you hire. As a Pakistan-based software development company, we offer highly competitive rates compared to US or UK firms typically 40–60% lower for the same quality of work. We provide a detailed, transparent quote after a free discovery call. Projects range from PKR 150,000 for a simple MVP to PKR 3,500,000+ for enterprise platforms.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long does it take to build custom software?",
    answer:
      "Timelines depend on scope. A simple web app or MVP can be built in 6-10 weeks. A mid-complexity mobile application takes 3-5 months. A full enterprise software platform can take 6-12 months. We always provide a detailed timeline during the planning phase and stick to it our on-time delivery rate is 94%.",
  },
  {
    column: "left",
    tag: "Global",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes the majority of our clients are based internationally, including the USA, UK, UAE, Canada, and Australia. We are a remote-first software development company with communication processes and timezone flexibility designed for international collaboration. We use Slack, Zoom, Jira, and Confluence to keep every client fully in the loop regardless of location.",
  },
  {
    column: "right",
    tag: "Process",
    question: "What is the difference between a software house and a software development company?",
    answer:
      "The terms are often used interchangeably. A software house typically refers to a company that builds software products as a service for other businesses. A software development company may also build its own products. We focus entirely on building custom software for our clients. We are both a software house and a software development company in the truest sense.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "Can I hire dedicated developers from your company?",
    answer:
      "Absolutely. You can hire one developer or an entire team on a dedicated basis, working exclusively on your project during business hours. Dedicated developers integrate with your existing team, follow your processes, and report directly to you. It is the most cost-effective way to scale your development capacity quickly.",
  },
  {
    column: "right",
    tag: "Quality",
    question: "How do you ensure the quality of your software?",
    answer:
      "Quality is built into every stage of our process not added at the end. We conduct code reviews, write unit and integration tests, perform manual QA testing, run automated regression testing, and carry out security audits before every release. Our QA team works in parallel with development to catch issues early, which keeps costs low and launch timelines on schedule.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Is my project idea safe with you? Do you sign NDAs?",
    answer:
      "Yes absolutely. We sign a mutual Non-Disclosure Agreement (NDA) before any project discussion begins. Your idea, your business data, and all project details are fully confidential. Our team follows strict internal data security policies and we are happy to involve your legal team in reviewing our standard NDA.",
  },
];
