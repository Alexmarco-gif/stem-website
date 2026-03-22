"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Fintech Brief",
    title: "How to track competitor pricing shifts across Nigerian digital banking.",
    date: "March 2026",
    excerpt: "Understanding the subtle signals that precede meaningful shifts in market position and consumer acquisition.",
  },
  {
    category: "Market Observation",
    title: "The hidden costs of delayed regulatory detection.",
    date: "February 2026",
    excerpt: "Why strategy teams are underinvesting in policy monitoring and the risks that follow.",
  },
  {
    category: "Case Note",
    title: "When to move: Expansion signals in mid-market fintech.",
    date: "January 2026",
    excerpt: "Evaluating market-entry readiness through external signal synthesis instead of gut feel.",
  },
  {
    category: "Intelligence Rituals",
    title: "Building a defensible intelligence routine for small teams.",
    date: "January 2026",
    excerpt: "How to move from random data collection to a structured decision-support workflow.",
  },
];

export function InsightsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {articles.map((art, i) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                 <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/10 pb-1">
                      {art.category}
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{art.date}</span>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-tight group-hover:text-primary transition-colors">
                   {art.title}
                 </h3>
                 
                 <p className="text-gray-500 text-lg leading-relaxed mb-10">
                   {art.excerpt}
                 </p>
                 
                 <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                    Read Brief <ArrowUpRight size={16} />
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
