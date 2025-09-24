import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface OnboardingNavigationProps {
  currentStep: number;
  stepsLength: number;
  isDark: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handleFinish: () => void;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  stepsLength,
  isDark,
  handleNext,
  handlePrev,
  handleFinish,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between pt-8">
      <button
        onClick={handlePrev}
        disabled={currentStep === 0}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDark
            ? "focus:ring-offset-gray-900 focus:ring-cameroon-yellow"
            : "focus:ring-offset-white focus:ring-cameroon-green"
        } ${
          currentStep === 0
            ? "opacity-50 cursor-not-allowed"
            : isDark
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{t("onboarding.buttons.back", "Back")}</span>
      </button>
      {currentStep < stepsLength - 1 ? (
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow shadow-lg transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow transform hover:scale-[1.02]"
        >
          <span>{t("onboarding.buttons.next", "Next")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={handleFinish}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow shadow-lg transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow transform hover:scale-[1.02]"
        >
          <span>{t("onboarding.buttons.finish", "Finish Setup")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default OnboardingNavigation;
