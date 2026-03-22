"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function InsightsCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 md:p-16 rounded-[40px] bg-background border border-gray-100 shadow-xl shadow-primary/5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Get intelligence your team can actually use.
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Download the State of Fintech Intelligence report — a free briefing on how mid-market fintech teams in Nigeria are navigating competitive and market uncertainty.
            </p>
            <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 h-14 px-10 text-lg">
              Download the Report
              <Download className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-6 text-sm text-gray-400">
              Free. No signup required for the initial download.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
