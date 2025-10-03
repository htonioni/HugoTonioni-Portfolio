"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themes = [
    {
      value: "light" as const,
      label: "Light",
      icon: IoMdSunny,
    },
    {
      value: "dark" as const,
      label: "Dark", 
      icon: IoMdMoon,
    },
  ];

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        const isActive = theme === themeOption.value || (theme === "system" && resolvedTheme === themeOption.value);
        
        return (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`
              relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200
              ${isActive 
                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white" 
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            `}
            aria-label={`Switch to ${themeOption.label} theme`}
            title={`${themeOption.label} theme`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
};

// Componente mais simples - só toggle entre light/dark
export const SimpleThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <>
          <IoMdSunny size={20} />
          <span className="text-sm font-medium">Light</span>
        </>
      ) : (
        <>
          <IoMdMoon size={20} />
          <span className="text-sm font-medium">Dark</span>
        </>
      )}
    </button>
  );
};