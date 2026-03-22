import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionsHero } from "@/components/sections/SolutionsHero";
import { SolutionsProblem } from "@/components/sections/SolutionsProblem";
import { SolutionsPillars } from "@/components/sections/SolutionsPillars";
import { SolutionsOutcomes } from "@/components/sections/SolutionsOutcomes";
import { SolutionsRoles } from "@/components/sections/SolutionsRoles";
import { SolutionsWhyNow } from "@/components/sections/SolutionsWhyNow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Solutions | Stem-Cogent",
  description: "Frame Stem around business problems. Reduce strategic blind spots, improve timing, and increase decision confidence.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionsHero />
      <SolutionsProblem />
      <SolutionsPillars />
      <SolutionsOutcomes />
      <SolutionsRoles />
      <SolutionsWhyNow />
      <FinalCTA />
      <Footer />
    </main>
  );
}
