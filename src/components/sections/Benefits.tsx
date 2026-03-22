"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Shield, Search, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Detect meaningful changes earlier",
    description: "Identify competitor moves and market shifts before they become common knowledge.",
    icon: Search,
  },
  {
    title: "Reduce manual monitoring load",
    description: "Automate the heavy lifting of tracking fragmented external signals and sources.",
    icon: Zap,
  },
  {
    title: "Increase confidence in decisions",
    description: "Back your recommendations with defensible intelligence and clear signal lineage.",
    icon: Shield,
  },
  {
    title: "Track everything in one place",
    description: "Competitors, policy, and category movement synthesized into a single view.",
    icon: Target,
  },
  {
    title: "Understand context and lineage",
    description: "Go beyond 'what' happened to understand 'why' it matters and where it came from.",
    icon: CheckCircle2,
  },
  {
    title: "Shorten signal-to-action time",
    description: "Move from detection to decision faster than the market can react.",
    icon: TrendingUp,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Built to help teams move from noise to confident action.
          </h2>
          <p className="text-xl text-gray-600">
            Stem transforms how strategy and growth teams interact with the external world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
