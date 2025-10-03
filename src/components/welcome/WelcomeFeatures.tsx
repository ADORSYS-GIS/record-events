import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Users } from "lucide-react";

interface WelcomeFeaturesProps {
  isDark: boolean;
}

const WelcomeFeatures: React.FC<WelcomeFeaturesProps> = ({ isDark }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
      <div
        className={`p-4 rounded-xl flex items-start space-x-4 ${
          isDark ? "bg-gray-700/50" : "bg-gray-50"
        }`}
      >
        <Shield
          className={`w-6 h-6 flex-shrink-0 ${
            isDark ? "text-cameroon-yellow" : "text-cameroon-green"
          }`}
        />
        <div>
          <h3
            className={`font-semibold text-base ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("welcome.features.secure")}
          </h3>
          <p
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("welcome.features.secureDesc")}
          </p>
        </div>
      </div>
      <div
        className={`p-4 rounded-xl flex items-start space-x-4 ${
          isDark ? "bg-gray-700/50" : "bg-gray-50"
        }`}
      >
        <Users
          className={`w-6 h-6 flex-shrink-0 ${
            isDark ? "text-cameroon-yellow" : "text-cameroon-green"
          }`}
        />
        <div>
          <h3
            className={`font-semibold text-base ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("welcome.features.easy")}
          </h3>
          <p
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("welcome.features.easyDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeFeatures;
