import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";
import { siteBrand, siteMetadata } from "@/lib/landing/brand";
import { parseContactSearchParams } from "@/lib/landing/contact-form-state";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, contactPageSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: `Contact | ${siteBrand.name}`,
  description: `Contact ${siteBrand.name} in ${siteBrand.location}. ${siteMetadata.description}`,
  ...selfCanonical("/contact"),
};

export default async function ContactRoute({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initialValues = parseContactSearchParams(params);

  const schemas = [
    contactPageSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ContactPage initialValues={initialValues} />
    </>
  );
}
