import type { ReactNode } from "react";

const sans = "Arial,sans-serif";

const tech: { label: string; svg: ReactNode }[] = [
  {
    label: "React",
    svg: (
      <>
        <g fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <ellipse cx="20" cy="20" rx="16" ry="6.2" />
          <ellipse cx="20" cy="20" rx="16" ry="6.2" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="16" ry="6.2" transform="rotate(120 20 20)" />
        </g>
        <circle cx="20" cy="20" r="3" fill="#38bdf8" />
      </>
    ),
  },
  {
    label: "Next.js",
    svg: (
      <>
        <circle cx="20" cy="20" r="17" fill="#0b0f19" />
        <path d="M14 27V13l13 16M26 13v9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Vue 3",
    svg: (
      <>
        <path d="M3 6h7.5L20 22 29.5 6H37L20 35Z" fill="#41b883" />
        <path d="M10.5 6h5.8L20 12.5 23.7 6h5.8L20 22Z" fill="#35495e" />
      </>
    ),
  },
  {
    label: "TypeScript",
    svg: (
      <>
        <rect x="3" y="3" width="34" height="34" rx="6" fill="#3178c6" />
        <text x="33" y="32" textAnchor="end" fontFamily={sans} fontWeight="700" fontSize="15" fill="#fff">
          TS
        </text>
      </>
    ),
  },
  {
    label: "Node.js",
    svg: (
      <>
        <path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" fill="#5fa04e" />
        <text x="20" y="25" textAnchor="middle" fontFamily={sans} fontWeight="700" fontSize="12" fill="#fff">
          JS
        </text>
      </>
    ),
  },
  {
    label: "React Native",
    svg: (
      <>
        <rect x="10" y="3" width="20" height="34" rx="4" fill="none" stroke="#7c8cff" strokeWidth="2" />
        <g fill="none" stroke="#38bdf8" strokeWidth="1.3">
          <ellipse cx="20" cy="19" rx="8" ry="3.2" />
          <ellipse cx="20" cy="19" rx="8" ry="3.2" transform="rotate(60 20 19)" />
          <ellipse cx="20" cy="19" rx="8" ry="3.2" transform="rotate(120 20 19)" />
        </g>
        <circle cx="20" cy="19" r="1.6" fill="#38bdf8" />
      </>
    ),
  },
  {
    label: "Tailwind CSS",
    svg: (
      <path
        d="M8 17c2-6 6-8 11-6 3 1 4 4 7 5s6-1 7-3c-2 6-6 8-11 6-3-1-4-4-7-5s-6 1-7 3Zm-3 9c2-6 6-8 11-6 3 1 4 4 7 5s6-1 7-3c-2 6-6 8-11 6-3-1-4-4-7-5s-6 1-7 3Z"
        fill="#06b6d4"
      />
    ),
  },
  { label: "Redux", svg: <Tile fill="#764abc" text="Rx" size={15} y={26} /> },
  {
    label: "Shopify",
    svg: (
      <>
        <path d="M9 12h22l-2 24H11Z" fill="#95bf47" />
        <path d="M15 14v-3a5 5 0 0 1 10 0v3" fill="none" stroke="#5e8e3e" strokeWidth="2.2" />
        <text x="20" y="30" textAnchor="middle" fontFamily={sans} fontWeight="700" fontSize="12" fill="#fff">
          S
        </text>
      </>
    ),
  },
  { label: "Stripe", svg: <Tile fill="#635bff" text="S" size={18} y={27} /> },
  {
    label: "OpenAI",
    svg: (
      <>
        <circle cx="20" cy="20" r="17" fill="#10a37f" />
        <path d="M20 9l2.5 6.8L29 18l-6.5 2.3L20 27l-2.5-6.7L11 18l6.5-2.2Z" fill="#fff" />
      </>
    ),
  },
  {
    label: "Make.com",
    svg: (
      <>
        <rect x="3" y="3" width="34" height="34" rx="9" fill="#6d00cc" />
        <path
          d="M11 28l4-15 4 15M21 28l4-15 4 15"
          stroke="#fff"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  { label: "NetSuite", svg: <Tile fill="#0b4f8c" text="NS" size={13} y={26} /> },
  {
    label: "Docker",
    svg: (
      <g fill="#2496ed">
        <rect x="8" y="15" width="5" height="5" />
        <rect x="14" y="15" width="5" height="5" />
        <rect x="20" y="15" width="5" height="5" />
        <rect x="14" y="9" width="5" height="5" />
        <rect x="20" y="9" width="5" height="5" />
        <path d="M4 22h28c1-2 3-3 5-2-1 7-8 11-17 11-8 0-14-4-16-9Z" />
      </g>
    ),
  },
  {
    label: "Mapbox",
    svg: (
      <>
        <path d="M20 4c-6.6 0-12 5.2-12 11.7C8 24 20 36 20 36s12-12 12-20.3C32 9.2 26.6 4 20 4Z" fill="#4264fb" />
        <circle cx="20" cy="16" r="4.5" fill="#fff" />
      </>
    ),
  },
  { label: "Storyblok", svg: <Tile fill="#09b3af" text="S" size={18} y={27} /> },
];

function Tile({ fill, text, size, y }: { fill: string; text: string; size: number; y: number }) {
  return (
    <>
      <rect x="3" y="3" width="34" height="34" rx="9" fill={fill} />
      <text x="20" y={y} textAnchor="middle" fontFamily={sans} fontWeight="700" fontSize={size} fill="#fff">
        {text}
      </text>
    </>
  );
}

export function TechGrid() {
  return (
    <div className="tech reveal">
      {tech.map((t) => (
        <div key={t.label} className="t">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            {t.svg}
          </svg>
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}
