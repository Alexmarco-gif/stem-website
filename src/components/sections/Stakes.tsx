"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, ShieldAlert, ZapOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { slideInLeft, slideInRight, noMotion } from "@/lib/animation-variants";

const stakes = [
  {
    title: "Missed competitor moves",
    description:
      "Launches and pricing shifts often become visible only after they have already captured market attention.",
    icon: TrendingDown,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Delayed expansion timing",
    description:
      "Moving too early or too late due to a lack of clear market entry signals can be a multi-million dollar mistake.",
    icon: ZapOff,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Weakly defended recommendations",
    description:
      "Internal strategy needs more than 'gut feel' to move forward with confidence and leadership buy-in.",
    icon: ShieldAlert,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Policy or regulatory surprise",
    description:
      "Regulatory changes can impact operations overnight if signals aren't detected and interpreted early.",
    icon: AlertCircle,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export function Stakes() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          >
            {/* Internal problem — how it feels */}
            <p className="text-base font-semibold text-primary uppercase tracking-wider mb-4">
              The real problem
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              The cost of a blind spot is rarely visible until it is expensive.
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              You weren&apos;t hired to guess. But when market intelligence is
              fragmented across dozens of sources — and the manual effort to
              synthesise it grows every month — every recommendation you make
              carries more risk than it should.
            </p>
            <p className="text-xl text-gray-600">
              That gap between what you know and what you&apos;d need to know to
              be fully confident? Right now, your competitors may be exploiting
              it.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakes.map((stake, i) => {
            // Alternate left/right slide-in
            const variant = reduced
              ? noMotion
              : i % 2 === 0
              ? slideInLeft
              : slideInRight;

            return (
              <motion.div
                key={stake.title}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={
                  reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }
                }
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                    stake.bg
                  )}
                >
                  <motion.div
                    whileHover={
                      reduced
                        ? {}
                        : {
                            rotate: [0, -8, 8, -6, 6, 0],
                            transition: { duration: 0.5 },
                          }
                    }
                  >
                    <stake.icon className={cn("w-6 h-6", stake.color)} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  {stake.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stake.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophical problem — the closing conviction */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
          className="mt-16 p-10 rounded-3xl bg-ink text-white text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-bold leading-snug">
            Strategy leaders shouldn&apos;t have to fight for better intelligence.
          </p>
          <p className="text-gray-400 text-lg mt-4">
            But right now, many of them are — and the market rewards the ones who stop.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
