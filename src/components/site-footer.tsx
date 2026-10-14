import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© 2026 {site.shortName}. All rights reserved.</span>
        <span>Full-stack developer · React · Vue · React Native · AI</span>
      </div>
    </footer>
  );
}
