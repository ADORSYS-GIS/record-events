import React, { useCallback, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import useAuthenticationFlow from "./hooks/useAuthenticationFlow";
import { useLabelManagement } from "./hooks/useLabelManagement";
import { AppRoutes } from "./routes";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  const navigate = useNavigate();

  // Use the comprehensive authentication flow
  const authStatus = useAuthenticationFlow();

  const { labels } = useLabelManagement();

  // App state management
  const [showWelcome, setShowWelcome] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Check if onboarding has been completed (only once on mount)
  useEffect(() => {
    if (!hasInitialized && !showEventForm) {
      const onboardingCompleted = localStorage.getItem(
        "eventApp_onboarding_completed",
      );
      if (onboardingCompleted === "true") {
        setShowWelcome(false);
        setShowOnboarding(false);
        setShowDashboard(true);
        setShowEventForm(false);
        navigate("/dashboard");
      }
      setHasInitialized(true);
    }
  }, [navigate, hasInitialized, showEventForm]);

  // Event handlers
  const handleGetStarted = useCallback(() => {
    setShowWelcome(false);
    setShowOnboarding(true);
    setShowDashboard(false);
    setShowEventForm(false);
    navigate("/onboarding");
  }, [navigate]);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
    setShowDashboard(true);
    setShowEventForm(false);
    navigate("/dashboard");
  }, [navigate]);

  const handleCreateEvent = useCallback(() => {
    setShowWelcome(false);
    setShowOnboarding(false);
    setShowDashboard(false);
    setShowEventForm(true);
    navigate("/event/new");
  }, [navigate]);

  const handleViewHistory = useCallback(() => {
    // TODO: Implement history view
  }, []);

  const handleOpenSettings = useCallback(() => {
    // TODO: Implement settings
  }, []);

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  const handleGoBackToDashboard = useCallback(() => {
    setShowWelcome(false);
    setShowOnboarding(false);
    setShowDashboard(true);
    setShowEventForm(false);
    navigate("/dashboard");
  }, [navigate]);

  // Loading and error states - show loading until full authentication is complete
  const isLoading = authStatus.isLoading;
  const hasError = !!authStatus.error;
  const errorMessage = authStatus.error || undefined;

  return (
    <AppRoutes
      showWelcome={showWelcome}
      showOnboarding={showOnboarding}
      showDashboard={showDashboard}
      showEventForm={showEventForm}
      isLoading={isLoading}
      hasError={hasError}
      errorMessage={errorMessage}
      labels={labels}
      keyPair={authStatus.keyPair || undefined}
      keyStatus={authStatus.keyStatus}
      webAuthnStatus={authStatus.webAuthnStatus}
      powStatus={authStatus.powStatus}
      authStatus={authStatus}
      onGetStarted={handleGetStarted}
      onOnboardingComplete={handleOnboardingComplete}
      onCreateEvent={handleCreateEvent}
      onViewHistory={handleViewHistory}
      onOpenSettings={handleOpenSettings}
      onRetry={handleRetry}
      onGoBackToDashboard={handleGoBackToDashboard}
    />
  );
}

function AppWithRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default AppWithRouter;
