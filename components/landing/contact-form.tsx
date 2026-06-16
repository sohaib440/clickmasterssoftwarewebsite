"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  btnPrimary,
  contactApiPath,
  contactPath,
  formLabel,
  inputField,
  selectField,
  textareaField,
} from "@/lib/landing/constants";
import {
  type ContactFormState,
  emptyContactForm,
  mergeContactForm,
  readContactDraft,
  saveContactDraft,
} from "@/lib/landing/contact-form-state";
import {
  contactBudgetRanges,
  contactInfo,
  contactProjectTypes,
  contactTimelineOptions,
} from "@/lib/landing/data";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  /** Full fields on /contact; short CTA on homepage */
  variant?: "full" | "short";
  className?: string;
  initialValues?: Partial<ContactFormState>;
};

export function ContactForm({
  variant = "full",
  className,
  initialValues,
}: ContactFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ContactFormState>(() =>
    mergeContactForm(emptyContactForm, initialValues)
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const draft = readContactDraft();
    if (draft) {
      setForm((prev) => mergeContactForm(prev, draft));
    }

    if (typeof window !== "undefined" && window.location.search) {
      router.replace(contactPath, { scroll: false });
    }
  }, [router]);

  const update =
    (field: keyof ContactFormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(contactApiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  if (variant === "short") {
    return (
      <form
        className={cn(
          "mt-6 w-full max-w-3xl space-y-3 sm:space-y-0 sm:flex sm:items-stretch sm:gap-3",
          className
        )}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          saveContactDraft({
            name: String(data.get("name") ?? "").trim(),
            email: String(data.get("email") ?? "").trim(),
          });
          router.push(contactPath);
        }}
      >
        <label className="sr-only" htmlFor="contact-home-name">
          Name
        </label>
        <input
          id="contact-home-name"
          type="text"
          name="name"
          placeholder="Name"
          className={cn(inputField, "w-full sm:flex-[0.9] text-sm")}
        />
        <label className="sr-only" htmlFor="contact-home-email">
          Email
        </label>
        <input
          id="contact-home-email"
          type="email"
          name="email"
          placeholder="Email"
          className={cn(inputField, "w-full sm:flex-1 text-sm")}
        />
        <button type="submit" className={cn(btnPrimary, "w-full sm:w-auto shrink-0 px-8 text-sm sm:text-base")}>
          Get Started
        </button>
      </form>
    );
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "mt-6 rounded-2xl border border-horizon-sky bg-horizon-sky/30 p-6 text-center md:p-8",
          className
        )}
      >
        <p className="font-heading text-xl font-medium text-horizon-navy">
          Thanks, {form.name || "there"}!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
          We received your inquiry and will reply within one business day at{" "}
          <span className="font-medium text-horizon-navy">{form.email}</span>.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-horizon-navy underline-offset-4 hover:underline"
          onClick={() => {
            setForm(emptyContactForm);
            setSubmitted(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className={cn("mt-6 grid gap-4 sm:grid-cols-2", className)}
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className={formLabel}>
          Name <span className="text-horizon-muted">*</span>
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
          className={inputField}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className={formLabel}>
          Email <span className="text-horizon-muted">*</span>
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
          className={inputField}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="contact-phone" className={formLabel}>
          Contact number <span className="text-horizon-muted">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="contact"
          required
          autoComplete="tel"
          value={form.contact}
          onChange={update("contact")}
          placeholder="+1 (555) 000-0000"
          className={inputField}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-project-type" className={formLabel}>
          Project type <span className="text-horizon-muted">*</span>
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          required
          value={form.projectType}
          onChange={update("projectType")}
          className={selectField}
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

      <div className="space-y-2">
        <label htmlFor="contact-budget" className={formLabel}>
          Budget <span className="text-horizon-muted">*</span>
        </label>
        <select
          id="contact-budget"
          name="budget"
          required
          value={form.budget}
          onChange={update("budget")}
          className={selectField}
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

      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="contact-timeline" className={formLabel}>
          Timeline <span className="text-horizon-muted">*</span>
        </label>
        <select
          id="contact-timeline"
          name="timeline"
          required
          value={form.timeline}
          onChange={update("timeline")}
          className={selectField}
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

      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="contact-message" className={formLabel}>
          Message <span className="text-horizon-muted">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your goals, users, and any constraints we should know."
          className={textareaField}
        />
      </div>

      <div className="sm:col-span-2">
        {error ? (
          <p className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            btnPrimary,
            "w-full sm:w-auto sm:min-w-[12rem] disabled:pointer-events-none disabled:opacity-60"
          )}
        >
          {submitting ? "Sending…" : "Send inquiry"}
        </button>
        <p className="mt-3 text-xs text-horizon-muted">
          Prefer email?{" "}
          <Link
            href={`mailto:${contactInfo.email}`}
            className="font-medium text-horizon-navy hover:underline"
          >
            {contactInfo.email}
          </Link>
        </p>
      </div>
    </form>
  );
}
