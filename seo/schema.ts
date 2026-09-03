/**
 * Schema.org JSON-LD for Next Software Development Company.
 *
 * Static schemas = plain objects (easy to read).
 * Dynamic schemas = small helpers when the page needs data (blog, project, city).
 *
 * Usage on a page:
 *   import { organizationSchema, localBusinessSchema, webSiteSchema, homepageFaqSchema, jsonLdGraph } from "@/seo/schema";
 *   const schemas = jsonLdGraph([organizationSchema, localBusinessSchema, webSiteSchema, homepageFaqSchema]);
 *
 * NOTE: professionalServiceSchema and teamPageSchema are meant to REPLACE
 * organizationSchema on their respective pages (service pages, team page) — not
 * be combined with it. The homepage uses organizationSchema + localBusinessSchema
 * together (linked via parentOrganization / @id). Each has its own @id so they
 * won't collide; avoid duplicating the same entity with conflicting @type arrays
 * under one @id on other pages.
 */

import type { FaqItem, ImageAsset } from "@/data/landingPage";
import { homepageFaqs } from "@/data/landingPage";
import { siteBrand, siteMetadata, siteSocial } from "@/lib/landing/brand";

/** Short alias so schemas read like the examples — all values come from site brand/content */
const siteConfig = {
  name: siteBrand.name,
  shortName: siteBrand.shortName,
  legalName: siteBrand.legalName,
  url: siteBrand.url,
  email: siteBrand.email,
  /** Display phone as shown on the site */
  phone: siteBrand.phone,
  /** E.164 for Schema.org telephone where a machine-readable form helps */
  phoneE164: siteBrand.phoneE164,
  logoUrl: `${siteBrand.url}${siteBrand.logo.src}`,
  logoWidth: siteBrand.logo.width,
  logoHeight: siteBrand.logo.height,
  description: siteMetadata.description,
  locationLabel: siteBrand.location,
} as const;

const logoImageObject = {
  "@type": "ImageObject",
  url: siteConfig.logoUrl,
  width: siteConfig.logoWidth,
  height: siteConfig.logoHeight,
  caption: siteBrand.logo.alt,
} as const;

/** Representative business / about photo (not the logo) */
const organizationImageUrl = `${siteBrand.url}/about-us/software-development-company.webp`;

/** HQ address — only fields confirmed on the site (Islamabad, Pakistan). No invented street. */
const hqAddress = {
  "@type": "PostalAddress",
  addressLocality: "Islamabad",
  addressRegion: "Islamabad Capital Territory",
  addressCountry: "PK",
} as const;

const socialProfiles = Object.values(siteSocial);

const countriesServed = [
  { "@type": "Country", name: "Pakistan" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
] as const;

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "09:00",
  closes: "18:00",
} as const;

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${siteConfig.url}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/**
 * Pack page entities into one JSON-LD document Google/validators can confirm.
 * Strips per-node `@context` so the graph has a single context.
 */
export function jsonLdGraph(
  nodes: Array<Record<string, unknown>>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const rest = { ...node };
      delete rest["@context"];
      return rest;
    }),
  };
}

// ---------------------------------------------------------------------------
// Organization – sitewide / homepage / location pages
// ---------------------------------------------------------------------------

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,

  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: logoImageObject,
  image: organizationImageUrl,

  description: siteConfig.description,
  foundingDate: "2019",
  foundingLocation: {
    "@type": "Place",
    name: "Islamabad, Pakistan",
    address: hqAddress,
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 20,
  },

  address: hqAddress,

  email: siteConfig.email,
  telephone: siteConfig.phoneE164,

  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
    areaServed: [...countriesServed],
    url: `${siteConfig.url}/contact`,
  },

  sameAs: [...socialProfiles],

  areaServed: [...countriesServed],

  knowsAbout: [
    "Web application development",
    "Mobile app development",
    "SaaS development",
    "CRM development",
    "ERP development",
    "Healthcare software",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud and DevOps",
    "UI/UX design",
    "Software testing and QA",
  ],
};

