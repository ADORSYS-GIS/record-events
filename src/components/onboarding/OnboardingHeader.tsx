import React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.tsx";

const OnboardingHeader: React.FC = () => {
  const { theme, changeTheme, isDark } = useTheme();

  return (
    <header className="absolute top-0 right-0 p-6 z-10">
      <div
        className={`flex items-center space-x-1 rounded-xl p-1 shadow-lg transition-all duration-300 ${
          isDark
            ? "bg-gray-800/80 backdrop-blur-sm border border-gray-700"
            : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
        }`}
      >
        <button
          onClick={() => changeTheme("light")}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === "light"
              ? "bg-cameroon-yellow text-black shadow-md"
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => changeTheme("system")}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === "system"
              ? "bg-cameroon-yellow text-black shadow-md"
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
        >
          <Monitor className="w-4 h-4" />
        </button>
        <button
          onClick={() => changeTheme("dark")}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === "dark"
              ? "bg-cameroon-yellow text-black shadow-md"
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default OnboardingHeader;
