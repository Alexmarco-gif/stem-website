import Link from "next/link";

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
    <footer
      className="pt-24 pb-12 relative overflow-hidden"
      style={{ background: "var(--surface-mid)" }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(77,124,255,0.4), rgba(0,212,170,0.3), transparent)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight mb-6">
              <span className="text-white">Stem</span>
              <span className="text-gradient-blue">.</span>
            </Link>
            <p className="text-white/45 text-base max-w-sm mb-8 leading-relaxed">
              Stem helps strategy and growth teams turn fragmented external signals into decision-ready intelligence.
            </p>
            <Link href="/request-a-scoping-call">
              <button className="btn-glass px-5 py-2.5 rounded-full text-sm font-semibold text-white">
                Request a Scoping Call
              </button>
            </Link>
          </div>

          {[
            { heading: "Platform", links: footerLinks.platform },
            { heading: "Solutions", links: footerLinks.solutions },
            { heading: "Company", links: footerLinks.company },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-sm text-white/80 uppercase tracking-wider mb-6">{col.heading}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/80 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Stem-Cogent. All rights reserved.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/25 hover:text-white/60 text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
