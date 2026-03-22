"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Zap, Filter, Send } from "lucide-react";

const blocks = [
  {
    icon: Eye,
    title: "Watches meaningful external signals",
    description:
      "Stem continuously monitors the markets, entities, competitors, and signal categories your team has defined as important.",
  },
  {
    icon: Zap,
    title: "Detects important change",
    description:
      "The platform identifies meaningful shifts across competitors, policy, pricing, and category movement — separating signal from noise.",
  },
  {
    icon: Filter,
    title: "Adds context and prioritization",
    description:
      "Detected changes are synthesized and ranked so your team sees the most strategically relevant intelligence first.",
  },
  {
    icon: Send,
    title: "Delivers decision-ready outputs",
    description:
      "Teams receive summaries, alerts, and structured intelligence they can review, act on, and share with leadership.",
  },
];

const signals = [
  {
    category: "Competitor",
    title: "Competitor A expanded pricing tier",
    urgency: "High",
    urgencyColor: "bg-red-50 text-red-600",
    borderColor: "border-l-red-400",
    detail: "Pricing adjustment detected across three product segments.",
    time: "2 min ago",
  },
  {
    category: "Policy",
    title: "CBN circular update on digital lending",
    urgency: "Medium",
    urgencyColor: "bg-amber-50 text-amber-600",
    borderColor: "border-l-amber-400",
    detail: "New draft guidelines may affect lending product compliance posture.",
    time: "18 min ago",
  },
  {
    category: "Market",
    title: "Category growth signal — embedded finance",
    urgency: "Monitor",
    urgencyColor: "bg-blue-50 text-blue-700",
    borderColor: "border-l-primary",
    detail: "Multiple indicators suggest accelerating adoption among SME-focused players.",
    time: "1 hr ago",
  },
];

export function PlatformOverview() {
  const [activeSignal, setActiveSignal] = React.useState(0);
  const [tick, setTick] = React.useState(0);

  // Cycle to next signal every 3 seconds for a live feed feel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
      setTick((t) => t + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              What Stem does,{" "}
              <span className="text-primary italic">in simple terms.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stem is not a generic dashboard or a raw data feed. It is a decision intelligence
              platform built to turn fragmented external signals into fast, actionable clarity
              for strategy and growth teams.
            </p>

            <div className="space-y-6">
              {blocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-5 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  >
                    <block.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">{block.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{block.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: live intelligence feed */}
          <motion.div
            initial={{ x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Card */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl shadow-primary/8 p-8 relative overflow-hidden">
              {/* Subtle shimmer overlay */}
              <div className="absolute inset-0 shimmer-bg pointer-events-none rounded-[32px]" />

              {/* Header row */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Pulsing live dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Intelligence Feed — Live
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  {signals.length} active signals
                </span>
              </div>

              {/* Cycling signal cards */}
              <div className="space-y-3 relative z-10">
                {signals.map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: activeSignal === i ? 1 : 0.55,
                      scale: activeSignal === i ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setActiveSignal(i)}
                    className={`p-5 rounded-2xl bg-background border border-l-4 ${item.borderColor} border-gray-100 cursor-pointer transition-shadow hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-300">{item.time}</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.urgencyColor}`}>
                          {item.urgency}
                        </span>
                      </div>
                    </div>
                    <p className="font-bold text-ink mb-1">{item.title}</p>
                    <AnimatePresence>
                      {activeSignal === i && (
                        <motion.p
                          initial={{ height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm text-gray-500 overflow-hidden"
                        >
                          {item.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Progress indicator dots */}
              <div className="flex gap-2 mt-6 justify-center relative z-10">
                {signals.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSignal(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSignal === i ? "w-8 bg-primary" : "w-1.5 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative glows */}
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary/8 rounded-full blur-3xl pointer-events-none animate-float" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float-delayed" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
