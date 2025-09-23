import styled from "styled-components";
import React from "react";

type Variant = "solid" | "outline" | "ghost";

const Base = styled.button<{ $variant: Variant }>`
  border-radius: ${p=>p.theme.radii.pill};
  padding: 10px 14px; font-weight: 600; border: 1px solid transparent;
  cursor: pointer; outline: none;
  transition: transform ${p=>p.theme.timing}, opacity ${p=>p.theme.timing}, box-shadow ${p=>p.theme.timing};

  &:focus-visible { box-shadow: 0 0 0 3px ${p=>p.theme.colors.ring}; }
  &:disabled { opacity: .6; cursor: not-allowed; }

  ${p => p.$variant === "solid" && `
    background: ${p.theme.colors.accent}; color: ${p.theme.colors.accentFg};
    &:hover { transform: translateY(-1px); box-shadow: ${p.theme.shadow}; }
  `}
  ${p => p.$variant === "outline" && `
    background: transparent; color: ${p.theme.colors.accent}; border-color: ${p.theme.colors.accent};
    &:hover { background: color-mix(in oklab, ${p.theme.colors.accent} 12%, transparent); }
  `}
  ${p => p.$variant === "ghost" && `
    background: transparent; color: ${p.theme.colors.fg};
    &:hover { background: rgba(127,127,127,.08); }
  `}
`;

export function Button(
  { children, variant = "solid", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
) {
  return <Base $variant={variant} {...props}>{children}</Base>;
}
