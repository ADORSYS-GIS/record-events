import React from "react";
import EventForm from "../components/EventForm";
import FormHeader from "../components/event-form/FormHeader";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import type { LocalEvent } from "../hooks/useEventHistory";
import type { Label } from "../labels/label-manager";
import { useEventSubmission } from "../hooks/useEventSubmission";
import { useEventHistory } from "../hooks/useEventHistory";
import { EventPackage } from "../openapi-rq/requests/types.gen";

interface EventFormPageProps {
  labels: Label[];
  keyPair: KeyPair;
  createdBy?: string;
  onGoBack?: () => void;
  initialEvent?: LocalEvent;
  addEvent: (eventPackage: EventPackage, hash?: string) => void;
  saveDraft: (eventPackage: EventPackage, image?: Blob) => void;
  updateDraft: (eventPackage: EventPackage, image?: Blob) => void;
  updateEventStatus: (eventId: string, status: LocalEvent["status"]) => void;
  removeEvent: (eventId: string) => void;
}

const EventFormPage: React.FC<EventFormPageProps> = ({
  labels,
  keyPair,
  createdBy,
  onGoBack,
  initialEvent,
  addEvent,
  saveDraft,
  updateDraft,
  updateEventStatus,
  removeEvent,
}) => {
  const {
    submitEventAsync,
    submitEventDataAsync,
    submitEventImageAsync,
    isSubmitting,
    isSubmittingData,
    isSubmittingImage,
  } = useEventSubmission();

  return (
    <>
      <FormHeader onGoBack={onGoBack || (() => window.history.back())} />
      <EventForm
        labels={labels}
        keyPair={keyPair}
        createdBy={createdBy}
        onGoBack={onGoBack}
        initialEvent={initialEvent}
        addEvent={addEvent}
        saveDraft={saveDraft}
        updateDraft={updateDraft}
        submitEventAsync={submitEventAsync}
        submitEventDataAsync={submitEventDataAsync}
        submitEventImageAsync={submitEventImageAsync}
        isSubmitting={isSubmitting}
        isSubmittingData={isSubmittingData}
        isSubmittingImage={isSubmittingImage}
        updateEventStatus={updateEventStatus}
        removeEvent={removeEvent}
      />
    </>
  );
};

export default EventFormPage;
