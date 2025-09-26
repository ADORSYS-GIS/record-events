import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import type { i18n as I18nInstance } from "i18next";

interface WelcomeActionsProps {
  isDark: boolean;
  onGetStarted: () => void;
  i18n: I18nInstance;
}

const WelcomeActions: React.FC<WelcomeActionsProps> = ({
  isDark,
  onGetStarted,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-center">
        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow text-white font-medium py-3 sm:py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl"
        >
          <span className="text-base sm:text-lg">
            {t("getStartedButton", "Get Started")}
          </span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <p
          className={`text-center text-xs sm:text-sm mt-2 sm:mt-4 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {t(
            "welcomeMoreInfo",
            "Your participation helps ensure a fair and transparent election for all.",
          )}
        </p>
      </div>
    </>
  );
};

export default WelcomeActions;
