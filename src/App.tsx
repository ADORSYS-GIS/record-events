import React, { useCallback, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import useAuthenticationFlow from "./hooks/useAuthenticationFlow";
import { useLabelManagement } from "./hooks/useLabelManagement";
import { useEventHistory, LocalEvent } from "./hooks/useEventHistory";
import { AppRoutes } from "./routes";
import { EventPackage } from "./openapi-rq/requests/types.gen";

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
  const { events, addEvent, saveDraft, updateDraft, removeEvent } =
    useEventHistory();

  // App state management
  const [showWelcome, setShowWelcome] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [editingEvent, setEditingEvent] = useState<LocalEvent | undefined>(
    undefined,
  );

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
    setEditingEvent(undefined);
    setShowWelcome(false);
    setShowOnboarding(false);
    setShowDashboard(false);
    setShowEventForm(true);
    navigate("/event/new");
  }, [navigate]);

  const handleViewEvent = (event: LocalEvent) => {
    setEditingEvent(event);
    setShowEventForm(true);
    navigate("/event/new");
  };

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

  const handleSaveDraft = (eventPackage: EventPackage, image?: Blob) => {
    saveDraft(eventPackage, image);
    setShowEventForm(false);
    navigate("/dashboard");
  };

  const handleUpdateDraft = (eventPackage: EventPackage, image?: Blob) => {
    updateDraft(eventPackage, image);
    setShowEventForm(false);
    navigate("/dashboard");
  };

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
      events={events}
      onGetStarted={handleGetStarted}
      onOnboardingComplete={handleOnboardingComplete}
      onCreateEvent={handleCreateEvent}
      onViewEvent={handleViewEvent}
      onOpenSettings={handleOpenSettings}
      onRetry={handleRetry}
      onGoBackToDashboard={handleGoBackToDashboard}
      addEvent={addEvent}
      saveDraft={handleSaveDraft}
      updateDraft={handleUpdateDraft}
      removeEvent={removeEvent}
      editingEvent={editingEvent}
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
