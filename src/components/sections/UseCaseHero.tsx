"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function UseCaseHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Strategic Workflows
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-8">
               Use cases for teams that <span className="text-primary italic">cannot afford</span> to miss what is changing.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
               Stem helps teams monitor competitor movement, market shifts, policy changes, and expansion signals so they can make better calls faster.
            </p>
            <Link href="/request-a-scoping-call">
              <Button size="lg" className="rounded-full shadow-xl shadow-primary/30 h-14 px-8">
                 Request a Scoping Call
                 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full pointer-events-none hidden lg:block">
         <div className="w-full h-full bg-blue-50/50 -skew-x-12 translate-x-1/2" />
      </div>
    </section>
  );
}
