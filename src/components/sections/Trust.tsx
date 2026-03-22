"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Layers, LayoutDashboard } from "lucide-react";

const pillars = [
  {
    title: "Regional market realism",
    description: "Built specifically for the unique dynamics and fragmentation of the Nigerian financial landscape.",
    icon: MapPin,
  },
  {
    title: "Source lineage & context",
    description: "Every signal is traceable back to its origin, providing the context teams need to trust the output.",
    icon: Layers,
  },
  {
    title: "Built for strategic teams",
    description: "Designed for those who make the calls, not just those who monitor the data feeds.",
    icon: ShieldCheck,
  },
  {
    title: "Decision-ready outputs",
    description: "Prioritized alerts and intelligence summaries over cluttered dashboards and raw data dumps.",
    icon: LayoutDashboard,
  },
];

export function Trust() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Intelligence is only useful if teams trust it.
          </h2>
          <p className="text-xl text-gray-600">
            Stem is engineered for precision, transparency, and regional relevance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-12 rounded-3xl bg-white border border-gray-100 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
             <h3 className="text-2xl font-bold text-ink mb-4">“Built for the next generation of Nigerian finance”</h3>
             <p className="text-gray-600 text-lg leading-relaxed mb-6">
               Stem represents a shift from reactive monitoring to proactive market intelligence, designed specifically for the needs of serious operators.
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-bold text-ink text-sm">Founding Perspective</p>
                  <p className="text-gray-500 text-xs">Market Credibility Statement</p>
                </div>
             </div>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-8 grayscale opacity-40">
             {/* Logo placeholders for future trust proof */}
             <div className="w-32 h-8 bg-gray-300 rounded" />
             <div className="w-32 h-8 bg-gray-300 rounded" />
             <div className="w-32 h-8 bg-gray-300 rounded" />
             <div className="w-32 h-8 bg-gray-300 rounded" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
