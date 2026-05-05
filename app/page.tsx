import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { DeliverablesSection } from "@/components/DeliverablesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { IdealProfileSection } from "@/components/IdealProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EvaluationFormSection } from "@/components/EvaluationFormSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { VisualEffects } from "@/components/VisualEffects";
import { landingContent } from "@/lib/landing-content";

export default function Home() {
  return (
    <main className="landing-root">
      <VisualEffects />
      <Header items={landingContent.nav} />
      <HeroSection content={landingContent.hero} />
      <ProblemSection />
      <DiagnosisSection />
      <DeliverablesSection />
      <UseCasesSection />
      <ProcessSection />
      <IdealProfileSection />
      <ExperienceSection />
      <EvaluationFormSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}

