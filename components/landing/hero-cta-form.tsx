"use client";

import { useState } from "react";

import { contactApiPath } from "@/lib/landing/constants";
import { heroCtaForm } from "@/data/landingPage";
import { cn } from "@/lib/utils";

type HeroCtaFormProps = {
  className?: string;
};

const labelClass =
  "mb-1.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/55";

const inputClass =
  "h-9 w-full rounded-md border border-white/20 bg-black/25 px-3 text-[13px] text-white placeholder:text-white/35 transition-colors focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/25";

const textareaClass =
  "min-h-[5.5rem] w-full resize-y rounded-md border border-white/20 bg-black/25 px-3 py-2.5 text-[13px] leading-relaxed text-white placeholder:text-white/35 transition-colors focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/25";

export function HeroCtaForm({ className }: HeroCtaFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(contactApiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          contact: phone.trim() || "Not provided",
          projectType: "other",
          budget: budget.trim() || "not-sure",
          timeline: "flexible",
          message: message.trim(),
        }),
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

  return (
    <div
      className={cn(
        "w-full rounded-xl border border-white/15 bg-black/35 p-4 shadow-[0_12px_48px_rgba(0,0,0,0.45)] backdrop-blur-md",
        className
      )}
    >
      <div className="border-b border-white/10 pb-4">
        <h2 className="font-heading text-xl font-normal tracking-tight text-white">
          {heroCtaForm.title}
        </h2>
        <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
          {heroCtaForm.subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="mt-4 rounded-md border border-primary/25 bg-primary/5 px-3 py-5 text-center">
          <p className="font-heading text-base text-white">Thank you, {name || "there"}.</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-white/60">
            We received your inquiry and will reply within one business day.
          </p>
          <button
            type="button"
            className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-primary/90 underline-offset-4 hover:underline"
            onClick={() => {
              setName("");
              setEmail("");
              setPhone("");
              setBudget("");
              setMessage("");
              setSubmitted(false);
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="hero-cta-name" className={labelClass}>
              Full name
            </label>
            <input
              id="hero-cta-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hero-cta-email" className={labelClass}>
              Work email
            </label>
            <input
              id="hero-cta-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hero-cta-phone" className={labelClass}>
              Phone <span className="normal-case tracking-normal text-white/35">(optional)</span>
            </label>
            <input
              id="hero-cta-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hero-cta-budget" className={labelClass}>
              Estimated budget <span className="normal-case tracking-normal text-white/35">(optional)</span>
            </label>
            <input
              id="hero-cta-budget"
              type="text"
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. $25,000 – $50,000"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hero-cta-message" className={labelClass}>
              Project details
            </label>
            <textarea
              id="hero-cta-message"
              name="message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to build?"
              className={textareaClass}
            />
          </div>

          {error ? (
            <p className="rounded-md border border-red-400/25 bg-red-950/30 px-3 py-2 text-[12px] text-red-200/90">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1 flex h-9 w-full items-center justify-center rounded-md border border-primary/40 bg-primary/90 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary disabled:pointer-events-none disabled:opacity-60"
          >
            {submitting ? "Sending…" : heroCtaForm.submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