// ---------------------------------------------------------------------------
// WebSite – homepage
// ---------------------------------------------------------------------------

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,

  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: `${siteConfig.url}/`,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  creator: {
    "@id": `${siteConfig.url}/#organization`,
  },
  copyrightHolder: {
    "@id": `${siteConfig.url}/#organization`,
  },
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
  about: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "en",
  // No SearchAction — the site does not have a /search page yet.
};

// ---------------------------------------------------------------------------
// Service catalog – homepage (matches real service routes in data/services.tsx)
// ---------------------------------------------------------------------------

export const homepageServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/#primary-service`,

  name: "Software Engineering & Product Development",
  serviceType: "Software Engineering",
  description:
    "Web application development, mobile app development, AI solutions, CRM, ERP, SaaS platforms, cloud, and DevOps services for businesses worldwide.",
  url: siteConfig.url,

  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
  },

  areaServed: [...countriesServed],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
          description:
            "Senior-led application development for startups and enterprises.",
          url: `${siteConfig.url}/software-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android apps with native quality and scalable delivery.",
          url: `${siteConfig.url}/mobile-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Modern web applications built for performance, SEO, and scale.",
          url: `${siteConfig.url}/web-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ecommerce Development",
          description: "Storefronts, marketplaces, and checkout systems engineered for conversion.",
          url: `${siteConfig.url}/ecommerce-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "UX research, UI systems, prototyping, and design that ships with engineering.",
          url: `${siteConfig.url}/ui-ux-design`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Artificial Intelligence",
          description: "AI-powered product features and intelligent automation systems.",
          url: `${siteConfig.url}/artificial-intelligence`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Machine Learning",
          description: "Practical ML models trained and deployed for real product use.",
          url: `${siteConfig.url}/machine-learning`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation Services",
          description: "Workflow, RPA, and document automation across business systems.",
          url: `${siteConfig.url}/automation-services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps",
          description:
            "Cloud infrastructure, CI/CD pipelines, and reliable deployment platforms.",
          url: `${siteConfig.url}/cloud-devops`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data & Business Intelligence",
          description:
            "Data pipelines, analytics dashboards, and reporting platforms businesses trust.",
          url: `${siteConfig.url}/data-business-intelligence`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cybersecurity",
          description: "Application security, audits, and compliance readiness.",
          url: `${siteConfig.url}/cybersecurity`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Solutions",
          description: "ERP, CRM, and internal platforms for complex business workflows.",
          url: `${siteConfig.url}/enterprise-solutions`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blockchain Development",
          description: "Smart contracts, dApps, and Web3 integrations for product teams.",
          url: `${siteConfig.url}/blockchain-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Healthcare Software Development",
          description: "Hospital, clinic, and telemedicine platforms for care teams.",
          url: `${siteConfig.url}/healthcare-software-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AR/VR Development",
          description: "Augmented and virtual reality experiences for training and retail.",
          url: `${siteConfig.url}/ar-vr-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Testing & QA",
          description: "Manual and automated quality assurance for reliable releases.",
          url: `${siteConfig.url}/testing-and-qa`,
        },
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// LocalBusiness – HQ in Islamabad (confirmed location on the site)
// ---------------------------------------------------------------------------

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteConfig.url}/#localbusiness`,

  name: siteConfig.name,
  url: siteConfig.url,
  logo: logoImageObject,
  image: organizationImageUrl,
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  description: siteConfig.description,
  priceRange: "$$",

  address: hqAddress,

  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6844,
    longitude: 73.0479,
  },

  openingHoursSpecification: [openingHours],

  areaServed: [...countriesServed],

  parentOrganization: {
    "@id": `${siteConfig.url}/#organization`,
  },

  sameAs: [...socialProfiles],

  knowsAbout: organizationSchema.knowsAbout,
};

/**
 * Location structured data.
 *
 * - Pakistan country hub only: full LocalBusiness with real Islamabad HQ address/geo.
 * - Other country pages + city pages: Service + areaServed only — never LocalBusiness
 *   with Islamabad coordinates (looks like fake local presence when scaled abroad).
 */
