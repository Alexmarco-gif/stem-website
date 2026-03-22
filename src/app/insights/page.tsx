import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightsHero } from "@/components/sections/InsightsHero";
import { InsightsFeatured } from "@/components/sections/InsightsFeatured";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Insights | Stem-Cogent",
  description: "Market intelligence for teams navigating change. Read reports, briefs, and market observations from Stem.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InsightsHero />
      <InsightsFeatured />
      <InsightsGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
