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
    accent: "#4D7CFF",
    glow: "rgba(77,124,255,0.2)",
  },
  {
    id: "detect",
    title: "Detect",
    icon: Search,
    description:
      "The system identifies meaningful changes across competitors, policy, pricing, and category movement.",
    accent: "#00D4AA",
    glow: "rgba(0,212,170,0.2)",
  },
  {
    id: "synthesize",
    title: "Synthesize",
    icon: Cpu,
    description:
      "Signals are grouped and interpreted so teams can understand what changed and why it matters.",
    accent: "#C9A84C",
    glow: "rgba(201,168,76,0.2)",
  },
  {
    id: "deliver",
    title: "Deliver",
    icon: Bell,
    description: "Teams receive decision-ready outputs they can review, share, and act on.",
    accent: "#4D7CFF",
    glow: "rgba(77,124,255,0.2)",
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

  const activeAccent = steps[activeStep].accent;
  const activeGlow = steps[activeStep].glow;

  return (
    <section id="engine" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle organic touches */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(77,124,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-primary/8 border border-primary/18 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              How it works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              From fragmented signals to{" "}
              <span className="text-gradient-blue">decision-ready intelligence.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Stem continuously pulls together meaningful market inputs, detects
              important changes, adds context, and surfaces prioritized
              intelligence your team can act on.
            </p>

            <div className="space-y-3">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(i);
                    setProgress(0);
                  }}
                  className={`flex flex-col gap-2 p-5 rounded-2xl transition-all duration-300 text-left w-full ${
                    activeStep === i
                      ? "glass-light shadow-lg"
                      : "hover:bg-white/60 opacity-55 hover:opacity-90"
                  }`}
                  style={activeStep === i ? { borderColor: step.glow.replace("0.2", "0.35") } : {}}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={
                        activeStep === i
                          ? {
                              background: `linear-gradient(135deg, ${step.accent} 0%, ${step.accent}99 100%)`,
                              boxShadow: `0 4px 16px ${step.glow}`,
                            }
                          : { background: "rgba(0,0,0,0.06)" }
                      }
                    >
                      <step.icon
                        size={20}
                        style={{ color: activeStep === i ? "white" : "#6b7280" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-1">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {activeStep === i && !reduced && (
                    <div
                      className="h-0.5 w-full rounded-full overflow-hidden mt-1"
                      style={{ background: `${step.glow.replace("0.2", "0.15")}` }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ width: `${progress}%`, background: step.accent }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Visualization panel — glass */}
          <div className="flex-1 relative w-full aspect-square max-w-2xl glass-light rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            {/* Dynamic ambient glow responding to active step */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${activeGlow} 0%, transparent 60%)`,
              }}
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Central Engine */}
              <div className="relative">
                <motion.div
                  className="w-48 h-48 rounded-full flex items-center justify-center"
                  style={{
                    background: `rgba(255,255,255,0.8)`,
                    border: `2px solid ${activeAccent}30`,
                    boxShadow: `0 0 0 12px ${activeGlow.replace("0.2", "0.08")}`,
                  }}
                  animate={reduced ? {} : { scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${activeAccent} 0%, ${activeAccent}BB 100%)`,
                      boxShadow: `0 8px 32px ${activeGlow}`,
                    }}
                  >
                    <Cpu size={44} className={reduced ? "" : "animate-spin-slow"} />
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
                          className="absolute h-px"
                          style={{
                            width: "150%",
                            top: "50%",
                            left: "-25%",
                            rotate: `${i * 30}deg`,
                            background: `linear-gradient(90deg, transparent, ${activeAccent}, transparent)`,
                          }}
                          animate={{ x: ["-100%", "100%"], opacity: [0, 0.8, 0] }}
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
              <div className="absolute top-10 left-10">
                <Node label="Competitors" active={activeStep === 0} reduced={reduced} accent="#4D7CFF" />
              </div>
              <div className="absolute bottom-10 left-10">
                <Node label="Market Shifts" active={activeStep === 1} reduced={reduced} accent="#00D4AA" />
              </div>
              <div className="absolute top-10 right-10">
                <Node label="Policy Alerts" active={activeStep === 2} reduced={reduced} accent="#C9A84C" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Node label="Decisions" active={activeStep === 3} reduced={reduced} accent="#4D7CFF" />
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
  accent,
}: {
  label: string;
  active: boolean;
  reduced: boolean;
  accent: string;
}) {
  return (
    <motion.div
      animate={reduced ? {} : active ? { scale: 1.08 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-400"
      style={
        active
          ? {
              background: `linear-gradient(135deg, ${accent} 0%, ${accent}BB 100%)`,
              color: "white",
              boxShadow: `0 4px 16px ${accent}40`,
            }
          : {
              background: "rgba(255,255,255,0.7)",
              color: "#6b7280",
              border: "1px solid rgba(0,0,0,0.06)",
              opacity: 0.65,
            }
      }
    >
      {label}
    </motion.div>
  );
}
