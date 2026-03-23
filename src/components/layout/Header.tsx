"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "nav-glass py-3"
          : isHome
          ? "bg-transparent py-6"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors duration-300",
                isDark ? "text-white" : "text-ink"
              )}
            >
              Stem
              <span className="text-gradient-blue">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  isDark
                    ? pathname === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    : pathname === item.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary to-teal"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/request-a-scoping-call">
              <button
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  isDark
                    ? "btn-glass text-white hover:text-white"
                    : "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
                )}
              >
                Request a Scoping Call
              </button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isDark ? "text-white" : "text-ink"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-40 md:hidden nav-glass"
          >
            <div className="flex flex-col p-6 gap-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-lg font-medium py-3 border-b border-white/08 transition-colors",
                      pathname === item.href
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <Link href="/request-a-scoping-call">
                  <Button className="w-full rounded-full" onClick={() => setIsOpen(false)}>
                    Request a Scoping Call
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
