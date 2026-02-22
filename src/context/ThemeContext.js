import { createContext, useState, useEffect } from "react";
import { THEMES } from "../config/themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.editorialLuxury);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--bg", theme.background);
    root.style.setProperty("--section", theme.section);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--border", theme.border);
    root.style.setProperty("--radius", theme.radius);
    root.style.setProperty("--shadow", theme.shadow);
    root.style.setProperty("--font-heading", theme.fontHeading);
    root.style.setProperty("--font-body", theme.fontBody);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};