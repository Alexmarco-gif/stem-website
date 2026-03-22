"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="p-12 md:p-20 rounded-[40px] bg-primary text-white shadow-2xl shadow-primary/20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              See what better market visibility could change for your team.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell us what your team is trying to track, assess, or decide. We’ll show you how Stem could fit your decision workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/request-a-scoping-call">
                <Button size="lg" variant="secondary" className="rounded-full shadow-lg h-16 px-10 text-xl">
                  Request a Scoping Call
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 h-16 px-10 text-xl">
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
