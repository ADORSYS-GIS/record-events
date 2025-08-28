import checkKeyPairExists from "./checkKeyPairExists";
import { clearAllStoredData } from "./storageSetup";
import storeKeyPair, { retrieveKeyPair } from "./storeKey";

export async function KeyManagement() {
  try {
    const keyPairExists = await checkKeyPairExists();
    if (!keyPairExists) {
      await storeKeyPair();
    }
    const { publicKey, privateKey } = await retrieveKeyPair(1);
    if (!publicKey || !privateKey) {
      throw new Error("Failed to retrieve key pair.");
    }
    return { publicKey, privateKey };
  } catch (error) {
    console.warn(
      "Key retrieval failed, clearing stored keys and generating new ones:",
      error,
    );

    // Clear all stored data
    try {
      await clearAllStoredData();
      console.log("Cleared all stored data");
    } catch (clearError) {
      console.warn("Failed to clear stored data:", clearError);
    }

    // Generate new key pair
    await storeKeyPair();
    const { publicKey, privateKey } = await retrieveKeyPair(1);

    if (!publicKey || !privateKey) {
      throw new Error("Failed to generate new key pair.");
    }

    return { publicKey, privateKey };
  }
}
