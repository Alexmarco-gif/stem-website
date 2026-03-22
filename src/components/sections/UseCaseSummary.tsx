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
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(53,99,235,0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-ring" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Cross-use-case value
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Across every use case,{" "}
              <span className="text-primary">the value is the same.</span>
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6 leading-snug">
              Clearer signals. Faster judgment.{" "}
              <span className="text-white">Better decisions.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether your team is tracking competitors, monitoring markets, assessing policy
              risk, or planning expansion — the underlying challenge is the same. Stem helps
              you see what matters, understand why it matters, and decide whether to act now.
            </p>
          </motion.div>

          <div className="space-y-4">
            {themes.map((theme, i) => (
              <motion.div
                key={i}
                initial={{ x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed">{theme}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
