import React, { useCallback, useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import InstallPrompt from "./components/InstallPrompt";
import UpdatePrompt from "./components/UpdatePrompt";
import useAuthenticationFlow from "./hooks/useAuthenticationFlow";
import { useInitializeApp } from "./hooks/useApp";
import { useLabelManagement } from "./hooks/useLabelManagement";
import { useEventHistory, LocalEvent } from "./hooks/useEventHistory";
import { AppRoutes } from "./routes";
import { EventPackage } from "./openapi-rq/requests/types.gen";
import { ThemeProvider } from "./context/ThemeContext.tsx";

import { queryClient } from "./lib/queryClient";

function App() {
  useInitializeApp();
  const navigate = useNavigate();

  const authStatus = useAuthenticationFlow();
  const { labels } = useLabelManagement();
  const {
    events,
    addEvent,
    saveDraft,
    updateDraft,
    removeEvent,
    updateEventStatus,
  } = useEventHistory();

  const [editingEvent, setEditingEvent] = useState<LocalEvent | undefined>(
    undefined,
  );

  const handleGetStarted = useCallback(() => {
    navigate("/onboarding");
  }, [navigate]);

  const handleOnboardingComplete = useCallback(() => {
    localStorage.setItem("eventApp_onboarding_completed", "true");
    navigate("/dashboard");
  }, [navigate]);

  const handleCreateEvent = useCallback(() => {
    setEditingEvent(undefined);
    navigate("/event/new");
  }, [navigate]);

  const handleViewEvent = (event: LocalEvent) => {
    setEditingEvent(event);
    navigate(`/event/edit/${event.id}`);
  };

  const handleContinueEvent = () => {
    const drafts = events.filter((event) => event.status === "draft");
    if (drafts.length === 1) {
      setEditingEvent(drafts[0]);
      navigate(`/event/edit/${drafts[0].id}`);
    } else if (drafts.length > 1) {
      navigate("/dashboard");
    }
  };

  const handleSelectDraft = (draft: LocalEvent) => {
    setEditingEvent(draft);
    navigate(`/event/edit/${draft.id}`);
  };

  const handleOpenSettings = useCallback(() => {
    // TODO: Implement settings
  }, []);

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  const handleGoBackToDashboard = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const handleSaveDraft = (eventPackage: EventPackage, image?: Blob) => {
    saveDraft(eventPackage, image);
    navigate("/dashboard");
  };

  const handleUpdateDraft = (eventPackage: EventPackage, image?: Blob) => {
    updateDraft(eventPackage, image);
    navigate("/dashboard");
  };

  const isLoading = authStatus.isLoading;
  const hasError = !!authStatus.error;
  const errorMessage = authStatus.error || undefined;

  return (
    <AppRoutes
      isLoading={isLoading}
      hasError={hasError}
      errorMessage={errorMessage}
      labels={labels}
      keyPair={authStatus.keyPair || undefined}
      keyStatus={authStatus.keyStatus}
      powStatus={authStatus.powStatus}
      authStatus={authStatus}
      events={events}
      onGetStarted={handleGetStarted}
      onOnboardingComplete={handleOnboardingComplete}
      onCreateEvent={handleCreateEvent}
      onContinueEvent={handleContinueEvent}
      onViewEvent={handleViewEvent}
      onOpenSettings={handleOpenSettings}
      onSelectDraft={handleSelectDraft}
      onRetry={handleRetry}
      onGoBackToDashboard={handleGoBackToDashboard}
      addEvent={addEvent}
      saveDraft={handleSaveDraft}
      updateDraft={updateDraft}
      removeEvent={removeEvent}
      updateEventStatus={updateEventStatus}
      editingEvent={editingEvent}
      setEditingEvent={setEditingEvent} // Pass setEditingEvent
    />
  );
}

function AppWithRouter() {
  return (
    <ThemeProvider>
      <Router>
        <App />
        <UpdatePrompt />
        <InstallPrompt />
      </Router>
    </ThemeProvider>
  );
}

export default AppWithRouter;
