"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Pre-computed deterministic positions (no Math.random in render)
const nodes = [
  { startX: 123, startY: 847, endX: 520, endY: 485 },
  { startX: 756, startY: 234, endX: 470, endY: 530 },
  { startX: 890, startY: 620, endX: 540, endY: 510 },
  { startX: 45,  startY: 312, endX: 480, endY: 495 },
  { startX: 670, startY: 890, endX: 510, endY: 520 },
  { startX: 200, startY: 150, endX: 490, endY: 475 },
  { startX: 940, startY: 100, endX: 530, endY: 490 },
  { startX: 80,  startY: 750, endX: 475, endY: 515 },
  { startX: 780, startY: 780, endX: 515, endY: 505 },
  { startX: 350, startY: 50,  endX: 505, endY: 480 },
  { startX: 920, startY: 450, endX: 525, endY: 495 },
  { startX: 150, startY: 550, endX: 485, endY: 510 },
  { startX: 600, startY: 920, endX: 495, endY: 525 },
  { startX: 30,  startY: 420, endX: 470, endY: 490 },
  { startX: 720, startY: 60,  endX: 510, endY: 480 },
];

function scrollToEngine() {
  document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const reduced = useReducedMotion();

  const contentVariants = reduced
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  const visualVariants = reduced
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
    : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } };

  return (
    <section data-hero className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Signal Convergence Visualization — background */}
      {!reduced && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Scattered nodes converging — deterministic positions */}
              {nodes.map((node, i) => (
                <motion.circle
                  key={i}
                  r="4"
                  fill="#3563EB"
                  initial={{ cx: node.startX, cy: node.startY, opacity: 0 }}
                  animate={{
                    cx: [node.startX, node.endX],
                    cy: [node.startY, node.endY],
                    opacity: [0, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 6 + (i % 5),
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
              {/* Connection lines between nearby converged nodes */}
              {nodes.slice(0, 8).map((node, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={node.endX}
                  y1={node.endY}
                  x2={nodes[(i + 1) % 8].endX}
                  y2={nodes[(i + 1) % 8].endY}
                  stroke="#3563EB"
                  strokeWidth="1"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: [0, 0.3, 0], pathLength: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 2 + i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Central pulse */}
              <motion.circle
                cx="500"
                cy="500"
                r="1"
                fill="#3563EB"
                animate={{ scale: [1, 200, 400], opacity: [0.8, 0.4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={contentVariants.initial}
            animate={contentVariants.animate}
            transition={reduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
          >
            <span className="shimmer-badge inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Decision Intelligence for Fast-Moving Markets
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6">
              Stop making high-stakes decisions{" "}
              <span className="text-primary italic">half-blind.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Stem helps fintech and financial-services teams in Nigeria detect
              meaningful market changes early and act with more confidence, less
              guesswork, and less manual research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-scoping-call">
                <Button
                  size="lg"
                  className="rounded-full shadow-xl shadow-primary/30 group"
                >
                  Request a Scoping Call
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full"
                onClick={scrollToEngine}
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={visualVariants.initial}
            animate={visualVariants.animate}
            transition={reduced ? { duration: 0 } : { duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-2xl">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full h-full relative">
                  {/* Concentric rings */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/10 rounded-full"
                      style={{
                        width: `${(i + 1) * 20}%`,
                        height: `${(i + 1) * 20}%`,
                      }}
                      animate={reduced ? {} : { rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}

                  {/* Orbit nodes */}
                  <div className="absolute top-1/4 right-1/4">
                    <motion.div
                      className="w-4 h-4 bg-primary rounded-full"
                      animate={
                        reduced
                          ? { scale: 1, opacity: 1 }
                          : { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }
                      }
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <div className="absolute bottom-1/3 left-[20%]">
                    <motion.div
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={
                        reduced
                          ? { scale: 1, opacity: 1 }
                          : { scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }
                      }
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  <div className="absolute top-1/3 left-1/4">
                    <motion.div
                      className="w-2 h-2 bg-blue-300 rounded-full"
                      animate={
                        reduced
                          ? { scale: 1, opacity: 1 }
                          : { scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }
                      }
                      transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                  <div className="absolute bottom-1/4 right-1/5">
                    <motion.div
                      className="w-3 h-3 bg-blue-400 rounded-full"
                      animate={
                        reduced
                          ? { scale: 1, opacity: 1 }
                          : { scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }
                      }
                      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    />
                  </div>

                  {/* Central Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                      animate={
                        reduced
                          ? {}
                          : { scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(53,99,235,0.3)", "0 0 40px rgba(53,99,235,0.5)", "0 0 20px rgba(53,99,235,0.3)"] }
                      }
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40 transform rotate-12"
                    >
                      <div className="w-4 h-4 bg-white rounded-sm" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
