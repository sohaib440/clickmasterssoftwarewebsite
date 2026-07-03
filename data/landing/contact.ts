import { siteBrand } from "@/lib/landing/brand";

import type { ContactFormData, ContactSelectOption } from "./types";

export type { ContactFormData, ContactSelectOption };

export const contactInfo = {
  email: siteBrand.email,
  responseTime: "Within 24 hours",
  hours: "Monday – Friday, 9:00 – 18:00 (PKT)",
  location: siteBrand.location,
} as const;


export const contactProjectTypes: ContactSelectOption[] = [
  { value: "custom-software", label: "Custom software / product" },
  { value: "erp", label: "Enterprise resource planning system" },
  { value: "crm", label: "Customer relationship management platform" },
  { value: "ai-agent", label: "Artificial intelligence agent / automation" },
  { value: "mobile-app", label: "Mobile application" },
  { value: "ecommerce", label: "E-commerce platform" },
  { value: "integration", label: "Integration / API work" },
  { value: "other", label: "Other" },
];

export const contactBudgetRanges: ContactSelectOption[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const contactTimelineOptions: ContactSelectOption[] = [
  { value: "asap", label: "As soon as possible / within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible / exploring" },
];


export const homeContact = {
  overline: "Start here",
  titleBefore: "Let's build your",
  titleEmphasis: "next big thing",
  subtext:
    "Tell us about your project. We will get back to you within 24 hours with a clear path forward: no obligation, no sales pressure.",
  emailPlaceholder: "Your email address",
  cta: "Get Started",
  reassurance: "Free consultation · No commitment · Based in Islamabad, Pakistan",
} as const;
