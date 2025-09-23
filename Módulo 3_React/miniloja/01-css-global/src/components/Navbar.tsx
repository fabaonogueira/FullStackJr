import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import React from "react";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar" role="navigation" aria-label="Navbar fixa">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span className="logo" aria-label="Mini Loja">🛍️ Mini Loja</span>
        <div className="nav-spacer" />
        <Button variant="ghost" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Alternar tema">
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
        <span className="cart-badge" aria-label="Itens no carrinho">3</span>
      </div>
    </nav>
  );
}
