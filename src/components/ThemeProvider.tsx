"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // The inline script in <head> has already set data-theme before paint —
  // sync React's state to it so the toggle starts from the right value.
  useEffect(() => {
    const applied = document.documentElement.getAttribute(
      "data-theme",
    ) as Theme | null;
    if (applied === "dark" || applied === "light") setTheme(applied);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Enable colour transitions only while the theme is actually changing.
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);

    setTheme(next);
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — the theme still applies for this visit.
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
