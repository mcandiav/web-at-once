import { landingContent } from "@/lib/landing-content";

export function ProcessSection() {
  const c = landingContent.process;
  return (
    <section className="section section-alt" id="proceso" data-reveal>
      <p className="eyebrow">{c.eyebrow}</p>
      <h2>{c.title}</h2>
      <p className="section-copy">{c.description}</p>
      <div className="steps">
        {c.steps.map((step, index) => (
          <article key={step.title} className="step reveal-item">
            <p className="step-number-bg">{index + 1}</p>
            <p className="step-number">{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

