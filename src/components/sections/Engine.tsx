"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Search, Cpu, Bell } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    id: "ingest",
    title: "Ingest",
    icon: Database,
    description:
      "Stem monitors the markets, entities, and signal categories your team needs to follow.",
  },
  {
    id: "detect",
    title: "Detect",
    icon: Search,
    description:
      "The system identifies meaningful changes across competitors, policy, pricing, and category movement.",
  },
  {
    id: "synthesize",
    title: "Synthesize",
    icon: Cpu,
    description:
      "Signals are grouped and interpreted so teams can understand what changed and why it matters.",
  },
  {
    id: "deliver",
    title: "Deliver",
    icon: Bell,
    description: "Teams receive decision-ready outputs they can review, share, and act on.",
  },
];

const STEP_DURATION = 4000;

export function Engine() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced) return;

    let start: number | null = null;
    const rafRef = { current: 0 };

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / STEP_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= STEP_DURATION) {
        setActiveStep((prev) => (prev + 1) % steps.length);
        start = timestamp;
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced]);

  return (
    <section id="engine" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">
              From fragmented signals to decision-ready intelligence.
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Stem continuously pulls together meaningful market inputs, detects
              important changes, adds context, and surfaces prioritized
              intelligence your team can act on.
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(i);
                    setProgress(0);
                  }}
                  className={`flex flex-col gap-2 p-6 rounded-2xl transition-all duration-300 text-left w-full ${
                    activeStep === i
                      ? "bg-white shadow-xl shadow-primary/5 border border-primary/10"
                      : "hover:bg-white/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activeStep === i
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {activeStep === i && !reduced && (
                    <div className="h-0.5 w-full bg-primary/10 rounded-full overflow-hidden mt-2">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Visualization panel */}
          <div className="flex-1 relative w-full aspect-square max-w-2xl bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(53,99,235,0.03),transparent)]" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Central Engine */}
              <div className="relative">
                <motion.div
                  className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
                  animate={reduced ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 text-white">
                    <Cpu size={48} className={reduced ? "" : "animate-spin-slow"} />
                  </div>
                </motion.div>

                {/* Pulsing signal lines */}
                {!reduced && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                          style={{
                            width: "150%",
                            top: "50%",
                            left: "-25%",
                            rotate: `${i * 30}deg`,
                          }}
                          animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              {/* Floating Input/Output Nodes */}
              <div className="absolute top-12 left-12">
                <Node label="Competitors" active={activeStep === 0} reduced={reduced} />
              </div>
              <div className="absolute bottom-12 left-12">
                <Node label="Market Shifts" active={activeStep === 0} reduced={reduced} />
              </div>
              <div className="absolute top-12 right-12">
                <Node label="Policy Alerts" active={activeStep === 3} reduced={reduced} />
              </div>
              <div className="absolute bottom-12 right-12">
                <Node label="Decisions" active={activeStep === 3} reduced={reduced} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({
  label,
  active,
  reduced,
}: {
  label: string;
  active: boolean;
  reduced: boolean;
}) {
  return (
    <motion.div
      animate={
        reduced
          ? {}
          : active
          ? { scale: 1.1 }
          : { scale: 1 }
      }
      transition={{ duration: 0.3 }}
      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-500 ${
        active
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
          : "bg-white text-gray-500 border-gray-100 opacity-60"
      }`}
    >
      {label}
    </motion.div>
  );
}
