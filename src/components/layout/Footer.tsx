import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  platform: [
    { name: "Platform overview", href: "/platform" },
    { name: "How it works", href: "/platform#how-it-works" },
    { name: "Core capabilities", href: "/platform#capabilities" },
  ],
  solutions: [
    { name: "Strategic blind spots", href: "/solutions#blind-spots" },
    { name: "Market expansion", href: "/solutions#expansion" },
    { name: "Competitor response", href: "/solutions#competitor" },
  ],
  company: [
    { name: "About Stem", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/request-a-scoping-call" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight mb-6">
              Stem<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Stem helps strategy and growth teams turn fragmented external signals into decision-ready intelligence.
            </p>
            <Button size="sm" className="rounded-full">Request a Scoping Call</Button>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Stem-Cogent. All rights reserved.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
