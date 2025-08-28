import type { i18n as I18nInstance } from "i18next";
import {
  ArrowRight,
  ArrowLeft,
  Camera,
  CheckCircle,
  Key,
  Lock,
  Monitor,
  Moon,
  Shield,
  Sparkles,
  Sun,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";

interface OnboardingFlowProps {
  onComplete: () => void;
  i18n?: I18nInstance;
  keyStatus?: string;
  isKeyGenerating?: boolean;
}

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: () => void;
  status: "pending" | "active" | "completed";
  type: "welcome" | "feature" | "permission" | "security" | "ready";
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onComplete,
  keyStatus,
  isKeyGenerating,
}) => {
  const { t } = useTranslation();
  const { theme, changeTheme, isDark } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [securityStepCompleted, setSecurityStepCompleted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Monitor key generation status
  const steps: OnboardingStep[] = useMemo(
    () => [
      {
        id: 1,
        title: t("onboarding.welcome.title", "Welcome to EventApp"),
        description: t(
          "onboarding.welcome.description",
          "Your secure platform for reporting events with blockchain verification",
        ),
        icon: <Sparkles className="w-12 h-12 text-blue-600" />,
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
        title: t("onboarding.features.secure.title", "Bank-Grade Security"),
        description: t(
          "onboarding.features.secure.description",
          "Your data is encrypted and verified on the blockchain for maximum security",
        ),
        icon: <Shield className="w-12 h-12 text-blue-600" />,
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
        description: t(
          "onboarding.permissions.description",
          "Allow camera access to capture event photos",
        ),
        icon: <Camera className="w-12 h-12 text-blue-600" />,
        type: "permission",
        action: () => {
          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(() => {
              completeStep(3);
            })
            .catch(() => {
              completeStep(3);
            });
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
        title: t("onboarding.security.title", "Generating Secure Keys"),
        description: t(
          "onboarding.security.description",
          "Creating your unique cryptographic key pair for secure event reporting. This may take a moment.",
        ),
        icon: <Key className="w-12 h-12 text-blue-600" />,
        type: "security",
        status:
          currentStep === 3
            ? "active"
            : completedSteps.includes(4)
              ? "completed"
              : "pending",
      },
      {
        id: 5,
        title: t("onboarding.ready.title", "You're Ready!"),
        description: t(
          "onboarding.ready.description",
          "Start reporting events securely",
        ),
        icon: <CheckCircle className="w-12 h-12 text-green-600" />,
        type: "ready",
        status:
          currentStep === 4
            ? "active"
            : completedSteps.includes(5)
              ? "completed"
              : "pending",
      },
    ],
    [t, currentStep, completedSteps],
  );

  const completeStep = useCallback(
    (stepId: number) => {
      setIsTransitioning(true);
      setCompletedSteps((prev) => [...prev, stepId]);

      setTimeout(() => {
        if (stepId === 5) {
          // This is the final "You're Ready!" step
          // Store onboarding completion in localStorage
          localStorage.setItem("eventApp_onboarding_completed", "true");
          setTimeout(() => {
            onComplete();
          }, 300);
        } else {
          setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
          setIsTransitioning(false);
        }
      }, 200);
    },
    [onComplete, steps.length],
  );

  // Monitor key generation status
  useEffect(() => {
    if (
      currentStep === 3 &&
      !isKeyGenerating &&
      keyStatus &&
      keyStatus.includes("successfully")
    ) {
      setSecurityStepCompleted(true);
      setTimeout(() => {
        completeStep(4);
      }, 800);
    } else if (currentStep === 4 && securityStepCompleted) {
      setTimeout(() => {
        completeStep(5);
      }, 800);
    }
  }, [
    currentStep,
    isKeyGenerating,
    keyStatus,
    securityStepCompleted,
    completeStep,
  ]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    const currentStepData = steps[currentStep];
    if (currentStepData.action) {
      currentStepData.action();
    } else {
      completeStep(currentStepData.id);
    }
  }, [currentStep, steps, completeStep, isTransitioning]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning || currentStep === 0) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setIsTransitioning(false);
    }, 200);
  }, [currentStep, isTransitioning]);

  const currentStepData = steps[currentStep] || steps[steps.length - 1];

  // Ensure currentStep never goes beyond the steps array
  useEffect(() => {
    if (currentStep >= steps.length) {
      setCurrentStep(steps.length - 1);
    }
  }, [currentStep, steps.length]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="w-full max-w-lg">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <div
            className={`flex items-center space-x-1 rounded-xl p-1 shadow-lg ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
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

        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex justify-center space-x-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                  step.status === "completed" || step.status === "active"
                    ? "bg-blue-600 scale-110"
                    : isDark
                      ? "bg-gray-600"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <div
          className={`rounded-2xl shadow-xl p-10 transition-all duration-300 ease-in-out ${
            isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
          } ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className={`p-6 rounded-2xl w-24 h-24 flex items-center justify-center ${
                isDark ? "bg-blue-900/20" : "bg-blue-50"
              }`}
            >
              {currentStepData.icon}
            </div>
          </div>

          {/* Title */}
          <h2
            className={`text-3xl font-bold text-center mb-6 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {currentStepData.title}
          </h2>

          {/* Description */}
          <p
            className={`text-center mb-10 leading-relaxed text-lg max-w-md mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currentStepData.description}
          </p>

          {/* Step-specific content */}
          {currentStepData.type === "welcome" && (
            <div
              className={`rounded-xl p-6 mb-8 max-w-md mx-auto ${
                isDark ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50"
              }`}
            >
              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3
                    className={`font-semibold mb-2 ${
                      isDark ? "text-blue-200" : "text-blue-900"
                    }`}
                  >
                    {t("onboarding.features.security", "Secure & Private")}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-blue-300" : "text-blue-700"
                    }`}
                  >
                    {t(
                      "onboarding.features.securityDesc",
                      "Your data is encrypted and verified on the blockchain",
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isTransitioning}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentStep === 0 || isTransitioning
                  ? "text-gray-400 cursor-not-allowed"
                  : isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <span>
                {currentStepData.type === "ready"
                  ? t("onboarding.getStarted", "Finish")
                  : t("onboarding.continue", "Next")}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Skip option for permission step */}
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
