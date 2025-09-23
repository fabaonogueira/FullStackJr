import styled from "styled-components";
import { Button } from "./Button";
import { useTheme } from "../hooks/useTheme";
import React from "react";

const Bar = styled.nav`
  position: sticky; top: 0; z-index: 50;
  background: ${p=>p.theme.colors.bg};
  border-bottom: 1px solid ${p=>p.theme.colors.border};
  backdrop-filter: saturate(180%) blur(6px);
`;
const Row = styled.div`
  display:flex; align-items:center; gap:16px; padding:12px 16px;
  max-width:1200px; margin:0 auto;
`;
const Logo = styled.span`
  font-weight:700; letter-spacing:.2px; color:${p=>p.theme.colors.fg};
`;
const Badge = styled.span`
  display:inline-flex; align-items:center; justify-content:center;
  min-width:28px; height:28px; padding:0 8px; border-radius:999px;
  background:${p=>p.theme.colors.accent}; color:${p=>p.theme.colors.accentFg};
  font-size:12px; font-weight:700;
`;

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <Bar role="navigation" aria-label="Navbar fixa">
      <Row>
        <Logo aria-label="Mini Loja">🛍️ Mini Loja</Logo>
        <div style={{ flex: 1 }} />
        <Button variant="ghost" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Alternar tema">
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
        <Badge aria-label="Itens no carrinho">3</Badge>
      </Row>
    </Bar>
  );
}
