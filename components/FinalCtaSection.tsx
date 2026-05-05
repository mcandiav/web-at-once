import { landingContent } from "@/lib/landing-content";

export function FinalCtaSection() {
  const c = landingContent.finalCta;
  return (
    <section className="section cta-final" id="sobre">
      <p className="eyebrow">{c.eyebrow}</p>
      <h2>{c.title}</h2>
      <p className="section-copy">{c.paragraph}</p>
      <p className="section-copy strong">{c.benefit}</p>
      <p className="meta-line">{c.line}</p>
      <a className="btn btn-primary" href="#evaluacion">{c.cta}</a>
    </section>
  );
}

