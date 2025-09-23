import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import React from "react";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] backdrop-saturate-150 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-4">
        <span className="font-bold tracking-tight text-[var(--fg)]">🛍️ Mini Loja</span>
        <div className="flex-1" />
        <Button variant="ghost" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Alternar tema">
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
        <span className="inline-flex items-center justify-center min-w-7 h-7 px-2 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-xs font-bold" aria-label="Itens no carrinho">3</span>
      </div>
    </nav>
  );
}
