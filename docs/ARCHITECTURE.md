# EventApp Architecture & Key Mechanisms

## Table of Contents

1. [System Overview](#system-overview)
2. [Key Pair Mechanism](#key-pair-mechanism)
3. [Event Creation & Submission Flow](#event-creation--submission-flow)
4. [Relay Communication](#relay-communication)
5. [Data Storage & Security](#data-storage--security)
6. [Internationalization](#internationalization)
7. [UI Components & State Management](#ui-components--state-management)

## System Overview

EventApp is a decentralized event reporting system with the following main components:

- **EventApp (PWA)**: User-facing Progressive Web App for creating and submitting events
- **AdminApp (PWA)**: Admin interface for managing labels and relays
- **EventRelay**: Edge gateway backend for handling event submissions
- **EventServer**: Central backend for processing and storing events

## Key Pair Mechanism

### Key Generation

1. **Initialization**:

   - On first launch, the app generates an ECDSA key pair using the P-256 curve (ES256)
   - Keys are stored in the browser's localStorage for persistence
   - The key pair is used for authenticating event submissions

2. **Key Storage**:

   ```typescript
   // Key storage in localStorage
   const KEY_PAIR_STORAGE_KEY = "event-app-key-pair";

   // Key pair interface
   interface KeyPair {
     publicKey: JsonWebKey;
     privateKey: JsonWebKey;
   }
   ```

3. **Key Management**:

   - `generateKeyPair()`: Creates a new ECDSA key pair
   - `storeKeyPair(keyPair: KeyPair)`: Saves keys to localStorage
   - `loadKeyPair()`: Retrieves keys from localStorage
   - `initializeKeys()`: Ensures keys exist, generates if needed

4. **Usage in Authentication**:
   - The public key serves as the user's identity
   - The private key is used to sign event submissions
   - No personal information is tied to the key pair, ensuring privacy

## Event Creation & Submission Flow

1. **Form Rendering**:

   - Dynamic form generation based on label configurations
   - Supports multiple input types (text, number, date, boolean, enum, media)
   - Client-side validation based on label constraints

2. **Event Packaging**:

   ```typescript
   interface EventPackage {
     annotations: EventAnnotation[];
     media?: {
       type: string;
       data: string; // base64 encoded
     };
   }
   ```

3. **Submission Process**:
   - Form data is validated
   - Media files are processed and included in the package
   - The package is signed using the user's private key
   - The signed package is sent to a relay

## Relay Communication

1. **Relay Discovery**:

   - Fetches a list of available relays
   - Supports failover to alternative relays
   - Caches relay information for offline use

2. **Proof of Work (PoW)**:

   - Implements a simple PoW challenge to prevent spam
   - Solves computational puzzles to earn submission rights
   - Temporary certificates are issued upon successful PoW completion

3. **Event Submission**:
   - Events are sent to relays over HTTPS
   - Relays validate and forward events to the EventServer
   - Supports both online submission and offline queuing

## Data Storage & Security

1. **Local Storage**:

   - Keys and configuration are stored in localStorage
   - Sensitive data is never stored in plaintext
   - Implements secure key handling practices

2. **Event Data**:

   - Media files are stored as base64-encoded strings
   - Annotations are stored as JSON
   - All data is signed to ensure integrity

3. **Security Measures**:
   - ECDSA signatures for authentication
   - HTTPS for all network communication
   - No persistent user tracking
   - Client-side encryption for sensitive data

## Internationalization

1. **Implementation**:

   - Uses i18next for internationalization
   - Supports English (en) and French (fr)
   - Dynamic language switching

2. **Label System**:
   - Bilingual labels (en/fr)
   - Dynamic form labels and validation messages
   - UI elements translated based on user preference

## UI Components & State Management

### Core Components

- **App**: Root component with language switching
- **EventForm**: Dynamic form for event creation
- **CameraCapture**: Media capture component
- **LanguageSwitcher**: UI for changing languages

### State Management

- Uses React hooks for local state
- Custom hooks for key management and label handling
- Context for global state when needed

### Styling

- TailwindCSS for utility-first styling
- Responsive design for mobile and desktop
- Accessible UI components

## Development & Testing

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Testing

- Unit tests for core functionality
- Integration tests for user flows
- E2E tests for critical paths

## Deployment

### Requirements

- Node.js 16+
- Modern web browser with WebCrypto API support
- HTTPS for production deployment

### Build

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.
