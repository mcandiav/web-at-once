import { landingContent } from "@/lib/landing-content";

export function Footer() {
  const c = landingContent.footer;
  return (
    <footer className="landing-footer">
      <p>{c.proposition}</p>
      <nav className="footer-nav">
        <a href="#top">{c.nav[0]}</a>
        <a href="#diagnostico">{c.nav[1]}</a>
        <a href="#casos">{c.nav[2]}</a>
        <a href="#perfil">{c.nav[3]}</a>
        <a href="#sobre">{c.nav[4]}</a>
      </nav>
      <p><a href={`mailto:${c.contact}`}>{c.contact}</a></p>
      <p><a href="#evaluacion">{c.cta}</a></p>
      <p>{c.copyright}</p>
      <p>{c.finalLine}</p>
    </footer>
  );
}

