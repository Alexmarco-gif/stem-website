"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  if (formState === "success") {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
           <motion.div
             initial={{ scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="p-12 rounded-[40px] bg-background border border-gray-100 shadow-xl"
           >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
                 <Send size={40} />
              </div>
              <h2 className="text-3xl font-bold text-ink mb-4">Request Received.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                 Thank you for reaching out. A strategy lead from our team will review your context and be in touch within 24 hours to schedule your scoping call.
              </p>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-ink mb-8">What this conversation is for.</h2>
            <div className="space-y-8">
               {[
                 { title: "Decision Audit", desc: "Understand your current external monitoring and decision environment." },
                 { title: "High-Value Needs", desc: "Identify the specific signals and entities that matter most to your team." },
                 { title: "Use Case Mapping", desc: "See exactly how Stem fits into your existing workflows and rituals." },
                 { title: "Fit Assessment", desc: "Determine if Stem is the right lever for your current strategic goals." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <div>
                       <h4 className="text-xl font-bold text-ink mb-2">{item.title}</h4>
                       <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-2xl shadow-primary/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">Full Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">Work Email</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">Company</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">Role</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">Primary Use Case</label>
                <select className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                   <option>Competitor tracking</option>
                   <option>Market monitoring</option>
                   <option>Policy / risk monitoring</option>
                   <option>Expansion support</option>
                   <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-ink uppercase tracking-widest ml-1">What are you trying to improve?</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
              </div>

              <Button disabled={formState === "submitting"} className="w-full h-16 text-xl rounded-2xl shadow-xl shadow-primary/20">
                {formState === "submitting" ? "Submitting..." : "Submit Scoping Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
