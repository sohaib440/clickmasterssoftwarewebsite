import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryDetailPage } from "@/components/industries/industry-detail-page";
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
  industryPath,
  isIndustrySlug,
} from "@/data/industries";
import { siteBrand } from "@/lib/landing/brand";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not found" };

  const path = industryPath(slug);

  return {
    title: pageTitle(industry.pageTitle),
    description: industry.metaDescription,
    ...selfCanonical(path),
    openGraph: {
      title: pageTitleString(industry.pageTitle),
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustryRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!isIndustrySlug(slug)) {
    notFound();
  }

  const industry = getIndustryBySlug(slug);
  if (!industry) {
    notFound();
  }

  const path = industryPath(slug);
  const schemas = [
    serviceSchema({
      name: `${industry.label} Software Development`,
      description: industry.metaDescription,
      path,
      serviceType: `${industry.label} software`,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: industry.label, path },
    ]),
    ...(industry.faqs.length
      ? [
          faqPageSchema(
            industry.faqs.map((faq, index) => ({
              question: faq.question,
              answer: faq.answer,
              tag: industry.label,
              column: index % 2 === 0 ? "left" : "right",
            })),
            {
              id: `${siteBrand.url}${path}#faq`,
              pageUrl: `${siteBrand.url}${path}`,
            }
          ),
        ]
      : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <IndustryDetailPage industry={industry} />
    </>
  );
}
