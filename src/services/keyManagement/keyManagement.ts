import checkKeyPairExists from "./checkKeyPairExists";
import storeKeyPair, { retrieveKeyPair } from "./storeKey";

export async function KeyManagement() {
  const keyPairExists = await checkKeyPairExists();
  if (!keyPairExists) {
    await storeKeyPair();
  }
  const { publicKey, privateKey } = await retrieveKeyPair(1);
  if (!publicKey || !privateKey) {
    throw new Error("Failed to retrieve key pair.");
  }
  return { publicKey, privateKey };
}
