import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface OnboardingNavigationProps {
  currentStep: number;
  stepsLength: number;
  isDark: boolean;
  handleNext: () => void;
  handleFinish: () => void;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  stepsLength,
  isDark,
  handleNext,
  handleFinish,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between pt-8">
      <div></div>
      {currentStep < stepsLength - 1 ? (
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow shadow-lg transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow transform hover:scale-[1.02]"
        >
          <span>{t("onboarding.buttons.next")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={handleFinish}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow shadow-lg transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow transform hover:scale-[1.02]"
        >
          <span>{t("onboarding.buttons.finish")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default OnboardingNavigation;
