import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Stakes } from "@/components/sections/Stakes";
import { Guide } from "@/components/sections/Guide";
import { Plan } from "@/components/sections/Plan";
import { Engine } from "@/components/sections/Engine";
import { Benefits } from "@/components/sections/Benefits";
import { UseCases } from "@/components/sections/UseCases";
import { Trust } from "@/components/sections/Trust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* 1. Character + Desire */}
      <Hero />
      {/* 2. Social proof — immediate trust signal */}
      <SocialProof />
      {/* 3. Problem — external + internal + philosophical */}
      <Stakes />
      {/* 4. Guide — empathy + authority */}
      <Guide />
      {/* 5. Plan — clear 3-step path to success */}
      <Plan />
      {/* 6. How it works — deeper explanation of the plan */}
      <Engine />
      {/* 7. Use cases — success scenarios in action */}
      <UseCases />
      {/* 8. Success vision — the hero's transformed reality */}
      <Benefits />
      {/* 9. Trust & authority — credibility reinforcement */}
      <Trust />
      {/* 10. Final CTA — direct + transitional */}
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
