"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    number: "01",
    title: "Tell us what to watch",
    description:
      "You start by defining the signals, markets, entities, and monitoring priorities that matter most to your team. No complex setup — just your strategic focus areas.",
  },
  {
    number: "02",
    title: "Stem filters signal from noise",
    description:
      "The platform continuously monitors across sources, detects meaningful changes, and surfaces only what deserves your attention — not another data dump.",
  },
  {
    number: "03",
    title: "You act from a position of strength",
    description:
      "You receive prioritised, contextualised intelligence you can act on immediately — and defend with clear reasoning when it matters most.",
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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Your clear path forward
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three steps from fragmented inputs to confident decisions.
          </h2>
          <p className="text-xl text-gray-400">
            Adopting decision intelligence should not be a multi-month
            integration — or another tool that creates more work than it removes.
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

        {/* Inline CTA */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to get started? Most teams are up and running within a week.
          </p>
          <Link href="/request-a-scoping-call">
            <Button
              size="lg"
              className="rounded-full shadow-xl shadow-primary/30 group"
            >
              Book Your Scoping Call
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
