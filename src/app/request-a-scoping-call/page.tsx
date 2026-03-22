import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/ContactFAQ";

export const metadata = {
  title: "Request a Scoping Call | Stem-Cogent",
  description: "Start with a conversation focused on your decision environment. Tell us what your team is trying to track, assess, or decide.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
