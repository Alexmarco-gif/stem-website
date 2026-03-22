"use client";

import { motion } from "framer-motion";
import { Eye, Shield, BarChart3, TrendingUp, FileText, CheckCircle } from "lucide-react";

const capabilities = [
  {
    category: "Monitoring",
    items: [
      { title: "Competitor activity", description: "Track launches, pricing, and positioning.", icon: Eye },
      { title: "Policy & risk shifts", description: "Stay ahead of regulatory changes.", icon: Shield },
      { title: "Market movement", description: "Monitor category-wide trends.", icon: TrendingUp },
    ],
  },
  {
    category: "Intelligence",
    items: [
      { title: "Synthesis", description: "Connecting dots between fragmented signals.", icon: Cpu },
      { title: "Prioritization", description: "Focusing on what affects outcomes most.", icon: CheckCircle },
      { title: "Context & lineage", description: "Traceable signals with clear history.", icon: BarChart3 },
    ],
  },
  {
    category: "Decision Support",
    items: [
      { title: "Alerts", description: "Real-time updates on critical shifts.", icon: Bell },
      { title: "Summaries", description: "Digestible briefs for leadership.", icon: FileText },
      { title: "Next-step framing", description: "Intelligence built for action.", icon: ArrowRight },
    ],
  },
];

import { Cpu, Bell, ArrowRight } from "lucide-react";

export function PlatformCapabilities() {
  return (
    <section className="py-24 bg-background" id="capabilities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Core capabilities for teams working in fast-moving markets.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {capabilities.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/10 pb-4">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
