"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
    : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };

  const visualVariants = reduced
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
    : { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } };

  return (
    <section
      data-hero
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
    >
      {/* Structural grid overlay */}
      <div className="absolute inset-0 grid-pattern-dark opacity-60 pointer-events-none z-0" />

      {/* Organic ambient blobs */}
      <div
        className="organic-blob organic-blob-blue pointer-events-none"
        style={{ width: 700, height: 700, top: "-15%", left: "-12%" }}
      />
      <div
        className="organic-blob organic-blob-teal pointer-events-none"
        style={{ width: 500, height: 500, bottom: "-10%", right: "-8%" }}
      />
      <div
        className="organic-blob organic-blob-gold pointer-events-none opacity-30"
        style={{ width: 350, height: 350, top: "60%", left: "40%" }}
      />

      {/* Signal Convergence Visualization — animated particle field */}
      {!reduced && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {nodes.map((node, i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill={i % 3 === 0 ? "#4D7CFF" : i % 3 === 1 ? "#00D4AA" : "#C9A84C"}
                  initial={{ cx: node.startX, cy: node.startY, opacity: 0 }}
                  animate={{
                    cx: [node.startX, node.endX],
                    cy: [node.startY, node.endY],
                    opacity: [0, 0.9, 0.5],
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
              {nodes.slice(0, 8).map((node, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={node.endX}
                  y1={node.endY}
                  x2={nodes[(i + 1) % 8].endX}
                  y2={nodes[(i + 1) % 8].endY}
                  stroke={i % 2 === 0 ? "#4D7CFF" : "#00D4AA"}
                  strokeWidth="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 2 + i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
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
            transition={reduced ? { duration: 0 } : { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow badge */}
            <motion.span
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="premium-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 text-teal"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse" />
              Decision Intelligence for Nigerian Financial Services
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              <span className="text-white">Stop making</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-white">high-stakes decisions</span>{" "}
              <br />
              <span className="text-gradient-blue italic">half-blind.</span>
            </h1>

            <p className="text-lg text-white/65 mb-4 max-w-lg leading-relaxed">
              Stem gives fintech and financial-services teams in Nigeria the
              intelligence layer they need — detect competitor moves early,
              defend every recommendation with traceable evidence, and act
              before the window closes.
            </p>
            <p className="text-base text-white/45 mb-10 max-w-lg leading-relaxed">
              Imagine walking into every strategy review fully prepared: no
              surprises, no gaps, no guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-scoping-call">
                <motion.button
                  whileHover={reduced ? {} : { scale: 1.02 }}
                  whileTap={reduced ? {} : { scale: 0.98 }}
                  className="btn-premium group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
                >
                  Request a Scoping Call
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
                onClick={scrollToEngine}
              >
                See How It Works
              </motion.button>
            </div>

            <p className="text-sm text-white/35 mt-5">
              Trusted by strategy and growth leaders across Nigerian financial services
            </p>
          </motion.div>

          {/* Intelligence Visual Panel — glass morphism card */}
          <motion.div
            className="relative"
            initial={visualVariants.initial}
            animate={visualVariants.animate}
            transition={reduced ? { duration: 0 } : { duration: 1.1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-xl">
              {/* Outer glow ring */}
              {!reduced && (
                <div
                  className="absolute inset-[-2px] rounded-3xl pointer-events-none animate-border-glow"
                  style={{
                    background: "linear-gradient(135deg, rgba(77,124,255,0.3), rgba(0,212,170,0.3))",
                    filter: "blur(1px)",
                    borderRadius: 28,
                  }}
                />
              )}

              <div className="relative glass-dark-elevated rounded-3xl p-8 lg:p-10 w-full h-full flex items-center justify-center overflow-hidden">
                {/* Inner ambient glow */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-20"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(77,124,255,0.5) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-15"
                    style={{
                      background: "radial-gradient(circle at 70% 70%, rgba(0,212,170,0.5) 0%, transparent 60%)",
                    }}
                  />
                </div>

                <div className="w-full h-full relative">
                  {/* Concentric rings */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: `${(i + 1) * 20}%`,
                        height: `${(i + 1) * 20}%`,
                        border: `1px solid rgba(77,124,255,${0.08 + i * 0.03})`,
                      }}
                      animate={reduced ? {} : { rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 20 + i * 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}

                  {/* Orbit signal-source nodes */}
                  <div className="absolute top-[10%] right-[14%]">
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full text-[11px] font-semibold text-teal whitespace-nowrap"
                      animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                      Competitors
                    </motion.div>
                  </div>

                  <div className="absolute bottom-[18%] left-[8%]">
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full text-[11px] font-semibold text-gold whitespace-nowrap"
                      animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                      Policy
                    </motion.div>
                  </div>

                  <div className="absolute top-[30%] left-[8%]">
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full text-[11px] font-semibold text-primary whitespace-nowrap"
                      animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                      Markets
                    </motion.div>
                  </div>

                  <div className="absolute bottom-[10%] right-[12%]">
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full text-[11px] font-semibold text-rose-400 whitespace-nowrap"
                      animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                      Regulations
                    </motion.div>
                  </div>

                  {/* Central Intelligence Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                    <motion.div
                      animate={reduced ? {} : {
                        boxShadow: [
                          "0 0 24px rgba(77,124,255,0.4), 0 0 48px rgba(77,124,255,0.15)",
                          "0 0 48px rgba(77,124,255,0.7), 0 0 96px rgba(0,212,170,0.25)",
                          "0 0 24px rgba(77,124,255,0.4), 0 0 48px rgba(77,124,255,0.15)",
                        ],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                      className="w-18 h-18 rounded-2xl flex items-center justify-center transform rotate-12 relative"
                      style={{
                        width: 72,
                        height: 72,
                        background: "linear-gradient(135deg, #4D7CFF 0%, #3563EB 100%)",
                      }}
                    >
                      <div className="w-5 h-5 bg-white/90 rounded-sm" />
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-30"
                        style={{ background: "radial-gradient(circle at 30% 30%, white, transparent)" }}
                      />
                    </motion.div>
                    <span className="text-[10px] font-bold text-gradient-blue uppercase tracking-widest">
                      Intelligence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade — transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, rgb(240,242,248))",
        }}
      />
    </section>
  );
}
