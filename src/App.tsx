import React, { useCallback, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router } from "react-router-dom";

import useInitialization from "./hooks/useInitialization";
import useKeyManagement from "./hooks/useKeyManagement";
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

  // App state management
  const [showWelcome, setShowWelcome] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  // Check if onboarding has been completed
  useEffect(() => {
    const onboardingCompleted = localStorage.getItem("eventApp_onboarding_completed");
    if (onboardingCompleted === "true") {
      setShowWelcome(false);
      setShowOnboarding(false);
      setShowDashboard(true);
    }
  }, []);

  // Event handlers
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

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  // Loading and error states
  const isLoading = isKeyLoading || isPowLoading;
  const hasError = !!(keyError || powError);
  const errorMessage = keyError || powError || undefined;

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
      keyPair={keyPair}
      onGetStarted={handleGetStarted}
      onOnboardingComplete={handleOnboardingComplete}
      onCreateEvent={handleCreateEvent}
      onViewHistory={handleViewHistory}
      onOpenSettings={handleOpenSettings}
      onRetry={handleRetry}
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
