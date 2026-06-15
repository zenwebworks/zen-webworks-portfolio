"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FolderGit2, Gift, FileInput,} from "lucide-react";
import EnsoRing from "@/components/enso-ring";
import { useTypewriter } from "@/hooks/use-typewriter";
import { siteConfig, socialLinks } from "@/lib/site-data";
import { GitHubIcon, InstagramIcon } from "./icons";

const iconMap = {
  github: GitHubIcon,
  instagram: InstagramIcon,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  const role = useTypewriter(siteConfig.roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper pt-32 pb-20 dark:bg-ink sm:pt-40 sm:pb-28 lg:pb-32"
    >
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-900/30 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-100/50 blur-3xl dark:bg-primary-900/20"
      />

      <div className="container relative mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-600 shadow-sm dark:border-ink-line dark:bg-ink-surface dark:text-primary-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-6xl"
          >
            Hi, I&rsquo;m {siteConfig.name} —
            <br className="hidden sm:block" /> Freelance {" "}
            <span className="relative inline-block text-primary-600 dark:text-primary-400">
              Full-Stack Developer
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-5 flex h-8 items-center justify-center font-display text-lg font-medium text-primary-600 dark:text-primary-300 sm:h-9 sm:text-xl lg:justify-start"
          >
            <span>{role}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-primary-500 sm:h-6" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg lg:mx-0"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:w-auto"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-paper-line bg-paper-surface px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary-300 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-ink-line dark:bg-ink-surface dark:text-paper dark:hover:border-primary-400 dark:hover:text-primary-300 sm:w-auto"
            >
              <FolderGit2 className="h-4 w-4" />
              View my work
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink/60 transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-ink-line dark:text-paper/60 dark:hover:text-primary-300"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-md"
        >
          {/* Rotating enso ring */}
          <EnsoRing className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-primary-300/70 dark:text-primary-700/60 sm:-inset-6 sm:h-[calc(100%+3rem)] sm:w-[calc(100%+3rem)]" />
          <EnsoRing
            reverse
            strokeWidth={2}
            className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] text-primary-200/60 dark:text-primary-800/40 sm:-inset-14 sm:h-[calc(100%+7rem)] sm:w-[calc(100%+7rem)]"
          />

          {/* Soft blob backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-3 -z-10 animate-blob bg-gradient-to-br from-primary-200 to-primary-400/60 opacity-70 dark:from-primary-900/60 dark:to-primary-700/40"
          />

          {/* Photo */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-paper-line bg-paper-surface shadow-2xl shadow-primary-900/10 dark:border-ink-line dark:bg-ink-surface">
            <Image
              src="/images/profileSuresh.png"
              alt={`Portrait of ${siteConfig.name}, ${siteConfig.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 16rem"
              className="object-cover"
            />
          </div>

          {/* Floating stat badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-6 hidden rounded-2xl border border-paper-line bg-paper-surface px-4 py-3 shadow-lg dark:border-ink-line dark:bg-ink-surface sm:-left-8 sm:block"
          >
            <p className="font-display text-2xl font-semibold text-primary-600 dark:text-primary-300">
              3+
            </p>
            <p className="text-xs text-ink/60 dark:text-paper/60">Years building web apps</p>
          </motion.div>

          {/* Floating availability badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-2 bottom-8 hidden rounded-2xl border border-paper-line bg-paper-surface px-4 py-3 shadow-lg dark:border-ink-line dark:bg-ink-surface sm:-right-6 sm:block"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-ink dark:text-paper">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to work
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
