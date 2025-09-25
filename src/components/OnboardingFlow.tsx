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
        if (stepId === 4) {
          localStorage.setItem("eventApp_onboarding_completed", "true");
          setTimeout(() => {
            onComplete();
          }, 300);
        } else {
          setCurrentStep((prev) => Math.min(prev + 1, 3));
          setIsTransitioning(false);
        }
      }, 200);
    },
    [onComplete],
  );

  const steps: OnboardingStepData[] = useMemo(
    () => [
      {
        id: 1,
        title: t("onboarding.welcome.title", "Cameroon Vote Reporting"),
        icon: (
          <img
            src="/reporting.png"
            alt="Reporting"
            className="w-64 h-64 object-contain"
          />
        ),
        type: "welcome",
        status:
          currentStep === 0
            ? "active"
            : completedSteps.includes(1)
              ? "completed"
              : "pending",
      },
      {
        id: 2,
        title: t("onboarding.features.secure.title", "Secure Reporting"),
        icon: (
          <img
            src="/secure.png"
            alt="Secure"
            className="w-64 h-64 object-contain"
          />
        ),
        type: "feature",
        status:
          currentStep === 1
            ? "active"
            : completedSteps.includes(2)
              ? "completed"
              : "pending",
      },
      {
        id: 3,
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
            .then(() => completeStep(3))
            .catch(() => completeStep(3));
        },
        status:
          currentStep === 2
            ? "active"
            : completedSteps.includes(3)
              ? "completed"
              : "pending",
      },
      {
        id: 4,
        title: t("onboarding.ready.title", "You're All Set!"),
        icon: (
          <img
            src="/letsgo.png"
            alt="Ready"
            className="w-64 h-64 object-contain"
          />
        ),
        type: "ready",
        status:
          currentStep === 3
            ? "active"
            : completedSteps.includes(4)
              ? "completed"
              : "pending",
      },
    ],
    [t, currentStep, completedSteps, completeStep],
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

  const handlePrev = useCallback(() => {
    if (isTransitioning || currentStep === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setIsTransitioning(false);
    }, 200);
  }, [currentStep, isTransitioning]);

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
        <OnboardingProgress
          steps={steps}
          currentStep={currentStep}
          isDark={isDark}
        />
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
            handlePrev={handlePrev}
            handleFinish={() => completeStep(4)}
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
