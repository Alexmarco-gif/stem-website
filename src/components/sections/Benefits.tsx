"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Shield, Search, TrendingUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerContainer, noMotion } from "@/lib/animation-variants";

const benefits = [
  {
    title: "You spot moves before they become common knowledge",
    description:
      "Competitor launches, pricing changes, and positioning shifts reach you early — while there is still time to respond.",
    icon: Search,
  },
  {
    title: "Your team reclaims hours lost to manual research",
    description:
      "The heavy lifting of monitoring fragmented external sources is automated — so your team focuses on decisions, not data-gathering.",
    icon: Zap,
  },
  {
    title: "Every recommendation you make is defensible",
    description:
      "You walk into reviews with intelligence backed by traceable evidence — not gut feel and fragmented notes.",
    icon: Shield,
  },
  {
    title: "Nothing important falls through the cracks",
    description:
      "Competitors, policy changes, and category movement are tracked in a single, unified view your whole team can access.",
    icon: Target,
  },
  {
    title: "You understand the 'why', not just the 'what'",
    description:
      "Stem goes beyond surfacing changes — it gives you the context and lineage to understand what they mean for your strategy.",
    icon: CheckCircle2,
  },
  {
    title: "You act while others are still catching up",
    description:
      "Shorter signal-to-action time means your team moves while the market window is still open — not after it has closed.",
    icon: TrendingUp,
  },
];

export function Benefits() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Your new reality
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Here&apos;s what leading with better intelligence actually looks like.
          </h2>
          <p className="text-xl text-gray-600">
            When your team stops reacting and starts anticipating, everything
            changes — from your confidence in the boardroom to your ability to
            move faster than the market.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={reduced ? noMotion : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={
                reduced
                  ? noMotion
                  : {
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { opacity: 1, scale: 1 },
                    }
              }
              transition={reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.15 }}
              whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-background border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
            >
              {/* Icon draw-in */}
              <motion.div
                className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm"
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
                            damping: 20,
                            delay: i * 0.15 + 0.1,
                          },
                        },
                      }
                }
              >
                <benefit.icon className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                variants={
                  reduced
                    ? noMotion
                    : {
                        hidden: { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.15 + 0.2 },
                        },
                      }
                }
              >
                <h3 className="text-xl font-bold text-ink mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
