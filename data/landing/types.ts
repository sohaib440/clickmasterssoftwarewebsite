// Shared landing page content types

import type { LucideIcon } from "lucide-react";

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type RatingBadge = {
  slug: string;
  name: string;
  logo: string;
};

export type ContactSelectOption = {
  value: string;
  label: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HeroImageAsset = ImageAsset & {
  caption?: string;
};

export type ServiceSubItem = { label: string; slug: string; href: string };

export type ServiceCategory = {
  label: string;
  slug: string;
  href: string;
  description?: string;
  items: ServiceSubItem[];
};

export type Technology = {
  name: string;
  color: string;
};

export type TechStackTab = {
  id: string;
  label: string;
  items: string[];
};

export type TechStackLogoGroup = {
  id: string;
  label: string;
  description: string;
  logoIds: string[];
};

/** @deprecated Used only if legacy stack UI is restored */
export type TechStackCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "peach" | "navy" | "cream";
  technologies: Technology[];
};

export type Client = {
  slug: string;
  name: string;
  logo: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: ImageAsset;
  body: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  column: "left" | "right";
};