export function locationLocalBusinessSchema(options: {
  /** e.g. "Pakistan" or "Lahore" */
  areaServedName: string;
  areaServedType: "Country" | "City";
  /** Absolute or site-relative page URL */
  pageUrl: string;
  description: string;
  /** Unique suffix for @id, e.g. "pakistan" or "lahore" */
  idSuffix: string;
}) {
  const pageUrl = absoluteUrl(options.pageUrl);
  const isPakistanHq =
    options.areaServedType === "Country" &&
    options.areaServedName.toLowerCase() === "pakistan";

  const areaServed =
    options.areaServedType === "Country"
      ? { "@type": "Country" as const, name: options.areaServedName }
      : {
          "@type": "City" as const,
          name: options.areaServedName,
          containedInPlace: {
            "@type": "Country" as const,
            name: "Pakistan",
          },
        };

  // Non-HQ markets: Service schema only (no Islamabad address/geo on foreign pages).
  if (!isPakistanHq) {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-area-${options.idSuffix}`,
      name: `${siteConfig.name} — software development for ${options.areaServedName}`,
      serviceType: "Software development",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      url: pageUrl,
      description: options.description,
      areaServed,
    };
  }

  return {
    ...localBusinessSchema,
    "@id": `${siteConfig.url}/#localbusiness-${options.idSuffix}`,
    url: pageUrl,
    description: options.description,
    areaServed,
  };
}

/** Organization + ProfessionalService – service landing pages */
export const professionalServiceSchema = {
  ...organizationSchema,
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#service-provider`,
  areaServed: [...countriesServed],
};

// ---------------------------------------------------------------------------
// Dynamic helpers – still easy to read; pass page data in
// ---------------------------------------------------------------------------

/** FAQPage from any FaqItem[] (faqs page, locations, projects, services) */
export function faqPageSchema(faqItems: FaqItem[], options?: { id?: string; pageUrl?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": options?.id ?? `${siteConfig.url}/#faq`,
    mainEntityOfPage: options?.pageUrl,
    inLanguage: "en",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Homepage FAQ – matches the FAQ section on / */
export const homepageFaqSchema = faqPageSchema(homepageFaqs, {
  id: `${siteConfig.url}/#faq`,
  pageUrl: `${siteConfig.url}/`,
});

/** BreadcrumbList – nested pages */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Service – one main or sub service page */
export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    serviceType: options.serviceType ?? options.name,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

/** SoftwareApplication – solutions (ERP, CRM, HRMS, …) */
export function softwareApplicationSchema(options: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
  image?: string | ImageAsset;
}) {
  const imageUrl =
    typeof options.image === "string"
      ? absoluteUrl(options.image)
      : options.image
        ? absoluteUrl(options.image.src)
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    applicationCategory: options.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    image: imageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Custom quote after a free discovery call — pricing depends on scope",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/contact`,
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

/** CreativeWork + SoftwareApplication – project detail pages */
export function projectSchema(options: {
  name: string;
  description: string;
  path: string;
  category?: string;
  image?: string | ImageAsset;
}) {
  const imageUrl =
    typeof options.image === "string"
      ? absoluteUrl(options.image)
      : options.image
        ? absoluteUrl(options.image.src)
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": ["CreativeWork", "SoftwareApplication"],
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    genre: options.category,
    image: imageUrl,
    applicationCategory: options.category ?? "BusinessApplication",
    creator: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** VideoObject – YouTube embeds on project pages */
export function videoObjectSchema(options: {
  name: string;
  youtubeId: string;
  description?: string;
  uploadDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: options.name,
    description: options.description ?? options.name,
    thumbnailUrl: `https://i.ytimg.com/vi/${options.youtubeId}/hqdefault.jpg`,
    uploadDate: options.uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${options.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${options.youtubeId}`,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** BlogPosting – /blog/[slug] */
export function blogPostingSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string | ImageAsset;
  category?: string;
  /** Required real person — never the company name */
  authorName: string;
  authorUrl: string;
  authorRole?: string;
  authorBio?: string;
  authorImage?: string | ImageAsset;
  reviewerName?: string;
  reviewerRole?: string;
}) {
  const imageUrl =
    typeof options.image === "string"
      ? absoluteUrl(options.image)
      : options.image
        ? absoluteUrl(options.image.src)
        : undefined;

  const authorImageUrl =
    typeof options.authorImage === "string"
      ? absoluteUrl(options.authorImage)
      : options.authorImage
        ? absoluteUrl(options.authorImage.src)
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(options.path),
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    image: imageUrl,
    articleSection: options.category,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: options.authorName,
      url: absoluteUrl(options.authorUrl),
      ...(options.authorRole ? { jobTitle: options.authorRole } : {}),
      ...(options.authorBio ? { description: options.authorBio } : {}),
      ...(authorImageUrl ? { image: authorImageUrl } : {}),
      worksFor: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
      },
    },
    ...(options.reviewerName
      ? {
          editor: {
            "@type": "Organization",
            name: options.reviewerName,
            ...(options.reviewerRole ? { description: options.reviewerRole } : {}),
            parentOrganization: {
              "@type": "Organization",
              "@id": `${siteConfig.url}/#organization`,
              name: siteConfig.name,
            },
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      logo: logoImageObject,
    },
  };
}

/** Blog – /blog index */
export function blogSchema(options: { name: string; description: string; path?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path ?? "/blog"),
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** AboutPage – /about */
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.url}/about`,
  url: `${siteConfig.url}/about`,
  name: `About ${siteConfig.name}`,
  description: siteConfig.description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en",
};

/** ContactPage – /contact */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.url}/contact`,
  url: `${siteConfig.url}/contact`,
  name: `Contact ${siteConfig.name}`,
  description: `Contact ${siteConfig.name} in ${siteBrand.location}.`,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    contactPoint: organizationSchema.contactPoint,
  },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en",
};

