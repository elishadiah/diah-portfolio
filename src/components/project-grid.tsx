"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/projects";
import { projectCards, type Filter } from "@/content/project-cards";
import { Icon, type IconName } from "./icons";
import { ProjectCover } from "./project-cover";

const filters: { id: Filter | "all"; label: string; icon: IconName }[] = [
  { id: "all", label: "All", icon: "grid" },
  { id: "ai", label: "AI", icon: "spark" },
  { id: "web", label: "Web apps", icon: "layout" },
  { id: "mobile", label: "Mobile", icon: "phone" },
  { id: "commerce", label: "E-commerce", icon: "cart" },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter | "all">("all");
  const [changed, setChanged] = useState(false);
  let shown = 0;

  return (
    <>
      <div className="filters reveal" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => {
              setFilter(f.id);
              setChanged(true);
            }}
          >
            <Icon name={f.icon} small />
            {f.label}
          </button>
        ))}
      </div>
      <div className="cards">
        {projects.map((p) => {
          const card = projectCards[p.slug];
          if (!card) return null;
          const visible = filter === "all" || card.tags.includes(filter);
          const delay = visible ? shown++ * 0.06 : 0;
          const link = p.links?.[0];
          return (
            <article
              // Re-keying on filter change replays the pop-in animation.
              key={changed ? `${p.slug}-${filter}` : p.slug}
              className={`card ${changed ? "pop" : "reveal"}`}
              hidden={!visible}
              style={{ "--delay": `${delay}s` } as React.CSSProperties}
            >
              <Link href={`/work/${p.slug}`} tabIndex={-1} aria-hidden="true">
                <ProjectCover cover={card.cover} />
              </Link>
              <div className="body">
                <div className="kind">
                  {card.kind}
                  {card.badge && <span className="badge">{card.badge}</span>}
                </div>
                <h3 className="h3">
                  <Link href={`/work/${p.slug}`}>{p.name}</Link>
                </h3>
                <p>{card.blurb}</p>
                {card.planned && (
                  <p className="planned">
                    <b>Planned:</b> {card.planned}
                  </p>
                )}
                <div className="chips">
                  {card.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <div className="more">
                  <Link href={`/work/${p.slug}`}>
                    Case study <Icon name="arrow" small />
                  </Link>
                  {link && (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Visit site <Icon name="out" small />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
