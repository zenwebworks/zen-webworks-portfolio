import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

/**
 * Brand mark. Drop your own logo file at /public/images/logo.png
 * (square image, ~160x160px works best) — it will replace the
 * placeholder automatically, no code changes needed.
 */
export default function Logo({ className = "" }) {
  return (
    <Link
      href="#home"
      className={`flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink dark:text-paper-surface sm:text-xl ${className}`}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-primary-200 dark:ring-primary-800/60 sm:h-10 sm:w-10">
        <Image
          src="/images/logo.png"
          alt={`${siteConfig.brand} logo`}
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      <span className="leading-none">
        {siteConfig.brand}
      </span>
    </Link>
  );
}
