import type { i18n as I18nInstance } from "i18next";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { AuthenticationStatus } from "../hooks/useAuthenticationFlow";
import { useTheme } from "../hooks/useTheme.tsx";
import OnboardingHeader from "./onboarding/OnboardingHeader";
import OnboardingNavigation from "./onboarding/OnboardingNavigation";
import OnboardingProgress from "./onboarding/OnboardingProgress";
import OnboardingStep from "./onboarding/OnboardingStep";

interface OnboardingFlowProps {
  onComplete: () => void;
  i18n?: I18nInstance;
  keyStatus?: string;
  powStatus?: string;
  authStatus: AuthenticationStatus;
}

interface OnboardingStepData {
  id: number;
  title: string;
  icon: React.ReactNode;
  action?: () => void;
  status: "pending" | "active" | "completed";
  type: "welcome" | "feature" | "permission" | "ready";
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const completeStep = useCallback(
    (stepId: number) => {
      setIsTransitioning(true);
      setCompletedSteps((prev) => [...prev, stepId]);

      setTimeout(() => {
        if (stepId === 1) {
          localStorage.setItem("eventApp_onboarding_completed", "true");
          setTimeout(() => {
            onComplete();
          }, 300);
        }
      }, 200);
    },
    [onComplete],
  );

  const steps: OnboardingStepData[] = useMemo(
    () => [
      {
        id: 1,
        title: t("onboarding.permissions.title", "Camera Access"),
        icon: (
          <img
            src="/camera.png"
            alt="Camera"
            className="w-64 h-64 object-contain"
          />
        ),
        type: "permission",
        action: () => {
          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(() => completeStep(1))
            .catch(() => completeStep(1));
        },
        status: "active",
      },
    ],
    [t, completeStep],
  );

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    const currentStepData = steps[currentStep];
    if (currentStepData.action) {
      currentStepData.action();
    } else {
      completeStep(currentStepData.id);
    }
  }, [currentStep, steps, completeStep, isTransitioning]);

  useEffect(() => {
    if (currentStep >= steps.length) {
      setCurrentStep(steps.length - 1);
    }
  }, [currentStep, steps.length]);

  const currentStepData = steps[currentStep] || steps[steps.length - 1];

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <OnboardingHeader />
      <div className="w-full max-w-lg">
        <div
          className={`rounded-2xl shadow-xl p-10 transition-all duration-300 ease-in-out ${
            isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
          } ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        >
          <OnboardingStep step={currentStepData} isDark={isDark} />
          <OnboardingNavigation
            currentStep={currentStep}
            stepsLength={steps.length}
            isDark={isDark}
            handleNext={handleNext}
            handleFinish={() => completeStep(1)}
          />
          {currentStepData.type === "permission" && (
            <button
              onClick={() => completeStep(currentStepData.id)}
              disabled={isTransitioning}
              className={`w-full text-center mt-6 text-sm transition-colors duration-200 disabled:opacity-50 ${
                isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("onboarding.skip", "Skip for now")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
