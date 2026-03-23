"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function scrollToEngine() {
  document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
}

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
    >
      {/* Organic blobs */}
      <div
        className="organic-blob organic-blob-blue pointer-events-none opacity-40"
        style={{ width: 700, height: 700, top: "-30%", left: "-10%" }}
      />
      <div
        className="organic-blob organic-blob-teal pointer-events-none opacity-25"
        style={{ width: 500, height: 500, bottom: "-20%", right: "-8%" }}
      />
      <div
        className="organic-blob organic-blob-gold pointer-events-none opacity-20"
        style={{ width: 300, height: 300, top: "50%", right: "20%" }}
      />
      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-dark-elevated rounded-[32px] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Inner card glow */}
            <div className="absolute inset-0 rounded-[32px] pointer-events-none overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: "radial-gradient(ellipse at 30% 20%, rgba(77,124,255,0.12) 0%, transparent 55%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-2/3 h-2/3"
                style={{
                  background: "radial-gradient(ellipse at 70% 80%, rgba(0,212,170,0.08) 0%, transparent 55%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="premium-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse" />
                See what&apos;s possible
              </span>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                See what better market visibility{" "}
                <span className="text-gradient-blue">could change</span>{" "}
                for your team.
              </h2>

              <p className="text-lg md:text-xl text-white/60 mb-4 max-w-2xl mx-auto leading-relaxed">
                Tell us what your team is trying to track, assess, or decide.
                We&apos;ll show you how Stem could fit your decision workflow.
              </p>
              <p className="text-white/35 text-sm mb-12">
                Most teams start with a 30-minute scoping call · No commitment required
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link href="/request-a-scoping-call">
                  <motion.button
                    whileHover={reduced ? {} : { scale: 1.02 }}
                    whileTap={reduced ? {} : { scale: 0.97 }}
                    className="cta-pulse-ring btn-premium group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-white font-semibold text-lg"
                  >
                    Request a Scoping Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={reduced ? {} : { scale: 1.02 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="btn-glass group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-white font-semibold text-lg"
                  onClick={scrollToEngine}
                >
                  See How It Works
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Transitional CTA */}
          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <p className="text-white/30 text-sm">Not ready for a call yet?</p>
            <Link href="/insights">
              <motion.button
                whileHover={reduced ? {} : { scale: 1.02 }}
                className="btn-glass group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white/70 text-sm font-semibold hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-teal flex-shrink-0" />
                Explore our intelligence insights — free
                <ArrowRight className="w-4 h-4 text-teal transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
