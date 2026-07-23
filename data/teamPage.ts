import { teamIntro } from "@/data/landing/team";

export const teamPageMeta = {
  title: "Our Team",
  description:
    "Meet the engineers, designers, and project leads at our Islamabad-based software development company the people who design, build, and ship your product.",
  hero: {
    eyebrow: "Our people",
    title: "A small crew. Serious about software.",
    description: teamIntro,
  },
  culture: [
    {
      title: "Senior-led delivery",
      description:
        "Client projects are staffed with experienced engineers and designers—no bait-and-switch to junior-only teams.",
    },
    {
      title: "Direct communication",
      description:
        "You work with the people writing your code. Clear updates, honest timelines, and plain-language explanations.",
    },
    {
      title: "Timezone overlap",
      description:
        "Based in Islamabad with flexible hours that overlap USA, UK, and UAE business time for smooth collaboration.",
    },
    {
      title: "Craft & character",
      description:
        "Every hire is chosen for technical skill, communication, and reliability—the traits that keep long projects on track.",
    },
  ],
  cta: {
    titleBefore: "Want to",
    titleEmphasis: "work with us?",
    description:
      "Tell us about your product. We'll match you with the right people and respond within one business day.",
    button: "Start a conversation",
  },
} as const;
