import type { Metadata } from "next";

import { TeamPageContent } from "@/components/team/team-page";
import { teamPageMeta } from "@/data/teamPage";

export const metadata: Metadata = {
  title: teamPageMeta.title,
  description: teamPageMeta.description,
  openGraph: {
    title: teamPageMeta.title,
    description: teamPageMeta.description,
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamPageContent />;
}
