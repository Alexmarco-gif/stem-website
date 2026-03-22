import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UseCaseHero } from "@/components/sections/UseCaseHero";
import { UseCaseList } from "@/components/sections/UseCaseList";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Use Cases | Stem-Cogent",
  description: "Explore specific high-value workflows. Learn how Stem helps with competitor tracking, market monitoring, policy risk, and expansion support.",
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <UseCaseHero />
      <UseCaseList />
      <FinalCTA />
      <Footer />
    </main>
  );
}
