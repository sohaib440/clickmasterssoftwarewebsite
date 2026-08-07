/** Site-wide brand & SEO (homepage + defaults) */
export const siteBrand = {
  name: "Next Software Development Company",
  shortName: "Next Software Development Company",
  legalName: "Next Software Development Company",
  location: "Islamabad, Pakistan",
  email: "nextsoftwaredevelopmentcompany@gmail.com",
  phone: "+92 371 0510083",
  url: "https://nextsoftwaredevelopment.com",
  logo: {
    src: "/brand/next-logo.webp",
    alt: "Next Software Development Company",
    width: 640,
    height: 128,
  },
  favicon: "/brand/icon.webp",
  appleIcon: "/brand/icon.webp",
} as const;

/** Opens the OS mail client (may do nothing if none is installed). */
export const siteEmailMailto = `mailto:${siteBrand.email}`;

/**
 * Opens Gmail compose in the browser — reliable on laptops/desktops
 * that have no default mail app configured for mailto: links.
 */
export const siteEmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteBrand.email)}`;

export const siteSocial = {
  linkedin: "https://www.linkedin.com/company/nextsoftwaredevelopmentcompany",
  facebook: "https://www.facebook.com/nextsoftwaredevelopmentcompany",
  instagram: "https://www.instagram.com/nextsoftwaredevelopmentcompany",
  youtube: "https://www.youtube.com/@nextsoftwaredevelopmentcompany",
  x: "https://x.com/NextSoftwaree",
  pinterest: "https://www.pinterest.com/nextsoftwaredevelopmentcompany",
  medium: "https://medium.com/@nextsoftwaredevelopmentcompany",
  github: "https://github.com/nextsoftwaredevelopmentcompany",
  clutch: "https://clutch.co/profile/next-software-development-company",
  trustpilot: "https://www.trustpilot.com/review/nextsoftwaredevelopment.com",
  googleReviews:
    "https://www.google.com/search?q=Next+Software+Development+Company+reviews",
} as const;

export const siteMetadata = {
  title: "Software House & Software Development Company",
  description:
    "Next Software Development Company is a top rated software house and leading software development company helping startups, SMBs, and enterprises build web apps, mobile apps, AI features, CRM, ERP, SaaS platforms, and cloud systems worldwide.",
  keywords: [
    "software house",
    "software company",
    "software development company",
    "best software house",
    "best software company",
    "top rated software house",
    "top rated software company",
    "leading software house",
    "leading software company",
    "leading software development company",
    "web application development",
    "mobile app development",
    "AI development services",
    "CRM development",
    "ERP development",
    "SaaS product development",
    "cloud and DevOps",
  ],
} as const;
