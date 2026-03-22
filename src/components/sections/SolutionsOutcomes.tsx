"use client";

import { motion } from "framer-motion";
import { Radar, Zap, ShieldCheck, BrainCircuit, Timer, Rocket } from "lucide-react";

const outcomes = [
  {
    icon: Radar,
    title: "Earlier detection",
    description:
      "Teams see meaningful market changes before they become widely visible, creating a window to act rather than react.",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    icon: Zap,
    title: "Faster response",
    description:
      "When important signals surface earlier, response cycles shorten and decisions no longer lag behind market movement.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Stronger recommendations",
    description:
      "Strategy teams can back recommendations with traceable signals and synthesized intelligence, not just instinct.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BrainCircuit,
    title: "Less uncertainty",
    description:
      "Decisions that used to feel like guesses become defensible calls grounded in monitored, interpreted external evidence.",
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Timer,
    title: "Better timing",
    description:
      "Expansion, response, and positioning decisions become better-timed when the inputs are more complete and more current.",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    icon: Rocket,
    title: "Improved leadership confidence",
    description:
      "Leaders can present recommendations with more clarity and less hedging when the intelligence behind them is structured and legible.",
    accent: "bg-violet-50 text-violet-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SolutionsOutcomes() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            What improves when teams can{" "}
            <span className="text-primary italic">see what matters earlier.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Better intelligence does not just improve decisions in isolation. It shifts how
            teams operate, how recommendations are made, and how leadership navigates uncertainty.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group p-8 rounded-[28px] bg-background border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/8 transition-shadow duration-300 cursor-default relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[28px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${outcome.accent}`}
                  >
                    <outcome.icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-widest tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors duration-200">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
