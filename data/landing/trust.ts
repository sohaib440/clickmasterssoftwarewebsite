import type { Client, RatingBadge } from "./types";

export type { Client, RatingBadge };

export const trustedPartnersSection: { label: string; fallbackText: string } = {
  label: "",
  fallbackText:
    "",
};


export const ratingBadges: RatingBadge[] = [
  { slug: "facebook", name: "Facebook", logo: "/ratings/facebook-rating.webp" },
  { slug: "clutch", name: "Clutch", logo: "/ratings/clutch-rating.webp" },
  { slug: "trustpilot", name: "Trustpilot", logo: "/ratings/trustpilot.webp" },
  { slug: "google", name: "Google", logo: "/ratings/google-rating.webp" },
];


export const stats = [
  { value: "50+", label: "Happy Clients", icon: "users" as const },
  { value: "4+", label: "Years of Experience", icon: "briefcase" as const },
  { value: "10+", label: "Countries Served", icon: "layers" as const },
  { value: "98%", label: "Client Satisfaction", icon: "shield-check" as const },
];

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
