import type { i18n as I18nInstance } from "i18next";
import type { FC } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-soft p-8 sm:p-12 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center mb-12">
            {/* Logo/Icon */}
            <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-large">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {t("welcomeTitle")}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-md mx-auto">
              {t("welcomeDescription")}
            </p>
          </div>

          {/* Language Selection */}
          <div className="mb-10">
            <h3 className="text-base font-semibold text-neutral-800 mb-6 text-center">
              {t("welcome.selectLanguage", "Select your language")}
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                  i18n.language === "en"
                    ? "bg-primary-500 text-white shadow-medium transform scale-105"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105 border border-neutral-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                  i18n.language === "fr"
                    ? "bg-primary-500 text-white shadow-medium transform scale-105"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105 border border-neutral-200"
                }`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">
                    {t("welcome.features.secure", "Secure & Private")}
                  </h4>
                  <p className="text-primary-700 leading-relaxed">
                    {t(
                      "welcome.features.secureDesc",
                      "Your data is encrypted and blockchain verified for maximum security",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-success-50 to-success-100 rounded-2xl p-6 border border-success-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-success-900 mb-2">
                    {t("welcome.features.easy", "Easy to Use")}
                  </h4>
                  <p className="text-success-700 leading-relaxed">
                    {t(
                      "welcome.features.easyDesc",
                      "Simple and intuitive interface for quick event reporting",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="text-center">
            <button
              onClick={onGetStarted}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg py-5 px-8 rounded-2xl shadow-large transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 flex items-center justify-center space-x-3"
            >
              <span>{t("getStartedButton")}</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <p className="text-center text-neutral-500 text-sm mt-6">
              {t("welcomeMoreInfo")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WelcomeScreen);
