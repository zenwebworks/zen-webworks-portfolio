"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { skillGroups } from "@/lib/site-data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SkillsShowcase() {
  return (
    <section id="skills" className="bg-paper-surface py-20 dark:bg-ink-surface sm:py-28">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & tools"
          title="The stack I build with"
          description="A focused toolkit for shipping production-ready web apps — from pixel-perfect interfaces to secure, scalable backends."
        />

        <div className="mt-14 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                  {group.title}
                </h3>
                <p className="text-sm text-ink/55 dark:text-paper/55">{group.description}</p>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-paper-line bg-paper p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/5 dark:border-ink-line dark:bg-ink dark:hover:border-primary-400/60 sm:p-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-paper-line transition-transform duration-300 group-hover:scale-110 dark:ring-ink-line sm:h-14 sm:w-14">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-8 w-8 sm:h-9 sm:w-9"
                      />
                    </span>
                    <span className="text-xs font-medium text-ink/80 dark:text-paper/80 sm:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
