import type { Metadata } from "next";

import { TeamPageContent } from "@/components/team/team-page";
import { teamMembers } from "@/data/landing/team";
import { teamPageMeta } from "@/data/teamPage";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, teamPageSchema } from "@/seo/schema";

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
  const schemas = [
    teamPageSchema(
      teamMembers.map((member) => ({
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        image: member.image,
      }))
    ),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Team", path: "/team" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <TeamPageContent />
    </>
  );
}
