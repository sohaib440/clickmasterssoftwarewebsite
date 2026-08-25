import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";
import { siteBrand } from "@/lib/landing/brand";
import { parseContactSearchParams } from "@/lib/landing/contact-form-state";
import { selfCanonical } from "@/seo/canonical";
import {
  breadcrumbSchema,
  contactPageSchema,
  jsonLdGraph,
  localBusinessSchema,
  organizationSchema,
} from "@/seo/schema";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: `Start your project with ${siteBrand.name}. WhatsApp, call, email, or request a quote — we reply within one business day.`,
  ...selfCanonical("/contact"),
};

export default async function ContactRoute({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initialValues = parseContactSearchParams(params);

  const schemas = jsonLdGraph([
    organizationSchema,
    localBusinessSchema,
    contactPageSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ]);

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
