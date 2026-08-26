import Link from "next/link";
import type { ReactNode } from "react";

import { industryPath } from "@/data/industries";

const LINK_CLASS =
  "font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-[#b8941f] hover:decoration-[#b8941f]";

type PhraseLink = {
  phrase: string;
  href: string;
};

const PHRASES: PhraseLink[] = [
  { phrase: "healthcare software development", href: "/healthcare-software-development" },
  { phrase: "custom software development", href: "/software-development/custom-software-development" },
  { phrase: "software development company", href: "/software-development" },
  { phrase: "enterprise solutions", href: "/enterprise-solutions" },
  { phrase: "ecommerce development", href: "/ecommerce-development" },
  { phrase: "mobile app development", href: "/mobile-development" },
  { phrase: "web development", href: "/web-development" },
  { phrase: "cloud & devops", href: "/cloud-devops" },
  { phrase: "cloud and devops", href: "/cloud-devops" },
  { phrase: "business intelligence", href: "/data-business-intelligence" },
  { phrase: "artificial intelligence", href: "/artificial-intelligence" },
  { phrase: "machine learning", href: "/machine-learning" },
  { phrase: "automation services", href: "/automation-services" },
  { phrase: "testing & qa", href: "/testing-and-qa" },
  { phrase: "testing and qa", href: "/testing-and-qa" },
  { phrase: "ui/ux design", href: "/ui-ux-design" },
  { phrase: "inventory management", href: "/solutions/inventory-management" },
  { phrase: "workflow automation", href: "/solutions/workflow-automation" },
  { phrase: "ecommerce platform", href: "/solutions/ecommerce-platform" },
  { phrase: "hospital management", href: "/projects/hospital-management-system" },
  { phrase: "health & fitness", href: "/industries/health-fitness" },
  { phrase: "real estate", href: "/industries/real-estate" },
  { phrase: "manufacturing", href: "/industries/manufacturing" },
  { phrase: "cybersecurity", href: "/cybersecurity" },
  { phrase: "telehealth", href: "/healthcare-software-development" },
  { phrase: "case studies", href: "/case-study" },
  { phrase: "software house", href: "/software-development" },
  { phrase: "custom software", href: "/software-development" },
  { phrase: "software development", href: "/software-development" },
  { phrase: "mobile apps", href: "/mobile-development" },
  { phrase: "ecommerce", href: "/ecommerce-development" },
  { phrase: "e-commerce", href: "/ecommerce-development" },
  { phrase: "consulting", href: "/industries/consulting" },
  { phrase: "hospitality", href: "/industries/hospitality" },
  { phrase: "agriculture", href: "/industries/agriculture" },
  { phrase: "healthcare", href: "/industries/healthcare" },
  { phrase: "education", href: "/industries/education" },
  { phrase: "insurance", href: "/industries/insurance" },
  { phrase: "logistics", href: "/industries/logistics" },
  { phrase: "technology", href: "/industries/technology" },
  { phrase: "banking", href: "/industries/banking" },
  { phrase: "finance", href: "/industries/finance" },
  { phrase: "retail", href: "/industries/retail" },
  { phrase: "media", href: "/industries/media" },
  { phrase: "fitness", href: "/industries/health-fitness" },
  { phrase: "hotels", href: "/industries/hospitality" },
  { phrase: "cloud", href: "/cloud-devops" },
  { phrase: "devops", href: "/cloud-devops" },
  { phrase: "erp", href: "/solutions/erp" },
  { phrase: "crm", href: "/solutions/crm" },
  { phrase: "hms", href: "/healthcare-software-development" },
  { phrase: "lms", href: "/industries/education" },
  { phrase: "pos", href: "/ecommerce-development" },
  { phrase: "iot", href: "/cloud-devops" },
  { phrase: "kyc", href: "/industries/banking" },
  { phrase: "mes", href: "/solutions/erp" },
];

const SORTED_PHRASES = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);

