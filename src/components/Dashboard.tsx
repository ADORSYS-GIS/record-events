import { AlertCircle, CheckCircle, Clock, Plus, Settings } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useEventHistory } from "../hooks/useEventHistory";
import type { KeyPair } from "../hooks/useKeyInitialization";
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
  const { isDark } = useTheme();
  const { events } = useEventHistory();

  // Use real event data instead of mock data
  const recentEvents = events.slice(0, 5).map((event) => ({
    id: event.id,
    title: event.title,
    status: event.status,
    timestamp: new Date(event.timestamp).toLocaleString(),
  }));

  const quickActions = [
    {
      id: "traffic",
      title: t("dashboard.quickActions.traffic", "Traffic Incident"),
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-warning-500",
      onClick: () => onCreateEvent(),
    },
    {
      id: "infrastructure",
      title: t("dashboard.quickActions.infrastructure", "Infrastructure"),
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-error-500",
      onClick: () => onCreateEvent(),
    },
    {
      id: "safety",
      title: t("dashboard.quickActions.safety", "Safety Issue"),
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-primary-500",
      onClick: () => onCreateEvent(),
    },
  ];

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
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-900">
                  EventApp
                </h1>
                <p className="text-sm text-blue-600">Secure event reporting</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700">Connected</span>
              </div>
              <button
                onClick={onOpenSettings}
                className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-1">
            Welcome back
          </h2>
          <p className="text-blue-700">Ready to report an event?</p>
        </div>

        {/* Main Action Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-200 mb-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Create New Event Report
            </h3>
            <p className="text-blue-700">
              Start a new secure event report with photo capture
            </p>
          </div>
          <button
            onClick={onCreateEvent}
            className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Start New Report
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className="bg-white rounded-lg p-6 shadow-sm border border-blue-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">{action.icon}</div>
                <div className="text-left">
                  <h4 className="font-medium text-blue-900 group-hover:text-blue-700 transition-colors duration-200">
                    {action.title}
                  </h4>
                  <p className="text-sm text-blue-600">Report now</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Recent Events
          </h3>
          <div className="space-y-3">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg p-4 border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(event.status)}
                    <div>
                      <h4 className="font-medium text-blue-900">
                        {event.title}
                      </h4>
                      <p className="text-sm text-blue-600">{event.timestamp}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-medium ${
                        event.status === "submitted"
                          ? "text-green-600"
                          : event.status === "pending"
                            ? "text-orange-600"
                            : "text-blue-600"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
