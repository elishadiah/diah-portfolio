import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-32 sm:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
      <Link href="/" className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg">
        Back to home
      </Link>
    </section>
  );
}
