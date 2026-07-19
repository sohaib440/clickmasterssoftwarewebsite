/** Horizon design tokens cream #FFF9E1 · peach #FFE5D9 · sky #BDE0FE · navy #0D1B2A */

/** Primary destination for site-wide CTAs */
export const contactPath = "/contact";
/** Portfolio / projects listing */
export const projectPath = "/project";
/** About us page */
export const aboutPath = "/about";
/** Team page */
export const teamPath = "/team";
/** Industries listing */
export const industriesPath = "/industries";
/** Case studies listing */
export const caseStudyPath = "/case-study";
/** Contact form POST target (works without client JS) */
export const contactApiPath = "/api/contact";
/** Shared horizontal layout keep all landing sections aligned to the same edges */
export const pageMaxWidth = "max-w-[1750px]";
export const pageGutter = "px-5 sm:px-6 lg:px-8";
export const container = `mx-auto w-full min-w-0 ${pageGutter} ${pageMaxWidth}`;

export const sectionPad = "py-12 md:py-14 lg:py-16";
export const sectionHeadingGap = "mb-8 md:mb-10";
export const sectionPadBottom = "pb-12 md:pb-14 lg:pb-16";

export const card =
  "motion-card overflow-hidden rounded-2xl border border-horizon-border bg-white text-horizon-navy shadow-none";

export const cardSoft =
  "motion-card overflow-hidden rounded-2xl border border-horizon-border bg-white text-horizon-navy shadow-none";

export const cardDark =
  "motion-card overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-white shadow-none";

export const btnPrimary =
  "inline-flex h-11 items-center justify-center rounded-full bg-primary px-4 sm:px-6 text-sm font-medium text-primary-foreground shadow-sm transition-[transform,background-color,border-color,color] duration-300 hover:border-transparent hover:bg-horizon-navy hover:!text-white hover:scale-[1.02] active:scale-[0.98]";

export const btnOutline =
  "inline-flex h-11 items-center justify-center rounded-full border border-horizon-navy/25 bg-white px-4 sm:px-6 text-sm font-medium text-horizon-navy transition-[transform,background-color,border-color,color] duration-300 hover:border-horizon-navy hover:bg-horizon-navy hover:!text-white hover:scale-[1.02] active:scale-[0.98]";

export const btnOutlineDark =
  "inline-flex h-11 items-center justify-center rounded-full border border-white/40 bg-transparent px-4 sm:px-6 text-sm font-medium text-white transition-[transform,background-color,border-color,color] duration-300 hover:border-white hover:bg-white hover:!text-horizon-navy hover:scale-[1.02] active:scale-[0.98]";

/** CTA on dark (navy) sections */
export const btnOnDark =
  "inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground ring-1 ring-white/15 transition-[transform,background-color,border-color,color,box-shadow] duration-300 hover:bg-white hover:!text-horizon-navy hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(255,255,255,0.15)] active:scale-[0.98]";

export const inputField =
  "h-12 w-full rounded-full border border-horizon-border bg-white px-5 text-sm text-horizon-navy placeholder:text-horizon-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-navy/20";

export const selectField =
  "h-12 w-full appearance-none rounded-full border border-horizon-border bg-white px-5 text-sm text-horizon-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-navy/20";

export const textareaField =
  "min-h-[8rem] w-full resize-y rounded-2xl border border-horizon-border bg-white px-5 py-4 text-sm text-horizon-navy placeholder:text-horizon-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-navy/20";

export const formLabel =
  "text-sm font-medium text-horizon-navy";

export const gradientPlaceholder =
  "bg-gradient-to-br from-horizon-sky via-horizon-cream to-horizon-peach";

export const overline =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-horizon-muted";

export const iconMuted = "text-horizon-navy/55";
