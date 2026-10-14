# Diah — Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- `src/content/site.ts` — name, role, email, domain, intro, services.
- `src/content/projects.ts` — case studies (one entry per project; each gets a page at `/work/<slug>`).

## Build

```bash
npm run build
npm start
```

Deploys as-is to Vercel. Set `site.url` to the real domain first so metadata and the sitemap are correct.
