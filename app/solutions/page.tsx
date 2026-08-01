import type { Metadata } from "next";

import { SolutionsIndexPage } from "@/components/solutions/solutions-index-page";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: "Solutions | Software Development Company Software",
  description:
    "Explore product solutions we've built: ERP, CRM, AI agents, HRMS, inventory, e-commerce, analytics, and workflow automation.",
  ...selfCanonical("/solutions"),
};

export default function SolutionsPage() {
  return <SolutionsIndexPage />;
}
