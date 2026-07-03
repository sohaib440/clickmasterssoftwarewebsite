import type { Metadata } from "next";

import { IndustriesPageContent } from "@/components/industries/industries-page";
import { industriesPageMeta } from "@/data/industriesPage";

export const metadata: Metadata = {
  title: industriesPageMeta.title,
  description: industriesPageMeta.description,
  openGraph: {
    title: industriesPageMeta.title,
    description: industriesPageMeta.description,
    type: "website",
  },
};

export default function IndustriesRoute() {
  return <IndustriesPageContent />;
}
