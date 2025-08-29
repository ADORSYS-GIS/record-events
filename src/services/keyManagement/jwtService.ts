import * as CryptoJS from "crypto-js";
import * as jose from "jose";
import type { EventPackage } from "../../types/event";

function hashPayload(payload: string): string {
  return CryptoJS.SHA256(payload).toString(CryptoJS.enc.Hex);
}

// Generate a JWT token with event data in the payload for event submission
export async function generateEventJWT(
  privateKeyJWK: jose.JWK,
  publicKeyJWK: jose.JWK,
  eventPackage: EventPackage,
  deviceCertToken?: string,
): Promise<string> {
  // Create the JWT payload with the complete event data
  const jwtPayload = {
    // Standard JWT claims
    sub: "event_submission", // Subject
    aud: "event_server", // Audience
    iss: "event_client", // Issuer
    iat: Math.floor(Date.now() / 1000), // Issued at
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour

    // Event package payload (matches backend EventJwtClaims structure)
    payload: eventPackage,

    // Hash of the event data for integrity verification
    event_hash: hashPayload(JSON.stringify(eventPackage)),
  };

  try {
    // Convert the private key JWK to a CryptoKey
    const privateKey = await jose.importJWK(privateKeyJWK, "ES256");

    // Prepare the JWT header with public key and device certificate
    const header: jose.JWTHeaderParameters = {
      typ: "JWT",
      alg: "ES256",
      jwk: publicKeyJWK, // Include public key in header for verification
    };

    // Add device certificate to header if provided
    if (deviceCertToken) {
      header["x-device-cert"] = deviceCertToken;
    }

    // Sign the JWT with the private key and custom header
    const jwt = await new jose.SignJWT(jwtPayload)
      .setProtectedHeader(header)
      .sign(privateKey);

    return jwt;
  } catch (error) {
    console.error("Error generating Event JWT:", error);
    throw new Error("Failed to generate Event JWT.");
  }
}

// Generate a Bearer token for API authorization
export async function generateBearerToken(
  privateKeyJWK: jose.JWK,
  publicKeyJWK: jose.JWK,
  eventData: string,
  deviceCertToken?: string,
): Promise<string> {
  // Hash the event data
  const hashedData = hashPayload(eventData);

  // Create the JWT payload for authorization
  const jwtPayload = {
    sub: "event_submission", // Subject
    aud: "event_server", // Audience
    iss: "event_client", // Issuer
    iat: Math.floor(Date.now() / 1000), // Issued at
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
    event_hash: hashedData,
  };

  try {
    // Convert the private key JWK to a CryptoKey
    const privateKey = await jose.importJWK(privateKeyJWK, "ES256");

    // Prepare the JWT header with public key and device certificate
    const header: jose.JWTHeaderParameters = {
      typ: "JWT",
      alg: "ES256",
      jwk: publicKeyJWK, // Include public key in header for verification
    };

    // Add device certificate to header if provided
    if (deviceCertToken) {
      header["x-device-cert"] = deviceCertToken;
    }

    // Sign the JWT with the private key and custom header
    const jwt = await new jose.SignJWT(jwtPayload)
      .setProtectedHeader(header)
      .sign(privateKey);

    return jwt;
  } catch (error) {
    console.error("Error generating Bearer token:", error);
    throw new Error("Failed to generate Bearer token.");
  }
}

// Legacy function for backward compatibility (simplified)
export async function generateJWT(
  privateKeyJWK: jose.JWK,
  publicKeyJWK: jose.JWK,
  ...data: Array<string | number>
): Promise<string> {
  // Hash the payload
  let concatenatedString = "";
  data.forEach((element) => {
    concatenatedString += element;
  });
  const hashedPayload = hashPayload(concatenatedString);

  // Create the JWT payload
  const jwtPayload = {
    hash: hashedPayload,
    iat: Math.floor(Date.now() / 1000), // Issued at
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
  };

  try {
    // Convert the private key JWK to a CryptoKey
    const privateKey = await jose.importJWK(privateKeyJWK, "ES256");

    // Prepare the JWT header
    const header: jose.JWTHeaderParameters = {
      typ: "JWT",
      alg: "ES256",
      jwk: publicKeyJWK, // Include public key in header for verification
    };

    // Sign the JWT with the private key and custom header
    const jwt = await new jose.SignJWT(jwtPayload)
      .setProtectedHeader(header)
      .sign(privateKey);

    return jwt;
  } catch (error) {
    console.error("Error generating JWT:", error);
    throw new Error("Failed to generate JWT.");
  }
}
