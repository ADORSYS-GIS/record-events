import storage from "./storageSetup"; // Import the initialized storage
import generateKeyPair from "./generateKey"; // Import your existing key generation function

// Function to store a key pair in IndexedDB
export async function storeKeyPair() {
  console.log("Starting key pair generation...");
  const { publicKey, privateKey } = await generateKeyPair();
  console.log("Key pair generated successfully.");
  console.log("Storing key pair in IndexedDB...");
  try {
    await storage.insert("keys", {
      value: {
        pub: publicKey,
        priv: privateKey,
        kid: 1,
      },
    });
    console.log("Key pair stored successfully.");
  } catch (err: any) {
    // Ignore "Key already exists" error
    if (err?.message?.includes("Key already exists")) {
      console.warn("Key already exists, skipping insert.");
    } else {
      throw err;
    }
  }
}

// Function to retrieve the key pair from IndexedDB
export async function retrieveKeyPair(kid: number) {
  console.log(`Retrieving key pair with ID: ${kid} from IndexedDB...`);
  const retrievedRecord = await storage.findOne("keys", kid);

  if (retrievedRecord) {
    console.log("Key pair retrieved successfully:", retrievedRecord);

    const { pub: publicKey, priv: privateKey } = retrievedRecord.value;

    return { publicKey, privateKey };
  } else {
    console.error("No key pair found with key ID:", kid);
    return { publicKey: null, privateKey: null };
  }
}

export default storeKeyPair;
