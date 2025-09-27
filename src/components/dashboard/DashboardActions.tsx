import React from "react";
import { useTranslation } from "react-i18next";
import { FilePlus2, Edit } from "lucide-react";

interface DashboardActionsProps {
  isDark: boolean;
  onCreateEvent: () => void;
  onContinueEvent: () => void;
  hasDrafts: boolean;
}

const DashboardActions: React.FC<DashboardActionsProps> = ({
  isDark,
  onCreateEvent,
  onContinueEvent,
  hasDrafts,
}) => {
  const { t } = useTranslation();

  const handleContinueClick = () => {
    if (hasDrafts) {
      onContinueEvent();
    } else {
      // Here you would typically show a toast notification
      alert(t("dashboard.actions.noDrafts"));
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 mb-8">
      {/* Create New Report */}
      <div
        onClick={onCreateEvent}
        className={`relative transition-all duration-300 rounded-2xl shadow-xl border p-4 sm:p-8 text-center cursor-pointer transform hover:scale-[1.03] overflow-hidden ${
          isDark
            ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-cameroon-green"
            : "bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-cameroon-green"
        }`}
      >
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cameroon-green to-green-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
            <FilePlus2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3
            className={`text-base sm:text-xl font-bold transition-colors duration-300 mb-1 sm:mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("dashboard.actions.create")}
          </h3>
          <p
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("dashboard.actions.createDescription")}
          </p>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cameroon-green to-transparent opacity-0 transition-opacity duration-300 ${
            isDark ? "hover:opacity-10" : "hover:opacity-20"
          }`}
        ></div>
      </div>

      {/* Continue Report */}
      <div
        onClick={handleContinueClick}
        className={`relative transition-all duration-300 rounded-2xl shadow-xl border p-4 sm:p-8 text-center overflow-hidden ${
          hasDrafts
            ? "cursor-pointer transform hover:scale-[1.03] " +
              (isDark
                ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-cameroon-yellow"
                : "bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-cameroon-yellow")
            : "cursor-not-allowed " +
              (isDark
                ? "bg-gray-800/40 border-gray-700/50"
                : "bg-gray-100/80 border-gray-200/30")
        }`}
      >
        <div className="relative z-10">
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg transition-colors duration-300 ${
              hasDrafts
                ? "bg-gradient-to-br from-cameroon-yellow to-yellow-400"
                : isDark
                  ? "bg-gray-700/50"
                  : "bg-gray-200"
            }`}
          >
            <Edit
              className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
                hasDrafts
                  ? "text-white"
                  : isDark
                    ? "text-gray-500"
                    : "text-gray-400"
              }`}
            />
          </div>
          <h3
            className={`text-base sm:text-xl font-bold transition-colors duration-300 mb-1 sm:mb-2 ${
              hasDrafts
                ? isDark
                  ? "text-white"
                  : "text-gray-900"
                : isDark
                  ? "text-gray-500"
                  : "text-gray-400"
            }`}
          >
            {t("dashboard.actions.continue")}
          </h3>
          <p
            className={`text-sm transition-colors duration-300 ${
              hasDrafts
                ? isDark
                  ? "text-gray-300"
                  : "text-gray-600"
                : isDark
                  ? "text-gray-500"
                  : "text-gray-400"
            }`}
          >
            {t("dashboard.actions.continueDescription")}
          </p>
        </div>
        {hasDrafts && (
          <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cameroon-yellow to-transparent opacity-0 transition-opacity duration-300 ${
              isDark ? "hover:opacity-10" : "hover:opacity-20"
            }`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DashboardActions;
