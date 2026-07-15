import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-11 w-20 items-center rounded-full border border-default bg-card p-1 transition-all duration-300"
    >
      {/* Slider */}

      <div
        className={`absolute h-8 w-8 rounded-full bg-primary shadow-md transition-all duration-300 ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      />

      {/* Icons */}

      <div className="relative z-10 flex w-full justify-between px-1">
        <Sun
          size={16}
          className={theme === "light" ? "text-white" : "text-muted"}
        />

        <Moon
          size={16}
          className={theme === "dark" ? "text-white" : "text-muted"}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
