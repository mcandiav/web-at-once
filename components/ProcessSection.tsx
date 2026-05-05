import { landingContent } from "@/lib/landing-content";

export function ProcessSection() {
  const c = landingContent.process;
  return (
    <section className="section section-alt" id="proceso">
      <p className="eyebrow">{c.eyebrow}</p>
      <h2>{c.title}</h2>
      <p className="section-copy">{c.description}</p>
      <div className="steps">
        {c.steps.map((step, index) => (
          <article key={step.title} className="step">
            <p className="step-number">{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

