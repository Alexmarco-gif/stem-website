"use client";

import { motion } from "framer-motion";
import { Search, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const useCases = [
  {
    id: "competitor",
    title: "Competitor Tracking",
    question: "What are competitors changing that we cannot afford to miss?",
    pain: "Important competitor moves are scattered across announcements, pricing changes, public signals, and category chatter.",
    how: "Stem tracks relevant entities, detects meaningful movement, and highlights the competitive changes that deserve attention.",
    outputs: ["Competitor shift alert", "Launch summary", "Pricing movement update", "Prioritized signal recap"],
    decision: "Positioning, timing, response planning, internal recommendation quality.",
    outcome: "Less surprise, faster response, stronger strategic awareness.",
    icon: Search,
  },
  {
    id: "market",
    title: "Market Monitoring",
    question: "What is shifting in the market that affects how we should act?",
    pain: "Category movement is hard to track in one place and often becomes clear only after the window to act has narrowed.",
    how: "Stem synthesizes market signals, category changes, and emerging patterns into usable intelligence.",
    outputs: ["Market trend summary", "Category signal feed", "Change detection brief"],
    decision: "Timing, prioritization, category focus, strategic planning.",
    outcome: "Earlier visibility into meaningful market change.",
    icon: TrendingUp,
  },
  {
    id: "policy",
    title: "Policy & Risk",
    question: "What changes in policy or regulation should influence our next move?",
    pain: "Teams often hear about policy shifts too late or without enough context to interpret the impact.",
    how: "Stem surfaces important policy and risk changes, connects them to monitored categories, and supports faster assessment.",
    outputs: ["Policy change alert", "Risk summary", "Monitored development brief"],
    decision: "Risk posture, response timing, internal briefing, scenario planning.",
    outcome: "Reduced exposure and faster reaction to important external changes.",
    icon: Shield,
  },
  {
    id: "expansion",
    title: "Expansion Support",
    question: "Is this the right time to move, wait, or investigate further?",
    pain: "Expansion decisions are often shaped by fragmented external signals and weak synthesis.",
    how: "Stem helps teams monitor the signals that influence timing, readiness, competitive movement, and external viability.",
    outputs: ["Monitored market summary", "Opportunity shift brief", "Change-based decision support signal"],
    decision: "Expansion timing, market-entry planning, opportunity assessment.",
    outcome: "Better-timed growth decisions with more defensible reasoning.",
    icon: Zap,
  },
];

export function UseCaseList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-32">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.id}
              id={uc.id}
              initial={{ }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 lg:gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm">
                   <uc.icon size={20} className="text-primary" />
                   <span className="font-bold text-ink">{uc.title}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
                  {uc.question}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Current Pain</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{uc.pain}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">How Stem Helps</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{uc.how}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Decision Improved</h4>
                    <p className="text-gray-600 font-medium">{uc.decision}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Core Outcome</h4>
                    <p className="text-ink font-bold text-lg">{uc.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                 <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-primary/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                    
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">System Outputs</h4>
                    
                    <div className="space-y-4">
                       {uc.outputs.map((output, idx) => (
                         <motion.div
                           key={idx}
                           initial={{ x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, amount: 0.1 }}
                           transition={{ delay: 0.2 + idx * 0.1 }}
                           className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-blue-50/50 transition-colors"
                         >
                            <CheckCircle2 size={18} className="text-primary" />
                            <span className="font-bold text-ink">{output}</span>
                         </motion.div>
                       ))}
                    </div>
                    
                    <div className="mt-12 p-6 rounded-2xl bg-ink text-white">
                       <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Workflow Fit</p>
                       <p className="text-sm text-gray-400 leading-relaxed">
                          This use case is designed to integrate directly into your team's existing {uc.title.toLowerCase()} ritual, providing the hard evidence required for defensible calls.
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
