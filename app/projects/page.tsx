import { redirect } from "next/navigation";

import { projectPath } from "@/lib/landing/constants";

export default function ProjectsRedirectPage() {
  redirect(projectPath);
}
