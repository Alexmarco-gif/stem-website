"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";

const useCaseCards = [
  {
    id: "competitor",
    icon: Search,
    title: "Competitor Tracking",
    description: "Monitor competitor moves, product changes, and pricing shifts before they affect your strategy.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "market",
    icon: TrendingUp,
    title: "Market Monitoring",
    description: "Track category shifts, emerging patterns, and market-level changes that affect timing and prioritization.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "policy",
    icon: Shield,
    title: "Policy & Risk Monitoring",
    description: "Stay ahead of policy and regulatory changes that could reshape compliance posture or risk exposure.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "expansion",
    icon: Zap,
    title: "Expansion Support",
    description: "Make better-timed market-entry and growth decisions backed by monitored external signals.",
    color: "bg-violet-50 text-violet-600",
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
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Four high-value decision workflows where Stem makes the biggest difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCaseCards.map((card, i) => (
            <motion.button
              key={card.id}
              onClick={() => scrollToSection(card.id)}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group text-left p-8 rounded-[28px] bg-background border border-gray-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[28px]" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.color} transition-transform`}
                >
                  <card.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                <motion.div
                  initial={{ x: -4 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-5 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  See details ↓
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
