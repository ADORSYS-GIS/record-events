import { useEffect, useState } from "react";
import {
  useAuthenticationServicePostApiV1PowChallenge,
  useAuthenticationServicePostApiV1PowVerify,
} from "../openapi-rq/queries/queries";
import type { PowChallengeResponse } from "../openapi-rq/requests/types.gen";
import { performProofOfWork } from "../services/computation/proofOfWork";
import { apiAuthService } from "../services/keyManagement/apiAuthService";

interface UseInitializationProps {
  publicKey: JsonWebKey | null;
  isKeyGenerating?: boolean;
}

const useInitialization = ({
  publicKey,
  isKeyGenerating,
}: UseInitializationProps) => {
  const [devCert, setDevCert] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [powStatus, setPowStatus] = useState("Waiting for key generation...");

  // Use TanStack Query mutations for Proof of Work
  const challengeMutation = useAuthenticationServicePostApiV1PowChallenge();
  const verifyMutation = useAuthenticationServicePostApiV1PowVerify();

  // I intentionally do NOT add challengeMutation/verifyMutation to the dependency array
  // because they are stable (from TanStack Query) and adding them would cause infinite loops.
  useEffect(() => {
    // Only run initialization if we have a public key, haven't already completed, and key generation is finished
    if (!publicKey || devCert || isKeyGenerating) {
      if (isKeyGenerating) {
        setPowStatus("Waiting for key generation to complete...");
      }
      return;
    }

    let cancelled = false;
    const performInitialization = async () => {
      try {
        setIsLoading(true);
        setPowStatus("Starting Proof of Work initialization...");

        // Step 1: Request PoW challenge from backend
        setPowStatus("Requesting challenge from server...");
        const challengeRes =
          (await challengeMutation.mutateAsync()) as PowChallengeResponse;

        if (!challengeRes) {
          throw new Error("Failed to receive PoW challenge from the server.");
        }

        // Step 2: Perform Proof of Work
        setPowStatus("Computing Proof of Work...");
        const result = await performProofOfWork(
          challengeRes.challenge_data,
          challengeRes.difficulty,
        );

        // Step 3: Verify PoW solution and get token
        setPowStatus("Verifying solution...");
        const verifyRes = (await verifyMutation.mutateAsync({
          requestBody: {
            solution: {
              challenge_id: challengeRes.challenge_id,
              nonce: result.nonce,
              hash: result.hash,
            },
            public_key: btoa(JSON.stringify(publicKey)), // Base64 encode the public key
            relay_id: `device_${Date.now()}`, // Generate a unique device ID
          },
        })) as { token: string };

        if (!verifyRes || !verifyRes.token) {
          throw new Error("Failed to verify PoW solution and receive token.");
        }

        // Store the token
        const token = verifyRes.token;

        // Set the token received from PoW verification as the Bearer token for API requests
        apiAuthService.setBearerToken(token);

        localStorage.setItem("authToken", token);

        if (!cancelled) {
          setDevCert("token_received"); // Set a flag to indicate successful initialization
          setPowStatus("Proof of Work completed successfully");
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message || "Unknown error occurred.");
          setPowStatus("Proof of Work failed");
          setIsLoading(false);
        }
      }
    };

    performInitialization();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, isKeyGenerating]);

  return { devCert, error, isLoading, powStatus };
};

export default useInitialization;
