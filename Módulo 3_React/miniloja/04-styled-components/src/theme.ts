export const light = {
  colors: {
    bg: "#ffffff", fg: "#0f172a", muted: "#475569", card: "#f8fafc", border: "#e2e8f0",
    accent: "#2563eb", accentFg: "#ffffff", ring: "#7c3aed",
  },
  radii: { card: "12px", pill: "999px" },
  shadow: "0 4px 16px rgba(2,6,23,0.08)",
  shadowDark: "0 6px 20px rgba(0,0,0,0.45)",
  timing: "180ms ease",
} as const;

export const dark: typeof light = {
  ...light,
  colors: {
    bg: "#0b1020", fg: "#e5e7eb", muted: "#a1a1aa", card: "#0f172a", border: "#1f2937",
    accent: "#60a5fa", accentFg: "#0b1020", ring: "#a78bfa",
  },
};
export type AppTheme = typeof light;

