import nodemailer from "nodemailer";

import { siteBrand } from "@/lib/landing/brand";
import type { ContactFormData } from "@/lib/landing/data";
import {
  contactBudgetRanges,
  contactProjectTypes,
  contactTimelineOptions,
} from "@/lib/landing/data";

function labelFor(
  options: { value: string; label: string }[],
  value: string
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

/**
 * Gmail often hides messages in Sent when From and To are the same account.
 * A +tag address delivers to the same inbox but is treated as a new incoming message.
 */
function resolveInboxAddress(anchorMailbox: string, configuredTo?: string): string {
  const to = configuredTo || anchorMailbox;
  if (process.env.CONTACT_INBOX_EXACT === "true") return to;

  const sameMailbox =
    to.toLowerCase() === anchorMailbox.toLowerCase() && !to.includes("+");

  if (!sameMailbox) return to;

  const at = anchorMailbox.lastIndexOf("@");
  if (at <= 0) return to;

  const local = anchorMailbox.slice(0, at);
  const domain = anchorMailbox.slice(at + 1);
  return `${local}+contact@${domain}`;
}

function getDeliveryAddress(): string {
  const smtpUser = process.env.SMTP_USER?.trim();
  const configuredTo = process.env.CONTACT_TO_EMAIL?.trim();
  const anchor = smtpUser ?? configuredTo;

  if (!anchor) {
    throw new Error(
      "Email is not configured. Set CONTACT_TO_EMAIL (and SMTP_USER/SMTP_PASS for Gmail, or RESEND_API_KEY for production)."
    );
  }

  return resolveInboxAddress(anchor, configuredTo);
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!user || !pass) {
    throw new Error(
      "Gmail SMTP is not configured. Set SMTP_USER and SMTP_PASS, or use RESEND_API_KEY on your host."
    );
  }

  return {
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? "465"),
    secure: process.env.SMTP_SECURE !== "false",
    user,
    pass,
    to: getDeliveryAddress(),
  };
}

function formatPlainText(data: ContactFormData): string {
  return [
    "New contact form submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.contact}`,
    `Project type: ${labelFor(contactProjectTypes, data.projectType)}`,
    `Budget: ${labelFor(contactBudgetRanges, data.budget)}`,
    `Timeline: ${labelFor(contactTimelineOptions, data.timeline)}`,
    "",
    "Message:",
    data.message,
    "",
    "Reply to this email to respond directly to the client.",
  ].join("\n");
}

function formatHtml(data: ContactFormData): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#0D1B2A;vertical-align:top">${label}</td><td style="padding:8px 12px;color:#415A77">${value}</td></tr>`;

  const safeMessage = data.message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `
    <div style="font-family:sans-serif;max-width:560px">
      <h2 style="color:#0D1B2A;margin:0 0 16px">New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;border:1px solid #E8DCC8">
        ${row("Name", data.name)}
        ${row("Email", `<a href="mailto:${data.email}">${data.email}</a>`)}
        ${row("Phone", data.contact)}
        ${row("Project type", labelFor(contactProjectTypes, data.projectType))}
        ${row("Budget", labelFor(contactBudgetRanges, data.budget))}
        ${row("Timeline", labelFor(contactTimelineOptions, data.timeline))}
      </table>
      <p style="margin:20px 0 8px;font-weight:600;color:#0D1B2A">Message</p>
      <p style="margin:0;color:#415A77;white-space:pre-wrap">${safeMessage}</p>
      <p style="margin:20px 0 0;font-size:12px;color:#778DA9">Reply to this email to reach the client directly.</p>
    </div>
  `;
}

function buildSubject(data: ContactFormData): string {
  return `[${siteBrand.shortName}] New inquiry from ${data.name} (${data.email})`;
}

async function sendViaResend(data: ContactFormData, to: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }

  const from =
    process.env.RESEND_FROM?.trim() ?? `${siteBrand.name} <onboarding@resend.dev>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: buildSubject(data),
      html: formatHtml(data),
      text: formatPlainText(data),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error (${response.status}): ${body}`);
  }
}

async function sendViaSmtp(data: ContactFormData): Promise<void> {
  const config = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: {
      name: siteBrand.name,
      address: config.user,
    },
    to: config.to,
    replyTo: {
      name: data.name,
      address: data.email,
    },
    subject: buildSubject(data),
    text: formatPlainText(data),
    html: formatHtml(data),
    headers: {
      "X-Contact-Form": "Software Development Company-website",
    },
  });
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (process.env.RESEND_API_KEY?.trim()) {
    await sendViaResend(data, getDeliveryAddress());
    return;
  }

  await sendViaSmtp(data);
}
