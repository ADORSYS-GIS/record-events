import React from "react";
import Dashboard from "../components/Dashboard";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import type { Label } from "../labels/label-manager";
import type { LocalEvent } from "../hooks/useEventHistory";

interface DashboardPageProps {
  labels: Label[];
  keyPair?: KeyPair;
  events: LocalEvent[];
  onCreateEvent: () => void;
  onViewEvent: (event: LocalEvent) => void;
  onOpenSettings: () => void;
  removeEvent: (eventId: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  labels,
  keyPair,
  events,
  onCreateEvent,
  onViewEvent,
  onOpenSettings,
  removeEvent,
}) => {
  return (
    <Dashboard
      labels={labels}
      keyPair={keyPair}
      events={events}
      onCreateEvent={onCreateEvent}
      onViewEvent={onViewEvent}
      onOpenSettings={onOpenSettings}
      removeEvent={removeEvent}
    />
  );
};

export default DashboardPage;
