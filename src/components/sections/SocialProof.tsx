"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Globe, Quote } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const badges = [
  {
    icon: Users,
    label: "12+ Strategy Leaders Consulted",
  },
  {
    icon: Globe,
    label: "Nigerian Financial Markets",
  },
  {
    icon: ShieldCheck,
    label: "Signal Lineage & Traceability",
  },
  {
    icon: TrendingUp,
    label: "Decision-Ready Intelligence",
  },
];

export function SocialProof() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Testimonial quote */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Quote className="w-8 h-8 text-primary/30" />
          </div>
          <p className="text-xl md:text-2xl font-medium text-ink leading-relaxed mb-6">
            &ldquo;The intelligence gap in Nigerian fintech is real — and costly. A
            platform that brings market, competitor, and policy signals into a
            single decision layer would change how strategy teams operate
            entirely.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">F</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-ink">Fintech Strategy Leader</p>
              <p className="text-xs text-gray-500">
                Senior Strategy Consultant, Nigerian Financial Services
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest text-center">
            Designed for Nigeria&apos;s leading fintech strategy and growth teams
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={
                  reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={
                  reduced ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }
                }
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
              >
                <badge.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-ink whitespace-nowrap">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
