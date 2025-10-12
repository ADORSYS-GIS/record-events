import React from "react";
import { useTranslation } from "react-i18next";
import { Camera, CheckCircle, Lock, Shield } from "lucide-react";

interface OnboardingStepProps {
  step: {
    id: number;
    title: string;
    icon: React.ReactNode;
    type: "welcome" | "feature" | "permission" | "ready";
  };
  isDark: boolean;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({ step, isDark }) => {
  const { t } = useTranslation();

  const renderStepContent = () => {
    switch (step.type) {
      case "welcome":
        return (
          <div
            className={`rounded-xl p-4 mb-6 max-w-md mx-auto ${
              isDark
                ? "bg-cameroon-green/20 border border-cameroon-green/30"
                : "bg-cameroon-green/10"
            }`}
          >
            <div className="flex items-start space-x-4">
              <Lock
                className={`w-6 h-6 text-cameroon-green mt-1 flex-shrink-0`}
              />
              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    isDark ? "text-green-200" : "text-green-900"
                  }`}
                >
                  {t("onboarding.features.security", "Secure & Private")}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-green-300" : "text-green-700"
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
        );
      case "feature":
        return (
          <div
            className={`rounded-xl p-4 mb-6 max-w-md mx-auto ${
              isDark
                ? "bg-cameroon-red/20 border border-cameroon-red/30"
                : "bg-cameroon-red/10"
            }`}
          >
            <div className="flex items-start space-x-4">
              <Shield
                className={`w-6 h-6 text-cameroon-red mt-1 flex-shrink-0`}
              />
              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    isDark ? "text-red-200" : "text-red-900"
                  }`}
                >
                  {t(
                    "onboarding.features.secure.title",
                    "Transparent & Secure Reporting",
                  )}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-red-300" : "text-red-700"
                  }`}
                >
                  {t(
                    "onboarding.features.secure.description",
                    "Leveraging blockchain for immutable and verifiable vote reporting, ensuring trust and integrity in the electoral process.",
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      case "permission":
        return (
          <div
            className={`rounded-xl p-4 mb-6 max-w-md mx-auto ${
              isDark
                ? "bg-cameroon-yellow/20 border border-cameroon-yellow/30"
                : "bg-cameroon-yellow/10"
            }`}
          >
            <div className="flex items-start space-x-4">
              <Camera
                className={`w-6 h-6 text-cameroon-yellow mt-1 flex-shrink-0`}
              />
              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    isDark ? "text-yellow-200" : "text-yellow-900"
                  }`}
                >
                  {t(
                    "onboarding.permissions.title",
                    "Camera Access for Evidence",
                  )}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-yellow-300" : "text-yellow-700"
                  }`}
                >
                  {t(
                    "onboarding.permissions.description",
                    "Enable camera access to capture and report events with photographic evidence, enhancing the credibility of your reports.",
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      case "ready":
        return (
          <div
            className={`rounded-xl p-4 mb-6 max-w-md mx-auto ${
              isDark
                ? "bg-cameroon-green/20 border border-cameroon-green/30"
                : "bg-cameroon-green/10"
            }`}
          >
            <div className="flex items-start space-x-4">
              <CheckCircle
                className={`w-6 h-6 text-cameroon-green mt-1 flex-shrink-0`}
              />
              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    isDark ? "text-green-200" : "text-green-900"
                  }`}
                >
                  {t("onboarding.ready.title", "You're All Set!")}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-green-300" : "text-green-700"
                  }`}
                >
                  {t(
                    "onboarding.ready.description",
                    "You are now ready to contribute to a transparent election. Start reporting events securely and efficiently.",
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <div
          className={`rounded-2xl flex items-center justify-center bg-transparent`}
        >
          {step.icon}
        </div>
      </div>
      <h2
        className={`text-xl sm:text-3xl font-bold text-center mb-6 leading-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {step.title}
      </h2>
      {renderStepContent()}
    </div>
  );
};

export default OnboardingStep;
