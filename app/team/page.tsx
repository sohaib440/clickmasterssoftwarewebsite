import type { Metadata } from "next";

import { TeamPageContent } from "@/components/team/team-page";
import { teamPageMeta } from "@/data/teamPage";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: teamPageMeta.title,
  description: teamPageMeta.description,
  ...selfCanonical("/team"),
  openGraph: {
    title: teamPageMeta.title,
    description: teamPageMeta.description,
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamPageContent />;
}
