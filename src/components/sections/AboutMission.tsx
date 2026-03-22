"use client";

import { motion } from "framer-motion";

export function AboutMission() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
              Why we built Stem.
            </h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                Important market decisions are often made with incomplete visibility. In fast-moving, under-instrumented markets, teams are forced to rely on scattered signals, delayed research, and gut feel.
              </p>
              <p>
                We believe teams deserve better intelligence systems—tools built specifically for the reality of external ambiguity.
              </p>
              <p>
                Stem exists to provide usable clarity, not more noise. We are focused on shortening the distance between market detection and strategic action.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative p-12 bg-background rounded-[40px] border border-gray-100"
          >
             <h3 className="text-2xl font-bold text-ink mb-6">The Worldview</h3>
             <ul className="space-y-6">
                {[
                  "Decisions should not depend on scattered intelligence.",
                  "Teams deserve signals they can interpret and defend.",
                  "Intelligence should support action, not clutter.",
                  "Fast markets require systems built for ambiguity."
                ].map((belief, i) => (
                  <li key={i} className="flex gap-4 items-start">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                     <p className="text-gray-700 font-medium text-lg">{belief}</p>
                  </li>
                ))}
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
