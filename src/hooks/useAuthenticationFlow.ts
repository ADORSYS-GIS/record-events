import { useCallback, useEffect, useRef, useState } from "react";
import {
  useAuthenticationServicePostApiV1PowChallenge,
  useAuthenticationServicePostApiV1PowVerify,
} from "../openapi-rq/queries/queries";
import type { PowChallengeResponse } from "../openapi-rq/requests/types.gen";
import { performProofOfWork } from "../services/computation/proofOfWork";
import { apiAuthService } from "../services/keyManagement/apiAuthService";
import { KeyManagement } from "../services/keyManagement/keyManagement";
import { PasswordManager } from "../services/keyManagement/passwordManager";

export interface KeyPair {
  publicKey: JsonWebKey;
  privateKey: JsonWebKey;
  kid?: number;
}

export interface AuthenticationStatus {
  // Overall status
  isComplete: boolean;
  isLoading: boolean;
  error: string | null;

  // Key management status
  keyPair: KeyPair | null;
  keyStatus: string;
  isKeyGenerating: boolean;

  // WebAuthn status
  webAuthnStatus: string;
  isWebAuthnRegistering: boolean;

  // POW status
  powStatus: string;
  isPowComputing: boolean;

  // Certificate
  devCert: string | null;
}

const useAuthenticationFlow = () => {
  const [status, setStatus] = useState<AuthenticationStatus>({
    isComplete: false,
    isLoading: true,
    error: null,
    keyPair: null,
    keyStatus: "Initializing authentication...",
    isKeyGenerating: true,
    webAuthnStatus: "Waiting for key generation...",
    isWebAuthnRegistering: false,
    powStatus: "Waiting for WebAuthn registration...",
    isPowComputing: false,
    devCert: null,
  });

  const hasStartedRef = useRef(false);
  const isInitializedRef = useRef(false);

  // Use TanStack Query mutations for Proof of Work
  const challengeMutation = useAuthenticationServicePostApiV1PowChallenge();
  const verifyMutation = useAuthenticationServicePostApiV1PowVerify();

  // Step 1: Key Generation
  const generateKeys = useCallback(async () => {
    try {
      setStatus((prev) => ({
        ...prev,
        keyStatus: "Generating cryptographic keys...",
        isKeyGenerating: true,
      }));

      const keys = await KeyManagement();

      const keyPair: KeyPair = {
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        kid: 1,
      };

      // Store keyPair in localStorage for persistence
      localStorage.setItem("eventApp_keyPair", JSON.stringify(keyPair));

      setStatus((prev) => ({
        ...prev,
        keyPair,
        keyStatus: "Keys generated successfully",
        isKeyGenerating: false,
      }));

      return keyPair;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to generate keys";
      setStatus((prev) => ({
        ...prev,
        error: errorMessage,
        keyStatus: "Key generation failed",
        isKeyGenerating: false,
        isLoading: false,
      }));
      throw error;
    }
  }, []);

  // Cleanup function to remove stored data
  const cleanupStoredData = useCallback(() => {
    localStorage.removeItem("eventApp_keyPair");
    localStorage.removeItem("authToken");
  }, []);

  // Restore keyPair from localStorage
  const restoreKeyPair = useCallback(() => {
    try {
      const storedKeyPair = localStorage.getItem("eventApp_keyPair");

      if (storedKeyPair) {
        const keyPair: KeyPair = JSON.parse(storedKeyPair);

        // Validate the restored keyPair
        if (keyPair && keyPair.publicKey && keyPair.privateKey) {
          setStatus((prev) => ({
            ...prev,
            keyPair,
            keyStatus: "Keys restored from storage",
            isKeyGenerating: false,
          }));
          return keyPair;
        } else {
          localStorage.removeItem("eventApp_keyPair");
        }
      }
    } catch (error) {
      localStorage.removeItem("eventApp_keyPair");
    }
    return null;
  }, []);

  // Step 2: WebAuthn Registration
  const registerWebAuthn = useCallback(async () => {
    try {
      setStatus((prev) => ({
        ...prev,
        webAuthnStatus: "Setting up device security...",
        isWebAuthnRegistering: true,
      }));

      // Initialize DOM elements for WebAuthn
      await PasswordManager.initializeDOMElements();

      // Get password (this triggers WebAuthn registration)
      const password = await PasswordManager.getPassword();

      if (!password) {
        throw new Error("WebAuthn registration failed");
      }

      setStatus((prev) => ({
        ...prev,
        webAuthnStatus: "Device security configured successfully",
        isWebAuthnRegistering: false,
      }));

      return password;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "WebAuthn registration failed";
      setStatus((prev) => ({
        ...prev,
        error: errorMessage,
        webAuthnStatus: "Device security setup failed",
        isWebAuthnRegistering: false,
        isLoading: false,
      }));
      throw error;
    }
  }, []);

  // Step 3: Proof of Work
  const performPow = useCallback(
    async (publicKey: JsonWebKey) => {
      try {
        setStatus((prev) => ({
          ...prev,
          powStatus: "Starting Proof of Work...",
          isPowComputing: true,
        }));

        // Step 1: Request PoW challenge from backend
        setStatus((prev) => ({
          ...prev,
          powStatus: "Requesting challenge from server...",
        }));

        const challengeRes =
          (await challengeMutation.mutateAsync()) as PowChallengeResponse;

        if (!challengeRes) {
          throw new Error("Failed to receive PoW challenge from the server.");
        }

        // Step 2: Perform Proof of Work
        setStatus((prev) => ({
          ...prev,
          powStatus: "Computing Proof of Work...",
        }));

        const result = await performProofOfWork(
          challengeRes.challenge_data,
          challengeRes.difficulty,
        );

        // Step 3: Verify PoW solution and get token
        setStatus((prev) => ({
          ...prev,
          powStatus: "Verifying solution...",
        }));

        const verifyRes = (await verifyMutation.mutateAsync({
          requestBody: {
            solution: {
              challenge_id: challengeRes.challenge_id,
              nonce: result.nonce,
              hash: result.hash,
            },
            public_key: btoa(JSON.stringify(publicKey)),
            relay_id: `device_${Date.now()}`,
          },
        })) as { token: string };

        if (!verifyRes || !verifyRes.token) {
          throw new Error("Failed to verify PoW solution and receive token.");
        }

        // Store the token
        const token = verifyRes.token;
        apiAuthService.setBearerToken(token);
        localStorage.setItem("authToken", token);

        setStatus((prev) => ({
          ...prev,
          devCert: token,
          powStatus: "Proof of Work completed successfully",
          isPowComputing: false,
        }));

        return token;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Proof of Work failed";
        setStatus((prev) => ({
          ...prev,
          error: errorMessage,
          powStatus: "Proof of Work failed",
          isPowComputing: false,
          isLoading: false,
        }));
        throw error;
      }
    },
    [challengeMutation, verifyMutation],
  );

  // Check if authentication is already complete
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Restore keyPair from storage
      const restoredKeyPair = restoreKeyPair();

      if (restoredKeyPair) {
        setStatus((prev) => ({
          ...prev,
          isComplete: true,
          isLoading: false,
          devCert: authToken,
          keyPair: restoredKeyPair,
        }));
        isInitializedRef.current = true;
        return;
      } else {
        // If keyPair restoration failed, clean up and restart auth flow
        cleanupStoredData();
      }
    }

    // Start authentication flow on mount (only once)
    if (!hasStartedRef.current && !isInitializedRef.current) {
      hasStartedRef.current = true;

      const performAuthentication = async () => {
        try {
          setStatus((prev) => ({
            ...prev,
            isLoading: true,
            error: null,
          }));

          // Step 1: Generate keys
          const keyPair = await generateKeys();

          // Step 2: Register WebAuthn
          await registerWebAuthn();

          // Step 3: Perform Proof of Work
          await performPow(keyPair.publicKey);

          // All steps completed successfully
          setStatus((prev) => ({
            ...prev,
            isComplete: true,
            isLoading: false,
          }));
          isInitializedRef.current = true;
        } catch (error) {
          // Clean up stored data on error
          cleanupStoredData();
          // Error is already set in the individual steps
        }
      };

      performAuthentication();
    }
  }, [
    restoreKeyPair,
    cleanupStoredData,
    generateKeys,
    performPow,
    registerWebAuthn,
  ]); // Add all dependencies

  return {
    ...status,
    logout: cleanupStoredData,
  };
};

export default useAuthenticationFlow;
