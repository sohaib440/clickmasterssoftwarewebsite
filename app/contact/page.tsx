import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";
import { parseContactSearchParams } from "@/lib/landing/contact-form-state";

export const metadata: Metadata = {
  title: "Contact | Nexus Software",
  description:
    "Get in touch with Nexus Software. We reply within one business day about your product or project.",
};

export default async function ContactRoute({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initialValues = parseContactSearchParams(params);

  return <ContactPage initialValues={initialValues} />;
}
