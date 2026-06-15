import Logo from "@/components/logo";
import { siteConfig, navLinks, socialLinks } from "@/lib/site-data";
import { GitHubIcon, InstagramIcon } from "./icons";

const iconMap = {
  github: GitHubIcon,
  instagram: InstagramIcon,
};


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-line bg-paper dark:border-ink-line dark:bg-ink">
      <div className="container mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/45 dark:text-paper/45">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-primary-600 dark:text-paper/70 dark:hover:text-primary-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/45 dark:text-paper/45">
              Connect
            </p>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink/60 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-ink-line dark:text-paper/60 dark:hover:text-primary-300"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-paper-line pt-6 text-center dark:border-ink-line">
          <p className="text-xs text-ink/50 dark:text-paper/50">
            &copy; {year} {siteConfig.brand}. Built by {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
