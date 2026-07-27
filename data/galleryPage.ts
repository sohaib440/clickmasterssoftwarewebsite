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
      {
        title: "AI School ERP",
        description:
          "A smart school management ERP with AI face recognition attendance, role-based portals, fees, exams, timetables, and academic modules for modern educational institutions.",
        images: [
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Showcase.jpeg",
            alt: "AI School ERP product showcase",
            width: 1200,
            height: 750,
            caption: "Product showcase",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Administrator-Dashboard.jpeg",
            alt: "AI School ERP administrator dashboard",
            width: 1200,
            height: 750,
            caption: "Administrator dashboard",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Homepage.jpeg",
            alt: "AI School ERP public website",
            width: 1200,
            height: 750,
            caption: "Public website",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Login.jpeg",
            alt: "AI School ERP login screen",
            width: 1200,
            height: 750,
            caption: "Role-based login",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Sessions-Timetable.jpeg",
            alt: "AI School ERP sessions and timetable",
            width: 1200,
            height: 750,
            caption: "Sessions & timetable",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Ai-Attendance-Enrolled.jpeg",
            alt: "AI School ERP attendance enrollment",
            width: 1200,
            height: 750,
            caption: "AI attendance enrollment",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Live-Monitor.jpeg",
            alt: "AI School ERP live attendance monitor",
            width: 1200,
            height: 750,
            caption: "Live monitor",
          },
          {
            src: "/projects/ai-school-erp/AI-School-Erp-Ai-Cctv-Attendance.jpeg",
            alt: "AI School ERP CCTV attendance",
            width: 1200,
            height: 750,
            caption: "AI CCTV attendance",
          },
        ],
      },
      {
        title: "Travel & Tour Website",
        description:
          "A travel and tour platform with a public booking website, package listings, destination pages, customer management, bookings, rental inquiries, and admin package tools.",
        images: [
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Homepage.jpeg",
            alt: "Travel and tour website homepage",
            width: 1200,
            height: 750,
            caption: "Homepage",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Packages.jpeg",
            alt: "Travel and tour website packages listing",
            width: 1200,
            height: 750,
            caption: "Packages listing",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Destination-Page.jpeg",
            alt: "Travel and tour website destination page",
            width: 1200,
            height: 750,
            caption: "Destination page",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Bookings.jpeg",
            alt: "Travel and tour website bookings panel",
            width: 1200,
            height: 750,
            caption: "Bookings",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Booking-Details.jpeg",
            alt: "Travel and tour website booking details",
            width: 1200,
            height: 750,
            caption: "Booking details",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Customers.jpeg",
            alt: "Travel and tour website customers panel",
            width: 1200,
            height: 750,
            caption: "Customers",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Add-Package.jpeg",
            alt: "Travel and tour website add package form",
            width: 1200,
            height: 750,
            caption: "Add package",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Edit-Package.jpeg",
            alt: "Travel and tour website edit package form",
            width: 1200,
            height: 750,
            caption: "Edit package",
          },
          {
            src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Rental-Inquiries.jpeg",
            alt: "Travel and tour website rental inquiries",
            width: 1200,
            height: 750,
            caption: "Rental inquiries",
          },
        ],
      },
    ],
  },
];
