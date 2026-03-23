"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, noMotion } from "@/lib/animation-variants";

const authorityPoints = [
  { stat: "12+", label: "Senior strategy leaders consulted in design" },
  { stat: "4", label: "Core signal categories monitored continuously" },
  { stat: "100%", label: "Signal lineage — every alert is traceable" },
  { stat: "NG", label: "Built for Nigerian financial-services dynamics" },
];

const credentialItems = [
  {
    icon: Users,
    text: "Designed with operators who live the gap between fragmented data and defensible recommendations — not consultants guessing from the outside.",
  },
  {
    icon: BookOpen,
    text: "Deep focus on Nigerian financial markets, regulatory signals, competitive dynamics, and category movement that generic tools miss.",
  },
  {
    icon: Award,
    text: "Every intelligence output is backed by clear signal lineage — you can trace exactly where it came from and why it matters.",
  },
];

export function Guide() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Empathy side */}
          <motion.div
            variants={reduced ? noMotion : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          >
            <span className="shimmer-badge inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              You&apos;ve met your guide
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.1]">
              We understand how much is riding on your next decision.
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Every strategy leader we talked to described the same tension: markets
              move faster than the tools available to them. They spend hours piecing
              together signals from scattered sources — and still feel like they&apos;re
              one missed move away from a bad call.
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              That&apos;s exactly why we built Stem. Not as another dashboard or data
              dump — but as an intelligence layer that works the way strategic teams
              actually think. Surfacing what matters, explaining why it matters, and
              giving you the confidence to act before the window closes.
            </p>

            {/* Pull quote */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                &ldquo;The gap between reactive monitoring and proactive market
                intelligence is where competitive advantage is built. Stem exists to
                close that gap for serious operators.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">S</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Stem-Cogent Founding Team</p>
                  <p className="text-xs text-gray-500">
                    Built with Nigerian fintech operators
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Authority side */}
          <motion.div
            initial={
              reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
            }
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-10 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-ink mb-8">
              Built with the people who live this problem.
            </h3>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {authorityPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.4, delay: i * 0.1 + 0.4 }
                  }
                  className="text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {point.stat}
                  </div>
                  <p className="text-xs text-gray-600 leading-snug">
                    {point.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Credential list */}
            <div className="space-y-5">
              {credentialItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.4, delay: i * 0.1 + 0.6 }
                  }
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
