/** Horizon design tokens cream #FFF9E1 · peach #FFE5D9 · sky #BDE0FE · navy #0D1B2A */

/** Primary destination for site-wide CTAs */
export const contactPath = "/contact";
/** Contact form POST target (works without client JS) */
export const contactApiPath = "/api/contact";
/** 200px inset from viewport edges on lg+ */
export const container =
  "mx-auto w-full min-w-0 px-2 sm:px-3 lg:max-w-[calc(100%-400px)] lg:px-0";

export const sectionPad = "py-8 md:py-8 lg:py-10";
export const sectionPadBottom = "pb-10 md:pb-14";

export const card =
  "motion-card overflow-hidden rounded-2xl border border-horizon-border bg-white text-horizon-navy shadow-none";

export const cardSoft =
  "motion-card overflow-hidden rounded-2xl border border-horizon-border bg-white text-horizon-navy shadow-none";

export const btnPrimary =
  "inline-flex h-11 items-center justify-center rounded-full bg-horizon-navy px-6 text-sm font-medium text-white transition-[transform,background-color] duration-300 hover:bg-horizon-navy/90 hover:scale-[1.02] active:scale-[0.98]";

export const btnOutline =
  "inline-flex h-11 items-center justify-center rounded-full border border-horizon-navy/15 bg-white/80 px-6 text-sm font-medium text-horizon-navy backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:bg-horizon-peach/60 hover:scale-[1.02] active:scale-[0.98]";

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
