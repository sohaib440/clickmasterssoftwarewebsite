import type { LucideIcon } from "lucide-react";
import { Mail, Share2 } from "lucide-react";

import { siteBrand } from "@/lib/landing/brand";
import {
  aboutPath,
  caseStudyPath,
  contactPath,
  industriesPath,
  projectPath,
  teamPath,
} from "@/lib/landing/constants";

import type { NavChild, NavLink } from "./types";

export type { NavChild, NavLink };

export const navLinks: readonly NavLink[] = [
  {
    label: "About",
    href: aboutPath,
    children: [{ label: "Our Team", href: teamPath }],
  },
  { label: "Services", href: "/software-development" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: projectPath },
  { label: "Industries", href: industriesPath },
  { label: "Contact", href: contactPath },
  {
    label: "Resources",
    href: "/#",
    children: [
      { label: "Blogs", href: "/blog" },
      { label: "Case Study", href: caseStudyPath },
    ],
  },
];

export const navCtaLabel = "Get a Free Quote";


export const footerBrand = {
  description:
    "A globally trusted software development company headquartered in Pakistan. Building software that lasts for clients in the USA, UK, UAE, Canada, Australia, and beyond.",
  copyright: "© 2026 Software Development Company. All rights reserved.",
} as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "Web Development", href: "/web-development" },
      { label: "Mobile Development", href: "/mobile-app-development" },
      { label: "UI/UX Design", href: "/design-ux" },
      { label: "E-Commerce Development", href: "/solutions/ecommerce" },
      { label: "AI & Automation", href: "/solutions/ai-agent" },
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "QA & Testing", href: "/software-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: aboutPath },
      { label: "Our Work", href: projectPath },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: contactPath },
      { label: "Contact", href: contactPath },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "Clutch", href: "https://clutch.co" },
    ],
  },
];

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { label: "GitHub", href: "https://github.com", icon: Share2 },
  { label: "Email", href: `mailto:${siteBrand.email}`, icon: Mail },
];
