import { useEffect, useState } from "react";
import { fetchPowChallenge, solvePow, submitPowSolution } from "../crypto/pow";

export function useProofOfWork() {
  const [powStatus, setPowStatus] = useState("PoW: Initializing...");

  useEffect(() => {
    const runPow = async () => {
      try {
        setPowStatus("PoW: Fetching challenge...");
        const challenge = await fetchPowChallenge();
        setPowStatus(`PoW: Solving with difficulty ${challenge.difficulty}...`);
        const nonce = solvePow(challenge);
        setPowStatus(`PoW: Submitting solution (nonce: ${nonce})...`);
        const success = await submitPowSolution(nonce);
        if (success) {
          setPowStatus("PoW: Completed successfully!");
        } else {
          setPowStatus("PoW: Failed.");
        }
      } catch (error) {
        setPowStatus(`PoW: Error - ${error}`);
        console.error("PoW error:", error);
      }
    };
    runPow();
  }, []);

  return { powStatus };
}