/** Person – one team member */
export function personSchema(options: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string | ImageAsset;
}) {
  const imageUrl =
    typeof options.image === "string"
      ? absoluteUrl(options.image)
      : options.image
        ? absoluteUrl(options.image.src)
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: options.name,
    jobTitle: options.jobTitle,
    description: options.description,
    image: imageUrl,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** Team page – Organization with employees.
 *  Own @id (distinct from organizationSchema) so it doesn't collide with the
 *  sitewide Organization node if both appear on the About/Team page. */
export function teamPageSchema(
  members: {
    name: string;
    jobTitle: string;
    description?: string;
    image?: string | ImageAsset;
  }[]
) {
  return {
    ...organizationSchema,
    "@id": `${siteConfig.url}/#team`,
    employee: members.map((member) => personSchema(member)),
  };
}

/** ItemList – projects, solutions, industries, locations indexes */
export function itemListSchema(options: {
  name: string;
  description?: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    numberOfItems: options.items.length,
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

/** Place – city name only */
export function placeSchema(options: {
  name: string;
  description: string;
  path: string;
  country?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    containedInPlace: {
      "@type": "Country",
      name: options.country ?? "Pakistan",
    },
  };
}

/** ProfessionalService for a city location page */
export function locationServiceSchema(options: {
  name: string;
  description: string;
  path: string;
  cityName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: organizationImageUrl,
    address: hqAddress,
    areaServed: {
      "@type": "City",
      name: options.cityName,
      containedInPlace: {
        "@type": "Country",
        name: "Pakistan",
      },
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * Review markup — only use when you also provide:
 * - `reviewRating` on each review, and
 * - `aggregateRating` on the reviewed LocalBusiness/Organization.
 * Without both, Google flags "Multiple reviews without aggregateRating" and
 * reviews are ineligible for rich results. Testimonials on the page can stay
 * as HTML without this schema.
 */
export function reviewSchema(options: {
  authorName: string;
  reviewBody: string;
  jobTitle?: string;
  /** Stable suffix for @id, e.g. "1" or author slug */
  idSuffix: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${siteConfig.url}/#review-${options.idSuffix}`,
    author: {
      "@type": "Person",
      name: options.authorName,
      ...(options.jobTitle ? { jobTitle: options.jobTitle } : {}),
    },
    reviewBody: options.reviewBody,
    inLanguage: "en",
    itemReviewed: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
  };
}