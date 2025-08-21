import { sha256 } from "js-sha256";

export interface PowChallenge {
  prefix: string;
  difficulty: number;
}

// Mock function to get a PoW challenge from a relay
export async function fetchPowChallenge(): Promise<PowChallenge> {
  console.log("Fetching PoW challenge...");
  // In a real implementation, this would be a network request to a relay.
  return new Promise((resolve) => {
    setTimeout(() => {
      const challenge = {
        prefix: "eventapp",
        difficulty: 10,
      };
      console.log("PoW challenge received:", challenge);
      resolve(challenge);
    }, 1000);
  });
}

export function solvePow(challenge: PowChallenge): number {
  let nonce = 0;
  const target = "0".repeat(challenge.difficulty);

  console.log("Solving PoW challenge...");

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = `${challenge.prefix}:${nonce}`;
    const hash = sha256(data);
    if (hash.startsWith(target)) {
      console.log(`PoW solved! Nonce: ${nonce}, Hash: ${hash}`);
      return nonce;
    }
    nonce++;
  }
}

// Mock function to submit the PoW solution to a relay
export async function submitPowSolution(nonce: number): Promise<boolean> {
  console.log(`Submitting PoW solution with nonce: ${nonce}`);
  // In a real implementation, this would be a network request to a relay.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("PoW solution accepted.");
      resolve(true);
    }, 1000);
  });
}
