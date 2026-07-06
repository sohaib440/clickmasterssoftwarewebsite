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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteBrand.url}${item.path}`,
    })),
  };
}

export function servicePageOrganizationJsonLd() {
  return {
    ...organizationJsonLd(),
    "@type": ["Organization", "ProfessionalService"],
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    knowsAbout: [
      "Custom software development",
      "Enterprise software development",
      "SaaS development",
      "Dedicated development teams",
    ],
  };
}
