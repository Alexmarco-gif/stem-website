"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Layers, LayoutDashboard } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const pillars = [
  {
    title: "12+ Fintech Strategy Leaders Consulted",
    description:
      "Designed with input from senior operators who understand the real gaps in Nigerian fintech strategy workflows.",
    icon: MapPin,
    stat: "12+",
  },
  {
    title: "Signal Lineage & Source Traceability",
    description:
      "Every signal is traceable back to its origin, providing the context teams need to trust the output.",
    icon: Layers,
    stat: "100%",
  },
  {
    title: "Built for Nigerian Financial Markets",
    description:
      "Built specifically for the unique dynamics and fragmentation of the Nigerian financial landscape.",
    icon: ShieldCheck,
    stat: "NG",
  },
  {
    title: "Decision-Ready Intelligence",
    description:
      "Prioritized alerts and intelligence summaries over cluttered dashboards and raw data dumps.",
    icon: LayoutDashboard,
    stat: "✓",
  },
];

export function Trust() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why teams trust Stem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Intelligence is only useful if you can trust it.
          </h2>
          <p className="text-xl text-gray-600">
            Stem is engineered for precision, transparency, and regional relevance — so every output your team acts on is backed by evidence you can trace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-3">
                {pillar.stat}
              </div>
              <h3 className="text-base font-bold text-ink mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
          className="mt-20 p-12 rounded-3xl bg-white border border-gray-100 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-ink mb-4">
              &ldquo;Strategy teams in Nigeria&apos;s financial sector operate in one of
              the world&apos;s most dynamic and fast-moving markets. The tools they
              use for intelligence need to match that pace. Stem is built
              specifically for that reality.&rdquo;
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A platform that synthesises competitor moves, market signals, and
              regulatory shifts — and delivers them as decision-ready
              intelligence — is exactly what the next generation of Nigerian
              fintech operators needs.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Stem-Cogent Founding Team</p>
                <p className="text-gray-500 text-xs">Built for Nigerian Financial Markets</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 grid grid-cols-2 gap-6">
            {["Fintech-Native", "Signal Lineage", "Decision-Ready", "Nigerian Markets"].map(
              (badge) => (
                <div
                  key={badge}
                  className="px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 text-center"
                >
                  <p className="text-xs font-bold text-primary">{badge}</p>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
