import { BarChart3, Rocket, Shield } from "lucide-react";

import { projectPath } from "@/lib/landing/constants";

import type { HeroImageAsset } from "./types";

export type { HeroImageAsset };

export const homeHero = {
  eyebrow: "Leading Software Development Company in Pakistan",
  headlineBefore: "We build",
  headlineEmphasis: "powerful software",
  headlineAfter: "that businesses depend on",
  subtextBefore: "Empowering startups, SMBs, and enterprises worldwide with ",
  subtextHighlight: "scalable, secure, and innovative",
  subtextAfter: " digital solutions that drive growth and create real impact.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "View Our Work",
  secondaryHref: projectPath,
} as const;

export const heroFeatures = [
  { icon: Rocket, label: "Scalable Solutions" },
  { icon: Shield, label: "Secure & Reliable" },
  { icon: BarChart3, label: "Business Growth" },
] as const;

export const heroBackgroundVideo = "/heroSection/software development company.mp4";

export const heroCtaForm = {
  title: "Get a free quote",
  subtitle: "Share your details and we'll respond within one business day.",
  submitLabel: "Send message",
} as const;


export const heroImages: HeroImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75",
    alt: "Laptop with code on a bright desk",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=480&q=75",
    alt: "Developer working at a monitor",
    width: 480,
    height: 600,
    caption: "Clean. Scalable. Efficient Code",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=75",
    alt: "Analytics dashboard on screen",
    width: 480,
    height: 360,
    caption: "Data-Driven Solutions",
  },
];
