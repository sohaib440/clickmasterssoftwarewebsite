import type { Metadata } from "next";

import { SolutionsIndexPage } from "@/components/solutions/solutions-index-page";
import { getAllSolutions, solutionPath } from "@/lib/content/solutions";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, itemListSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore product solutions we've built: ERP, CRM, AI agents, HRMS, inventory, e-commerce, analytics, and workflow automation.",
  ...selfCanonical("/solutions"),
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();
  const schemas = [
    itemListSchema({
      name: "Software Solutions",
      description:
        "Explore product solutions we've built: ERP, CRM, AI agents, HRMS, inventory, e-commerce, analytics, and workflow automation.",
      path: "/solutions",
      items: solutions.map((solution) => ({
        name: solution.label,
        path: solutionPath(solution.slug),
      })),
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SolutionsIndexPage />
    </>
  );
}
