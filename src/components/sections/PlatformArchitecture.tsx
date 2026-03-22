"use client";

import { motion } from "framer-motion";
import { Settings, Target, Layers, Users } from "lucide-react";

const themes = [
  {
    icon: Settings,
    title: "Configurable monitoring scope",
    description:
      "Define the markets, entities, categories, and signals that matter most to your team. Stem adapts to your strategic priorities, not the other way around.",
    color: "from-blue-50 to-indigo-50",
  },
  {
    icon: Target,
    title: "Priority entities and markets",
    description:
      "Set the competitors, sectors, and policy areas your team tracks. Stem surfaces changes against the context you have already defined.",
    color: "from-sky-50 to-blue-50",
  },
  {
    icon: Layers,
    title: "Scalable, adaptable workflows",
    description:
      "As your monitoring needs evolve, Stem scales with them. Add new categories, expand coverage, and adjust outputs without rebuilding from scratch.",
    color: "from-indigo-50 to-blue-50",
  },
  {
    icon: Users,
    title: "Built for real decision teams",
    description:
      "Intelligence outputs are structured for the people who make recommendations — strategy leads, growth teams, and founders — not just analysts.",
    color: "from-blue-50 to-sky-50",
  },
];

const stats = [
  { stat: "External-first", label: "Built around signals from outside the company" },
  { stat: "Decision-ready", label: "Outputs structured for action, not just observation" },
  { stat: "Team-aligned", label: "Configured around your priorities, not generic templates" },
];

export function PlatformArchitecture() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Built to fit real monitoring{" "}
            <span className="text-primary italic">and decision workflows.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stem integrates into how your team already works — not to create a new overhead
            layer. The platform is modular, configurable, and built for operational seriousness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-8 rounded-[28px] bg-background border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-shadow duration-300 group cursor-default"
            >
              {/* Gradient accent background on hover */}
              <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <theme.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors duration-300">
                  {theme.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{theme.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 p-8 md:p-10 rounded-[28px] bg-ink text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="pt-6 md:pt-0 md:px-8 first:pt-0 first:pl-0 last:pr-0"
              >
                <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
