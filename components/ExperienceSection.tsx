import { landingContent } from "@/lib/landing-content";

export function ExperienceSection() {
  const c = landingContent.experience;
  return (
    <section className="section section-alt" id="experiencia" data-reveal>
      <p className="eyebrow">{c.eyebrow}</p>
      <h2>{c.title}</h2>
      {c.paragraphs.map((paragraph) => (
        <p key={paragraph} className="section-copy">{paragraph}</p>
      ))}
      <div className="grid grid-3">
        {c.cards.map((card) => (
          <article className="card reveal-item" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
      <div className="inline-metrics">
        {c.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
    </section>
  );
}

