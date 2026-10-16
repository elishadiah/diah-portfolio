import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projectCards } from "@/content/project-cards";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

// Every slug is prerendered below; this only silences the dev-mode instant-navigation check on `params`.
export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const cover = projectCards[project.slug]?.cover;

  return (
    <article>
      <header className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
        <Link href="/#projects" className="text-sm text-muted transition-colors hover:text-accent">
          ← All projects
        </Link>
        <div className="mt-8 grid items-end gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-wider text-accent uppercase">{project.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
          </div>
          <div>
            <p className="leading-relaxed text-muted">{project.summary}</p>
            {project.links && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
                  >
                    Visit {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {cover && (
          <a
            href={cover.image}
            target="_blank"
            rel="noreferrer"
            className="mt-10 block overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow)]"
            title="Open full-size image"
          >
            <Image
              src={cover.image}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              priority
              sizes="(max-width: 1140px) 100vw, 1080px"
              className="h-auto w-full"
            />
          </a>
        )}
      </header>

      <Band>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">What I did</h2>
            <p className="mt-4 leading-relaxed text-muted">{project.overview}</p>
            {project.note && (
              <p className="mt-5 rounded-xl border border-line bg-accent-soft p-4 text-sm leading-relaxed">
                <span className="font-semibold">Scope note: </span>
                {project.note}
              </p>
            )}
          </div>
          <aside className="space-y-6 rounded-xl border border-line bg-card p-6">
            <Fact label="Role">{project.role}</Fact>
            <Fact label="Platform">{project.platform}</Fact>
            {project.scale && <Fact label="Scale">{project.scale}</Fact>}
            <Fact label="Stack">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-md bg-accent-soft px-2 py-1 text-xs text-accent">
                    {t}
                  </li>
                ))}
              </ul>
            </Fact>
          </aside>
        </div>
      </Band>

      <Band>
        <Eyebrow>Features</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">What I Built</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-line bg-card p-5">
              <h3 className="text-sm font-semibold">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.body}</p>
            </div>
          ))}
        </div>
      </Band>

      {project.problems.length > 0 && (
        <Band>
          <Eyebrow>{project.results ? "Engineering" : "Impact"}</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {project.results ? "Technical Highlights" : "Problems Solved"}
          </h2>
          <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {project.problems.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed">
                <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m5 12 5 5 9-10" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </Band>
      )}

      {project.results && (
        <Band>
          <Eyebrow>Outcome</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">Results</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {project.results.map((r) => (
              <li key={r} className="rounded-xl border border-line bg-card p-5 text-sm leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
        </Band>
      )}

      <Band>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/work/${next.slug}`} className="group">
            <p className="text-xs font-semibold tracking-wider text-muted uppercase">Next project</p>
            <p className="mt-1 text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
              {next.name} <span aria-hidden="true">→</span>
            </p>
            <p className="text-sm text-muted">{next.tagline}</p>
          </Link>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Project like ${project.name}`)}`}
            className="self-start rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover sm:self-auto"
          >
            Build something similar
          </a>
        </div>
      </Band>
    </article>
  );
}

function Band({ children }: { children: ReactNode }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-14">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold tracking-wider text-accent uppercase">{children}</p>;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wider text-muted uppercase">{label}</p>
      <div className="mt-1.5 text-sm">{children}</div>
    </div>
  );
}
