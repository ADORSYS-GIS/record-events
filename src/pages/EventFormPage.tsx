import React from "react";
import EventForm from "../components/EventForm";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import type { Label } from "../labels/label-manager";

interface EventFormPageProps {
  labels: Label[];
  keyPair: KeyPair;
  createdBy?: string;
  onGoBack?: () => void;
}

const EventFormPage: React.FC<EventFormPageProps> = ({
  labels,
  keyPair,
  createdBy,
  onGoBack,
}) => {
  return (
    <EventForm
      labels={labels}
      keyPair={keyPair}
      createdBy={createdBy}
      onGoBack={onGoBack}
    />
  );
};

export default EventFormPage;
