"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const themes = [
  "Less manual monitoring across competitors, markets, and policy",
  "Fewer blind spots in the external signals that shape strategy",
  "Faster synthesis so teams spend less time gathering and more time deciding",
  "Stronger recommendations backed by traceable, interpreted signals",
  "Improved timing on expansion, response, and positioning calls",
];

export function UseCaseSummary() {
  return (
    <section className="py-24 bg-ink text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Across every use case, the value is the same.
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6 leading-snug">
              Clearer signals. Faster judgment. Better decisions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether your team is tracking competitors, monitoring markets, assessing policy risk, or planning expansion — the underlying challenge is the same. Stem helps you see what matters, understand why it matters, and decide whether to act now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            {themes.map((theme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">{theme}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