export const industryRelatedLinks: Record<string, { label: string; href: string }[]> = {
  manufacturing: [
    { label: "Software development", href: "/software-development" },
    { label: "Enterprise solutions", href: "/enterprise-solutions" },
    { label: "ERP systems", href: "/solutions/erp" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
  ],
  healthcare: [
    { label: "Healthcare software", href: "/healthcare-software-development" },
    { label: "Mobile app development", href: "/mobile-development" },
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "UI/UX design", href: "/ui-ux-design" },
  ],
  retail: [
    { label: "Ecommerce development", href: "/ecommerce-development" },
    { label: "Web development", href: "/web-development" },
    { label: "Ecommerce platforms", href: "/solutions/ecommerce-platform" },
    { label: "Inventory management", href: "/solutions/inventory-management" },
  ],
  "real-estate": [
    { label: "Custom software", href: "/software-development" },
    { label: "CRM systems", href: "/solutions/crm" },
    { label: "Web development", href: "/web-development" },
    { label: "Mobile apps", href: "/mobile-development" },
  ],
  education: [
    { label: "Software development", href: "/software-development" },
    { label: "Mobile app development", href: "/mobile-development" },
    { label: "UI/UX design", href: "/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
  ],
  finance: [
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "Software development", href: "/software-development" },
    { label: "Data & BI", href: "/data-business-intelligence" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
  ],
  logistics: [
    { label: "Software development", href: "/software-development" },
    { label: "Mobile app development", href: "/mobile-development" },
    { label: "Inventory management", href: "/solutions/inventory-management" },
    { label: "Workflow automation", href: "/solutions/workflow-automation" },
  ],
  media: [
    { label: "Web development", href: "/web-development" },
    { label: "UI/UX design", href: "/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
    { label: "Software development", href: "/software-development" },
  ],
  banking: [
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "Software development", href: "/software-development" },
    { label: "CRM systems", href: "/solutions/crm" },
    { label: "Testing & QA", href: "/testing-and-qa" },
  ],
  agriculture: [
    { label: "Software development", href: "/software-development" },
    { label: "Data & BI", href: "/data-business-intelligence" },
    { label: "Mobile apps", href: "/mobile-development" },
    { label: "IoT & cloud", href: "/cloud-devops" },
  ],
  hospitality: [
    { label: "Software development", href: "/software-development" },
    { label: "Mobile app development", href: "/mobile-development" },
    { label: "Ecommerce / POS", href: "/ecommerce-development" },
    { label: "UI/UX design", href: "/ui-ux-design" },
  ],
  "health-fitness": [
    { label: "Mobile app development", href: "/mobile-development" },
    { label: "Software development", href: "/software-development" },
    { label: "UI/UX design", href: "/ui-ux-design" },
    { label: "Healthcare software", href: "/healthcare-software-development" },
  ],
  technology: [
    { label: "Software development", href: "/software-development" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
    { label: "Artificial intelligence", href: "/artificial-intelligence" },
    { label: "Testing & QA", href: "/testing-and-qa" },
  ],
  insurance: [
    { label: "Software development", href: "/software-development" },
    { label: "Workflow automation", href: "/solutions/workflow-automation" },
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "Data & BI", href: "/data-business-intelligence" },
  ],
  consulting: [
    { label: "Software development", href: "/software-development" },
    { label: "CRM systems", href: "/solutions/crm" },
    { label: "Business analytics", href: "/solutions/business-analytics" },
    { label: "Web development", href: "/web-development" },
  ],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function currentPaths(slug: string) {
  const path = industryPath(slug);
  return new Set([path, `${path}/`]);
}

export function applyIndustryLinks(text: string, slug: string, used: Set<string>): string {
  const skip = currentPaths(slug);
  let next = text;

  for (const { phrase, href } of SORTED_PHRASES) {
    if (skip.has(href) || used.has(phrase)) continue;
    const pattern = new RegExp(`(?<![\\w/])(${escapeRegExp(phrase)})(?![\\w/])`, "i");
    const match = pattern.exec(next);
    if (!match || match.index === undefined) continue;
    if (next.slice(Math.max(0, match.index - 2), match.index) === "](") continue;
    if (next[match.index - 1] === "[") continue;

    const original = match[1];
    next = `${next.slice(0, match.index)}[${original}](${href})${next.slice(match.index + original.length)}`;
    used.add(phrase);
  }

  return next;
}

export function renderIndustryLinks(text: string, slug: string, used: Set<string>): ReactNode {
  const linked = applyIndustryLinks(text, slug, used);
  const parts = linked.split(/(\[[^\]]+\]\([^)]+\))/g);

  if (parts.length === 1) return linked;

  return parts.map((part, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!match) return part;
    return (
      <Link key={`${match[2]}-${index}`} href={match[2]} className={LINK_CLASS}>
        {match[1]}
      </Link>
    );
  });
}
