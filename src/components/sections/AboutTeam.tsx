"use client";

import { motion } from "framer-motion";

export function AboutTeam() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            Founding Perspective
          </h2>
          <div className="p-12 md:p-16 bg-white rounded-[40px] border border-gray-100 shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-2xl text-ink font-medium leading-relaxed mb-10">
                  “Stem was built for the next generation of Nigerian finance—not just as a tool for monitoring, but as a system for making calls when the market is moving faster than teams can track.”
                </p>
                <div className="flex flex-col items-center">
                   <div className="w-20 h-20 rounded-full bg-gray-200 mb-6" />
                   <h4 className="text-xl font-bold text-ink">Operating Philosophy</h4>
                   <p className="text-gray-500 font-medium italic">Decision-first Intelligence</p>
                </div>
             </div>
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
