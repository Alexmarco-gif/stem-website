"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Filter, Send } from "lucide-react";

const blocks = [
  {
    icon: Eye,
    title: "Watches meaningful external signals",
    description:
      "Stem continuously monitors the markets, entities, competitors, and signal categories your team has defined as important.",
  },
  {
    icon: Zap,
    title: "Detects important change",
    description:
      "The platform identifies meaningful shifts across competitors, policy, pricing, and category movement — separating signal from noise.",
  },
  {
    icon: Filter,
    title: "Adds context and prioritization",
    description:
      "Detected changes are synthesized and ranked so your team sees the most strategically relevant intelligence first.",
  },
  {
    icon: Send,
    title: "Delivers decision-ready outputs",
    description:
      "Teams receive summaries, alerts, and structured intelligence they can review, act on, and share with leadership.",
  },
];

export function PlatformOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              What Stem does, in simple terms.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stem is not a generic dashboard or a raw data feed. It is a decision intelligence platform built to turn fragmented external signals into fast, actionable clarity for strategy and growth teams.
            </p>

            <div className="space-y-8">
              {blocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <block.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">{block.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{block.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product concept visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl shadow-primary/5 p-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Intelligence Summary — Live
              </div>

              {[
                {
                  category: "Competitor",
                  title: "Competitor A expanded pricing tier",
                  urgency: "High",
                  urgencyColor: "bg-red-50 text-red-600",
                  detail: "Pricing adjustment detected across three product segments.",
                },
                {
                  category: "Policy",
                  title: "CBN circular update on digital lending",
                  urgency: "Medium",
                  urgencyColor: "bg-amber-50 text-amber-600",
                  detail: "New draft guidelines may affect lending product compliance posture.",
                },
                {
                  category: "Market",
                  title: "Category growth signal — embedded finance",
                  urgency: "Monitor",
                  urgencyColor: "bg-blue-50 text-blue-700",
                  detail: "Multiple indicators suggest accelerating adoption among SME-focused players.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-background border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {item.category}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.urgencyColor}`}>
                      {item.urgency}
                    </span>
                  </div>
                  <p className="font-bold text-ink mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
