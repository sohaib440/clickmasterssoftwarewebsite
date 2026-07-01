/** Site-wide brand & SEO (homepage + defaults) */
export const siteBrand = {
  name: "Next Software Development Company",
  shortName: "Next",
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

export const siteMetadata = {
  title: "Next Software Development Company",
  description:
    "Next Software Development Company is a top software development company in Islamabad, Pakistan. Custom software, web apps, CRM, ERP & mobile apps. Free quote.",
  keywords: [
    "software development",
    "software development company",
    "software company",
    "software development company in Pakistan",
    "software company in Islamabad",
  ],
} as const;
