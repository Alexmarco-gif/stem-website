"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const outcomes = [
  {
    title: "Earlier detection",
    description:
      "Teams see meaningful market changes before they become widely visible, creating a window to act rather than react.",
  },
  {
    title: "Faster response",
    description:
      "When important signals surface earlier, response cycles shorten and decisions no longer lag behind market movement.",
  },
  {
    title: "Stronger recommendations",
    description:
      "Strategy teams can back recommendations with traceable signals and synthesized intelligence, not just instinct.",
  },
  {
    title: "Less uncertainty",
    description:
      "Decisions that used to feel like guesses become defensible calls grounded in monitored, interpreted external evidence.",
  },
  {
    title: "Better timing",
    description:
      "Expansion, response, and positioning decisions become better-timed when the inputs are more complete and more current.",
  },
  {
    title: "Improved leadership confidence",
    description:
      "Leaders can present recommendations with more clarity and less hedging when the intelligence behind them is structured and legible.",
  },
];

export function SolutionsOutcomes() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            What improves when teams can see what matters earlier.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Better intelligence does not just improve decisions in isolation. It shifts how teams operate, how recommendations are made, and how leadership navigates uncertainty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-[28px] bg-background border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{outcome.title}</h3>
              <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
