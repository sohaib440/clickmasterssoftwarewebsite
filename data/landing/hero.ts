import { BarChart3, Rocket, Shield } from "lucide-react";

import { projectPath } from "@/lib/landing/constants";

export const homeHero = {
  eyebrow: "Software house & software company",
  headlineBefore: "We build",
  headlineEmphasis: "powerful software",
  headlineAfter:
    "as a leading software development company businesses depend on",
  subtextBefore:
    "A top rated software house and leading software company empowering startups, SMBs, and enterprises worldwide with ",
  subtextHighlight: "scalable, secure, and innovative",
  subtextAfter:
    " web apps, mobile apps, AI features, CRM, ERP, SaaS platforms, cloud systems, and DevOps workflows that drive measurable growth.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "View Our Work",
  secondaryHref: projectPath,
} as const;

export const heroFeatures = [
  { icon: Rocket, label: "Scalable Solutions" },
  { icon: Shield, label: "Secure & Reliable" },
  { icon: BarChart3, label: "Business Growth" },
] as const;

export const heroBackgroundVideo = "/heroSection/software-development-company.mp4";

export const heroCtaForm = {
  title: "Get a free quote",
  subtitle: "Share your details and we'll respond within one business day.",
  submitLabel: "Send message",
} as const;
