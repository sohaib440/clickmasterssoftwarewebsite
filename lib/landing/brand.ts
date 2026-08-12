/** Site-wide brand & SEO (homepage + defaults) */
export const siteBrand = {
  name: "Next Software Development Company",
  shortName: "Next Software Development Company",
  legalName: "Next Software Development Company",
  location: "Islamabad, Pakistan",
  email: "info@nextsoftwaredevelopment.com",
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
  title: "Your Top Rated Software House & Software Development Company",
  description:
    "Top rated software house and software development company building web apps, mobile apps, AI, CRM, ERP, and SaaS platforms for startups & enterprises worldwide.",
} as const;
