"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Globe, Quote } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { accentColors, type AccentKey } from "@/lib/accent-colors";

const badges: { icon: React.ElementType; label: string; accent: AccentKey }[] = [
  { icon: Users,      label: "12+ Strategy Leaders Consulted", accent: "primary" },
  { icon: Globe,      label: "Nigerian Financial Markets",      accent: "teal"    },
  { icon: ShieldCheck,label: "Signal Lineage & Traceability",  accent: "gold"    },
  { icon: TrendingUp, label: "Decision-Ready Intelligence",    accent: "primary" },
];

export function SocialProof() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Very subtle top gradient from hero dark background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-teal/30 to-gold/20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Testimonial quote */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(77,124,255,0.08)", border: "1px solid rgba(77,124,255,0.15)" }}
            >
              <Quote className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-xl md:text-2xl font-medium text-ink leading-relaxed mb-6">
            &ldquo;The intelligence gap in Nigerian fintech is real — and costly. A
            platform that brings market, competitor, and policy signals into a
            single decision layer would change how strategy teams operate
            entirely.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #4D7CFF, #00D4AA)" }}
            >
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-ink">Fintech Strategy Leader</p>
              <p className="text-xs text-gray-400">
                Senior Strategy Consultant, Nigerian Financial Services
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center">
            Designed for Nigeria&apos;s leading fintech strategy and growth teams
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {badges.map((badge, i) => {
              const ac = accentColors[badge.accent];
              return (
                <motion.div
                  key={badge.label}
                  initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    background: ac.fill,
                    border: `1px solid ${ac.border}`,
                  }}
                >
                  <badge.icon className="w-4 h-4 flex-shrink-0" style={{ color: ac.color }} />
                  <span className="text-ink whitespace-nowrap">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
