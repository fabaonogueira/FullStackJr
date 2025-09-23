import React from "react";
import s from "./Button.module.css";

type Variant = "solid" | "outline" | "ghost";

export function Button(
  { children, variant = "solid", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
) {
  return (
    <button className={`${s.btn} ${s[variant]}`} {...props}>
      {children}
    </button>
  );
}

