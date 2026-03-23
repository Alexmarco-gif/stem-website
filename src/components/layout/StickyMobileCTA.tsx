"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const heroEl = document.querySelector("[data-hero]");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-mobile-cta md:hidden ${visible ? "visible" : ""}`}>
      <Link href="/request-a-scoping-call" className="block">
        <button className="btn-premium w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-white font-semibold">
          Request a Scoping Call
          <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
}
