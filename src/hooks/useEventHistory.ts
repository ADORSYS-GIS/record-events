import { useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../services/db";
import { EventPackage } from "../openapi-rq/requests/types.gen";

export interface LocalEvent {
  id: string;
  title: string;
  status: "submitted" | "pending" | "failed" | "draft";
  timestamp: string;
  eventPackage: EventPackage;
  hash?: string;
  image?: Blob;
}

export const useEventHistory = () => {
  const events = useLiveQuery(() => db.events.toArray(), []);

  const addEvent = useCallback(
    async (eventPackage: EventPackage, hash?: string) => {
      const newEvent: LocalEvent = {
        id: eventPackage.id,
        title: `Event ${eventPackage.id.slice(0, 8)}`,
        status: "submitted",
        timestamp: new Date().toISOString(),
        eventPackage,
        hash,
      };
      await db.events.add(newEvent);
    },
    [],
  );

  const saveDraft = useCallback(
    async (eventPackage: EventPackage, image?: Blob) => {
      const newDraft: LocalEvent = {
        id: eventPackage.id,
        title: `Draft ${eventPackage.id.slice(0, 8)}`,
        status: "draft",
        timestamp: new Date().toISOString(),
        eventPackage,
        image,
      };
      await db.events.put(newDraft);
    },
    [],
  );

  const updateDraft = useCallback(
    async (eventPackage: EventPackage, image?: Blob) => {
      await db.events.update(eventPackage.id, {
        eventPackage,
        timestamp: new Date().toISOString(),
        image,
      });
    },
    [],
  );

  const updateEventStatus = useCallback(
    async (eventId: string, status: LocalEvent["status"]) => {
      await db.events.update(eventId, { status });
    },
    [],
  );

  const removeEvent = useCallback(async (eventId: string) => {
    await db.events.delete(eventId);
  }, []);

  const clearEvents = useCallback(async () => {
    await db.events.clear();
  }, []);

  return {
    events: events || [],
    addEvent,
    saveDraft,
    updateDraft,
    updateEventStatus,
    removeEvent,
    clearEvents,
  };
};
