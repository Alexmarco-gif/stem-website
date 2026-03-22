"use client";

import { motion } from "framer-motion";

export function InsightsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Stem Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-8">
            Market intelligence for teams <span className="text-primary italic">navigating</span> change.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Read reports, briefs, and market observations designed to help strategy and growth teams make better external decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
