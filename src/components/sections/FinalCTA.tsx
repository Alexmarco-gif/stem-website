"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function scrollToEngine() {
  document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
}

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration with subtle float */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none"
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
            className="p-12 md:p-20 rounded-[40px] bg-primary text-white shadow-2xl shadow-primary/20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              See what better market visibility could change for your team.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              Tell us what your team is trying to track, assess, or decide.
              We&apos;ll show you how Stem could fit your decision workflow.
            </p>
            <p className="text-blue-200 text-sm mb-10">
              Most teams start with a 30-minute scoping call · No commitment required
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/request-a-scoping-call">
                <Button
                  size="lg"
                  variant="secondary"
                  className="cta-pulse-ring rounded-full shadow-lg h-16 px-10 text-xl group"
                >
                  Request a Scoping Call
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10 h-16 px-10 text-xl"
                onClick={scrollToEngine}
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
