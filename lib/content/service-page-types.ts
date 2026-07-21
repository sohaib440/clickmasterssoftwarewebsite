import type {
  ApproachStep,
  ContentBlock,
  ContentImage,
} from "@/lib/content/types";

export type ServiceBreadcrumb = {
  label: string;
  href?: string;
};

export type ServiceOfferingItem = {
  label: string;
  description: string;
  href: string;
  image?: ContentImage;
};

export type ServiceRelatedItem = {
  label: string;
  tagline: string;
  href: string;
};

export type ServiceHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: ContentImage;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type ServiceCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

/** Main category pages full marketing hub at /{slug} */
export type MainServicePageContent = {
  mainSlug: string;
  breadcrumbs: ServiceBreadcrumb[];
  hero: ServiceHeroContent;
  /** Sub-services for the current main category */
  capabilities: {
    title: string;
    subtitle?: string;
    items: ServiceOfferingItem[];
  };
  highlights: {
    title: string;
    items: ContentBlock[];
  };
  approach: {
    title: string;
    steps: ApproachStep[];
  };
  related?: {
    title: string;
    items: ServiceRelatedItem[];
  };
  cta: ServiceCtaContent;
};

/** Sub-category pages focused detail at /{main}/{sub} */
export type SubServicePageContent = {
  mainSlug: string;
  parent: { label: string; href: string };
  breadcrumbs: ServiceBreadcrumb[];
  hero: ServiceHeroContent;
  contentParagraphs: string[];
  highlights: {
    title: string;
    items: ContentBlock[];
  };
  approach: {
    title: string;
    steps: ApproachStep[];
  };
  relatedSubs: {
    title: string;
    items: ServiceOfferingItem[];
  };
  cta: ServiceCtaContent;
};

export type { ApproachStep, ContentBlock, ContentImage };
