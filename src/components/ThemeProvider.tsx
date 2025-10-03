"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Primeiro useEffect: determinar tema inicial
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || "light";
    
    let resolved: "light" | "dark";
    if (initialTheme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      resolved = initialTheme;
    }
    
    setTheme(initialTheme);
    setResolvedTheme(resolved);
    setMounted(true);
    
    // Aplicar imediatamente no DOM
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
  }, []);

  // Segundo useEffect: reagir a mudanças de tema
  useEffect(() => {
    if (!mounted) return;

    let resolved: "light" | "dark";
    
    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const newResolved = mediaQuery.matches ? "dark" : "light";
        setResolvedTheme(newResolved);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newResolved);
      };
      
      mediaQuery.addEventListener("change", handleChange);
      setResolvedTheme(resolved);
      
      // Cleanup
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      resolved = theme;
      setResolvedTheme(resolved);
    }

    // Aplicar no DOM
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
    
    // Salvar preferência
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}