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
    <section className="section hero" id="top" data-reveal>
      <div>
        <p className="eyebrow badge-pulse hero-item delay-0">{content.eyebrow}</p>
        <h1 className="hero-item delay-1">Optimiza tu operación con <span className="accent">IA conectada</span> a NetSuite</h1>
        <p className="lead hero-item delay-2">{content.body1}</p>
        <p className="lead hero-item delay-3">{content.body2}</p>
        <div className="actions hero-item delay-4">
          <a className="btn btn-primary" href="#evaluacion">{content.primaryCta}</a>
          <a className="btn btn-ghost" href="#proceso">{content.secondaryCta}</a>
        </div>
        <p className="meta-line hero-item delay-5">{content.commercialLine}</p>
      </div>
      <aside className="hero-panel hero-item delay-3">
        <div className="chips">
          {content.chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
        <ul className="metrics">
          {content.metrics.map((metric) => (
            <li key={metric}><strong>{metric.split(" ")[0]}</strong> {metric.replace(`${metric.split(" ")[0]} `, "")}</li>
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
