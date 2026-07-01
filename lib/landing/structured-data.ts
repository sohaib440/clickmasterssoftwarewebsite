import { siteBrand } from "@/lib/landing/brand";
import type { FaqItem } from "@/data/landingPage";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteBrand.name,
    url: siteBrand.url,
    email: siteBrand.email,
    telephone: siteBrand.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    description: siteBrand.name + " software development company in Islamabad, Pakistan.",
    areaServed: ["PK", "GB", "AE", "US", "CA"],
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
