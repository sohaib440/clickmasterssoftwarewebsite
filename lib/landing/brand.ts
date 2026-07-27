/** Site-wide brand & SEO (homepage + defaults) */
export const siteBrand = {
  name: "Next Software Development Company",
  shortName: "Next Software Development Company",
  legalName: "Next Software Development Company",
  location: "Islamabad, Pakistan",
  email: "nextsoftwaredevelopmentcompany@gmail.com",
  phone: "+92 3710510083",
  url: "https://nextsoftwaredevelopment.com",
  logo: {
    src: "/brand/next-logo.png",
    alt: "Next Software Development Company",
    width: 640,
    height: 128,
  },
  favicon: "/icon.png",
  appleIcon: "/apple-icon.png",
} as const;

export const siteSocial = {
  linkedin: "https://www.linkedin.com/company/nextsoftwaredevelopmentcompany",
  facebook: "https://www.facebook.com/nextsoftwaredevelopmentcompany",
  youtube: "https://www.youtube.com/@nextsoftwaredevelopmentcompany",
  x: "https://x.com/NextSoftwaree",
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
