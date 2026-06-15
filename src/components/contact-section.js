"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { siteConfig, socialLinks } from "@/lib/site-data";
import { GitHubIcon, InstagramIcon } from "./icons";

const iconMap = {
  github: GitHubIcon,
  instagram: InstagramIcon,
};

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-paper-surface py-20 dark:bg-ink-surface sm:py-28">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
          description="Have a project in mind, or just want to talk through an idea? Send a message and I'll get back to you within a day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <ContactItem icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            {/* <ContactItem icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} /> */}
            <ContactItem icon={MapPin} label="Location" value={siteConfig.location} />

            <div className="pt-4">
              <p className="mb-3 text-sm font-medium text-ink/60 dark:text-paper/60">
                Find me elsewhere
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.name}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper-line text-ink/60 transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-ink-line dark:text-paper/60 dark:hover:text-primary-300"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-paper-line bg-paper p-5 shadow-sm dark:border-ink-line dark:bg-ink sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                required
              />
            </div>

            <div className="mt-5">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-ink/80 dark:text-paper/80">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me a bit about your project, timeline, and budget..."
                className="w-full resize-none rounded-xl border border-paper-line bg-paper-surface px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-ink-line dark:bg-ink-surface dark:text-paper dark:placeholder:text-paper/30 dark:focus:ring-primary-900/40"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your message has been sent — I&rsquo;ll reply soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-paper-line bg-paper p-4 transition-colors hover:border-primary-300 dark:border-ink-line dark:bg-ink sm:p-5">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/45 dark:text-paper/45">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-ink dark:text-paper sm:text-base">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function Field({ label, name, value, onChange, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink/80 dark:text-paper/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-paper-line bg-paper-surface px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-ink-line dark:bg-ink-surface dark:text-paper dark:placeholder:text-paper/30 dark:focus:ring-primary-900/40"
      />
    </div>
  );
}
