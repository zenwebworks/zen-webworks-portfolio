// Signature visual motif for Zen WebWorks — an "enso" (zen circle) brush
// stroke. An enso is traditionally drawn in a single breath; the small
// gap represents imperfection / openness. Used behind the profile photo,
// in the logo, and as a quiet section accent.

export default function EnsoRing({
  className = "",
  strokeWidth = 6,
  reverse = false,
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${reverse ? "animate-spin-reverse-slow" : "animate-spin-slow"} ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="478 90"
        strokeDashoffset="40"
      />
    </svg>
  );
}
