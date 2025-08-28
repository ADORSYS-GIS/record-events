import { useState, useEffect, useCallback } from "react";
import { KeyManagement } from "../services/keyManagement/keyManagement";
import { PasswordManager } from "../services/keyManagement/passwordManager";

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
  const [isWebAuthnComplete, setIsWebAuthnComplete] = useState(false);
  const [webAuthnStatus, setWebAuthnStatus] = useState<string>("");

  const initializeKeys = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsWebAuthnComplete(false);
      setKeyStatus("Initializing key management...");

      // Check if user is returning or new
      const messages = JSON.parse(localStorage.getItem("messages") ?? "[]");
      if (messages.length > 0) {
        setWebAuthnStatus("Checking existing security credentials...");
      } else {
        setWebAuthnStatus("Setting up new security credentials...");
      }

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

      // Don't set loading to false yet - wait for WebAuthn completion
      return newKeyPair;
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("Failed to initialize keys");
      console.error("Key initialization error:", error);
      setError(error.message);
      setKeyStatus("Failed to initialize keys");
      setIsWebAuthnComplete(true);
      setIsLoading(false);
      throw error;
    }
  }, []);

  // Listen for WebAuthn events
  useEffect(() => {
    const handleWebAuthnEvent = (event: CustomEvent) => {
      const { state, details } = event.detail;
      console.log("WebAuthn event received:", state, details);

      switch (state) {
        case "started":
          setWebAuthnStatus(`WebAuthn ${details.type} started...`);
          break;
        case "completed":
          setWebAuthnStatus(`WebAuthn ${details.type} completed successfully`);
          setIsWebAuthnComplete(true);
          setIsLoading(false);
          break;
        case "failed":
          if (details.type === "fallback") {
            setWebAuthnStatus("Using secure password generation");
          } else {
            setWebAuthnStatus(
              `WebAuthn ${details.type} failed, using fallback`,
            );
          }
          setIsWebAuthnComplete(true);
          setIsLoading(false);
          break;
      }
    };

    PasswordManager.addWebAuthnListener(handleWebAuthnEvent);

    // Fallback timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (!isWebAuthnComplete && isLoading) {
        console.warn("WebAuthn timeout - forcing completion");
        setWebAuthnStatus("WebAuthn timeout, using fallback");
        setIsWebAuthnComplete(true);
        setIsLoading(false);
      }
    }, 30000); // 30 second timeout

    return () => {
      PasswordManager.removeWebAuthnListener(handleWebAuthnEvent);
      clearTimeout(timeoutId);
    };
  }, [isWebAuthnComplete, isLoading]);

  // Auto-start key management when hook is mounted
  useEffect(() => {
    initializeKeys();
  }, [initializeKeys]);

  return {
    keyPair,
    error,
    keyStatus,
    webAuthnStatus,
    isLoading: isLoading || !isWebAuthnComplete,
    isInitialized: !!keyPair && !error && isWebAuthnComplete,
    initializeKeys,
  };
};

export default useKeyManagement;
