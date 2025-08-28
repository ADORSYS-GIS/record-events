import { useState, useEffect } from "react";
import {
  useAuthenticationServicePostApiV1PowChallenge,
  useAuthenticationServicePostApiV1PowVerify,
} from "../openapi-rq/queries/queries";
import { performProofOfWork } from "../services/computation/proofOfWork";
import { apiAuthService } from "../services/keyManagement/apiAuthService";
import type {
  PowChallengeResponse,
  CertificateResponse,
} from "../openapi-rq/requests/types.gen";

interface UseInitializationProps {
  publicKey: JsonWebKey | null;
}

const useInitialization = ({ publicKey }: UseInitializationProps) => {
  const [devCert, setDevCert] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use TanStack Query mutations for Proof of Work
  const challengeMutation = useAuthenticationServicePostApiV1PowChallenge();
  const verifyMutation = useAuthenticationServicePostApiV1PowVerify();

  // I intentionally do NOT add challengeMutation/verifyMutation to the dependency array
  // because they are stable (from TanStack Query) and adding them would cause infinite loops.
  useEffect(() => {
    // Only run initialization if we have a public key and haven't already completed
    if (!publicKey || devCert) {
      return;
    }

    let cancelled = false;
    const performInitialization = async () => {
      try {
        setIsLoading(true);

        // Step 1: Request PoW challenge from backend
        console.log("Requesting PoW challenge from backend");
        const challengeRes =
          (await challengeMutation.mutateAsync()) as PowChallengeResponse;
        console.log("Received PoW challenge:", challengeRes);

        if (!challengeRes) {
          throw new Error("Failed to receive PoW challenge from the server.");
        }

        // Step 2: Perform Proof of Work
        console.log(
          "Starting Proof of Work with challenge:",
          challengeRes.challenge_id,
        );
        const result = await performProofOfWork(
          challengeRes.challenge_data,
          challengeRes.difficulty,
        );
        console.log("Proof of Work completed with result:", result);

        // Step 3: Verify PoW solution and get certificate
        console.log("Submitting PoW solution for verification");
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
        })) as CertificateResponse;

        console.log("PoW verification response:", verifyRes);

        if (!verifyRes || !verifyRes.success) {
          throw new Error(
            "Failed to verify PoW solution and receive certificate.",
          );
        }

        // Store the certificate and token
        const certificate = JSON.stringify(verifyRes.certificate);
        const token = verifyRes.token;

        // Set the token received from PoW verification as the Bearer token for API requests
        apiAuthService.setBearerToken(token);

        localStorage.setItem("devCert", certificate);
        localStorage.setItem("authToken", token);

        if (!cancelled) {
          setDevCert(certificate);
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message || "Unknown error occurred.");
          setIsLoading(false);
        }
      }
    };

    performInitialization();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return { devCert, error, isLoading };
};

export default useInitialization;
