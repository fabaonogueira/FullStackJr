import React from "react";

type Variant = "solid" | "outline" | "ghost";

export function Button(
  { children, variant = "solid", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
) {
  return (
    <button
      className={`btn btn--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}
