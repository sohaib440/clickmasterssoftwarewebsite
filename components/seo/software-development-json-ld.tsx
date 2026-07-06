import { softwareDevelopmentFaqs } from "@/data/softwareDevelopmentPage";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  servicePageOrganizationJsonLd,
} from "@/lib/landing/structured-data";

export function SoftwareDevelopmentJsonLd() {
  const schemas = [
    servicePageOrganizationJsonLd(),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/software-development" },
      { name: "Software Development", path: "/software-development" },
    ]),
    faqPageJsonLd(softwareDevelopmentFaqs),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
