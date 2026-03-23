"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Shield, Search, TrendingUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerContainer, noMotion } from "@/lib/animation-variants";
import { accentColors, type AccentKey } from "@/lib/accent-colors";

const benefits: { title: string; description: string; icon: React.ElementType; accent: AccentKey }[] = [
  {
    title: "You spot moves before they become common knowledge",
    description:
      "Competitor launches, pricing changes, and positioning shifts reach you early — while there is still time to respond.",
    icon: Search,
    accent: "teal",
  },
  {
    title: "Your team reclaims hours lost to manual research",
    description:
      "The heavy lifting of monitoring fragmented external sources is automated — so your team focuses on decisions, not data-gathering.",
    icon: Zap,
    accent: "gold",
  },
  {
    title: "Every recommendation you make is defensible",
    description:
      "You walk into reviews with intelligence backed by traceable evidence — not gut feel and fragmented notes.",
    icon: Shield,
    accent: "primary",
  },
  {
    title: "Nothing important falls through the cracks",
    description:
      "Competitors, policy changes, and category movement are tracked in a single, unified view your whole team can access.",
    icon: Target,
    accent: "teal",
  },
  {
    title: "You understand the 'why', not just the 'what'",
    description:
      "Stem goes beyond surfacing changes — it gives you the context and lineage to understand what they mean for your strategy.",
    icon: CheckCircle2,
    accent: "gold",
  },
  {
    title: "You act while others are still catching up",
    description:
      "Shorter signal-to-action time means your team moves while the market window is still open — not after it has closed.",
    icon: TrendingUp,
    accent: "primary",
  },
];

export function Benefits() {
  const reduced = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--surface-mid)" }}
    >
      {/* Organic background glows */}
      <div
        className="organic-blob organic-blob-blue pointer-events-none opacity-40"
        style={{ width: 600, height: 600, top: "-20%", right: "-10%" }}
      />
      <div
        className="organic-blob organic-blob-teal pointer-events-none opacity-30"
        style={{ width: 400, height: 400, bottom: "0%", left: "-5%" }}
      />
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="premium-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
            Your new reality
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Here&apos;s what leading with{" "}
            <span className="text-gradient-blue">better intelligence</span>{" "}
            actually looks like.
          </h2>
          <p className="text-lg text-white/60">
            When your team stops reacting and starts anticipating, everything
            changes — from your confidence in the boardroom to your ability to
            move faster than the market.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={reduced ? noMotion : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, i) => {
            const ac = accentColors[benefit.accent];
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={benefit.title}
                variants={
                  reduced
                    ? noMotion
                    : {
                        hidden: { opacity: 0, y: 20, scale: 0.97 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }
                }
                transition={reduced ? { duration: 0 } : { duration: 0.55, delay: i * 0.1 }}
                whileHover={reduced ? {} : { y: -5, transition: { duration: 0.25 } }}
                onHoverStart={() => !reduced && setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="p-8 rounded-2xl glass-dark cursor-default transition-all duration-300"
                style={{
                  borderColor: isHovered ? ac.border.replace("0.25", "0.5") : ac.border,
                  boxShadow: isHovered
                    ? `0 24px 48px rgba(0,0,0,0.4), 0 0 30px ${ac.glow}`
                    : undefined,
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: ac.fill, border: `1px solid ${ac.border}` }}
                  variants={
                    reduced
                      ? noMotion
                      : {
                          hidden: { opacity: 0, scale: 0 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 18,
                              delay: i * 0.1 + 0.1,
                            },
                          },
                        }
                  }
                >
                  <benefit.icon className="w-6 h-6" style={{ color: ac.color }} />
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
