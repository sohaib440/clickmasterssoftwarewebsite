import { faqs } from "@/data/landingPage";
import { faqPageJsonLd, organizationJsonLd } from "@/lib/landing/structured-data";

export function HomeJsonLd() {
  const schemas = [organizationJsonLd(), faqPageJsonLd(faqs)];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
