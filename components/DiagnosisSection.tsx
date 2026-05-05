import { landingContent } from "@/lib/landing-content";
import { CardsSection } from "./CardsSection";

export function DiagnosisSection() {
  const c = landingContent.diagnosis;
  return (
    <CardsSection
      id="diagnostico"
      eyebrow={c.eyebrow}
      title={c.title}
      description={c.description}
      cards={c.cards}
    />
  );
}

