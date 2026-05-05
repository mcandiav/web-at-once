type Props = {
  content: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    primaryCta: string;
    secondaryCta: string;
    commercialLine: string;
    chips: string[];
    metrics: string[];
    flow: string[];
  };
};

export function HeroSection({ content }: Props) {
  return (
    <section className="section hero" id="top">
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="lead">{content.body1}</p>
        <p className="lead">{content.body2}</p>
        <div className="actions">
          <a className="btn btn-primary" href="#evaluacion">{content.primaryCta}</a>
          <a className="btn btn-ghost" href="#proceso">{content.secondaryCta}</a>
        </div>
        <p className="meta-line">{content.commercialLine}</p>
      </div>
      <aside className="hero-panel">
        <div className="chips">
          {content.chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
        <ul className="metrics">
          {content.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
        <ol className="flow">
          {content.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </aside>
    </section>
  );
}

