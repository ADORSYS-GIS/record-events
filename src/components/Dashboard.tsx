import {
  AlertCircle,
  CheckCircle,
  Clock,
  Monitor,
  Moon,
  Plus,
  Sun,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import { useEventHistory } from "../hooks/useEventHistory";
import { useTheme } from "../hooks/useTheme";
import type { Label } from "../labels/label-manager";

interface DashboardProps {
  labels: Label[];
  keyPair?: KeyPair;
  onCreateEvent: () => void;
  onViewHistory: () => void;
  onOpenSettings: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  labels: _labels,
  keyPair: _keyPair,
  onCreateEvent,
  onViewHistory: _onViewHistory,
  onOpenSettings,
}) => {
  const { t } = useTranslation();
  const { events } = useEventHistory();
  const { theme, changeTheme, isDark } = useTheme();

  // Use real event data instead of mock data
  const recentEvents = events.slice(0, 5).map((event) => ({
    id: event.id,
    title: event.title || `Event ${event.id.slice(0, 8)}`,
    status: event.status,
    timestamp: new Date(event.timestamp).toLocaleString(),
  }));

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-orange-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Header */}
      <header
        className={`transition-all duration-300 ${
          isDark
            ? "bg-gray-800/80 backdrop-blur-sm shadow-sm border-b border-gray-700"
            : "bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200"
        } sticky top-0 z-40`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  EventApp
                </h1>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Secure event reporting
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Connected
                </span>
              </div>

              {/* Theme Toggle */}
              <div
                className={`flex items-center space-x-1 rounded-xl p-1 shadow-lg transition-all duration-300 ${
                  isDark ? "bg-gray-700" : "bg-white"
                }`}
              >
                <button
                  onClick={() => changeTheme("light")}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "light"
                      ? "bg-blue-600 text-white shadow-md"
                      : isDark
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => changeTheme("system")}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "system"
                      ? "bg-blue-600 text-white shadow-md"
                      : isDark
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => changeTheme("dark")}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-blue-600 text-white shadow-md"
                      : isDark
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2
            className={`text-2xl font-semibold transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            } mb-1`}
          >
            Welcome back
          </h2>
          <p
            className={`transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to report an event?
          </p>
        </div>

        {/* Main Action Card */}
        <div
          className={`transition-all duration-300 rounded-2xl shadow-xl border p-8 mb-8 ${
            isDark
              ? "bg-gray-800/80 backdrop-blur-sm border-gray-700"
              : "bg-white/80 backdrop-blur-sm border-gray-200/50"
          }`}
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-blue-600" />
            </div>
            <h3
              className={`text-xl font-semibold transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              Create New Event Report
            </h3>
            <p
              className={`transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Start a new secure event report with photo capture
            </p>
          </div>
          <button
            onClick={onCreateEvent}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-[1.02]"
          >
            Start New Report
          </button>
        </div>

        {/* Recent Events */}
        <div
          className={`transition-all duration-300 rounded-2xl shadow-xl border p-6 ${
            isDark
              ? "bg-gray-800/80 backdrop-blur-sm border-gray-700"
              : "bg-white/80 backdrop-blur-sm border-gray-200/50"
          }`}
        >
          <h3
            className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Recent Events
          </h3>
          {recentEvents.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
              </div>
              <p
                className={`transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                No events submitted yet
              </p>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                } mt-1`}
              >
                Your submitted events will appear here
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentEvents.map((event) => (
                <div
                  key={event.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:shadow-sm ${
                    isDark
                      ? "border-gray-700 hover:bg-gray-700/50"
                      : "border-gray-200/50 hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
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
                        {event.timestamp}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      event.status === "submitted"
                        ? "bg-green-100 text-green-700"
                        : event.status === "pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
