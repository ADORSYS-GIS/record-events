import React from "react";
import { useTranslation } from "react-i18next";
import { Plus } from "lucide-react";

interface CreateEventCardProps {
  isDark: boolean;
  onCreateEvent: () => void;
}

const CreateEventCard: React.FC<CreateEventCardProps> = ({
  isDark,
  onCreateEvent,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`transition-all duration-300 rounded-2xl shadow-xl border p-6 sm:p-8 mb-8 ${
        isDark
          ? "bg-gray-800/80 backdrop-blur-sm border-gray-700"
          : "bg-white/80 backdrop-blur-sm border-gray-200/50"
      }`}
    >
      <div className="text-center mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cameroon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Plus className="w-7 h-7 sm:w-8 sm:h-8 text-cameroon-green" />
        </div>
        <h3
          className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
            isDark ? "text-white" : "text-gray-900"
          } mb-2`}
        >
          {t("dashboard.createEvent.title")}
        </h3>
        <p
          className={`text-sm sm:text-base transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("dashboard.createEvent.description")}
        </p>
      </div>
      <button
        onClick={onCreateEvent}
        className="w-full bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow transform hover:scale-[1.02]"
      >
        {t("dashboard.createEvent.button")}
      </button>
    </div>
  );
};

export default CreateEventCard;
