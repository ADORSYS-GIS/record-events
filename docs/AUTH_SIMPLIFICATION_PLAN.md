# Simplification Plan: Removing WebAuthn

This document outlines the plan to remove the WebAuthn layer from the authentication process. The goal is to simplify the flow by generating a password and storing it directly in `localStorage`.

**Disclaimer**: This approach significantly reduces the security of the key management process and should only be used for development and testing purposes.

## 1. Modify `PasswordManager`

-   **File**: [`src/services/keyManagement/passwordManager.ts`](src/services/keyManagement/passwordManager.ts)
-   **Objective**: Remove all WebAuthn-related logic and replace it with a simple password generation and storage mechanism.

### Changes:

1.  **Remove WebAuthn Module**: Delete the `loadWebAuthnModule` method and all related properties (`isRegistering`, `isAuthenticating`, `webAuthnModule`).
2.  **Simplify `getPassword`**:
    -   Check `sessionStorage` for an existing password.
    -   If not found, check `localStorage` for a persisted password.
    -   If still not found, generate a new password using `generateSecurePassword`.
    -   Store the new password in both `localStorage` (for persistence) and `sessionStorage` (for the current session).
3.  **Remove DOM Elements**: Delete the `initializeDOMElements` method.
4.  **Remove WebAuthn Handlers**: Delete `attemptAuthentication`, `handleNewUserRegistration`, and `cancelPendingRequests`.

## 2. Update `useAuthenticationFlow`

-   **File**: [`src/hooks/useAuthenticationFlow.ts`](src/hooks/useAuthenticationFlow.ts)
-   **Objective**: Remove the WebAuthn registration step from the main authentication flow.

### Changes:

1.  **Remove `registerWebAuthn`**: Delete the `registerWebAuthn` function and all its references.
2.  **Update `performAuthentication`**: Remove the call to `registerWebAuthn` from the `performAuthentication` function. The flow will now be:
    1.  `generateKeys()`
    2.  `performPow()`
3.  **Clean Up State**: Remove WebAuthn-related properties from the `AuthenticationStatus` interface and the initial state (e.g., `webAuthnStatus`, `isWebAuthnRegistering`).

## 3. No Changes to Encryption

-   **File**: [`src/services/keyManagement/encrypt.ts`](src/services/keyManagement/encrypt.ts)
-   The `encryptPrivateKey` and `decryptPrivateKey` functions will continue to work as expected. They will now receive the raw password directly from the simplified `PasswordManager`, but the core encryption logic (`PBKDF2` and `AES-GCM`) will remain the same.
