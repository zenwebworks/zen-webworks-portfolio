"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Gift, FactoryIcon, FileInput, Table2, ArrowUpRight } from "lucide-react";
import Logo from "@/components/logo";
import { navLinks, socialLinks, siteConfig } from "@/lib/site-data";

const iconMap = {
  github: Gift,
  linkedin: FactoryIcon,
  instagram: FileInput,
  twitter: Table2,
};

export default function MobileSidebar({ open, onClose, activeSection }) {
  // Lock body scroll while the sidebar is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Sliding panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-paper-surface px-6 py-6 shadow-2xl dark:bg-ink-surface sm:px-8 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink transition-colors hover:border-primary-300 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-ink-line dark:text-paper"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                  className={`flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-2xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary-600 dark:text-primary-300"
                      : "text-ink dark:text-paper hover:text-primary-600 dark:hover:text-primary-300"
                  }`}
                >
                  {link.name}
                  <ArrowUpRight className="h-5 w-5 opacity-40" />
                </motion.a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-primary-600/20 transition-colors hover:bg-primary-700"
            >
              Start a project
            </a>

            <div className="mt-auto pt-10">
              <p className="text-sm text-ink/60 dark:text-paper/60">
                {siteConfig.availability}
              </p>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.name}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink/70 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-ink-line dark:text-paper/70 dark:hover:text-primary-300"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
