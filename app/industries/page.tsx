import type { Metadata } from "next";

import { IndustriesPageContent } from "@/components/industries/industries-page";
import { industriesPageMeta } from "@/data/industriesPage";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: industriesPageMeta.title,
  description: industriesPageMeta.description,
  ...selfCanonical("/industries"),
  openGraph: {
    title: industriesPageMeta.title,
    description: industriesPageMeta.description,
    type: "website",
  },
};

export default function IndustriesRoute() {
  return <IndustriesPageContent />;
}
