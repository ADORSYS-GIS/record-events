import React from "react";
import { useTranslation } from "react-i18next";
import type { i18n as I18nInstance } from "i18next";
import CameroonFlag from "../CameroonFlag";

interface WelcomeHeaderProps {
  isDark: boolean;
  i18n: I18nInstance;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ isDark, i18n }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center mb-4">
      <div className="flex justify-center mb-2">
        <div
          className={`rounded-2xl flex items-center justify-center p-4 bg-transparent`}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src="/elecamair.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h1
        className={`text-lg sm:text-xl md:text-4xl font-bold mb-2 leading-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {t(
          "welcomeTitle",
          "Cameroon Elections \n Secure Vote Reporting System",
        )}
      </h1>
      <p
        className={`text-sm sm:text-base leading-relaxed mb-4 max-w-md mx-auto ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {t(
          "welcomeDescription",
          "Ensuring transparency and integrity in the electoral process through secure, decentralized event reporting.",
        )}
      </p>
      <div className="mb-4">
        <h3
          className={`text-sm sm:text-base font-medium mb-4 text-center ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("welcome.selectLanguage", "Select your language")}
        </h3>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          <button
            onClick={() => changeLanguage("en")}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
              i18n.language === "en"
                ? "bg-cameroon-green text-white shadow-md"
                : isDark
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
              i18n.language === "fr"
                ? "bg-cameroon-green text-white shadow-md"
                : isDark
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
