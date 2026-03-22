"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description: "Start with the signals, markets, entities, and monitoring priorities that matter most to your team.",
  },
  {
    number: "02",
    title: "Detect meaningful signals",
    description: "Stem filters noise, tracks change, and surfaces what deserves attention.",
  },
  {
    number: "03",
    title: "Act with defensible intelligence",
    description: "Use prioritized, contextualized outputs to make faster recommendations and decisions.",
  },
];

export function Plan() {
  return (
    <section className="py-24 bg-ink text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A simple path from fragmented inputs{" "}
            <span className="text-primary italic">to better decisions.</span>
          </h2>
          <p className="text-xl text-gray-400">
            Adopting decision intelligence should not be a multi-month integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Animated connecting line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            className="hidden lg:block absolute top-11 left-0 w-full h-px bg-gradient-to-r from-primary/60 via-primary/40 to-transparent z-0"
            style={{ transformOrigin: "left" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-2xl font-bold mb-8 shadow-lg shadow-primary/30"
              >
                {step.number}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
