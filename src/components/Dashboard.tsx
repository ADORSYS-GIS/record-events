import React from "react";
import { useTranslation } from "react-i18next";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import { type LocalEvent } from "../hooks/useEventHistory";
import { useTheme } from "../hooks/useTheme.tsx";
import type { Label } from "../labels/label-manager";
import DashboardHeader from "./dashboard/DashboardHeader";
import RecentEventsList from "./dashboard/RecentEventsList";
import DashboardActions from "./dashboard/DashboardActions";

interface DashboardProps {
  labels: Label[];
  keyPair?: KeyPair;
  events: LocalEvent[];
  onCreateEvent: () => void;
  onContinueEvent: () => void;
  onViewEvent: (event: LocalEvent) => void;
  onOpenSettings: () => void;
  removeEvent: (eventId: string) => void;
  hasDrafts: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({
  events,
  onCreateEvent,
  onContinueEvent,
  onViewEvent,
  removeEvent,
  hasDrafts,
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const recentEvents = events.slice(0, 5);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <DashboardHeader isDark={isDark} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8">
          <h2
            className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            } mb-1`}
          >
            {t("dashboard.welcome")}
          </h2>
          <p
            className={`transition-colors duration-300 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("dashboard.welcomeDesc")}
          </p>
        </div>

        <DashboardActions
          isDark={isDark}
          onCreateEvent={onCreateEvent}
          onContinueEvent={onContinueEvent}
          hasDrafts={hasDrafts}
        />

        <RecentEventsList
          isDark={isDark}
          recentEvents={recentEvents}
          onViewEvent={onViewEvent}
          removeEvent={removeEvent}
        />
      </main>
    </div>
  );
};

export default Dashboard;
