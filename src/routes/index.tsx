import { createFileRoute } from "@tanstack/react-router";
import { CareerPreview } from "@/components/home/CareerPreview";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { HollandStrip } from "@/components/home/HollandStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IntroCards } from "@/components/home/IntroCards";
import { QuizPicker } from "@/components/home/QuizPicker";
import { SiteShell } from "@/components/layout/SiteShell";
import { TypeGrid } from "@/components/personality/TypeGrid";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <IntroCards />
      <HowItWorks />
      <QuizPicker />
      <TypeGrid />
      <HollandStrip />
      <CareerPreview />
      <Faq />
      <CtaBand />
    </SiteShell>
  );
}
