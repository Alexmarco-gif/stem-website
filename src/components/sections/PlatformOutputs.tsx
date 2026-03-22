"use client";

import { motion } from "framer-motion";
import { Bell, FileText, Layout, Share2, Target } from "lucide-react";

const outputs = [
  {
    title: "Prioritized Alerts",
    description: "Instant notification on market shifts that meet your team's threshold for action.",
    icon: Bell,
  },
  {
    title: "Intelligence Summaries",
    description: "Synthesized briefs ready for leadership review and strategic planning.",
    icon: FileText,
  },
  {
    title: "Monitored Views",
    description: "Persistent tracking of the competitors and categories that define your landscape.",
    icon: Layout,
  },
  {
    title: "Decision Signals",
    description: "Action-oriented indicators that help frame strategic next steps.",
    icon: Target,
  },
  {
    title: "Shareable Briefs",
    description: "Exportable intelligence formats built for team-wide alignment and defense.",
    icon: Share2,
  },
];

export function PlatformOutputs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Outputs built for recommendations, not just observation.
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Stem doesn't just show you data. It provides the structured intelligence required to drive faster internal recommendations and more defensible leadership decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {outputs.map((out, i) => (
                  <motion.div 
                    key={out.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 w-5 h-5 text-primary flex-shrink-0">
                       <out.icon size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-ink text-sm mb-1">{out.title}</h4>
                       <p className="text-gray-500 text-xs leading-relaxed">{out.description}</p>
                    </div>
                  </motion.div>
               ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
             <div className="relative p-1 bg-white rounded-[40px] shadow-[0_40px_80px_-16px_rgba(53,99,235,0.1)] border border-gray-100">
                <div className="bg-gray-50 rounded-[38px] p-8 md:p-12 space-y-8">
                   <div className="flex items-center justify-between">
                      <div className="h-4 w-32 bg-gray-200 rounded-full" />
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                         <Share2 className="text-primary" size={16} />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="h-8 w-3/4 bg-gray-300 rounded-lg" />
                      <div className="space-y-2">
                         <div className="h-4 w-full bg-gray-200 rounded" />
                         <div className="h-4 w-full bg-gray-200 rounded" />
                         <div className="h-4 w-2/3 bg-gray-200 rounded" />
                      </div>
                   </div>
                   <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-16 bg-white rounded-xl border border-gray-200" />
                      ))}
                   </div>
                </div>
                
                {/* Floaties */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                >
                   <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Bell className="text-green-600" size={16} />
                   </div>
                   <div className="text-xs font-bold text-ink whitespace-nowrap">Prioritized Alert: Competitor A</div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
