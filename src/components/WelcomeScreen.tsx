import React from "react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { i18n as I18nInstance } from "i18next";

interface WelcomeScreenProps {
  onGetStarted: () => void;
  i18n: I18nInstance;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({ onGetStarted, i18n }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {t("welcomeTitle")}
      </h2>
      <p className="text-gray-600 mb-8">{t("welcomeDescription")}</p>

      <div className="flex justify-center space-x-2 mb-8">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            i18n.language === "en"
              ? "bg-primary-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            i18n.language === "fr"
              ? "bg-primary-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Français
        </button>
      </div>

      <p className="text-gray-700 text-sm mb-6">{t("welcomeMoreInfo")}</p>

      <button
        onClick={onGetStarted}
        className="bg-primary-500 hover:bg-primary-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75"
      >
        {t("getStartedButton")}
      </button>
    </div>
  );
};

export default React.memo(WelcomeScreen);
