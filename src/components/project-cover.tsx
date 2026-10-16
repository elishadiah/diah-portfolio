import Image from "next/image";
import type { ProjectCard } from "@/content/project-cards";

// Card thumbnail: the project screenshot cropped to the card's 4:3 frame.
export function ProjectCover({ cover }: { cover: ProjectCard["cover"] }) {
  return (
    <div className="cover">
      <Image
        src={cover.image}
        alt={cover.alt}
        fill
        sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, (max-width: 1060px) 33vw, 280px"
      />
    </div>
  );
}
