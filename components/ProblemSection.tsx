import { landingContent } from "@/lib/landing-content";
import { CardsSection } from "./CardsSection";

export function ProblemSection() {
  const c = landingContent.problem;
  return (
    <CardsSection
      id="problema"
      eyebrow={c.eyebrow}
      title={c.title}
      description={c.description}
      cards={c.cards}
      alt
    />
  );
}

