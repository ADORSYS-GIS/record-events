import type { i18n as I18nInstance } from "i18next";
import type { FC } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Users, ArrowRight, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface WelcomeScreenProps {
  onGetStarted: () => void;
  i18n: I18nInstance;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({ onGetStarted, i18n }) => {
  const { t } = useTranslation();
  const { theme, changeTheme, isDark } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
      isDark
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
    }`}>
      <div className="w-full max-w-lg">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center space-x-1 rounded-xl p-1 shadow-lg ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}>
            <button
              onClick={() => changeTheme("light")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "light"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("system")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "system"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`rounded-2xl shadow-xl p-10 transition-all duration-300 ${
          isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
        }`}>
          {/* Hero Section */}
          <div className="text-center mb-10">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className={`p-6 rounded-2xl w-24 h-24 flex items-center justify-center ${
                isDark ? "bg-blue-900/20" : "bg-blue-50"
              }`}>
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-3xl font-bold mb-6 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              {t("welcomeTitle", "Welcome to EventApp")}
            </h1>

            {/* Subtitle */}
            <p className={`leading-relaxed mb-10 text-lg max-w-md mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {t("welcomeDescription", "Your secure platform for reporting events with blockchain verification")}
            </p>
          </div>

          {/* Language Selection */}
          <div className="mb-10">
            <h3 className={`text-base font-medium mb-6 text-center ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              {t("welcome.selectLanguage", "Select your language")}
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  i18n.language === "en"
                    ? "bg-blue-600 text-white shadow-md"
                    : isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  i18n.language === "fr"
                    ? "bg-blue-600 text-white shadow-md"
                    : isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6 mb-10">
            <div className={`rounded-xl p-6 ${
              isDark ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50"
            }`}>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? "text-blue-200" : "text-blue-900"
                  }`}>
                    {t("welcome.features.secure", "Secure & Private")}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? "text-blue-300" : "text-blue-700"
                  }`}>
                    {t(
                      "welcome.features.secureDesc",
                      "Your data is encrypted and blockchain verified",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 ${
              isDark ? "bg-green-900/20 border border-green-800" : "bg-green-50"
            }`}>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? "text-green-200" : "text-green-900"
                  }`}>
                    {t("welcome.features.easy", "Easy to Use")}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? "text-green-300" : "text-green-700"
                  }`}>
                    {t(
                      "welcome.features.easyDesc",
                      "Simple and intuitive interface for quick reporting",
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">{t("getStartedButton", "Get Started")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className={`text-center text-sm mt-6 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}>
              {t("welcomeMoreInfo", "By continuing, you agree to our terms of service")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WelcomeScreen);
