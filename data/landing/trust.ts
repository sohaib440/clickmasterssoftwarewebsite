import type { Client, RatingBadge } from "./types";

export type { Client, RatingBadge };

export const trustedPartnersSection: { label: string; fallbackText: string } = {
  label: "",
  fallbackText: "",
};

export const ratingBadges: RatingBadge[] = [
  { slug: "facebook", name: "Facebook" },
  { slug: "clutch", name: "Clutch" },
  { slug: "trustpilot", name: "Trustpilot" },
  { slug: "google", name: "Google" },
];

/**
 * Single source of truth for company numbers sitewide (homepage, locations, about).
 * Keep these identical everywhere — do not invent alternate project/engineer counts.
 */
export const companyStats = [
  {
    value: "500+",
    label: "Happy Clients",
    detail:
      "Founders and operators who hired us for custom software, HMS, ERP, and digital products across Pakistan and internationally.",
    icon: "users" as const,
  },
  {
    value: "7+",
    label: "Years of Experience",
    detail:
      "Seven-plus years building production software with senior engineers, designers, and QA since our founding in 2019.",
    icon: "briefcase" as const,
  },
  {
    value: "20+",
    label: "Software Engineers",
    detail:
      "A delivery team of 20+ software engineers, designers, and specialists shipping client products.",
    icon: "code" as const,
  },
  {
    value: "10+",
    label: "Countries Served",
    detail:
      "Delivery for clients in Pakistan and overseas markets including the USA, UK, UAE, Canada, and Australia.",
    icon: "globe" as const,
  },
] as const;

/** Homepage / about badge strip — same numbers as companyStats */
export const stats = companyStats.map(({ value, label, icon }) => ({
  value,
  label,
  icon,
}));

export const clients: Client[] = [
  { slug: "google", name: "Google", logo: "/trustedPartners/google.svg" },
  { slug: "microsoft", name: "Microsoft", logo: "/trustedPartners/microsoft.svg" },
  { slug: "amazon", name: "Amazon", logo: "/trustedPartners/amazon.svg" },
  { slug: "apple", name: "Apple", logo: "/trustedPartners/apple.svg" },
  { slug: "meta", name: "Meta", logo: "/trustedPartners/meta.svg" },
  { slug: "netflix", name: "Netflix", logo: "/trustedPartners/netflix.svg" },
  { slug: "adobe", name: "Adobe", logo: "/trustedPartners/adobe.svg" },
  { slug: "salesforce", name: "Salesforce", logo: "/trustedPartners/salesforce.svg" },
  { slug: "ibm", name: "IBM", logo: "/trustedPartners/ibm.svg" },
  { slug: "intel", name: "Intel", logo: "/trustedPartners/intel.svg" },
  { slug: "nvidia", name: "Nvidia", logo: "/trustedPartners/nvidia.svg" },
  { slug: "tesla", name: "Tesla", logo: "/trustedPartners/tesla.svg" },
  { slug: "shopify", name: "Shopify", logo: "/trustedPartners/shopify.svg" },
  { slug: "slack", name: "Slack", logo: "/trustedPartners/slack.svg" },
  { slug: "oracle", name: "Oracle", logo: "/trustedPartners/oracle.svg" },
  { slug: "cisco", name: "Cisco", logo: "/trustedPartners/cisco.svg" },
];
