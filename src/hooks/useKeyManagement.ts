import { useCallback, useEffect, useState } from "react";
import { KeyManagement } from "../services/keyManagement/keyManagement";

export interface KeyPair {
  publicKey: JsonWebKey;
  privateKey: JsonWebKey;
  kid?: number;
}

const useKeyManagement = () => {
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyStatus, setKeyStatus] = useState("Initializing keys...");

  const initializeKeys = useCallback(async () => {
    try {
      setIsLoading(true);
      setKeyStatus("Initializing key management...");

      // This will get an existing key or create a new one if none exists
      setKeyStatus("Getting or creating key pair...");
      const keys = await KeyManagement();

      const newKeyPair = {
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        kid: 1, // Using fixed KID as per key management service
      };

      setKeyPair(newKeyPair);
      setKeyStatus("Key management initialized successfully");
      setIsLoading(false);
      return newKeyPair;
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("Failed to initialize keys");
      console.error("Key initialization error:", error);
      setError(error.message);
      setKeyStatus("Failed to initialize keys");
      setIsLoading(false);
      throw error;
    }
  }, []);

  // Auto-start key management when hook is mounted
  useEffect(() => {
    initializeKeys();
  }, [initializeKeys]);

  return {
    keyPair,
    error,
    keyStatus,
    isLoading,
    isInitialized: !!keyPair && !error,
    initializeKeys,
  };
};

export default useKeyManagement;
