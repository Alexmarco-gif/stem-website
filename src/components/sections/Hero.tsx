"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Signal Animation (Conceptual) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          {/* Using a subtle animated SVG pattern as a placeholder for the WebGL/Canvas signal */}
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="500" cy="500" r="1" fill="#3563EB"
              animate={{
                scale: [1, 200, 400],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            {/* Scattered nodes converging */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="3"
                fill="#3563EB"
                animate={{
                  cx: 500 + (Math.random() - 0.5) * 100,
                  cy: 500 + (Math.random() - 0.5) * 100,
                  opacity: [0, 1, 0.5]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Decision Intelligence for Fast-Moving Markets
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6">
              Stop making high-stakes decisions <span className="text-primary italic">half-blind.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Stem helps fintech and financial-services teams in Nigeria detect meaningful market changes early and act with more confidence, less guesswork, and less manual research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full shadow-xl shadow-primary/30">
                Request a Scoping Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full">
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Premium abstract signal graphic */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center p-12">
                 <div className="w-full h-full relative">
                    {/* Concentric lines representing signal structure */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/10 rounded-full"
                        style={{ width: `${(i + 1) * 20}%`, height: `${(i + 1) * 20}%` }}
                        animate={{
                          rotate: i % 2 === 0 ? 360 : -360,
                        }}
                        transition={{
                          duration: 20 + i * 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                    {/* Active nodes */}
                    <div className="absolute top-1/4 right-1/4">
                      <motion.div
                        className="w-4 h-4 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    <div className="absolute bottom-1/3 left-1/5">
                      <motion.div
                        className="w-3 h-3 bg-primary rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                    {/* Central Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                       <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40 transform rotate-12">
                          <div className="w-4 h-4 bg-white rounded-sm" />
                       </div>
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
