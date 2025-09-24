import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Users } from "lucide-react";

interface WelcomeFeaturesProps {
  isDark: boolean;
}

const WelcomeFeatures: React.FC<WelcomeFeaturesProps> = ({ isDark }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 sm:space-y-6 mb-8">
      <div
        className={`rounded-xl p-4 sm:p-6 ${
          isDark
            ? "bg-cameroon-green/20 border border-cameroon-green/30"
            : "bg-cameroon-green/10"
        }`}
      >
        <div className="flex items-start space-x-4">
          <Shield className="w-6 h-6 text-cameroon-green mt-1 flex-shrink-0" />
          <div>
            <h4
              className={`font-semibold mb-1 sm:mb-2 ${
                isDark ? "text-green-200" : "text-green-900"
              }`}
            >
              {t("welcome.features.secure", "Secure & Private")}
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-green-300" : "text-green-700"
              }`}
            >
              {t(
                "welcome.features.secureDesc",
                "Blockchain-powered security for immutable and transparent vote reporting.",
              )}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-xl p-4 sm:p-6 ${
          isDark
            ? "bg-cameroon-red/20 border border-cameroon-red/30"
            : "bg-cameroon-red/10"
        }`}
      >
        <div className="flex items-start space-x-4">
          <Users className="w-6 h-6 text-cameroon-red mt-1 flex-shrink-0" />
          <div>
            <h4
              className={`font-semibold mb-1 sm:mb-2 ${
                isDark ? "text-red-200" : "text-red-900"
              }`}
            >
              {t("welcome.features.easy", "Citizen-Powered Monitoring")}
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-red-300" : "text-red-700"
              }`}
            >
              {t(
                "welcome.features.easyDesc",
                "Empowering citizens to report events and contribute to a fair election process.",
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeFeatures;
