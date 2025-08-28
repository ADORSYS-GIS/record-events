import { useCallback, useEffect, useState } from "react";
import { EventPackage } from "../openapi-rq/requests/types.gen";

export interface LocalEvent {
  id: string;
  title: string;
  status: "submitted" | "pending" | "failed";
  timestamp: string;
  eventPackage: EventPackage;
  hash?: string;
}

const STORAGE_KEY = "reporthub_events";

export const useEventHistory = () => {
  const [events, setEvents] = useState<LocalEvent[]>([]);

  // Load events from localStorage on mount
  useEffect(() => {
    const storedEvents = localStorage.getItem(STORAGE_KEY);
    if (storedEvents) {
      try {
        setEvents(JSON.parse(storedEvents));
      } catch (error) {
        console.error("Failed to parse stored events:", error);
        setEvents([]);
      }
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const addEvent = useCallback((eventPackage: EventPackage, hash?: string) => {
    const newEvent: LocalEvent = {
      id: eventPackage.id,
      title: `Event ${eventPackage.id.slice(0, 8)}`,
      status: "submitted",
      timestamp: new Date().toISOString(),
      eventPackage,
      hash,
    };

    setEvents((prev) => [newEvent, ...prev]);
  }, []);

  const updateEventStatus = useCallback(
    (eventId: string, status: LocalEvent["status"]) => {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === eventId ? { ...event, status } : event,
        ),
      );
    },
    [],
  );

  const removeEvent = useCallback((eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  }, []);

  const clearEvents = useCallback(() => {
    setEvents([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    events,
    addEvent,
    updateEventStatus,
    removeEvent,
    clearEvents,
  };
};
