"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function InsightsFeatured() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[40px] bg-ink text-white overflow-hidden relative"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Featured Report</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The State of Fintech Intelligence.</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  How mid-market fintech and financial services teams are navigating fragmented market signals and shifting competitive landscapes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 h-14 px-8">
                    Download Full Report
                    <Download className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full h-14 px-8">
                    Learn more
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
             </div>
             
             <div className="relative aspect-[4/5] max-w-sm mx-auto w-full">
                <div className="absolute inset-0 bg-primary/20 rounded-[32px] rotate-3 scale-105 blur-2xl" />
                <div className="relative h-full w-full bg-white rounded-[32px] border border-white/10 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                   <div className="h-4 w-24 bg-primary/20 rounded" />
                   <div className="space-y-4">
                      <div className="h-10 w-full bg-ink rounded" />
                      <div className="h-10 w-2/3 bg-ink rounded" />
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded" />
                      <div className="h-2 w-full bg-gray-100 rounded" />
                      <div className="h-2 w-1/2 bg-gray-100 rounded" />
                   </div>
                   <div className="h-20 w-full bg-primary rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold uppercase tracking-widest text-xs">Stem Market Brief</span>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
