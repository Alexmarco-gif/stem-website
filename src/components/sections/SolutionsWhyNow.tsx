"use client";

import { motion } from "framer-motion";
import { Clock, ShieldAlert, Zap } from "lucide-react";

export function SolutionsWhyNow() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-ink text-white rounded-[40px] p-12 md:p-20 relative overflow-hidden">
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    In fast-moving markets, delayed clarity becomes <span className="text-primary italic">real exposure.</span>
                 </h2>
                 <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                    Market conditions change fast. Competitors do not wait. Policy movement matters. Internal teams still need recommendations quickly.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <p className="text-gray-300 font-medium text-lg">Competitors are moving today.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <p className="text-gray-300 font-medium text-lg">Regulatory shifts don't announce themselves.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <p className="text-gray-300 font-medium text-lg">Strategic windows narrow quickly.</p>
                    </div>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Clock className="text-primary mb-4" size={32} />
                    <h4 className="text-xl font-bold mb-3">Timing is everything</h4>
                    <p className="text-gray-400 leading-relaxed">Early visibility allows for proactive planning instead of reactive fire-fighting.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Zap className="text-primary mb-4" size={32} />
                    <h4 className="text-xl font-bold mb-3">Competitive edge</h4>
                    <p className="text-gray-400 leading-relaxed">Understanding external shifts faster than rivals is a fundamental strategic advantage.</p>
                 </div>
              </div>
           </div>
           
           {/* Background Pattern */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
