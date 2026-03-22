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
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A simple path from fragmented inputs to better decisions.
          </h2>
          <p className="text-xl text-gray-400">
            Adopting decision intelligence should not be a multi-month integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-primary/50 via-primary/50 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-2xl font-bold mb-8 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
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
