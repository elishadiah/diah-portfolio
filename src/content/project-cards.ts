import type { IconName } from "@/components/icons";

export type Filter = "ai" | "web" | "mobile" | "commerce";

export type ProjectCard = {
  kind: string;
  blurb: string;
  chips: string[];
  tags: Filter[];
  cover: { image: string; alt: string } | { art: string; icon: IconName; label: string };
  badge?: string;
  planned?: string;
};

// Short card copy for the home page grid, keyed by project slug.
export const projectCards: Record<string, ProjectCard> = {
  acquisell: {
    kind: "AI marketplace · Next.js",
    blurb:
      "Confidential M&A marketplace with AI buyer matching, a 24-step seller wizard, Retell AI voice intake and Make.com match alerts.",
    chips: ["React", "Next.js", "Redux", "Retell AI", "Make.com"],
    tags: ["ai", "web"],
    cover: { image: "/img/acquisell.jpg", alt: "AcquiSell marketing site and features" },
  },
  annexa: {
    kind: "NetSuite · AI · EDI",
    blurb:
      "Vue 3 app inside NetSuite with AI agents over ERP data, a SuiteQL editor with Excel export, and X12 EDI mapping.",
    chips: ["Vue 3", "Pinia", "OpenAI", "SuiteScript", "Vue Flow"],
    tags: ["ai", "web"],
    cover: { image: "/img/annexa.jpg", alt: "Annexa AI agents, SuiteQL editor and EDI flow" },
  },
  qatent: {
    kind: "AI SaaS · Vue.js",
    blurb:
      "AI patent drafting for attorneys, with WebSocket streaming, rich claims editors, NLP validators and DOCX/PDF export.",
    chips: ["Vue 3", "Quasar", "Node.js", "Stripe"],
    tags: ["ai", "web"],
    cover: { art: "a-qatent", icon: "scale", label: "legal-tech · AI drafting" },
  },
  jubileeconnect: {
    kind: "Mobile · React Native",
    blurb:
      "Travel app for visitors to Rome with Mapbox walking itineraries, Matrix-based chat and an in-app document vault, in three languages.",
    chips: ["React Native", "TypeScript", "Mapbox", "i18next"],
    tags: ["mobile"],
    cover: { art: "a-jubilee", icon: "compass", label: "travel · Rome" },
  },
  suntricity: {
    kind: "SaaS · Analytics",
    blurb: "Multi-tenant platform that turns schools' electricity and water invoices into KPIs, trends and leak alerts.",
    chips: ["Next.js", "React", "Vercel"],
    tags: ["web"],
    cover: { art: "a-sun", icon: "chart", label: "kWh · kL · R" },
  },
  lifeforce: {
    kind: "E-commerce · Next.js",
    blurb: "Storefront and membership site with subscriptions, member accounts and 10+ Storyblok landing pages.",
    chips: ["Next.js", "Storyblok", "Zendesk"],
    tags: ["commerce", "web"],
    cover: { art: "a-life", icon: "heart", label: "health · membership" },
  },
  "the-sauna-heater": {
    kind: "Shopify theme",
    blurb: "Custom Shopify store with a heater size calculator, product quiz, accessory bundling and B2B lead capture.",
    chips: ["Liquid", "OS 2.0", "GTM", "Matomo"],
    tags: ["commerce"],
    cover: { art: "a-sauna", icon: "flame", label: "90+ sections · ~109 templates" },
  },
  ajustev: {
    kind: "Mobile · React Native",
    badge: "UI prototype",
    blurb: "App UI for insurance adjusters: login, inspection list, plate-based Create Inspection and guided photo steps.",
    planned: "camera capture, GPS, offline sync, analytics and push notifications.",
    chips: ["React Native 0.72", "React Navigation"],
    tags: ["mobile"],
    cover: { art: "a-aju", icon: "car", label: "insurance · inspections" },
  },
};

export const experience = [
  {
    title: "AI products",
    projects: ["acquisell", "annexa", "qatent"],
    when: "AI matching, agents, voice and drafting",
    points: [
      "Built AI agents grounded in NetSuite ERP data for finance and SQL generation.",
      "Implemented Retell AI voice agents for buyer and seller intake.",
      "Built AI patent drafting with WebSocket streaming and NLP validators.",
    ],
  },
  {
    title: "Mobile apps",
    projects: ["jubileeconnect", "ajustev"],
    when: "React Native for iOS and Android",
    points: [
      "Developed JubileeConnect end to end, including a custom Matrix chat client.",
      "Added Mapbox walking directions and an in-app PDF document vault.",
      "Designed and built the AJUSTEV inspection app UI prototype.",
    ],
  },
  {
    title: "SaaS and e-commerce",
    projects: ["suntricity", "lifeforce", "the-sauna-heater"],
    when: "Dashboards, storefronts and conversion tools",
    points: [
      "Built Suntricity's multi-tenant dashboards and abnormal-usage alerts.",
      "Delivered Lifeforce's storefront, subscriptions and Storyblok landing pages.",
      "Built a heater size calculator and quiz connected to a recommendation API.",
    ],
  },
];
