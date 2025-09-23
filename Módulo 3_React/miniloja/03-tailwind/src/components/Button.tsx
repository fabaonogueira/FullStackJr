import React from "react";

type Variant = "solid" | "outline" | "ghost";

const base = "rounded-full px-3.5 py-2.5 font-semibold outline-none transition-transform duration-180 ease-smooth focus-visible:ring-4";
const solid   = "bg-[var(--accent)] text-[var(--accent-ff,var(--accent-fg))] text-[var(--accent-fg)] hover:-translate-y-0.5 shadow-card dark:shadow-cardDark";
const outline = "border border-[var(--accent)] text-[var(--accent)] hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]";
const ghost   = "text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/10";

export function Button(
  { children, variant = "solid", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
) {
  const map = { solid, outline, ghost };
  return (
    <button
      className={`${base} ${map[variant]} focus-visible:outline-none focus-visible:ring-[var(--ring)] disabled:opacity-60 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
}
