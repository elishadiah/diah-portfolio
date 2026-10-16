export type Filter = "ai" | "web" | "mobile" | "commerce";

export type ProjectCard = {
  kind: string;
  blurb: string;
  chips: string[];
  tags: Filter[];
  cover: { image: string; alt: string; width: number; height: number };
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
    cover: { image: "/img/acquisell.webp", width: 1536, height: 1024, alt: "AcquiSell marketplace on desktop, tablet and mobile with key features" },
  },
  annexa: {
    kind: "NetSuite · AI · EDI",
    blurb:
      "Vue 3 app inside NetSuite with AI agents over ERP data, a SuiteQL editor with Excel export, and X12 EDI mapping.",
    chips: ["Vue 3", "Pinia", "OpenAI", "SuiteScript", "Vue Flow"],
    tags: ["ai", "web"],
    cover: { image: "/img/annexa.webp", width: 1448, height: 1086, alt: "Annexa inside NetSuite: AI agents, SuiteQL editor and EDI mapping" },
  },
  qatent: {
    kind: "AI SaaS · Vue.js",
    blurb:
      "AI patent drafting for attorneys, with WebSocket streaming, rich claims editors, NLP validators and DOCX/PDF export.",
    chips: ["Vue 3", "Quasar", "Node.js", "Stripe"],
    tags: ["ai", "web"],
    cover: { image: "/img/qatent.webp", width: 1448, height: 1086, alt: "Qatent AI drafting workspace, validators and patent search" },
  },
  smartland: {
    kind: "Mobile · React Native · AI",
    blurb:
      "Multilingual territory app with Plinio, an AI assistant in real-time chat, plus points of interest, events, itineraries, support chats and push notifications.",
    chips: ["React Native", "TypeScript", "Matrix", "FCM", "Mapbox"],
    tags: ["ai", "mobile"],
    cover: { image: "/img/smartland.webp", width: 1600, height: 1200, alt: "SmartLand app screens with the Plinio AI assistant" },
  },
  suntricity: {
    kind: "SaaS · Analytics",
    blurb: "Multi-tenant platform that turns schools' electricity and water invoices into KPIs, trends and leak alerts.",
    chips: ["Next.js", "React", "Vercel"],
    tags: ["web"],
    cover: { image: "/img/suntricity.webp", width: 1672, height: 941, alt: "Suntricity cost analysis and consumption dashboards on laptop, tablet and phone" },
  },
  lifeforce: {
    kind: "E-commerce · Next.js",
    blurb: "Storefront and membership site with subscriptions, member accounts and 10+ Storyblok landing pages.",
    chips: ["Next.js", "Storyblok", "Zendesk"],
    tags: ["commerce", "web"],
    cover: { image: "/img/lifeforce.webp", width: 1448, height: 1086, alt: "Lifeforce storefront, membership and Storyblok pages" },
  },
  "the-sauna-heater": {
    kind: "Shopify theme",
    blurb: "Custom Shopify store with a heater size calculator, product quiz, accessory bundling and B2B lead capture.",
    chips: ["Liquid", "OS 2.0", "GTM", "Matomo"],
    tags: ["commerce"],
    cover: { image: "/img/the-sauna-heater.webp", width: 1448, height: 1086, alt: "The Sauna Heater Shopify store with calculator, quiz and B2B features" },
  },
  ajustev: {
    kind: "Mobile · React Native",
    badge: "UI prototype",
    blurb: "App UI for insurance adjusters: login, inspection list, plate-based Create Inspection and guided photo steps.",
    planned: "camera capture, GPS, offline sync, analytics and push notifications.",
    chips: ["React Native 0.72", "React Navigation"],
    tags: ["mobile"],
    cover: { image: "/img/ajustev.webp", width: 1448, height: 1086, alt: "AJUSTEV inspection app screens: login, dashboard, create inspection and photo guide" },
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
    projects: ["smartland", "ajustev"],
    when: "React Native for iOS and Android",
    points: [
      "Built SmartLand's Plinio AI chat over Matrix, with Markdown replies and history.",
      "Added FCM push, support chats with attachments and 11-language localization.",
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
