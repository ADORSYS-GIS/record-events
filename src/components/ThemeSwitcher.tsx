import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const themeIcons = {
    light: <Sun className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 rounded-lg bg-white/30 text-white hover:bg-white/40 transition-all duration-200"
        aria-label={t("themeSwitcher.toggle")}
      >
        {themeIcons[theme]}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <button
            onClick={() => handleThemeChange("light")}
            className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center space-x-2 transition-colors duration-200 ${
              theme === "light"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>{t("themeSwitcher.light")}</span>
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center space-x-2 transition-colors duration-200 ${
              theme === "dark"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>{t("themeSwitcher.dark")}</span>
          </button>
          <button
            onClick={() => handleThemeChange("system")}
            className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center space-x-2 transition-colors duration-200 ${
              theme === "system"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>{t("themeSwitcher.system")}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
