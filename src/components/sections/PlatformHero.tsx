"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

export function PlatformHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Decision Intelligence Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-8">
            A decision intelligence platform built for <span className="text-primary italic text-6xl md:text-8xl">external-world</span> visibility.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stem helps strategy and growth teams detect meaningful market changes, synthesize fragmented signals, and turn ambiguity into defensible decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full shadow-xl shadow-primary/30 h-14 px-8">
              Request a Scoping Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full h-14 px-8">
              See Use Cases
            </Button>
          </div>
        </motion.div>

        {/* Conceptual UI / Platform Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-[32px] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden aspect-[16/9] flex flex-col">
            {/* Mock UI Header */}
            <div className="h-14 border-b border-gray-100 bg-gray-50/50 flex items-center px-6 gap-4">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
               </div>
               <div className="h-6 w-32 bg-gray-200 rounded-full ml-4" />
            </div>
            {/* Mock UI Content */}
            <div className="flex-1 p-8 grid grid-cols-12 gap-6">
               <div className="col-span-3 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-10 rounded-lg ${i === 0 ? "bg-primary/10 border border-primary/20" : "bg-gray-50"}`} />
                  ))}
               </div>
               <div className="col-span-9 space-y-6">
                  <div className="h-40 bg-gray-50 rounded-2xl border border-gray-100 p-6">
                     <div className="w-1/3 h-6 bg-gray-200 rounded mb-4" />
                     <div className="w-full h-4 bg-gray-100 rounded mb-2" />
                     <div className="w-2/3 h-4 bg-gray-100 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="h-32 bg-white border border-primary/10 rounded-2xl shadow-sm p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2"><Cpu className="text-primary/20" size={40} /></div>
                        <div className="w-1/2 h-4 bg-primary/20 rounded mb-2" />
                        <div className="w-full h-12 bg-primary/5 rounded" />
                     </div>
                     <div className="h-32 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                        <div className="w-1/2 h-4 bg-gray-200 rounded mb-2" />
                        <div className="w-full h-12 bg-gray-100 rounded" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" 
          />
        </motion.div>
      </div>
    </section>
  );
}
