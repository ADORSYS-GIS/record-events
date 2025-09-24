import type { i18n as I18nInstance } from "i18next";
import type { FC } from "react";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import OnboardingHeader from "./onboarding/OnboardingHeader";
import WelcomeActions from "./welcome/WelcomeActions";
import WelcomeFeatures from "./welcome/WelcomeFeatures";
import WelcomeHeader from "./welcome/WelcomeHeader";

interface WelcomeScreenProps {
  onGetStarted: () => void;
  i18n: I18nInstance;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({ onGetStarted, i18n }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="w-full max-w-2xl mx-auto">
        <OnboardingHeader />
        <div
          className={`rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 transition-all duration-300 ${
            isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
        >
          <WelcomeHeader isDark={isDark} i18n={i18n} />
          <WelcomeFeatures isDark={isDark} />
          <WelcomeActions
            isDark={isDark}
            onGetStarted={onGetStarted}
            i18n={i18n}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(WelcomeScreen);
