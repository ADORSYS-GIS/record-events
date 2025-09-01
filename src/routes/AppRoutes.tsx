import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import type {
  KeyPair,
  AuthenticationStatus,
} from "../hooks/useAuthenticationFlow";

interface AppRoutesProps {
  showWelcome: boolean;
  showOnboarding: boolean;
  showDashboard: boolean;
  showEventForm: boolean;
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  labels: Label[];
  keyPair?: KeyPair;
  keyStatus?: string;
  webAuthnStatus?: string;
  powStatus?: string;
  authStatus: AuthenticationStatus;
  onGetStarted: () => void;
  onOnboardingComplete: () => void;
  onCreateEvent: () => void;
  onViewHistory: () => void;
  onOpenSettings: () => void;
  onRetry: () => void;
  onGoBackToDashboard: () => void; // Add this prop
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
  keyStatus,
  webAuthnStatus,
  powStatus,
  authStatus,
  onGetStarted,
  onOnboardingComplete,
  onCreateEvent,
  onViewHistory,
  onOpenSettings,
  onRetry,
  onGoBackToDashboard,
}) => {
  const navigate = useNavigate();

  // Show loading state during device security (key management + WebAuthn + Proof of Work)
  if (isLoading) {
    let loadingMessage = "Please wait while we secure your device...";

    if (authStatus.isKeyGenerating) {
      loadingMessage =
        keyStatus || "Please wait while we secure your device...";
    } else if (authStatus.isWebAuthnRegistering) {
      loadingMessage =
        webAuthnStatus || "Please wait while we secure your device...";
    } else if (authStatus.isPowComputing) {
      loadingMessage =
        powStatus || "Please wait while we verify your device...";
    }

    return <LoadingPage message={loadingMessage} />;
  }

  // Show error if authentication failed
  if (hasError) {
    return <ErrorPage message={errorMessage} onRetry={onRetry} />;
  }

  // Determine which page to show based on state
  let currentPage = null;

  if (showWelcome) {
    currentPage = <WelcomePage onGetStarted={onGetStarted} />;
  } else if (showOnboarding) {
    currentPage = (
      <OnboardingPage
        onComplete={onOnboardingComplete}
        keyStatus={keyStatus}
        webAuthnStatus={webAuthnStatus}
        powStatus={powStatus}
        authStatus={authStatus}
      />
    );
  } else if (showEventForm) {
    // Ensure keyPair is available before showing event form
    if (!keyPair || !keyPair.privateKey || !keyPair.publicKey) {
      currentPage = (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Authentication Required
            </h2>
            <p className="text-gray-600 mb-6">
              Your security keys are not available. Please return to the
              dashboard and try again.
            </p>
            <button
              onClick={onGoBackToDashboard}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200"
            >
              Go Back to Dashboard
            </button>
          </div>
        </div>
      );
    } else {
      currentPage = (
        <EventFormPage
          labels={labels}
          keyPair={keyPair}
          onGoBack={onGoBackToDashboard}
        />
      );
    }
  } else if (showDashboard) {
    currentPage = (
      <DashboardPage
        labels={labels}
        keyPair={keyPair}
        onCreateEvent={onCreateEvent}
        onViewHistory={onViewHistory}
        onOpenSettings={onOpenSettings}
      />
    );
  } else {
    // Default to dashboard if no specific page is set
    currentPage = (
      <DashboardPage
        labels={labels}
        keyPair={keyPair}
        onCreateEvent={onCreateEvent}
        onViewHistory={onViewHistory}
        onOpenSettings={onOpenSettings}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* All routes render the same content based on state */}
        <Route index element={currentPage} />
        <Route path="onboarding" element={currentPage} />
        <Route path="dashboard" element={currentPage} />
        <Route path="event/new" element={currentPage} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
