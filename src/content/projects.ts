export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  category: string;
  platform: "Web" | "Mobile" | "Shopify";
  accent: string;
  links?: { label: string; href: string }[];
  summary: string;
  overview: string;
  highlights: { title: string; body: string }[];
  problems: string[];
  results?: string[];
  stack: string[];
  scale?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "acquisell",
    name: "AcquiSell",
    tagline: "AI-powered M&A marketplace",
    role: "Frontend, voice AI & automation",
    category: "Marketplace · AI · Automation",
    platform: "Web",
    accent: "#c2410c",
    summary:
      "A confidential M&A marketplace connecting owners of profitable businesses with vetted institutional buyers — replacing the broker and public-listing model.",
    overview:
      "I built AcquiSell, a confidential M&A marketplace connecting private sellers with qualified institutional buyers. On the frontend (React/Next.js, Redux, Tailwind) I delivered multi-role dashboards, a 24-step seller questionnaire with save-and-resume, buyer criteria matching, admin approval and listing-share workflows, and NDA and finder-fee integrations. I also implemented Retell AI voice agents so buyers and sellers can complete intake by phone, and Make.com automations that turn matches into alerts without manual broker work.",
    highlights: [
      { title: "Seller onboarding", body: "~24-step wizard covering identity, industry, team, revenue and EBITDA history, assets, risks and asking price, with per-step API save and resume." },
      { title: "Buyer onboarding & dashboard", body: "6-step flow, up to 10 saved search-criteria sets, and My Deals (matched, liked, NDA signed) with like and NDA flow." },
      { title: "AI buyer matching", body: "Matching on financials, industry, geography and deal size." },
      { title: "Confidential listings", body: "Permission-gated listings visible only to pre-qualified, NDA-signed buyers." },
      { title: "Admin panel", body: "User and listing approval, listing creation, and sharing listings to selected buyers." },
      { title: "Auth", body: "Email/password, Google OAuth, JWT route guards, email verification and password reset." },
      { title: "Company detail pages", body: "Financial charts, structured edit modals and logo upload." },
      { title: "Voice AI", body: "Retell AI agents for buyer and seller intake as an alternative to long web forms." },
      { title: "Automation", body: "Make.com scenarios for lead and listing intake, notifications and match alerts." },
      { title: "Legal", body: "NDA, Seller NDA and Finder Fee agreements embedded via CognitoForms." },
      { title: "Marketing site", body: "Home, Sellers and Buyers landings, About, Resources with valuation UI, Contact, Terms and Privacy." },
    ],
    problems: [
      "Replaced slow, fee-heavy broker matching with a private, AI-matched process at no cost to sellers.",
      "Kept sensitive deal data away from unqualified buyers through NDA gating and private listings.",
      "Enabled 24/7 first-pass qualification by voice or web with no broker involved.",
      "Removed manual copying of form submissions between systems; matching listings trigger alerts automatically.",
    ],
    stack: ["React", "Next.js", "Redux", "Tailwind CSS", "JWT", "Google OAuth", "Retell AI", "Make.com", "CognitoForms"],
  },
  {
    slug: "annexa",
    name: "Annexa",
    tagline: "NetSuite AI reporting & EDI platform",
    role: "Vue SPA & SuiteScript APIs",
    category: "ERP · AI agents · EDI",
    platform: "Web",
    accent: "#4338ca",
    summary:
      "A Vue 3 single-page app embedded in NetSuite for ERP reporting, AI-assisted analysis and EDI — one repo, two apps.",
    overview:
      "I built Annexa, a Vue 3 + Vite SPA embedded in NetSuite through a Suitelet and SuiteScript Restlet. It gives finance teams AI agents grounded in their own ERP data, a SuiteQL editor with Excel export, visual data flows, and X12 EDI mapping and generation. I delivered role-based access, 50+ Restlet APIs, and a build that ships the whole app as a single HTML file into the NetSuite File Cabinet.",
    highlights: [
      { title: "Access & admin", body: "Register, login and password reset; Administrator / Editor / Viewer roles; user and group CRUD; group-based sharing of agents, folders and reports." },
      { title: "AI agents & chat", body: "Agent catalog plus custom agents; templates such as Saved Search Creator, AR AI, Finance Analyst and SuiteQL SQL Agent; chat history, file and data-source attachments, token caps, markdown/HTML artifacts." },
      { title: "Data & reporting", body: "Data sources from Saved Search, File, SuiteQL and Analytics; SuiteQL editor with table tree, results grid and Excel download; AI Sheets with column-level generation; hierarchical report folders." },
      { title: "EDI & flows", body: "Visual Vue Flow canvas; X12 parsing (810, 855, 856); X12 850 generation from NetSuite purchase orders; mapper with JS transforms into NetSuite records." },
      { title: "Platform", body: "~50 Restlet task APIs, File Cabinet browser, and in-app API documentation and tester." },
    ],
    problems: [
      "Self-serve analytics: SuiteQL, saved searches and datasets in a modern UI, without SuiteBuilder-only workflows.",
      "AI over ERP data: agents grounded in company data for AR, finance and SQL generation.",
      "Governed collaboration: roles, groups, shared agents, folders and reports.",
      "EDI cost and friction: inbound X12 mapping and outbound 850 generation in one app.",
      "Developer experience: develop as a normal Vue app locally via an OAuth 1.0 (TBA) proxy, deploy as one file.",
    ],
    stack: ["Vue 3", "Vite", "Vue Router", "Pinia", "PrimeVue 4", "Tailwind", "Chart.js", "CodeMirror", "Vue Flow", "OpenAI (GPT-4o-mini)", "xlsx", "NetSuite SuiteScript 2.1", "Express", "vite-plugin-singlefile"],
  },
  {
    slug: "qatent",
    name: "Qatent",
    tagline: "AI patent drafting SaaS",
    role: "Vue frontend & Node.js integrations",
    category: "Legal tech · AI · Documents",
    platform: "Web",
    accent: "#0f766e",
    links: [
      { label: "qatent.com", href: "https://qatent.com/" },
      { label: "my.qatent.com", href: "https://my.qatent.com/" },
    ],
    summary:
      "An AI-powered platform that helps patent attorneys turn claims or an invention disclosure into a ready-to-review draft in minutes instead of days.",
    overview:
      "I worked on Qatent, an AI patent-drafting platform used by patent attorneys. On the Vue.js app I built AI drafting features with WebSocket streaming, rich claims and disclosure editors, NLP-driven validators, and a DOCX/PDF export pipeline based on Open XML. I also integrated Stripe billing, OIDC single sign-on and PandaDoc from Node.js, and took part in the Quasar v1 to v2 / Vue 3 migration.",
    highlights: [
      { title: "AI drafting", body: "WebSocket streaming for claims generation, sectioned description drafting, chatbot, paraphrase modes, figure descriptions and autocomplete." },
      { title: "Rich editors", body: "Claims and invention-disclosure editors (Quasar) with zen mode, auto-save, checkpoints, find/replace, and overlays for terms, errors and comments." },
      { title: "NLP validators", body: "Support matrix, unclaimed matter, coreference, claim numbering, and term and reference-numeral management." },
      { title: "Document pipeline", body: "Import DOCX, PDF, PPTX and images; export attorney-ready DOCX, PDF and PPTX including markup and translation." },
      { title: "Figures", body: "Fabric.js canvas editor, auto-generated drawings, PNG and PPTX export." },
      { title: "Search", body: "Patent database search on Solr across EPO, USPTO and CNIPA." },
      { title: "Auth & billing", body: "Email signup and activation, Questel OIDC SSO, Stripe plans (Flexible, Strategic, Credits) and vouchers." },
      { title: "Integrations", body: "PandaDoc API from Node.js, including backend fixes." },
      { title: "i18n", body: "UI in English, French, German, Spanish, Chinese and Japanese." },
      { title: "Ops", body: "Docker + nginx, GitLab CI to Harbor, GTM, and forced frontend version refresh." },
    ],
    problems: [
      "Cut first-draft time by turning raw claims into a structured, editable draft.",
      "Automated conversion of structured input into properly formatted legal documents.",
      "Raised draft quality with validators for support, numbering and terminology.",
      "Kept figures and reference numerals in sync with the description.",
      "Combined enterprise SSO and subscription billing in one SPA.",
      "Kept a large SPA maintainable with Vuex modules and Composition API composables.",
    ],
    stack: ["Vue 3", "Quasar", "Vuex", "Node.js", "WebSockets", "Fabric.js", "Solr", "Open XML (DOCX)", "Stripe", "OIDC", "PandaDoc", "Docker", "nginx", "GitLab CI"],
  },
  {
    slug: "smartland",
    name: "SmartLand",
    tagline: "Smart tourism & citizen services app",
    role: "React Native developer (freelance)",
    category: "Mobile · AI chat · Notifications",
    platform: "Mobile",
    accent: "#d97706",
    summary:
      "A multilingual mobile app for discovering a territory: points of interest, events and guided itineraries, with Plinio, an AI assistant in a real-time chat. Users can also contact local offices through chats with attachments, receive in-app and push notifications, and browse public content without an account.",
    overview:
      "SmartLand helps visitors and citizens explore a region in southern Italy. I built and extended the mobile app end to end, from API integration and real-time chat to UI polish and localization in 11 languages.",
    highlights: [
      { title: "AI assistant chat (Plinio)", body: "Real-time conversation over the Matrix protocol, with replies rendered as Markdown, an animated typing indicator and conversation history. I also traced and fixed a bug that delivered every first question to the AI twice." },
      { title: "Points of interest & events", body: "Rich detail pages that render HTML content natively, interactive maps, localized opening-hours tables with today highlighted, and event images shown uncropped at their natural aspect ratio." },
      { title: "Itineraries", body: "Guided itineraries where each stop links through to its point of interest." },
      { title: "Guest mode", body: "Public content can be browsed without an account; protected actions (profile, AI chat, notifications) lead to registration with a clear prompt and a way back." },
      { title: "Support chats with attachments", body: "Citizens open chats with local offices about vandalism, urban decay or dangerous situations, sending text, photos and documents. Images are compressed before upload and large files are streamed through native modules." },
      { title: "Notifications", body: "In-app inbox with an unread badge and server-side read tracking, plus Firebase Cloud Messaging push with device registration tied to the user session." },
      { title: "Account flows", body: "Registration with a live username availability check, password recovery, profile editing and notification preferences." },
      { title: "Internationalization", body: "All UI text translated into 11 languages, with locale-aware dates and weekday names." },
    ],
    problems: [
      "Designed a single API access layer that switches between authenticated and public, tenant-scoped endpoints without touching the screens.",
      "Built lightweight, dependency-free HTML and Markdown renderers on top of React Native Text, avoiding heavy third-party libraries.",
      "Added network resilience and diagnostics: request timeouts, development request tracing and step-by-step push-pipeline logging that made backend and device issues quick to isolate.",
      "Worked closely with the client and backend team: clarified requirements, probed the APIs to confirm available endpoints and wrote precise integration questions, which kept iterations short.",
    ],
    results: [
      "Shipped more than a dozen feature requests and UI fixes in short iterations.",
      "Replaced mock screens (reports, notifications) with real, API-driven features.",
      "The app runs in 11 languages, with consistent, accessible typography (no clipped text) across screens.",
    ],
    stack: ["React Native 0.87", "TypeScript", "Axios", "Matrix Client-Server API", "Firebase Cloud Messaging", "Notifee", "Mapbox", "i18next"],
  },
  {
    slug: "suntricity",
    name: "Suntricity",
    tagline: "Utility analytics SaaS for schools",
    role: "Platform build, Next.js frontend",
    category: "SaaS · Analytics · Multi-tenant",
    platform: "Web",
    accent: "#a16207",
    links: [{ label: "suntricity.co.za", href: "https://www.suntricity.co.za/" }],
    summary:
      "A SaaS analytics platform for South African schools that turns municipal electricity and water invoices into KPIs and dashboards.",
    overview:
      "I built Suntricity, a multi-tenant SaaS platform that turns schools' municipal electricity and water invoices into clear KPIs and dashboards. I delivered the sign-up and school-claim flow, consumption and cost dashboards, historical trend reporting, and alerts for abnormal usage such as water leaks. The frontend is Next.js, deployed on Vercel.",
    highlights: [
      { title: "Auth & onboarding", body: "Sign-up and sign-in with a “Claim Your School” registration flow." },
      { title: "Analytics dashboards", body: "General and detailed views turning raw utility data into KPIs." },
      { title: "Invoice data tracking", body: "Electricity and water invoices compared month over month." },
      { title: "Anomaly alerts", body: "Automated alerts on abnormal consumption, such as leaks, before they become large bills." },
      { title: "Historical reporting", body: "Usage trends over time." },
      { title: "Multi-tenant structure", body: "Each school manages its own account and data." },
    ],
    problems: [
      "Gave schools visibility into utility spend beyond a single monthly bill.",
      "Flagged costly problems early instead of after a high bill.",
      "Supported budget and investment decisions (solar, water-saving retrofits) with historical data.",
    ],
    stack: ["Next.js", "React", "Vercel"],
  },
  {
    slug: "lifeforce",
    name: "Lifeforce",
    tagline: "Health e-commerce & membership",
    role: "Next.js storefront",
    category: "E-commerce · Headless CMS · Subscriptions",
    platform: "Web",
    accent: "#be123c",
    links: [{ label: "mylifeforce.com", href: "https://mylifeforce.com/" }],
    summary:
      "A longevity-medicine membership platform combining biomarker testing, telehealth and personalized subscriptions, delivered as a Next.js e-commerce site.",
    overview:
      "I worked on the Lifeforce storefront, a Next.js e-commerce and membership site for a longevity-medicine company. The work covered product collections and product pages, cart and checkout, the member account area, subscription commerce, and CMS-driven landing pages built on Storyblok so the marketing team can edit content without a developer.",
    highlights: [
      { title: "Storefront", body: "Collections segmented by health goal, product pages, cart, checkout and gift cards." },
      { title: "Membership & subscriptions", body: "Signup funnel and monthly recurring delivery tied to a membership plan." },
      { title: "Member accounts", body: "Login and account profile area." },
      { title: "Headless CMS", body: "Storyblok-driven marketing pages, health-goal pages and blog." },
      { title: "Templated landing pages", body: "10+ health-goal pages sharing one layout with different content and products." },
      { title: "Reusable components", body: "Comparison table, testimonials carousel and press logo strip." },
      { title: "Responsive video hero", body: "Separate desktop and mobile video sources with image fallback." },
      { title: "Regulated-industry layout", body: "Privacy, patient agreement, pharmacy and shipping/returns pages; Zendesk help center link." },
    ],
    problems: [
      "Consolidated diagnostics, telehealth, e-commerce and subscriptions into one fast, SEO-friendly frontend.",
      "Made many near-identical landing pages maintainable through CMS templates.",
      "Layered a subscription and membership model on top of a standard product catalog.",
    ],
    stack: ["Next.js", "React", "Storyblok", "Zendesk"],
  },
  {
    slug: "the-sauna-heater",
    name: "The Sauna Heater",
    tagline: "Custom Shopify theme",
    role: "Shopify theme development",
    category: "Shopify · Conversion tooling · B2B",
    platform: "Shopify",
    accent: "#9a3412",
    links: [{ label: "thesaunaheater.com", href: "https://thesaunaheater.com/" }],
    summary:
      "A custom Shopify storefront for a specialty sauna and steam retailer selling high-ticket, technical products across many Nordic and US brands.",
    overview:
      "I customized a production Shopify theme for a multi-brand retailer of high-consideration sauna and steam equipment. Beyond layout work, I built conversion tools for technical buying decisions: a heater size calculator and product quiz connected to a recommendation API, guided catalog navigation, accessory bundling at add-to-cart, and B2B lead capture with vertical landing pages. I also wired custom analytics events so quote, quiz and navigation funnels can be measured beyond add-to-cart.",
    highlights: [
      { title: "Heater size calculator", body: "4-step wizard (dimensions, insulation and glass, indoor/outdoor, results) with brand-specific logic for HUUM, Harvia and Saunum; calls a custom API and returns up to 8 recommendations." },
      { title: "Product quiz", body: "Guided preference flow into the same sizing logic, with an expert CTA." },
      { title: "Compass navigation", body: "Tabbed product, collection and article cards driven by metaobjects, with view and click analytics." },
      { title: "Accessory attach", body: "Metafield-driven modal for controls, lights and required add-ons at purchase time." },
      { title: "Heater packages", body: "Sauna-to-heater package merchandising with AJAX cart state." },
      { title: "B2B program", body: "In-theme lead form posting to an external hub; landing pages for spa, golf, country club and general B2B." },
      { title: "Consultative commerce", body: "Calendly consultation page, custom design service page and quote-form app blocks." },
      { title: "Brand merchandising", body: "~28 product and ~35 collection templates across HUUM, Harvia, Saunum, Auroom, Thermory, IKI, Mr. Steam and ThermaSol." },
      { title: "Rich product pages", body: "Metafield-driven features, materials, setup, videos, tabbed descriptions and FAQs." },
    ],
    problems: [
      "Wrong heater size causing returns and support load → size calculator and quiz with live API recommendations.",
      "Deep multi-brand catalog hard to navigate → Compass guided merchandising.",
      "Commercial buyers won't pay list price → quote cart / RFQ and form CTAs.",
      "Incomplete installs and low order value → accessories modal and package add-ons.",
      "Hotels, spas and golf clubs need a wholesale path → B2B lead forms and vertical landing pages.",
      "Consultative funnels invisible in standard analytics → custom Shopify, Matomo and GTM events.",
    ],
    scale: "90+ sections and ~109 templates, including 25–30 merchant-specific sections beyond the stock theme.",
    stack: ["Shopify Liquid", "Online Store 2.0", "Metafields & metaobjects", "Custom JS/CSS", "AJAX Cart API", "REST APIs", "GTM", "Matomo", "Shopify Web Pixels", "Calendly"],
  },
  {
    slug: "ajustev",
    name: "AJUSTEV",
    tagline: "React Native vehicle inspection app",
    role: "Mobile UI design & build",
    category: "Mobile · Insurance tech · Prototype",
    platform: "Mobile",
    accent: "#1d4ed8",
    summary:
      "A cross-platform iOS and Android app that lets insurance adjusters run quick vehicle inspections from a phone, aimed at the Latin American market.",
    overview:
      "I designed and built the React Native app UI for AJUSTEV, a mobile tool for insurance adjusters to run vehicle inspections from a phone. I implemented login, a home dashboard with the inspection list, a plate-based Create Inspection flow, and a guided multi-photo capture workflow, with custom branded UI and React Navigation throughout.",
    highlights: [
      { title: "Login", body: "Login and logout." },
      { title: "Home dashboard", body: "Inspection list on the home screen." },
      { title: "Create inspection", body: "Modal that starts a new inspection from a licence plate." },
      { title: "Guided photo steps", body: "Carousel workflow for required shots (licence, front views)." },
      { title: "Support chat", body: "Support chat screen." },
      { title: "Navigation & branding", body: "React Navigation with custom branded UI (version 1.1.8)." },
    ],
    problems: [],
    note: "This was a UI prototype without backend integration. Camera capture, GPS, offline sync, analytics and push notifications were planned for the next phase.",
    stack: ["React Native 0.72", "React Navigation"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
