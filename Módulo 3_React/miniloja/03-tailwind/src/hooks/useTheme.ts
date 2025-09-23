import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "mini-loja-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved) return saved;
    // preferência do SO (fallback)
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
  });

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}, [theme]);


  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return { theme, toggle };
}
