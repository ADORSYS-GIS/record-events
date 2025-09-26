import { useEffect, useState } from "react";
import { LocalEvent, useEventHistory } from "./useEventHistory";
import { useEventSubmission } from "./useEventSubmission";
import { useOnlineStatus } from "./useOnlineStatus";
import { Buffer } from "buffer";
import { generateEventJWT } from "../services/keyManagement/jwtService";
import { KeyPair } from "./useKeyInitialization";
import { EventPackage } from "../types/event";

export const useBackgroundSync = (keyPair?: KeyPair) => {
  const { events, updateEventStatus } = useEventHistory();
  const { submitEventDataAsync, submitEventImageAsync } = useEventSubmission();
  const { isOnline } = useOnlineStatus();
  const [syncing, setSyncing] = useState<string[]>([]);

  useEffect(() => {
    const processEvent = async (event: LocalEvent) => {
      if (syncing.includes(event.id)) {
        return;
      }

      try {
        setSyncing((prev) => [...prev, event.id]);
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Authentication token not found.");
        }

        const jwtEventData = await generateEventJWT(
          keyPair!.privateKey,
          keyPair!.publicKey,
          event.eventPackage as EventPackage,
          token,
        );

        await submitEventDataAsync(jwtEventData);

        if (event.image) {
          const imagePackage = {
            ...event.eventPackage,
            media: {
              type: event.image.type,
              data: Buffer.from(await event.image.arrayBuffer()).toString(
                "base64",
              ),
              name: "capture.jpg",
              size: event.image.size,
              lastModified: new Date().getTime(),
            },
          };
          const jwtImageEventData = await generateEventJWT(
            keyPair!.privateKey,
            keyPair!.publicKey,
            imagePackage as EventPackage,
            token,
          );
          await submitEventImageAsync(jwtImageEventData);
        }

        updateEventStatus(event.id, "submitted");
      } catch (error) {
        console.error("Background sync failed for event:", event.id, error);
        updateEventStatus(event.id, "failed");
      } finally {
        setSyncing((prev) => prev.filter((id) => id !== event.id));
      }
    };

    const syncEvents = async () => {
      if (isOnline && keyPair) {
        const pendingEvents = events.filter(
          (event) => event.status === "pending",
        );
        for (const event of pendingEvents) {
          await processEvent(event);
        }
      }
    };

    const retryFailedEvents = async () => {
      if (isOnline && keyPair) {
        const failedEvents = events.filter(
          (event) => event.status === "failed",
        );
        for (const event of failedEvents) {
          await processEvent(event);
        }
      }
    };

    syncEvents();
    const retryInterval = setInterval(retryFailedEvents, 60000); // Retry every 1 minute

    return () => {
      clearInterval(retryInterval);
    };
  }, [
    isOnline,
    events,
    keyPair,
    submitEventDataAsync,
    submitEventImageAsync,
    updateEventStatus,
    syncing,
  ]);
};
