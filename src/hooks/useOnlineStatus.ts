import { useState, useEffect } from "react";

// Define interfaces for the Network Information API
interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  addEventListener: (event: string, listener: () => void) => void;
  removeEventListener: (event: string, listener: () => void) => void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

export interface OnlineStatus {
  isOnline: boolean;
  isConnected: boolean;
  connectionType?: string;
  downlink?: number;
  effectiveType?: string;
  rtt?: number;
}

export const useOnlineStatus = (): OnlineStatus => {
  const [status, setStatus] = useState<OnlineStatus>({
    isOnline: navigator.onLine,
    isConnected: navigator.onLine,
  });

  useEffect(() => {
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine;

      // Get connection information if available
      const nav = navigator as NavigatorWithConnection;
      const connection =
        nav.connection || nav.mozConnection || nav.webkitConnection;

      if (connection) {
        setStatus({
          isOnline,
          isConnected: isOnline && connection.effectiveType !== "slow-2g",
          connectionType: connection.effectiveType || "unknown",
          downlink: connection.downlink,
          effectiveType: connection.effectiveType,
          rtt: connection.rtt,
        });
      } else {
        setStatus({
          isOnline,
          isConnected: isOnline,
        });
      }
    };

    // Initial status
    updateOnlineStatus();

    // Listen for online/offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Listen for connection changes if supported
    const nav = navigator as NavigatorWithConnection;
    const connection =
      nav.connection || nav.mozConnection || nav.webkitConnection;
    if (connection) {
      connection.addEventListener("change", updateOnlineStatus);
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      if (connection) {
        connection.removeEventListener("change", updateOnlineStatus);
      }
    };
  }, []);

  return status;
};
