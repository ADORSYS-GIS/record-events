import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

interface DashboardHeaderProps {
  isDark: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isDark }) => {
  const { t } = useTranslation();

  return (
    <header
      className={`transition-all duration-300 ${
        isDark
          ? "bg-gray-800/80 backdrop-blur-sm shadow-sm border-b border-gray-700"
          : "bg-gradient-to-r from-cameroon-green via-cameroon-red to-cameroon-yellow"
      } sticky top-0 z-40`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src="/elecamair.jpeg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1
              className={`hidden sm:block text-base sm:text-lg font-semibold transition-colors duration-300 ${
                isDark ? "text-white" : "text-white"
              }`}
            >
              {t("appTitle")}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
