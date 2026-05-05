import { landingContent } from "@/lib/landing-content";
import { CardsSection } from "./CardsSection";

export function DeliverablesSection() {
  const c = landingContent.deliverables;
  return (
    <CardsSection
      id="entregables"
      eyebrow={c.eyebrow}
      title={c.title}
      cards={c.cards}
      alt
    />
  );
}

