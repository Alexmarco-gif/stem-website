"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "competitor",
    title: "Competitor Tracking",
    question: "What are competitors changing that we cannot afford to miss?",
    pain: "Important launches, pricing changes, and positioning moves are scattered across sources and easy to miss.",
    solution: "Stem monitors external activity, detects meaningful changes, and surfaces the shifts worth acting on.",
    outcome: "Teams react faster and avoid being surprised by competitive movement.",
  },
  {
    id: "market",
    title: "Market Monitoring",
    question: "What is shifting in the market that affects how we should act?",
    pain: "Category movement is hard to track in one place and often becomes clear only after the window to act has narrowed.",
    solution: "Stem synthesizes market signals, category changes, and emerging patterns into usable intelligence.",
    outcome: "Earlier visibility into meaningful market change.",
  },
  {
    id: "policy",
    title: "Policy & Risk",
    question: "What changes in policy or regulation should influence our next move?",
    pain: "Teams often hear about policy shifts too late or without enough context to interpret the impact.",
    solution: "Stem surfaces important policy and risk changes, connects them to monitored categories, and supports faster assessment.",
    outcome: "Reduced exposure and faster reaction to important external changes.",
  },
  {
    id: "expansion",
    title: "Expansion Support",
    question: "Is this the right time to move, wait, or investigate further?",
    pain: "Expansion decisions are often shaped by fragmented external signals and weak synthesis.",
    solution: "Stem helps teams monitor the signals that influence timing, readiness, competitive movement, and external viability.",
    outcome: "Better-timed growth decisions with more defensible reasoning.",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = React.useState(useCases[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Designed for the decisions teams cannot afford to get wrong.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stem provides leverage across the most critical strategic workflows.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 lg:w-72">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={cn(
                  "px-6 py-4 rounded-xl text-left font-bold transition-all whitespace-nowrap lg:whitespace-normal",
                  activeTab === uc.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                )}
              >
                {uc.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-background rounded-3xl p-8 md:p-12 border border-gray-100">
            <AnimatePresence mode="wait">
              {useCases.map((uc) =>
                uc.id === activeTab ? (
                  <motion.div
                    key={uc.id}
                    initial={{ y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-ink mb-4">{uc.question}</h3>
                      <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Current Pain</h4>
                          <p className="text-gray-600 text-lg leading-relaxed">{uc.pain}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">How Stem Helps</h4>
                          <p className="text-gray-600 text-lg leading-relaxed">{uc.solution}</p>
                        </div>
                      </div>
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm self-start">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Outcome</h4>
                        <p className="text-ink text-2xl font-bold leading-tight">{uc.outcome}</p>
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
