"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { accentColors, type AccentKey } from "@/lib/accent-colors";

const steps: { number: string; title: string; description: string; accent: AccentKey }[] = [
  {
    number: "01",
    title: "Tell us what to watch",
    description:
      "You start by defining the signals, markets, entities, and monitoring priorities that matter most to your team. No complex setup — just your strategic focus areas.",
    accent: "primary",
  },
  {
    number: "02",
    title: "Stem filters signal from noise",
    description:
      "The platform continuously monitors across sources, detects meaningful changes, and surfaces only what deserves your attention — not another data dump.",
    accent: "teal",
  },
  {
    number: "03",
    title: "You act from a position of strength",
    description:
      "You receive prioritised, contextualised intelligence you can act on immediately — and defend with clear reasoning when it matters most.",
    accent: "gold",
  },
];

export function Plan() {
  const reduced = useReducedMotion();
  const lineRef = React.useRef(null);
  const lineInView = useInView(lineRef, { once: true });
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section
      className="py-28 overflow-hidden relative"
      style={{ background: "var(--surface-dark)" }}
    >
      {/* Organic blobs */}
      <div
        className="organic-blob organic-blob-blue pointer-events-none opacity-30"
        style={{ width: 500, height: 500, top: "-10%", left: "-8%" }}
      />
      <div
        className="organic-blob organic-blob-gold pointer-events-none opacity-20"
        style={{ width: 400, height: 400, bottom: "-5%", right: "-5%" }}
      />
      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="premium-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
            Your clear path forward
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Three steps from fragmented inputs to{" "}
            <span className="text-gradient-blue">confident decisions.</span>
          </h2>
          <p className="text-lg text-white/55">
            Adopting decision intelligence should not be a multi-month
            integration — or another tool that creates more work than it removes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Animated connecting line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-10 left-[calc(1/6*100%)] right-[calc(1/6*100%)] h-px z-0 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #4D7CFF 0%, #00D4AA 50%, #C9A84C 100%)",
              }}
              initial={{ width: "0%" }}
              animate={reduced || lineInView ? { width: "100%" } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </div>

          {steps.map((step, i) => {
            const ac = accentColors[step.accent];
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={step.number}
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reduced ? { duration: 0 } : { duration: 0.65, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                onHoverStart={() => !reduced && setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative z-10 glass-dark rounded-2xl p-8 transition-all duration-300"
                style={{
                  borderColor: isHovered
                    ? ac.border.replace("0.25", "0.45")
                    : ac.border.replace("0.25", "0.15"),
                  boxShadow: isHovered
                    ? `0 24px 48px rgba(0,0,0,0.4), 0 0 30px ${ac.glow}`
                    : undefined,
                }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mb-8 relative"
                  style={{ background: `linear-gradient(135deg, ${ac.color} 0%, ${ac.color}99 100%)` }}
                  animate={reduced ? {} : {
                    boxShadow: [
                      `0 4px 20px ${ac.glow}`,
                      `0 4px 40px ${ac.glow.replace("0.20", "0.45")}`,
                      `0 4px 20px ${ac.glow}`,
                    ],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 leading-snug">{step.title}</h3>
                <p className="text-white/55 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-white/45 text-base mb-6">
            Ready to get started? Most teams are up and running within a week.
          </p>
          <Link href="/request-a-scoping-call">
            <motion.button
              whileHover={reduced ? {} : { scale: 1.02 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              className="btn-premium group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
            >
              Book Your Scoping Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
