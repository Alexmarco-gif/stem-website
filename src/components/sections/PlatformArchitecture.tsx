"use client";

import { motion } from "framer-motion";
import { Settings, Target, Layers, Users } from "lucide-react";

const themes = [
  {
    icon: Settings,
    title: "Configurable monitoring scope",
    description:
      "Define the markets, entities, categories, and signals that matter most to your team. Stem adapts to your strategic priorities, not the other way around.",
  },
  {
    icon: Target,
    title: "Priority entities and markets",
    description:
      "Set the competitors, sectors, and policy areas your team tracks. Stem surfaces changes against the context you have already defined.",
  },
  {
    icon: Layers,
    title: "Scalable, adaptable workflows",
    description:
      "As your monitoring needs evolve, Stem scales with them. Add new categories, expand coverage, and adjust outputs without rebuilding from scratch.",
  },
  {
    icon: Users,
    title: "Built for real decision teams",
    description:
      "Intelligence outputs are structured for the people who make recommendations — strategy leads, growth teams, and founders — not just analysts.",
  },
];

export function PlatformArchitecture() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Built to fit real monitoring and decision workflows.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stem is designed to integrate into the way your team already works — not to create a new overhead layer. The platform is modular, configurable, and built for operational seriousness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[28px] bg-white border border-gray-100 shadow-lg shadow-primary/5 hover:border-primary/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <theme.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{theme.title}</h3>
              <p className="text-gray-600 leading-relaxed">{theme.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 p-8 rounded-[28px] bg-ink text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "External-first",
                label: "Built around the signals that come from outside the company",
              },
              {
                stat: "Decision-ready",
                label: "Outputs structured for action, not just observation",
              },
              {
                stat: "Team-aligned",
                label: "Configured around your priorities, not generic templates",
              },
            ].map((item) => (
              <div key={item.stat} className="text-center md:text-left">
                <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
