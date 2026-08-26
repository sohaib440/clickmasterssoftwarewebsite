"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Paperclip } from "lucide-react";

import { contactApiPath, contactPath } from "@/lib/landing/constants";
import {
  type ContactFormState,
  emptyContactForm,
  mergeContactForm,
  readContactDraft,
} from "@/lib/landing/contact-form-state";
import {
  contactBudgetRanges,
  contactProjectTypes,
  contactTimelineOptions,
} from "@/data/landingPage";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-lg border border-neutral-200 bg-white px-4 text-sm text-horizon-navy placeholder:text-horizon-muted outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30";

const selectClass = cn(fieldClass, "appearance-none");

const labelClass = "mb-1.5 block text-sm font-medium text-horizon-navy";

type ContactQuoteFormProps = {
  initialValues?: Partial<ContactFormState>;
};

export function ContactQuoteForm({ initialValues }: ContactQuoteFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ContactFormState>(() =>
    mergeContactForm(emptyContactForm, initialValues)
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [briefName, setBriefName] = useState<string | null>(null);

  useEffect(() => {
    const draft = readContactDraft();
    if (draft) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restore draft after mount
      setForm((prev) => mergeContactForm(prev, draft));
    }

    if (typeof window !== "undefined" && window.location.search) {
      router.replace(contactPath, { scroll: false });
    }
  }, [router]);

  const update =
    (field: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const payload = {
      ...form,
      message: briefName
        ? `${form.message.trim()}\n\nAttached brief (filename only): ${briefName}`
        : form.message,
    };

    try {
      const response = await fetch(contactApiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-horizon-cream/80 p-8 text-center">
        <p className="font-heading text-2xl text-horizon-navy">Thanks, {form.name || "there"}!</p>
        <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
          We received your inquiry and will reply within one business day at{" "}
          <span className="font-medium text-horizon-navy">{form.email}</span>.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-horizon-navy underline-offset-4 hover:underline"
          onClick={() => {
            setForm(emptyContactForm);
            setBriefName(null);
            setSubmitted(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          placeholder="Your full name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@company.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone / WhatsApp <span className="text-primary">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="contact"
          required
          autoComplete="tel"
          value={form.contact}
          onChange={update("contact")}
          placeholder="+92 300 0000000"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-project-type" className={labelClass}>
          Project Type <span className="text-primary">*</span>
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          required
          value={form.projectType}
          onChange={update("projectType")}
          className={selectClass}
        >
          <option value="" disabled>
            Select project type
          </option>
          {contactProjectTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-budget" className={labelClass}>
          Budget Range <span className="text-primary">*</span>
        </label>
        <select
          id="contact-budget"
          name="budget"
          required
          value={form.budget}
          onChange={update("budget")}
          className={selectClass}
        >
          <option value="" disabled>
            Select budget range
          </option>
          {contactBudgetRanges.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-timeline" className={labelClass}>
          Timeline <span className="text-primary">*</span>
        </label>
        <select
          id="contact-timeline"
          name="timeline"
          required
          value={form.timeline}
          onChange={update("timeline")}
          className={selectClass}
        >
          <option value="" disabled>
            When do you want to start?
          </option>
          {contactTimelineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={labelClass}>
          Message / Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your goals, users, and any constraints we should know."
          className="min-h-[8.5rem] w-full resize-y rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-horizon-navy placeholder:text-horizon-muted outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
        />
      </div>
      {error ? (
        <p className="sm:col-span-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1 sm:max-w-xs">
          <p className={labelClass}>Upload Brief (Optional)</p>
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-neutral-300 bg-neutral-50/80 px-4 py-3 text-sm text-horizon-muted transition-colors hover:border-primary/50 hover:bg-white">
            <Paperclip className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="min-w-0 truncate">
              {briefName ?? "PDF, DOC, or ZIP Max. 10MB"}
            </span>
            <input
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx,.zip,application/pdf,application/zip"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) {
                  setBriefName(null);
                  return;
                }
                if (file.size > 10 * 1024 * 1024) {
                  setError("Please keep attachments under 10MB.");
                  e.target.value = "";
                  setBriefName(null);
                  return;
                }
                setBriefName(file.name);
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Inquiry"}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
