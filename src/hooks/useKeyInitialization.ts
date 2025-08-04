import { useEffect, useState, useCallback } from "react";
import { KeyManagement } from "../services/keyManagement/keyManagement";

export interface KeyPair {
  publicKey: JsonWebKey;
  privateKey: JsonWebKey;
  kid?: number;
}

export function useKeyInitialization() {
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);
  const [keyStatus, setKeyStatus] = useState("Initializing keys...");
  const [error, setError] = useState<Error | null>(null);

  const initializeKeys = useCallback(async () => {
    try {
      setKeyStatus("Initializing key management...");

      // This will get an existing key or create a new one if none exists
      setKeyStatus("Getting or creating key pair...");
      const keys = await KeyManagement();

      setKeyPair({
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        kid: 1, // Using fixed KID as per key management service
      });

      setKeyStatus("Key management initialized successfully");
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("Failed to initialize keys");
      console.error("Key initialization error:", error);
      setError(error);
      setKeyStatus("Failed to initialize keys");
    }
  }, []);

  useEffect(() => {
    initializeKeys();
  }, [initializeKeys]);

  return {
    keyPair,
    keyStatus,
    error,
    isInitialized: !!keyPair && !error,
    isLoading: !keyPair && !error,
  };
}

export default useKeyInitialization;
