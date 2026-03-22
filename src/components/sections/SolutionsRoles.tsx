"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Target, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "strategy",
    name: "Strategy Lead",
    responsibility: "Drive defensible strategic planning and competitive response.",
    pain: "Fragmented intelligence makes it difficult to defend long-term bets.",
    how: "Provides a single source of external truth with clear signal lineage.",
    outcome: "Faster, more confident strategy recommendations with full leadership buy-in.",
    icon: Target,
  },
  {
    id: "growth",
    name: "Growth & Expansion",
    responsibility: "Identify and execute on new market and category opportunities.",
    pain: "Moving on expansion too early or too late due to weak external visibility.",
    how: "Monitors expansion signals, market readiness, and local competitor movement.",
    outcome: "Better-timed entries and more successful growth execution with lower risk.",
    icon: Zap,
  },
  {
    id: "founder",
    name: "Founder / CEO",
    responsibility: "Navigate company-level strategic direction and external risk.",
    pain: "Feeling exposed to market shifts that aren't visible until they're expensive.",
    how: "High-level intelligence summaries focused on critical shifts and outcomes.",
    outcome: "Reduced uncertainty and a clearer strategic picture of the external world.",
    icon: User,
  },
  {
    id: "intelligence",
    name: "Research & Intelligence",
    responsibility: "Gather and synthesize the external signals that drive internal decisions.",
    pain: "Spending 80% of time on manual collection and 20% on actual interpretation.",
    how: "Automates ingestion and basic synthesis, freeing up time for high-value insight.",
    outcome: "Deeper research capabilities and faster signal-to-action for the entire team.",
    icon: Shield,
  },
];

export function SolutionsRoles() {
  const [activeTab, setActiveTab] = React.useState(roles[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Designed for the roles <span className="text-primary italic">leading</span> the company.
          </h2>
          <p className="text-xl text-gray-600">
            Stem provides specialized leverage for every decision-maker.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Role Tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 lg:w-72">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveTab(role.id)}
                className={cn(
                  "px-8 py-5 rounded-[24px] text-left font-bold transition-all whitespace-nowrap lg:whitespace-normal flex items-center gap-4",
                  activeTab === role.id
                    ? "bg-ink text-white shadow-2xl shadow-ink/20 scale-105"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                )}
              >
                <role.icon size={20} className={activeTab === role.id ? "text-primary" : "text-gray-400"} />
                {role.name}
              </button>
            ))}
          </div>

          {/* Role Content */}
          <div className="flex-1 bg-background rounded-[40px] p-8 md:p-16 border border-gray-100">
            <AnimatePresence mode="wait">
              {roles.map((role) =>
                role.id === activeTab ? (
                  <motion.div
                    key={role.id}
                    initial={{ x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    <div>
                       <h3 className="text-4xl font-bold text-ink mb-4">{role.name}</h3>
                       <p className="text-xl text-primary font-medium">{role.responsibility}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                       <div className="space-y-8">
                          <div>
                             <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Current Problem</h4>
                             <p className="text-gray-600 text-lg leading-relaxed">{role.pain}</p>
                          </div>
                          <div>
                             <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">How Stem Helps</h4>
                             <p className="text-gray-600 text-lg leading-relaxed">{role.how}</p>
                          </div>
                       </div>
                       
                       <div className="bg-white p-10 rounded-[32px] border border-gray-50 shadow-xl self-start">
                          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-6">
                             <Target className="text-white" size={24} />
                          </div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Core Outcome</h4>
                          <p className="text-ink text-2xl font-bold leading-tight">{role.outcome}</p>
                       </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
