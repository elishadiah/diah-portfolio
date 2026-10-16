"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "./icons";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const onHome = usePathname() === "/";
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Highlight the section currently in view on the home page.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of nav) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onHome]);

  const current = onHome ? active : "projects";
  const links = nav.map((item) => (
    <Link
      key={item.id}
      href={onHome ? `#${item.id}` : `/#${item.id}`}
      className={current === item.id ? "on" : undefined}
      aria-current={current === item.id ? "true" : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className="top">
      <div className="wrap">
        <Link className="brand" href={onHome ? "#home" : "/"} aria-label={`${site.shortName} — home`}>
          <LogoMark size={34} />
          <span className="brand-word">
            {site.shortName}
            <span>.</span>
          </span>
        </Link>
        <nav className="links" aria-label="Sections">
          {links}
        </nav>
        <ThemeToggle />
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav className="mnav" aria-label="Sections">
          {links}
        </nav>
      )}
    </header>
  );
}
