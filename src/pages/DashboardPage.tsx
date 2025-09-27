import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DraftSelectionModal from "../components/dashboard/DraftSelectionModal";
import type { KeyPair } from "../hooks/useAuthenticationFlow";
import { useBackgroundSync } from "../hooks/useBackgroundSync";
import { useTheme } from "../context/ThemeContext";
import type { Label } from "../labels/label-manager";
import type { LocalEvent } from "../hooks/useEventHistory";

interface DashboardPageProps {
  labels: Label[];
  keyPair?: KeyPair;
  events: LocalEvent[];
  onCreateEvent: () => void;
  onContinueEvent: () => void;
  onViewEvent: (event: LocalEvent) => void;
  onOpenSettings: () => void;
  removeEvent: (eventId: string) => void;
  onSelectDraft: (draft: LocalEvent) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  labels,
  keyPair,
  events,
  onCreateEvent,
  onContinueEvent,
  onViewEvent,
  onOpenSettings,
  removeEvent,
  onSelectDraft,
}) => {
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const { isDark } = useTheme();
  const hasDrafts = events.some((event) => event.status === "draft");
  useBackgroundSync(keyPair);

  const handleContinueEvent = () => {
    if (hasDrafts) {
      setIsDraftModalOpen(true);
    } else {
      onContinueEvent();
    }
  };

  const handleSelectDraft = (draft: LocalEvent) => {
    onSelectDraft(draft);
    setIsDraftModalOpen(false);
  };

  return (
    <>
      <DashboardHeader isDark={isDark} />
      <Dashboard
        labels={labels}
        keyPair={keyPair}
        events={events}
        onCreateEvent={onCreateEvent}
        onContinueEvent={handleContinueEvent}
        onViewEvent={onViewEvent}
        onOpenSettings={onOpenSettings}
        removeEvent={removeEvent}
        hasDrafts={hasDrafts}
      />
      <DraftSelectionModal
        isOpen={isDraftModalOpen}
        drafts={events.filter((event) => event.status === "draft")}
        onSelectDraft={handleSelectDraft}
        onClose={() => setIsDraftModalOpen(false)}
      />
    </>
  );
};

export default DashboardPage;
