import React from "react";
import s from "./Navbar.module.css";
import app from "../app.module.css";
import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className={s.bar} role="navigation" aria-label="Navbar fixa">
      <div className={`${app.container} ${s.row}`}>
        <span className={s.logo} aria-label="Mini Loja">🛍️ Mini Loja</span>
        <div className={s.spacer} />
        <Button variant="ghost" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Alternar tema">
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
        <span className={s.badge} aria-label="Itens no carrinho">3</span>
      </div>
    </nav>
  );
}


