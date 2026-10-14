import Image from "next/image";
import type { ProjectCard } from "@/content/project-cards";
import { Icon } from "./icons";

export function ProjectCover({ cover, priority }: { cover: ProjectCard["cover"]; priority?: boolean }) {
  return (
    <div className="cover">
      {"image" in cover ? (
        <Image
          src={cover.image}
          alt={cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, (max-width: 1060px) 33vw, 280px"
        />
      ) : (
        <div className={`art ${cover.art}`} aria-hidden="true">
          <span className="glyph">
            <Icon name={cover.icon} />
          </span>
          <span className="lbl">{cover.label}</span>
        </div>
      )}
    </div>
  );
}
