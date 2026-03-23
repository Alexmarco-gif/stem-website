"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, ShieldAlert, ZapOff } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { slideInLeft, slideInRight, noMotion } from "@/lib/animation-variants";
import { accentColors, type AccentKey } from "@/lib/accent-colors";

const stakes: { title: string; description: string; icon: React.ElementType; accent: AccentKey }[] = [
  {
    title: "Missed competitor moves",
    description:
      "Launches and pricing shifts often become visible only after they have already captured market attention.",
    icon: TrendingDown,
    accent: "primary",
  },
  {
    title: "Delayed expansion timing",
    description:
      "Moving too early or too late due to a lack of clear market entry signals can be a multi-million dollar mistake.",
    icon: ZapOff,
    accent: "gold",
  },
  {
    title: "Weakly defended recommendations",
    description:
      "Internal strategy needs more than 'gut feel' to move forward with confidence and leadership buy-in.",
    icon: ShieldAlert,
    accent: "teal",
  },
  {
    title: "Policy or regulatory surprise",
    description:
      "Regulatory changes can impact operations overnight if signals aren't detected and interpreted early.",
    icon: AlertCircle,
    accent: "rose",
  },
];

export function Stakes() {
  const reduced = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(240,242,248,0.5), transparent)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-red-50 border border-red-100 text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
              The real problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              The cost of a blind spot is rarely visible{" "}
              <span className="text-gradient-blue">until it is expensive.</span>
            </h2>
            <p className="text-xl text-gray-500 mb-4">
              You weren&apos;t hired to guess. But when market intelligence is
              fragmented across dozens of sources — and the manual effort to
              synthesise it grows every month — every recommendation you make
              carries more risk than it should.
            </p>
            <p className="text-xl text-gray-500">
              That gap between what you know and what you&apos;d need to know to
              be fully confident? Right now, your competitors may be exploiting
              it.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakes.map((stake, i) => {
            const ac = accentColors[stake.accent];
            const isHovered = hoveredIndex === i;
            const variant = reduced
              ? noMotion
              : i % 2 === 0
              ? slideInLeft
              : slideInRight;

            return (
              <motion.div
                key={stake.title}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={
                  reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }
                }
                onHoverStart={() => !reduced && setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
                className="group p-8 rounded-2xl bg-white cursor-default transition-all duration-300"
                style={{
                  border: `1px solid ${isHovered ? ac.border.replace("0.25", "0.45") : ac.border}`,
                  boxShadow: isHovered
                    ? `0 20px 40px rgba(0,0,0,0.08), 0 0 24px ${ac.glow}`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: ac.fill, border: `1px solid ${ac.border}` }}
                >
                  <motion.div
                    whileHover={
                      reduced
                        ? {}
                        : {
                            rotate: [0, -8, 8, -6, 6, 0],
                            transition: { duration: 0.5 },
                          }
                    }
                  >
                    <stake.icon className="w-6 h-6" style={{ color: ac.color }} />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 leading-snug">
                  {stake.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {stake.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophical problem — dark callout */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
          className="mt-16 p-10 rounded-3xl text-white text-center max-w-3xl mx-auto relative overflow-hidden"
          style={{ background: "var(--surface-dark)" }}
        >
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(77,124,255,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold leading-snug text-white">
              Strategy leaders shouldn&apos;t have to fight for{" "}
              <span className="text-gradient-blue">better intelligence.</span>
            </p>
            <p className="text-white/50 text-lg mt-4">
              But right now, many of them are — and the market rewards the ones who stop.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
