// Define proper types for WebAuthn event details
interface WebAuthnEventDetails {
  type?: "authentication" | "registration" | "fallback";
  reason?: string;
  error?: string;
}

export class PasswordManager {
  private static isAuthenticating = false;
  private static isRegistering = false;
  private static webAuthnModule: {
    handleRegister: () => Promise<void>;
    handleAuthenticate: () => Promise<string[]>;
    saveMessage: () => Promise<void>;
  } | null = null;

  // Add event emitter for WebAuthn state tracking
  private static webAuthnEvents = new EventTarget();

  static addWebAuthnListener(callback: (event: CustomEvent) => void) {
    this.webAuthnEvents.addEventListener(
      "webauthn-state",
      callback as EventListener,
    );
  }

  static removeWebAuthnListener(callback: (event: CustomEvent) => void) {
    this.webAuthnEvents.removeEventListener(
      "webauthn-state",
      callback as EventListener,
    );
  }

  private static emitWebAuthnEvent(
    state: "started" | "completed" | "failed",
    details?: WebAuthnEventDetails,
  ) {
    this.webAuthnEvents.dispatchEvent(
      new CustomEvent("webauthn-state", {
        detail: { state, details, timestamp: Date.now() },
      }),
    );
  }

  // Enhanced WebAuthn module loader with better error handling
  private static async loadWebAuthnModule() {
    if (this.webAuthnModule) {
      return this.webAuthnModule;
    }

    try {
      // Try to load the module with proper error handling
      const module = await import("@adorsys-gis/web-auth-prf");

      // Verify the module has the required functions
      if (
        typeof module.handleRegister === "function" &&
        typeof module.handleAuthenticate === "function" &&
        typeof module.saveMessage === "function"
      ) {
        this.webAuthnModule = module;
        return module;
      } else {
        throw new Error("WebAuthn module missing required functions");
      }
    } catch (error) {
      console.warn("WebAuthn module failed to load, using fallback:", error);
      // Return a mock module that uses fallback behavior
      this.webAuthnModule = {
        handleRegister: async () => {
          console.log("Using fallback registration");
          return Promise.resolve();
        },
        handleAuthenticate: async () => {
          console.log("Using fallback authentication");
          return Promise.resolve([this.generateSecurePassword()]);
        },
        saveMessage: async () => {
          console.log("Using fallback message save");
          return Promise.resolve();
        },
      };
      return this.webAuthnModule;
    }
  }

  static async initializeDOMElements() {
    // Remove existing elements first to avoid duplicates
    const existingInput = document.querySelector("#messageInput");
    if (existingInput) {
      existingInput.remove();
    }

    const existingList = document.querySelector("#messageList");
    if (existingList) {
      existingList.remove();
    }

    // Create new elements
    const input = document.createElement("input");
    input.type = "hidden";
    input.id = "messageInput";
    document.body.appendChild(input);

    const list = document.createElement("ul");
    list.id = "messageList";
    list.style.display = "none";
    document.body.appendChild(list);
  }

  static async getPassword(): Promise<string> {
    // Check if we already have a password in sessionStorage
    const storedPassword = sessionStorage.getItem("password");
    if (storedPassword) {
      return storedPassword;
    }

    await this.initializeDOMElements();

    try {
      const messages = JSON.parse(localStorage.getItem("messages") ?? "[]");
      let password: string | undefined;

      if (messages.length > 0) {
        console.log("Attempting WebAuthn authentication...");
        this.emitWebAuthnEvent("started", { type: "authentication" });
        password = await this.attemptAuthentication();
        this.emitWebAuthnEvent(password ? "completed" : "failed", {
          type: "authentication",
        });
      } else {
        console.log("Starting WebAuthn registration...");
        this.emitWebAuthnEvent("started", { type: "registration" });
        password = await this.handleNewUserRegistration();
        this.emitWebAuthnEvent(password ? "completed" : "failed", {
          type: "registration",
        });
      }

      // If WebAuthn fails, fall back to generating a password
      if (!password) {
        console.warn("WebAuthn failed, using fallback password generation");
        this.emitWebAuthnEvent("failed", {
          type: "fallback",
          reason: "WebAuthn returned no password",
        });
        password = this.generateSecurePassword();
      }

      // Store the password in sessionStorage
      sessionStorage.setItem("password", password);
      return password;
    } catch (error) {
      console.error("Password retrieval error:", error);
      this.emitWebAuthnEvent("failed", { error: error.message });
      // Fallback to generating a password
      const fallbackPassword = this.generateSecurePassword();
      sessionStorage.setItem("password", fallbackPassword);
      return fallbackPassword;
    }
  }

  private static async attemptAuthentication(): Promise<string | undefined> {
    if (this.isAuthenticating) return undefined;
    this.isAuthenticating = true;

    try {
      console.log("Canceling any pending WebAuthn requests...");
      await this.cancelPendingRequests();

      console.log("Loading WebAuthn module...");
      const module = await this.loadWebAuthnModule();

      console.log("Starting WebAuthn authentication...");
      const decryptedPassword = await module.handleAuthenticate();

      if (decryptedPassword && decryptedPassword.length > 0) {
        console.log("WebAuthn authentication successful");
        return decryptedPassword[0];
      } else {
        console.warn("WebAuthn authentication returned no password");
        return undefined;
      }
    } catch (error) {
      console.error("WebAuthn authentication failed:", error);
      return undefined;
    } finally {
      this.isAuthenticating = false;
    }
  }

  private static async handleNewUserRegistration(): Promise<
    string | undefined
  > {
    if (this.isRegistering) return undefined;
    this.isRegistering = true;

    try {
      console.log("Canceling any pending WebAuthn requests...");
      await this.cancelPendingRequests();

      console.log("Loading WebAuthn module...");
      const module = await this.loadWebAuthnModule();

      console.log("Starting WebAuthn registration...");
      // Remove timeout - let WebAuthn registration continue until completion or user cancellation
      await module.handleRegister();
      console.log("WebAuthn registration completed successfully");

      const newPassword = this.generateSecurePassword();
      console.log("Generated new secure password");

      const input = document.querySelector<HTMLInputElement>("#messageInput");

      if (input) {
        input.value = newPassword;
        console.log("Saving password message...");
        await module.saveMessage();
        console.log("Password message saved successfully");
      } else {
        console.warn("Message input element not found, skipping save");
      }

      return newPassword;
    } catch (error) {
      console.error("WebAuthn registration failed:", error);
      return undefined;
    } finally {
      this.isRegistering = false;
    }
  }

  private static async cancelPendingRequests(): Promise<void> {
    try {
      const abortController = new AbortController();
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      setTimeout(() => abortController.abort(), 100);
      await navigator.credentials.get({
        signal: abortController.signal,
        publicKey: { challenge, allowCredentials: [] },
      });
    } catch (error) {
      // Expected abort error
    }
  }

  private static generateSecurePassword(): string {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array)).slice(0, 32);
  }
}
