"use client";

import { motion } from "framer-motion";
import { Database, Search, Cpu, Bell, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Ingest",
    description: "Stem monitors the markets, entities, and signal categories your team needs to follow.",
    icon: Database,
  },
  {
    title: "Detect",
    description: "The system identifies meaningful changes across competitors, policy, pricing, and category movement.",
    icon: Search,
  },
  {
    title: "Synthesize",
    description: "Signals are grouped and interpreted so teams can understand what changed and why it matters.",
    icon: Cpu,
  },
  {
    title: "Prioritize",
    description: "Important shifts are surfaced above background noise based on your team's unique strategic profile.",
    icon: ShieldCheck,
  },
  {
    title: "Deliver",
    description: "Teams receive decision-ready outputs they can review, share, and act on.",
    icon: Bell,
  },
];

export function PlatformProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            How Stem turns fragmented signals into usable intelligence.
          </h2>
          <p className="text-xl text-gray-600">
            A precise, multi-stage process designed to eliminate noise and surface high-stakes clarity.
          </p>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal connector line based on screen size */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <step.icon className="w-8 h-8 text-primary relative z-10" />
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-ink text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
