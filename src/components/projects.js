"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Gift } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-paper-line bg-paper-surface px-3 py-1 text-xs font-medium text-ink/70 dark:border-ink-line dark:bg-ink-surface dark:text-paper/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700 sm:text-sm"
      >
        Live preview
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
      {/* <a
        href={project.codeUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View source code for ${project.title}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink/70 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-ink-line dark:text-paper/70 dark:hover:text-primary-300"
      >
        <Gift className="h-4 w-4" />
      </a> */}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="work" className="bg-paper py-20 dark:bg-ink sm:py-28">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've shipped for clients"
          description="A mix of platform builds, internal tools, and client-facing websites — each one focused on real business outcomes."
        />

        {/* Featured project */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid items-center gap-8 rounded-3xl border border-paper-line bg-paper-surface p-3 shadow-sm dark:border-ink-line dark:bg-ink-surface sm:p-4 lg:grid-cols-2 lg:gap-10 lg:p-6"
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="px-2 pb-2 sm:px-3 lg:py-4 lg:pr-6">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-300">
              Featured project
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-paper sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65 sm:text-base">
              {featured.description}
            </p>
            <div className="mt-5">
              <Tags tags={featured.tags} />
            </div>
            <div className="mt-6">
              <ProjectLinks project={featured} />
            </div>
          </div>
        </motion.div>

        {/* Remaining projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col overflow-hidden rounded-3xl border border-paper-line bg-paper-surface shadow-sm transition-shadow hover:shadow-lg dark:border-ink-line dark:bg-ink-surface"
            >
              <div className="group relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {project.description}
                </p>
                <Tags tags={project.tags} />
                <div className="mt-auto">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
