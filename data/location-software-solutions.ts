import {
  Boxes,
  HeartPulse,
  ShoppingCart,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

import { solutionPath } from "@/lib/content/solutions";

export type LocationSoftwareSolution = {
  title: string;
  description: string;
  href: string;
  Icon: typeof Users;
};

/** Product solutions highlighted on Pakistan + city location pages */
export const locationSoftwareSolutions: LocationSoftwareSolution[] = [
  {
    title: "CRM",
    description:
      "Lead capture, pipeline visibility, and sales follow-ups in one system your team will actually use.",
    href: solutionPath("crm"),
    Icon: Users,
  },
  {
    title: "ERP",
    description:
      "Finance, inventory, production, and reporting connected so owners see one operational truth.",
    href: solutionPath("erp"),
    Icon: Workflow,
  },
  {
    title: "HMS",
    description:
      "Hospital and clinic management covering appointments, EMR, billing, pharmacy, and staff workflows.",
    href: "/healthcare-software-development",
    Icon: HeartPulse,
  },
  {
    title: "POS",
    description:
      "Retail and restaurant checkout with inventory sync, invoices, and multi-branch reporting.",
    href: "/projects/royal-pos",
    Icon: ShoppingCart,
  },
  {
    title: "Inventory",
    description:
      "Stock control, purchasing, and warehouse visibility built around how your warehouse actually runs.",
    href: solutionPath("inventory-management"),
    Icon: Warehouse,
  },
  {
    title: "HRMS",
    description:
      "Attendance, payroll, leave, and employee records without spreadsheet chaos across departments.",
    href: solutionPath("hrms"),
    Icon: Boxes,
  },
];
