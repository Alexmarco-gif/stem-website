"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";

const useCaseCards = [
  {
    id: "competitor",
    icon: Search,
    title: "Competitor Tracking",
    description: "Monitor competitor moves, product changes, and pricing shifts before they affect your strategy.",
  },
  {
    id: "market",
    icon: TrendingUp,
    title: "Market Monitoring",
    description: "Track category shifts, emerging patterns, and market-level changes that affect timing and prioritization.",
  },
  {
    id: "policy",
    icon: Shield,
    title: "Policy & Risk Monitoring",
    description: "Stay ahead of policy and regulatory changes that could reshape compliance posture or risk exposure.",
  },
  {
    id: "expansion",
    icon: Zap,
    title: "Expansion Support",
    description: "Make better-timed market-entry and growth decisions backed by monitored external signals.",
  },
];

export function UseCaseIndex() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Four high-value decision workflows where Stem makes the biggest difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCaseCards.map((card, i) => (
            <motion.button
              key={card.id}
              onClick={() => scrollToSection(card.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-left p-8 rounded-[28px] bg-background border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                See details ↓
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
