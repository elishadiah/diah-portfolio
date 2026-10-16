import { useId } from "react";

// Brand mark: a "D" monogram with the accent dot from the "Diah." wordmark.
// Geometry is shared with src/app/icon.svg and the generated favicon/apple-icon PNGs.
export function LogoMark({ size = 32 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#6a3df0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
      <path d="M16 17h10a15 15 0 0 1 0 30H16Z" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinejoin="round" />
      <circle cx="50.5" cy="44" r="4.2" fill="#7dd3fc" />
    </svg>
  );
}
