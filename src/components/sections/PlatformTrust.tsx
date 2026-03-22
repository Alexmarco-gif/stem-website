"use client";

import { motion } from "framer-motion";
import { Link2, Search, History } from "lucide-react";

const trustPillars = [
  {
    title: "Know what changed",
    description: "Go beyond vague summaries with precise change detection across your monitored landscape.",
    icon: Search,
  },
  {
    title: "Know why it matters",
    description: "Signals are contextualized based on your specific strategic goals and competitive environment.",
    icon: History,
  },
  {
    title: "Know where it came from",
    description: "Every signal is linked to its source lineage, ensuring your team can defend every decision.",
    icon: Link2,
  },
];

export function PlatformTrust() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
              Signals are more useful when teams can <span className="text-primary underline decoration-primary/20 underline-offset-8">trust</span> where they came from.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stem differentiates from black-box noise by prioritizing interpretability and traceability. We believe intelligence is only as strong as its evidence.
            </p>
            
            <div className="space-y-8">
              {trustPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Annotated Signal Panel Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 p-8 rounded-3xl bg-background border border-gray-100 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Decision Signal</span>
                  <h4 className="text-xl font-bold text-ink">Competitor Pricing Shift</h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold">Priority High</div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Detection Summary</p>
                  <p className="text-gray-700 bg-white p-4 rounded-xl border border-gray-50 shadow-sm italic leading-relaxed">
                    "Detected 15% reduction in core transaction fees for Entity B, effective Q3. First observed on public pricing table updates."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-gray-50 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Source Lineage</p>
                    <p className="text-xs text-primary font-medium truncate underline">https://monitored-entity-b.com/pricing</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-50 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Confidence Score</p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-green-600">
                      <ShieldCheck size={14} /> 98% (Traceable)
                    </div>
                  </div>
                </div>
              </div>

              {/* Annotation Pointers */}
              <div className="absolute -right-8 top-1/4 bg-ink text-white px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xl rotate-6">
                Interpretability First
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-primary text-white px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xl -rotate-6">
                Source Traceability
              </div>
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 bg-blue-50/50 rounded-full blur-3xl scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
