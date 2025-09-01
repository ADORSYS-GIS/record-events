import React from "react";
import EventForm from "../components/EventForm";
import type { Label } from "../labels/label-manager";
import type { KeyPair } from "../hooks/useKeyInitialization";

interface EventFormPageProps {
  labels: Label[];
  keyPair: KeyPair;
  createdBy?: string;
}

const EventFormPage: React.FC<EventFormPageProps> = ({
  labels,
  keyPair,
  createdBy,
}) => {
  return (
    <EventForm
      labels={labels}
      keyPair={keyPair}
      createdBy={createdBy}
    />
  );
};

export default EventFormPage;

