"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const scrollToEngine = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/*
        Background grid + glow — pure CSS, zero hydration issues.
        Replaces the framer-motion SVG which caused cx/cy undefined errors.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(53,99,235,0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating orbs with CSS animation */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/35 rounded-full animate-float-delayed" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 right-1/2 w-3 h-3 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/*
            Hero text uses CSS animation class — renders visible immediately
            without waiting for JS/framer-motion hydration.
          */}
          <div className="hero-content">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/10">
              Decision Intelligence for Fast-Moving Markets
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6">
              Stop making high-stakes decisions{" "}
              <span className="text-primary italic">half-blind.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Stem helps fintech and financial-services teams in Nigeria detect meaningful
              market changes early and act with more confidence, less guesswork, and less
              manual research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-cta">
              <Link href="/request-a-scoping-call">
                <Button size="lg" className="rounded-full shadow-xl shadow-primary/30 h-14 px-8">
                  Request a Scoping Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-14 px-8"
                onClick={scrollToEngine}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero visual — decorative, framer-motion is fine here */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center p-12">
                <div className="w-full h-full relative">
                  {/* Concentric rotating rings */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/10 rounded-full"
                      style={{ width: `${(i + 1) * 20}%`, height: `${(i + 1) * 20}%` }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  {/* Pulsing node — top-right */}
                  <div className="absolute top-1/4 right-1/4">
                    <motion.div
                      className="w-4 h-4 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  {/* Pulsing node — bottom-left */}
                  <div className="absolute bottom-1/3 left-[20%]">
                    <motion.div
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  {/* Central rotating core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40"
                    >
                      <div className="w-4 h-4 bg-white rounded-sm" />
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Glow beneath the card */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/8 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
