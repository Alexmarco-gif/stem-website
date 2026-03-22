import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About | Stem-Cogent",
  description: "Built for teams making difficult decisions in fast-moving markets. Learn why we built Stem and the problem we solve.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <FinalCTA />
      <Footer />
    </main>
  );
}
