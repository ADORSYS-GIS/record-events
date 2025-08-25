import React, { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Shield,
  Camera,
  Key,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Lock,
  Zap,
} from "lucide-react";
import type { i18n as I18nInstance } from "i18next";
import { useTheme } from "../hooks/useTheme";

interface OnboardingFlowProps {
  onComplete: () => void;
  i18n: I18nInstance;
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
  i18n,
  keyStatus,
  isKeyGenerating,
}) => {
  const { t } = useTranslation();
  const { theme, changeTheme, isDark } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [securityStepCompleted, setSecurityStepCompleted] = useState(false);

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
        completeStep(4); // Complete the key generation step (new ID 4)
      }, 1500);
    } else if (currentStep === 4 && securityStepCompleted) {
      // After key generation is completed
      setTimeout(() => {
        completeStep(5); // Complete the "You're Ready!" step (new ID 5)
      }, 1500);
    }
  }, [currentStep, isKeyGenerating, keyStatus]);

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: t("onboarding.welcome.title", "Welcome to EventApp"),
      description: t(
        "onboarding.welcome.description",
        "Your secure platform for reporting events with blockchain verification",
      ),
      icon: <Sparkles className="w-20 h-20 text-primary-500" />,
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
      title: t("onboarding.features.secure.title", "Secure & Private"),
      description: t(
        "onboarding.features.secure.description",
        "Your data is encrypted and verified on the blockchain for maximum security",
      ),
      icon: <Lock className="w-20 h-20 text-primary-500" />,
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
      icon: <Camera className="w-20 h-20 text-primary-500" />,
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
      icon: <Key className="w-20 h-20 text-primary-500" />,
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
      icon: <CheckCircle className="w-20 h-20 text-success-500" />,
      type: "ready",
      status:
        currentStep === 4
          ? "active"
          : completedSteps.includes(5)
            ? "completed"
            : "pending",
    },
  ];

  const completeStep = useCallback(
    (stepId: number) => {
      setCompletedSteps((prev) => [...prev, stepId]);
      if (stepId === 5) {
        // This is the final "You're Ready!" step
        // Store onboarding completion in localStorage
        localStorage.setItem("eventApp_onboarding_completed", "true");
        setTimeout(() => {
          onComplete();
        }, 1000);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [onComplete],
  );

  const handleNext = useCallback(() => {
    const currentStepData = steps[currentStep];
    if (currentStepData.action) {
      currentStepData.action();
    } else {
      // Add a smooth transition effect
      const contentElement = document.querySelector(".onboarding-content");
      if (contentElement) {
        contentElement.classList.add("animate-fade-out");
        setTimeout(() => {
          completeStep(currentStepData.id);
          contentElement.classList.remove("animate-fade-out");
        }, 300);
      } else {
        completeStep(currentStepData.id);
      }
    }
  }, [currentStep, steps, completeStep]);

  const currentStepData = steps[currentStep];

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ease-in-out ${
        isDark
          ? "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          : "bg-gradient-to-br from-primary-50 via-white to-primary-50"
      }`}
    >
      <div className="w-full max-w-lg">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white dark:bg-neutral-800 rounded-xl p-1 shadow-medium">
            <button
              onClick={() => changeTheme("light")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "light"
                  ? "bg-primary-500 text-white shadow-medium"
                  : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("system")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "system"
                  ? "bg-primary-500 text-white shadow-medium"
                  : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "bg-primary-500 text-white shadow-medium"
                  : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform
                  ${
                    step.status === "completed"
                      ? "bg-success-500 text-white shadow-lg scale-110"
                      : step.status === "active"
                        ? "bg-primary-500 text-white shadow-xl scale-125 ring-4 ring-primary-200 dark:ring-primary-800"
                        : "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                  }
                `}
                >
                  {step.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span className="text-sm sm:text-base font-semibold">
                      {step.id}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                    w-10 sm:w-16 h-1 mt-3 transition-all duration-700 ease-in-out
                    ${step.status === "completed" ? "bg-gradient-to-r from-success-500 to-primary-500" : "bg-neutral-200 dark:bg-neutral-700"}
                  `}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 h-3 rounded-full transition-all duration-700 ease-in-out shadow-inner"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div
          className={`onboarding-content rounded-3xl shadow-xl p-10 sm:p-16 animate-fade-in transition-all duration-700 ease-in-out transform ${
            isDark ? "bg-neutral-800 border border-neutral-700" : "bg-white"
          }`}
        >
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center animate-bounce-gentle">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                {currentStepData.icon}
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight animate-slide-up">
              {currentStepData.title}
            </h2>
            <p
              className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg sm:text-xl max-w-lg mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {currentStepData.description}
            </p>
          </div>

          {/* Step-specific content */}
          {currentStepData.type === "welcome" && (
            <div className="space-y-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-200 dark:border-primary-700">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                      {t("onboarding.features.security", "Secure & Private")}
                    </h3>
                    <p className="text-sm text-primary-700 dark:text-primary-300">
                      {t(
                        "onboarding.features.securityDesc",
                        "Your data is encrypted and verified on the blockchain",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-12">
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xl py-6 px-10 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 flex items-center justify-center space-x-4 animate-scale-in"
            >
              {currentStepData.type === "ready" ? (
                <>
                  <span>{t("onboarding.getStarted", "Get Started")}</span>
                  <ArrowRight className="w-7 h-7" />
                </>
              ) : (
                <>
                  <span>{t("onboarding.continue", "Continue")}</span>
                  <ArrowRight className="w-7 h-7" />
                </>
              )}
            </button>
          </div>

          {/* Skip option for permission step */}
          {currentStepData.type === "permission" && (
            <button
              onClick={() => completeStep(currentStepData.id)}
              className="w-full text-center text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 mt-4 text-sm transition-colors duration-200"
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
