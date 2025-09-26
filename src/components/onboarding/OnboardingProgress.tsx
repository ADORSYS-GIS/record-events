import React from "react";

interface OnboardingProgressProps {
  steps: unknown[];
  currentStep: number;
  isDark: boolean;
}

const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  steps,
  currentStep,
  isDark,
}) => {
  const colors = [
    "bg-cameroon-green",
    "bg-cameroon-red",
    "bg-cameroon-yellow",
    "bg-cameroon-green",
  ];

  return (
    <div className="flex justify-center space-x-2 mb-12">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`w-10 h-2 rounded-full transition-all duration-300 ${
            currentStep >= index
              ? colors[index]
              : isDark
                ? "bg-gray-700"
                : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default OnboardingProgress;
