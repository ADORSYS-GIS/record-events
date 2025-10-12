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
    powStatus: "Waiting for key generation...",
    isPowComputing: false,
    devCert: null,
  });
  const [authTrigger, setAuthTrigger] = useState(0);

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
    setAuthTrigger((prev) => prev + 1);
  }, []);

  // Restore keyPair from localStorage
  const restoreKeyPair = useCallback(() => {
    try {
      const storedKeyPair = localStorage.getItem("eventApp_keyPair");

      if (storedKeyPair) {
        const keyPair: KeyPair = JSON.parse(storedKeyPair);

        // Validate the restored keyPair
        if (keyPair && keyPair.publicKey && keyPair.privateKey) {
          return keyPair;
        }
        localStorage.removeItem("eventApp_keyPair");
      }
    } catch (error) {
      localStorage.removeItem("eventApp_keyPair");
    }
    return null;
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

  const performAuthentication = useCallback(async () => {
    // Prevent multiple concurrent runs
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    try {
      // Reset status at the beginning of the flow
      setStatus({
        isComplete: false,
        isLoading: true,
        error: null,
        keyPair: null,
        keyStatus: "Initializing authentication...",
        isKeyGenerating: true,
        powStatus: "Waiting for key generation...",
        isPowComputing: false,
        devCert: null,
      });

      // Step 1: Generate keys
      const keyPair = await generateKeys();

      // Step 2: Perform Proof of Work
      await performPow(keyPair.publicKey);

      // All steps completed successfully
      setStatus((prev) => ({
        ...prev,
        isComplete: true,
        isLoading: false,
      }));
      isInitializedRef.current = true;
    } catch (error) {
      // Error is already set in the individual steps, just ensure loading is false
      setStatus((prev) => ({ ...prev, isLoading: false }));
    } finally {
      hasStartedRef.current = false; // Allow re-running if needed
    }
  }, [generateKeys, performPow]);

  // Simplified logout function
  const logoutAndReauthenticate = useCallback(() => {
    localStorage.removeItem("eventApp_keyPair");
    localStorage.removeItem("authToken");
    isInitializedRef.current = false;
    performAuthentication();
  }, [performAuthentication]);

  // Check if authentication is already complete on initial mount
  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
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
      }
    }

    // If no valid session, start the authentication flow
    performAuthentication();
  }, [performAuthentication, restoreKeyPair]);

  return {
    ...status,
    reauthenticate: performAuthentication,
    logout: logoutAndReauthenticate,
  };
};

export default useAuthenticationFlow;
