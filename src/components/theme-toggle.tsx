"use client";

import { Icon } from "./icons";

// The active half is styled from <html data-theme>, so server and client render the same markup.
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.classList.add("theming");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTimeout(() => document.body.classList.remove("theming"), 400);
  }

  return (
    <button className="toggle" type="button" aria-label="Switch between light and dark mode" onClick={toggle}>
      <span className="s-light">
        <Icon name="sun" small />
      </span>
      <span className="s-dark">
        <Icon name="moon" small />
      </span>
    </button>
  );
}
