import { memo, useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from "sonner";
import { useLabelManagement } from "./hooks/useLabelManagement";
import useKeyInitialization from "./hooks/useKeyInitialization";
import EventForm from "./components/EventForm";
import WelcomeScreen from "./components/WelcomeScreen";
import OnboardingFlow from "./components/OnboardingFlow";
import Dashboard from "./components/Dashboard";
import i18n from "./i18n";

// Loading spinner component
const LoadingSpinner = ({ message }: { message: string }) => (
  <div className="min-h-screen bg-primary-100 flex items-center justify-center font-[Inter] antialiased">
    <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-2xl px-6 py-8 max-w-md w-full text-center">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-700">{message}</p>
    </div>
  </div>
);

// Error display component
const ErrorDisplay = ({
  error,
  onRetry,
}: {
  error: Error;
  onRetry: () => void;
}) => (
  <div className="min-h-screen bg-primary-100 flex items-center justify-center font-[Inter] antialiased">
    <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-2xl px-6 py-8 max-w-md w-full">
      <h2 className="text-lg font-medium text-gray-900 mb-2">
        Error Initializing Application
      </h2>
      <p className="text-red-600 mb-4">{error.message}</p>
      <button
        onClick={onRetry}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

// Main App component
const App = memo(() => {
  const { t } = useTranslation();
  const { keyPair, keyStatus, error, isLoading } = useKeyInitialization();
  const { labels } = useLabelManagement();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  // Check if user has completed onboarding
  useEffect(() => {
    const onboardingCompleted = localStorage.getItem(
      "eventApp_onboarding_completed",
    );
    if (onboardingCompleted === "true") {
      setShowWelcome(false);
      setShowDashboard(true);
    }
  }, []);

  const handleRetry = useCallback(() => window.location.reload(), []);
  const handleGetStarted = useCallback(() => {
    setShowWelcome(false);
    setShowOnboarding(true);
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
    setShowDashboard(true);
  }, []);

  const handleCreateEvent = useCallback(() => {
    setShowDashboard(false);
    setShowEventForm(true);
  }, []);

  const handleViewHistory = useCallback(() => {
    // TODO: Implement history view
    console.log("View history clicked");
  }, []);

  const handleOpenSettings = useCallback(() => {
    // TODO: Implement settings
    console.log("Open settings clicked");
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setShowEventForm(false);
    setShowDashboard(true);
  }, []);

  // Show loading state
  if (isLoading) {
    return <LoadingSpinner message={keyStatus} />;
  }

  // Show error state
  if (error) {
    return <ErrorDisplay error={error} onRetry={handleRetry} />;
  }

  const renderContent = () => {
    if (showWelcome) {
      return <WelcomeScreen onGetStarted={handleGetStarted} i18n={i18n} />;
    }

    if (showOnboarding) {
      return (
        <OnboardingFlow
          onComplete={handleOnboardingComplete}
          i18n={i18n}
          keyStatus={keyStatus}
          isKeyGenerating={isLoading}
        />
      );
    }

    if (showDashboard) {
      if (!keyPair || labels.length === 0) {
        return (
          <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-neutral-600">Loading application data...</p>
            </div>
          </div>
        );
      }
      return (
        <Dashboard
          labels={labels}
          keyPair={keyPair}
          onCreateEvent={handleCreateEvent}
          onViewHistory={handleViewHistory}
          onOpenSettings={handleOpenSettings}
        />
      );
    }

    if (showEventForm) {
      if (!keyPair || labels.length === 0) {
        return (
          <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-neutral-600">Loading application data...</p>
            </div>
          </div>
        );
      }
      return <EventForm labels={labels} keyPair={keyPair} />;
    }

    return null;
  };

  return (
    <div className="font-sans antialiased">
      <Toaster position="top-center" />
      {renderContent()}
    </div>
  );
});

App.displayName = "App";

export default App;
