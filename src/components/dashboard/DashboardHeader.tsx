import React from "react";
import { useTranslation } from "react-i18next";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.tsx";
import LanguageSwitcher from "../LanguageSwitcher";
import ConnectionStatus from "../ConnectionStatus";

interface DashboardHeaderProps {
  isDark: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isDark }) => {
  const { t } = useTranslation();
  const { theme, changeTheme } = useTheme();

  return (
    <header
      className={`transition-all duration-300 ${
        isDark
          ? "bg-gray-800/80 backdrop-blur-sm shadow-sm border-b border-gray-700"
          : "bg-gradient-to-r from-cameroon-green via-cameroon-red to-cameroon-yellow"
      } sticky top-0 z-40`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">🇨🇲</span>
            </div>
            <div>
              <h1
                className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                  isDark ? "text-white" : "text-white"
                }`}
              >
                {t("appTitle")}
              </h1>
              <p
                className={`text-xs sm:text-sm transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-200"
                }`}
              >
                {t("dashboard.subtitle")}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* <ConnectionStatus
              className={`transition-colors duration-300 text-xs sm:text-sm ${
                isDark ? "text-gray-300" : "text-gray-200"
              }`}
            /> */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <div
              className={`hidden sm:flex items-center space-x-1 rounded-xl p-1 shadow-lg transition-all duration-300 ${
                isDark ? "bg-gray-700" : "bg-white/30"
              }`}
            >
              <button
                onClick={() => changeTheme("light")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  theme === "light"
                    ? "bg-cameroon-yellow text-black shadow-md"
                    : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-white hover:text-gray-200"
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => changeTheme("system")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  theme === "system"
                    ? "bg-cameroon-yellow text-black shadow-md"
                    : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-white hover:text-gray-200"
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => changeTheme("dark")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-cameroon-yellow text-black shadow-md"
                    : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-white hover:text-gray-200"
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
