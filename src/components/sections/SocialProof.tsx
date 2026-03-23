"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Globe } from "lucide-react";
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
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
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
