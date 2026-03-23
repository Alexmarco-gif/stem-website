"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description:
      "Start with the signals, markets, entities, and monitoring priorities that matter most to your team.",
  },
  {
    number: "02",
    title: "Detect meaningful signals",
    description:
      "Stem filters noise, tracks change, and surfaces what deserves attention.",
  },
  {
    number: "03",
    title: "Act with defensible intelligence",
    description:
      "Use prioritized, contextualized outputs to make faster recommendations and decisions.",
  },
];

export function Plan() {
  const reduced = useReducedMotion();
  const lineRef = React.useRef(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section className="py-24 bg-ink text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A simple path from fragmented inputs to better decisions.
          </h2>
          <p className="text-xl text-gray-400">
            Adopting decision intelligence should not be a multi-month
            integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Animated connecting line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-primary/20 z-0 overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"
              initial={{ width: "0%" }}
              animate={reduced || lineInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={reduced ? { duration: 0 } : { duration: 0.6, delay: i * 0.2 }}
              className="relative z-10"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-2xl font-bold mb-8"
                animate={
                  reduced
                    ? {}
                    : {
                        boxShadow: [
                          "0 4px 20px rgba(53,99,235,0.2)",
                          "0 4px 40px rgba(53,99,235,0.5)",
                          "0 4px 20px rgba(53,99,235,0.2)",
                        ],
                      }
                }
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
              >
                {step.number}
              </motion.div>
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
