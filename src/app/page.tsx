import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { Engine } from "@/components/sections/Engine";
import { Benefits } from "@/components/sections/Benefits";
import { Plan } from "@/components/sections/Plan";
import { UseCases } from "@/components/sections/UseCases";
import { Trust } from "@/components/sections/Trust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stakes />
      <Engine />
      <Benefits />
      <Plan />
      <UseCases />
      <Trust />
      <FinalCTA />
      <Footer />
    </main>
  );
}
