import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  WelcomePage,
  OnboardingPage,
  DashboardPage,
  EventFormPage,
  LoadingPage,
  ErrorPage,
} from "../pages";
import type { Label } from "../labels/label-manager";
import type { KeyPair } from "../hooks/useKeyInitialization";

interface AppRoutesProps {
  // App state
  showWelcome: boolean;
  showOnboarding: boolean;
  showDashboard: boolean;
  showEventForm: boolean;
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  
  // Data
  labels: Label[];
  keyPair?: KeyPair;
  
  // Handlers
  onGetStarted: () => void;
  onOnboardingComplete: () => void;
  onCreateEvent: () => void;
  onViewHistory: () => void;
  onOpenSettings: () => void;
  onRetry: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  showWelcome,
  showOnboarding,
  showDashboard,
  showEventForm,
  isLoading,
  hasError,
  errorMessage,
  labels,
  keyPair,
  onGetStarted,
  onOnboardingComplete,
  onCreateEvent,
  onViewHistory,
  onOpenSettings,
  onRetry,
}) => {
  // Show loading state
  if (isLoading) {
    return <LoadingPage />;
  }

  // Show error state
  if (hasError) {
    return <ErrorPage message={errorMessage} onRetry={onRetry} />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Welcome Route */}
        {showWelcome && (
          <Route
            index
            element={<WelcomePage onGetStarted={onGetStarted} />}
          />
        )}

        {/* Onboarding Route */}
        {showOnboarding && (
          <Route
            path="onboarding"
            element={<OnboardingPage onComplete={onOnboardingComplete} />}
          />
        )}

        {/* Dashboard Route */}
        {showDashboard && (
          <Route
            path="dashboard"
            element={
              <DashboardPage
                labels={labels}
                keyPair={keyPair}
                onCreateEvent={onCreateEvent}
                onViewHistory={onViewHistory}
                onOpenSettings={onOpenSettings}
              />
            }
          />
        )}

        {/* Event Form Route */}
        {showEventForm && keyPair && (
          <Route
            path="event/new"
            element={
              <EventFormPage
                labels={labels}
                keyPair={keyPair}
              />
            }
          />
        )}

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
