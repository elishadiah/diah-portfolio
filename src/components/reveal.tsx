"use client";

import { useEffect } from "react";

// Fades in `.reveal` elements as they scroll into view. Only content below the
// first screen starts hidden, and everything is shown after 6s regardless.
export function Reveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("pre");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("pre");
        io.observe(el);
      }
    }
    const t = setTimeout(() => els.forEach((el) => el.classList.remove("pre")), 6000);
    return () => {
      io.disconnect();
      clearTimeout(t);
      els.forEach((el) => el.classList.remove("pre"));
    };
  }, []);
  return null;
}
