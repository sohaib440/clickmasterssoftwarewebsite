import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";
import { siteBrand } from "@/lib/landing/brand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    `${siteBrand.name} is a custom software development company in Islamabad, Pakistan senior-led delivery for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.`,
};

export default function AboutRoute() {
  return <AboutPage />;
}
