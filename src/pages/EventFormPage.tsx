import React from "react";
import EventForm from "../components/EventForm";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import type { LocalEvent } from "../hooks/useEventHistory";
import type { Label } from "../labels/label-manager";
import type { EventPackage as LocalEventPackage } from "../types/event";
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
}) => {
  return (
    <EventForm
      labels={labels}
      keyPair={keyPair}
      createdBy={createdBy}
      onGoBack={onGoBack}
      initialEvent={initialEvent}
      addEvent={addEvent}
      saveDraft={saveDraft}
      updateDraft={updateDraft}
    />
  );
};

export default EventFormPage;
