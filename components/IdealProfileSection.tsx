import { landingContent } from "@/lib/landing-content";

export function IdealProfileSection() {
  const c = landingContent.idealProfile;
  return (
    <section className="section" id="perfil" data-reveal>
      <p className="eyebrow">{c.eyebrow}</p>
      <h2>{c.title}</h2>
      <div className="profile-columns">
        <article className="card">
          <h3>Para empresas que:</h3>
          <ul className="list checklist">
            {c.forCompanies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3>Funciona mejor cuando:</h3>
          <div className="mini-steps">
            {c.worksBest.map((item, index) => (
              <div key={item.title}>
                <p className="mini-title">{index + 1}. {item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
      <p className="section-copy">{c.closing}</p>
      <div className="inline-metrics">
        {c.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
    </section>
  );
}

