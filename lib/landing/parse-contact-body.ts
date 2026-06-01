import type { ContactFormData } from "@/lib/landing/data";

function field(value: unknown): string {
  if (typeof value === "string") return value.trim();
  return "";
}

export function isValidContactEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseContactBody(body: unknown): ContactFormData | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const fields: ContactFormData = {
    name: field(data.name),
    email: field(data.email),
    contact: field(data.contact),
    projectType: field(data.projectType),
    budget: field(data.budget),
    timeline: field(data.timeline),
    message: field(data.message),
  };

  if (
    !fields.name ||
    !fields.email ||
    !isValidContactEmail(fields.email) ||
    !fields.contact ||
    !fields.projectType ||
    !fields.budget ||
    !fields.timeline ||
    !fields.message
  ) {
    return null;
  }

  return fields;
}
