import { landingContent } from "@/lib/landing-content";
import { CardsSection } from "./CardsSection";

export function UseCasesSection() {
  const c = landingContent.useCases;
  return (
    <CardsSection
      id="casos"
      eyebrow={c.eyebrow}
      title={c.title}
      description={c.description}
      cards={c.cards}
    />
  );
}

