export const galleryPageMeta = {
  title: "Gallery",
  description:
    "A look inside Next Software Development Company — our team, workplace, and the software products we ship for clients worldwide.",
  hero: {
    eyebrow: "Inside Next",
    title: "Moments from our team and work.",
    description:
      "Photos from our Islamabad studio, the people behind the products, and selected work we have delivered for clinics, schools, and growing businesses.",
  },
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

/** Named block inside a section — e.g. one project or one team member */
export type GalleryGroup = {
  title: string;
  description?: string;
  images: GalleryImage[];
};

export type GallerySection = {
  title: string;
  description?: string;
  /** Renders the homepage team section (heading, team intro, portrait grid) */
  layout?: "team";
  groups?: GalleryGroup[];
  images?: GalleryImage[];
};

export const gallerySections: GallerySection[] = [
  {
    title: "Workplace",
    description:
      "Our Islamabad studio and nationwide delivery footprint. We work as a remote-first software house with senior engineers, designers, and QA specialists serving clients across Pakistan and worldwide.",
    images: [
      {
        src: "/about us/software development company.png",
        alt: "Next Software Development Company workplace",
        width: 1200,
        height: 800,
        caption: "Our Islamabad studio",
      },
      {
        src: "/locations/Location-Pakistan.png",
        alt: "Software house coverage across Pakistan",
        width: 1200,
        height: 800,
        caption: "Pakistan delivery coverage",
      },
    ],
  },
  {
    title: "Team",
    layout: "team",
  },
  {
    title: "Projects",
    description:
      "Selected software we have shipped for call centers, clinics, schools, and growing businesses from CRM platforms to HMS and ERP systems.",
    groups: [
      {
        title: "Prime Lead CRM",
        description:
          "A call center CRM built for sales and operations teams unified lead pipeline, staff roles and permissions, internal chat, agent training, and live conversion dashboards in one workflow.",
        images: [
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.jpeg",
            alt: "Prime Lead CRM dashboard with KPIs",
            width: 1200,
            height: 750,
            caption: "Dashboard",
          },
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Leads-Panel.jpeg",
            alt: "Prime Lead CRM leads panel",
            width: 1200,
            height: 750,
            caption: "Leads panel",
          },
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Chat-Module.jpeg",
            alt: "Prime Lead CRM chat module",
            width: 1200,
            height: 750,
            caption: "Chat module",
          },
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Staff-Management.jpeg",
            alt: "Prime Lead CRM staff management",
            width: 1200,
            height: 750,
            caption: "Staff management",
          },
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Training-Pannel.jpeg",
            alt: "Prime Lead CRM training panel",
            width: 1200,
            height: 750,
            caption: "Training panel",
          },
          {
            src: "/projects/prime-leads-project/Prime-Lead-Crm-Login.jpeg",
            alt: "Prime Lead CRM login screen",
            width: 1200,
            height: 750,
            caption: "Secure login",
          },
        ],
      },
    ],
  },
];
