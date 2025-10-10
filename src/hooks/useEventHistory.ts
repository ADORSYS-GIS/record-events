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
  const events = useLiveQuery(
    () => db.events.orderBy("timestamp").reverse().toArray(),
    [],
  );

  const addEvent = useCallback(
    async (eventPackage: EventPackage, hash?: string) => {
      const newEvent: LocalEvent = {
        id: eventPackage.id,
        title: `Event ${eventPackage.id.slice(0, 8)}`,
        status: "pending",
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
      // Try to find a location annotation in priority order
      const priorityLabelIds = ["other_station", "other_locality", "station", "locality", "3"];
      let locationValue = "";
      
      for (const labelId of priorityLabelIds) {
        const annotation = eventPackage.annotations.find(
          (annotation) => annotation.labelId === labelId,
        );
        if (annotation?.value && annotation.value !== "") {
          locationValue = annotation.value as string;
          break;
        }
      }
      
      // Generate title with location + first 4 characters of event ID
      const eventIdPrefix = eventPackage.id.slice(0, 4);
      const draftTitle = locationValue
        ? `${locationValue} ${eventIdPrefix}`
        : `Draft ${eventIdPrefix}`;

      const newDraft: LocalEvent = {
        id: eventPackage.id,
        title: draftTitle,
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
