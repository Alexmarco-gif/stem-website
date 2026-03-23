"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Layers, LayoutDashboard } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { accentColors, statGradient, type AccentKey } from "@/lib/accent-colors";

const pillars: {
  title: string;
  description: string;
  icon: React.ElementType;
  stat: string;
  accent: AccentKey;
}[] = [
  {
    title: "12+ Fintech Strategy Leaders Consulted",
    description:
      "Designed with input from senior operators who understand the real gaps in Nigerian fintech strategy workflows.",
    icon: MapPin,
    stat: "12+",
    accent: "primary",
  },
  {
    title: "Signal Lineage & Source Traceability",
    description:
      "Every signal is traceable back to its origin, providing the context teams need to trust the output.",
    icon: Layers,
    stat: "100%",
    accent: "teal",
  },
  {
    title: "Built for Nigerian Financial Markets",
    description:
      "Built specifically for the unique dynamics and fragmentation of the Nigerian financial landscape.",
    icon: ShieldCheck,
    stat: "NG",
    accent: "gold",
  },
  {
    title: "Decision-Ready Intelligence",
    description:
      "Prioritized alerts and intelligence summaries over cluttered dashboards and raw data dumps.",
    icon: LayoutDashboard,
    stat: "✓",
    accent: "primary",
  },
];

const badgeConfig: { label: string; accent: AccentKey }[] = [
  { label: "Fintech-Native",    accent: "primary" },
  { label: "Signal Lineage",   accent: "teal"    },
  { label: "Decision-Ready",   accent: "gold"    },
  { label: "Nigerian Markets", accent: "primary" },
];

export function Trust() {
  const reduced = useReducedMotion();

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle organic touches */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(77,124,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-primary/8 border border-primary/20 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Why teams trust Stem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            Intelligence is only useful if you can{" "}
            <span className="text-gradient-blue">trust it.</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stem is engineered for precision, transparency, and regional relevance — so every output your team acts on is backed by evidence you can trace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const ac = accentColors[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }}
                whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
                className="glass-light rounded-2xl p-8 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: ac.fill, border: `1px solid ${ac.border}` }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: ac.color }} />
                </div>
                <div
                  className="text-3xl font-bold mb-3 stat-number"
                  style={{
                    background: statGradient(pillar.accent),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {pillar.stat}
                </div>
                <h3 className="text-base font-bold text-ink mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-light rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-10"
        >
          <div className="flex-1">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-primary font-bold text-lg">&ldquo;</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-ink mb-4 leading-snug">
              Strategy teams in Nigeria&apos;s financial sector operate in one of
              the world&apos;s most dynamic and fast-moving markets. The tools they
              use for intelligence need to match that pace. Stem is built
              specifically for that reality.
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              A platform that synthesises competitor moves, market signals, and
              regulatory shifts — and delivers them as decision-ready
              intelligence — is exactly what the next generation of Nigerian
              fintech operators needs.
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#4D7CFF,#00D4AA)" }}
              >
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Stem-Cogent Founding Team</p>
                <p className="text-gray-400 text-xs">Built for Nigerian Financial Markets</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 grid grid-cols-2 gap-4">
            {badgeConfig.map((badge) => {
              const ac = accentColors[badge.accent];
              return (
                <div
                  key={badge.label}
                  className="px-4 py-3 rounded-xl text-center"
                  style={{
                    background: ac.fill,
                    border: `1px solid ${ac.border}`,
                  }}
                >
                  <p className="text-xs font-bold" style={{ color: ac.color }}>
                    {badge.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
