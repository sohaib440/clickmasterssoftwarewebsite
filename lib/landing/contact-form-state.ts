export type ContactFormState = {
  name: string;
  email: string;
  contact: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export const emptyContactForm: ContactFormState = {
  name: "",
  email: "",
  contact: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export const CONTACT_DRAFT_STORAGE_KEY = "Software Development Company-contact-draft";

function paramValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0]?.trim() ?? "";
  return typeof value === "string" ? value.trim() : "";
}

/** Parse legacy GET query params (avoid putting PII in URLs going forward). */
export function parseContactSearchParams(
  params: Record<string, string | string[] | undefined>
): Partial<ContactFormState> {
  return {
    name: paramValue(params.name),
    email: paramValue(params.email),
    contact: paramValue(params.contact),
    projectType: paramValue(params.projectType),
    budget: paramValue(params.budget),
    timeline: paramValue(params.timeline),
    message: paramValue(params.message),
  };
}

export function readContactDraft(): Partial<ContactFormState> | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(CONTACT_DRAFT_STORAGE_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(CONTACT_DRAFT_STORAGE_KEY);
    const parsed = JSON.parse(raw) as Partial<ContactFormState>;
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

export function saveContactDraft(values: Pick<ContactFormState, "name" | "email">): void {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(CONTACT_DRAFT_STORAGE_KEY, JSON.stringify(values));
  } catch {
    // Private mode / quota ignore
  }
}

export function mergeContactForm(
  base: ContactFormState,
  partial?: Partial<ContactFormState> | null
): ContactFormState {
  if (!partial) return base;

  return {
    name: partial.name ?? base.name,
    email: partial.email ?? base.email,
    contact: partial.contact ?? base.contact,
    projectType: partial.projectType ?? base.projectType,
    budget: partial.budget ?? base.budget,
    timeline: partial.timeline ?? base.timeline,
    message: partial.message ?? base.message,
  };
}
