"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "This call is designed for strategy leads, growth leads, founders, and research or intelligence leads at mid-market fintech and financial-services companies in Nigeria. If your team makes external market decisions and struggles with fragmented or delayed intelligence, this conversation is relevant to you.",
  },
  {
    question: "What happens after I submit?",
    answer:
      "A strategy lead from the Stem team will review your submission within 24 hours and reach out to schedule a focused scoping call. The session is typically 30–45 minutes. There is no hard sales process — we start by understanding your decision environment.",
  },
  {
    question: "Do I need to have everything defined already?",
    answer:
      "No. You do not need a fully defined brief before reaching out. Many of the best conversations start with a general sense of what the team is trying to track or improve. We will help you map the specific use cases and needs during the scoping call.",
  },
  {
    question: "Can we discuss a specific use case?",
    answer:
      "Absolutely. If you already have a specific monitoring need in mind — competitor tracking, policy risk, market-entry timing, or something else — you can mention it in the form. We will come prepared to explore that area in depth.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-ink mb-4">Common questions.</h2>
          <p className="text-xl text-gray-600">
            A few things buyers often want to know before submitting a request.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-ink text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
