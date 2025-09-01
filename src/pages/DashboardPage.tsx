import React from "react";
import Dashboard from "../components/Dashboard";
import type { Label } from "../labels/label-manager";
import type { KeyPair } from "../hooks/useKeyInitialization";

interface DashboardPageProps {
  labels: Label[];
  keyPair?: KeyPair;
  onCreateEvent: () => void;
  onViewHistory: () => void;
  onOpenSettings: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  labels,
  keyPair,
  onCreateEvent,
  onViewHistory,
  onOpenSettings,
}) => {
  return (
    <Dashboard
      labels={labels}
      keyPair={keyPair}
      onCreateEvent={onCreateEvent}
      onViewHistory={onViewHistory}
      onOpenSettings={onOpenSettings}
    />
  );
};

export default DashboardPage;

