import { site } from "@/content/site";
import { LogoMark } from "./logo";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span className="foot-brand">
          <LogoMark size={22} />© 2026 {site.shortName}. All rights reserved.
        </span>
        <span>Full-stack developer · React · Vue · React Native · AI</span>
      </div>
    </footer>
  );
}
