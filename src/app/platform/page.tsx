import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformProcess } from "@/components/sections/PlatformProcess";
import { PlatformCapabilities } from "@/components/sections/PlatformCapabilities";
import { PlatformTrust } from "@/components/sections/PlatformTrust";
import { PlatformOutputs } from "@/components/sections/PlatformOutputs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Platform | Stem-Cogent",
  description: "A decision intelligence platform built for external-world visibility. Learn how Stem turns fragmented signals into usable intelligence.",
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PlatformHero />
      <PlatformProcess />
      <PlatformCapabilities />
      <PlatformTrust />
      <PlatformOutputs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
