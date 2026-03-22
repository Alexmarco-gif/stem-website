"use client";

import { motion } from "framer-motion";
import { Search, Zap, CheckCircle, Shield, TrendingUp } from "lucide-react";

const pillars = [
  {
    title: "Reduce strategic blind spots",
    problem: "Important competitor moves and market shifts are easily missed.",
    change: "Stem monitors the entire external landscape for meaningful signals.",
    outcome: "Full visibility into the changes that matter most.",
    icon: Search,
  },
  {
    title: "Move faster on market change",
    problem: "Delayed detection leads to reactive decision-making.",
    change: "Automated tracking and prioritized alerts shorten response time.",
    outcome: "Faster reaction to opportunity and threat.",
    icon: Zap,
  },
  {
    title: "Improve recommendation quality",
    problem: "Recommendations lack deep, defensible market evidence.",
    change: "Signals with clear lineage and context provide firm strategic support.",
    outcome: "Stronger buy-in and leadership confidence.",
    icon: CheckCircle,
  },
  {
    title: "Reduce manual research load",
    problem: "Teams spend hours on repetitive data collection and monitoring.",
    change: "Systematic ingestion and synthesis free up expert time for strategy.",
    outcome: "Higher efficiency and more focus on complex decisions.",
    icon: Shield,
  },
  {
    title: "Increase confidence in decisions",
    problem: "High-stakes calls are made with incomplete visibility.",
    change: "Stem provides a coherent intelligence foundation for external bets.",
    outcome: "Lower uncertainty and better decision defensive capability.",
    icon: TrendingUp,
  },
];

export function SolutionsPillars() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Solution pillars for teams making high-stakes calls.
          </h2>
          <p className="text-xl text-gray-600">
            Mapping Stem's value into clear, outcome-oriented business themes.
          </p>
        </div>

        <div className="space-y-8">
           {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative"
              >
                 <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                    <div className="lg:w-1/3">
                       <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <pillar.icon className="w-8 h-8 text-primary" />
                       </div>
                       <h3 className="text-3xl font-bold text-ink mb-4 leading-tight">{pillar.title}</h3>
                    </div>
                    
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Problem</p>
                          <p className="text-gray-600 font-medium">{pillar.problem}</p>
                       </div>
                       <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">What Stem Changes</p>
                          <p className="text-gray-600 font-medium">{pillar.change}</p>
                       </div>
                       <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <p className="text-xs font-bold uppercase tracking-widest text-ink mb-3">Outcome</p>
                          <p className="text-ink font-bold text-lg">{pillar.outcome}</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative background number */}
                 <div className="absolute -bottom-10 -right-4 text-9xl font-black text-gray-50 select-none group-hover:text-primary/5 transition-colors duration-500">
                    {i + 1}
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
