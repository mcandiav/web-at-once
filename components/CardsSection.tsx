import type { CardItem } from "@/lib/landing-content";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  cards: CardItem[];
  alt?: boolean;
};

export function CardsSection({ id, eyebrow, title, description, cards, alt }: Props) {
  return (
    <section className={`section ${alt ? "section-alt" : ""}`} id={id} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
      <div className="grid">
        {cards.map((card) => (
          <article key={card.title} className="card reveal-item">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

