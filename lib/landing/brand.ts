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
    src: "/brand/next-logo.png",
    alt: "Next Software Development Company",
    width: 640,
    height: 128,
  },
  favicon: "/brand/icon.png",
  appleIcon: "/brand/icon.png",
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
} as const;

export const siteMetadata = {
  title: "Next Software Development Company",
  description:
    "Next Software Development Company is a software development company in Pakistan providing custom software development, web application development, mobile application development, AI solutions, CRM, ERP, SaaS, cloud, and DevOps services for businesses worldwide.",
  keywords: [
    "software development",
    "software development company",
    "software company",
    "software development company in Pakistan",
    "software company in Islamabad",
  ],
} as const;
