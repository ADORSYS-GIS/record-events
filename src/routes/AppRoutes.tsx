import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import { type LocalEvent } from "../hooks/useEventHistory";
import { EventPackage } from "../openapi-rq/requests/types.gen";

interface AppRoutesProps {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  labels: Label[];
  keyPair?: KeyPair;
  keyStatus?: string;
  powStatus?: string;
  authStatus: AuthenticationStatus;
  events: LocalEvent[];
  onGetStarted: () => void;
  onOnboardingComplete: () => void;
  onCreateEvent: () => void;
  onContinueEvent: () => void;
  onViewEvent: (event: LocalEvent) => void;
  onOpenSettings: () => void;
  onSelectDraft: (draft: LocalEvent) => void;
  onRetry: () => void;
  onGoBackToDashboard: () => void;
  addEvent: (eventPackage: EventPackage, hash?: string) => void;
  saveDraft: (eventPackage: EventPackage, image?: Blob) => void;
  updateDraft: (eventPackage: EventPackage, image?: Blob) => void;
  removeEvent: (eventId: string) => void;
  updateEventStatus: (eventId: string, status: LocalEvent["status"]) => void;
  editingEvent?: LocalEvent;
  setEditingEvent: Dispatch<SetStateAction<LocalEvent | undefined>>;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  isLoading,
  hasError,
  errorMessage,
  labels,
  keyPair,
  keyStatus,
  powStatus,
  authStatus,
  events,
  onGetStarted,
  onOnboardingComplete,
  onCreateEvent,
  onContinueEvent,
  onViewEvent,
  onOpenSettings,
  onSelectDraft,
  onRetry,
  onGoBackToDashboard,
  addEvent,
  saveDraft,
  updateDraft,
  removeEvent,
  updateEventStatus,
  editingEvent,
  setEditingEvent,
}) => {
  const { t } = useTranslation();

  // Show loading state during device security (key management + WebAuthn + Proof of Work)
  if (isLoading) {
    let loadingMessage = t("loading.securingDevice");

    if (authStatus.isKeyGenerating) {
      loadingMessage = keyStatus || t("loading.securingDevice");
    } else if (authStatus.isPowComputing) {
      loadingMessage = powStatus || t("loading.verifyingDevice");
    }

    return <LoadingPage message={loadingMessage} />;
  }

  // Show error if authentication failed
  if (hasError) {
    return <ErrorPage message={errorMessage} onRetry={onRetry} />;
  }

  // Conditional rendering for the EventFormPage when keyPair is not available
  const EventFormPageWithAuthCheck = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const currentEditingEvent = eventId
      ? events.find((event) => event.id === eventId)
      : editingEvent;

    useEffect(() => {
      if (
        eventId &&
        currentEditingEvent &&
        currentEditingEvent !== editingEvent
      ) {
        setEditingEvent(currentEditingEvent);
      }
    }, [eventId, currentEditingEvent, editingEvent, setEditingEvent]);

    if (!keyPair || !keyPair.privateKey || !keyPair.publicKey) {
      return (
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
              {t("eventForm.media.authTokenNotFoundTitle")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("eventForm.media.authTokenNotFoundDescription")}
            </p>
            <button
              onClick={onGoBackToDashboard}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200"
            >
              {t("draftSelection.goBack")}
            </button>
          </div>
        </div>
      );
    }
    return (
      <EventFormPage
        labels={labels}
        keyPair={keyPair}
        onGoBack={onGoBackToDashboard}
        initialEvent={currentEditingEvent}
        addEvent={addEvent}
        saveDraft={saveDraft}
        updateDraft={updateDraft}
        removeEvent={removeEvent}
        updateEventStatus={updateEventStatus}
      />
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            localStorage.getItem("eventApp_onboarding_completed") === "true" ? (
              <DashboardPage
                labels={labels}
                keyPair={keyPair}
                events={events}
                onCreateEvent={onCreateEvent}
                onContinueEvent={onContinueEvent}
                onViewEvent={onViewEvent}
                onOpenSettings={onOpenSettings}
                removeEvent={removeEvent}
                onSelectDraft={onSelectDraft}
              />
            ) : (
              <WelcomePage onGetStarted={onGetStarted} />
            )
          }
        />
        <Route
          path="onboarding"
          element={
            <OnboardingPage
              onComplete={onOnboardingComplete}
              keyStatus={keyStatus}
              powStatus={powStatus}
              authStatus={authStatus}
            />
          }
        />
        <Route
          path="dashboard"
          element={
            <DashboardPage
              labels={labels}
              keyPair={keyPair}
              events={events}
              onCreateEvent={onCreateEvent}
              onContinueEvent={onContinueEvent}
              onViewEvent={onViewEvent}
              onOpenSettings={onOpenSettings}
              removeEvent={removeEvent}
              onSelectDraft={onSelectDraft}
            />
          }
        />
        <Route path="event/new" element={<EventFormPageWithAuthCheck />} />
        <Route
          path="event/edit/:eventId"
          element={<EventFormPageWithAuthCheck />}
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
