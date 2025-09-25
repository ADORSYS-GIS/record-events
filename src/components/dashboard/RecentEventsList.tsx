import React from "react";
import { useTranslation } from "react-i18next";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Pencil,
  Save,
  Trash2,
} from "lucide-react";
import { LocalEvent } from "../../hooks/useEventHistory";

interface RecentEventsListProps {
  isDark: boolean;
  recentEvents: LocalEvent[];
  onViewEvent: (event: LocalEvent) => void;
  removeEvent: (eventId: string) => void;
}

const RecentEventsList: React.FC<RecentEventsListProps> = ({
  isDark,
  recentEvents,
  onViewEvent,
  removeEvent,
}) => {
  const { t } = useTranslation();

  const getStatusIcon = (status: LocalEvent["status"]) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-cameroon-green" />;
      case "pending":
        return <Clock className="w-4 h-4 text-cameroon-yellow" />;
      case "draft":
        return <Save className="w-4 h-4 text-gray-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-cameroon-red" />;
    }
  };

  return (
    <div
      className={`transition-all duration-300 rounded-2xl shadow-xl border p-4 sm:p-6 ${
        isDark
          ? "bg-gray-800/80 backdrop-blur-sm border-gray-700"
          : "bg-white/80 backdrop-blur-sm border-gray-200/50"
      }`}
    >
      <h3
        className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        } mb-4`}
      >
        {t("dashboard.recentEvents.title")}
      </h3>
      {recentEvents.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cameroon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-cameroon-yellow" />
          </div>
          <p
            className={`transition-colors duration-300 text-sm sm:text-base ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("dashboard.recentEvents.empty.title")}
          </p>
          <p
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-500"
            } mt-1`}
          >
            {t("dashboard.recentEvents.empty.description")}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className={`group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl border transition-all duration-200 hover:shadow-sm ${
                isDark
                  ? "border-gray-700 hover:bg-gray-700/50"
                  : "border-gray-200/50 hover:bg-white/50"
              }`}
            >
              <div className="flex-grow" onClick={() => onViewEvent(event)}>
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  {getStatusIcon(event.status)}
                  <div>
                    <h4
                      className={`font-medium text-sm transition-colors duration-300 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {event.title}
                    </h4>
                    <p
                      className={`text-xs transition-colors duration-300 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {new Date(event.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 self-end sm:self-center mt-2 sm:mt-0">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    event.status === "submitted"
                      ? "bg-cameroon-green/20 text-cameroon-green"
                      : event.status === "pending"
                        ? "bg-cameroon-yellow/20 text-cameroon-yellow"
                        : event.status === "draft"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-cameroon-red/20 text-cameroon-red"
                  }`}
                >
                  {event.status}
                </span>
                {event.status === "draft" && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewEvent(event);
                      }}
                      className="text-blue-500 hover:text-blue-700 p-1"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeEvent(event.id);
                      }}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentEventsList;
