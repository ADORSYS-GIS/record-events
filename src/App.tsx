import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useCallback, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "sonner";
import i18n from "./i18n";

import useInitialization from "./hooks/useInitialization";
import useKeyManagement from "./hooks/useKeyManagement";
import { useLabelManagement } from "./hooks/useLabelManagement";
import "./i18n";

import Dashboard from "./components/Dashboard";
import EventForm from "./components/EventForm";
import LoadingSpinner from "./components/LoadingSpinner";
import OnboardingFlow from "./components/OnboardingFlow";
import WelcomeScreen from "./components/WelcomeScreen";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  const {
    keyPair,
    error: keyError,
    isLoading: isKeyLoading,
  } = useKeyManagement();
  const {
    devCert,
    error: powError,
    isLoading: isPowLoading,
  } = useInitialization({
    publicKey: keyPair?.publicKey || null,
  });
  const { labels } = useLabelManagement();
  const navigate = useNavigate();

  const [showWelcome, setShowWelcome] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

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

  // Show loading state during device security (key management + Proof of Work)
  if (isKeyLoading || isPowLoading) {
    return (
      <LoadingSpinner message="Please wait while we secure your device..." />
    );
  }

  // Show error if either key management or Proof of Work failed
  if (keyError || powError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Initialization Failed
            </h2>
            <p className="mt-2 text-sm text-gray-600">{keyError || powError}</p>
          </div>
          <div className="mt-8 space-y-6">
            <button
              onClick={() => window.location.reload()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (showWelcome) {
      return <WelcomeScreen onGetStarted={handleGetStarted} i18n={i18n} />;
    }

    if (showOnboarding) {
      return (
        <OnboardingFlow onComplete={handleOnboardingComplete} i18n={i18n} />
      );
    }

    if (showDashboard) {
      if (labels.length === 0) {
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
          onCreateEvent={handleCreateEvent}
          onViewHistory={handleViewHistory}
          onOpenSettings={handleOpenSettings}
        />
      );
    }

    if (showEventForm) {
      if (labels.length === 0) {
        return (
          <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-neutral-600">Loading application data...</p>
            </div>
          </div>
        );
      }
      return <EventForm labels={labels} />;
    }

    return null;
  };

  return (
    <div className="App">
      <Toaster position="top-right" />
      {renderContent()}
    </div>
  );
}

function AppWithRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default AppWithRouter;
