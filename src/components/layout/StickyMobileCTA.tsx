"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyMobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const heroEl = document.querySelector("[data-hero]");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the bar when the hero is NOT intersecting (scrolled past it)
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
        <Button
          size="lg"
          className="w-full rounded-full shadow-lg shadow-primary/30"
        >
          Request a Scoping Call
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
}
