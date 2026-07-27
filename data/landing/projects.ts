import type { ImageAsset } from "./types";

export type { ImageAsset };

export const projects = [
  {
    slug: "prime-lead-crm",
    title: "Prime Lead CRM",
    category: "CRM · Call Center",
    description:
      "A call center CRM built to capture leads, assign staff, track attendance, run training, and keep sales conversations in one system so teams convert faster with full visibility.",
    image: {
      src: "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.jpeg",
      alt: "Prime Lead CRM dashboard overview",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "ai-school-erp",
    title: "AI School ERP",
    category: "Education · ERP · AI",
    description:
      "A smart school management ERP with AI-powered face recognition attendance, student and teacher management, fees, exams, timetables, and role-based portals for admins, teachers, parents, and students.",
    image: {
      src: "/projects/ai-school-erp/AI-School-Erp-Showcase.jpeg",
      alt: "AI School ERP showcase overview",
      width: 1200,
      height: 750,
    },
  },
];
