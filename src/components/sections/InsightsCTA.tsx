"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, TrendingUp } from "lucide-react";

const badges = [
  { icon: TrendingUp, label: "Market Intelligence" },
  { icon: BookOpen, label: "Fintech Deep Dive" },
];

export function InsightsCTA() {
  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Animated background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-[40px] bg-white border border-gray-100 shadow-2xl shadow-primary/8 text-center overflow-hidden">
            {/* Inner gradient decoration */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Badges */}
            <motion.div
              initial={{ y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Bouncing icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/15"
            >
              <Download className="w-9 h-9 text-primary" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 relative z-10">
              Get intelligence your team{" "}
              <span className="text-primary italic">can actually use.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
              Download the State of Fintech Intelligence report — a free briefing on how
              mid-market fintech teams in Nigeria are navigating competitive and market uncertainty.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button size="lg" className="rounded-full shadow-xl shadow-primary/25 h-14 px-10 text-lg">
                Download the Report
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <p className="mt-6 text-sm text-gray-400 relative z-10">
              Free. No signup required for the initial download.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
