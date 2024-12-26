"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-1 pb-1">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-full flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded"
      >
        <div className="min-w-[20px] flex justify-center">
          <Sun className="w-5 h-5 dark:hidden" />
          <Moon className="w-5 h-5 hidden dark:block" />
        </div>
        <span className="ml-3 whitespace-nowrap overflow-hidden">
          Toggle theme
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
