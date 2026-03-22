"use client";

import { motion } from "framer-motion";
import { XCircle, Layers, Clock, ShieldAlert, Target } from "lucide-react";

const problems = [
  {
    title: "Signals are fragmented",
    description: "Important market and competitor data is scattered across thousands of disconnected sources.",
    icon: Layers,
  },
  {
    title: "Manual synthesis is slow",
    description: "Teams spend more time gathering data than actually interpreting what it means for the company.",
    icon: Clock,
  },
  {
    title: "Hard-to-defend recommendations",
    description: "Strategy decisions often rely on 'gut feel' or incomplete evidence, making leadership buy-in difficult.",
    icon: ShieldAlert,
  },
  {
    title: "Delayed reaction time",
    description: "By the time a market shift is obvious, the window to act effectively has already narrowed.",
    icon: Target,
  },
];

export function SolutionsProblem() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
              The problem is not a lack of data. It is a <span className="text-primary italic">lack of usable clarity.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In fast-moving markets, information is everywhere, but intelligence is scarce. Stem was built to bridge that gap.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((prob, i) => (
              <motion.div
                key={prob.title}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-gray-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                   <prob.icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{prob.title}</h3>
                <p className="text-gray-500 leading-relaxed">{prob.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
