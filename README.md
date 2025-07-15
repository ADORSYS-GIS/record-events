This document outlines the functional and technical requirements for the **EventApp** ecosystem, which includes the end‑user **EventApp**, the **EventAdminApp**, the **EventRelay** servers, and the central **EventServer**.

---

## 1. EventApp (PWA)

### General & Security Requirements
- **Key‑based Identity**  
  On first launch, the app generates a public/private key‑pair that serves as the user’s unique identity. There is no traditional registration (name, email, password).

- **Service Authorization**  
  To interact with the network (relays), a new user must first obtain a certificate.  
  1. The app performs a Proof of Work (PoW) challenge.  
  2. Upon successful completion, it submits the PoW solution to a relay’s registration endpoint.  
  3. The relay issues a short‑lived client certificate.  
  4. PoW difficulty is set high enough to deter DoS attacks.

### Functional Requirements

#### Event Creation
- Capture an image using the device camera.  
- Reduce image size to support slow or unreliable networks.  
- Annotate the image with labels defined by the admin.

#### Local‑First Data Management
- On first run, the app downloads and caches all available label configurations from a relay.  
- It checks once daily for updated or new label configurations.

#### Label Annotation
Labels must support the following data types:

| Type | Notes |
|------|-------|
| Date | — |
| Text | Length constraints (e.g., 35 characters) |
| Number | — |
| Enumeration | Dropdown list managed by admins |
| Image / Short Video | — |

#### Data Submission & Sharing
For each event, the app produces **two** distinct packages:

1. **Annotations‑only** (small) – reliable over any network.  
2. **Image + Annotations** (large) – may need a stable connection.

- **Send**: An authenticated **Send** button packages the event and transmits it to a configured relay. The app stores the hash of the sent event for later verification.  
- **Share**: If sending is not possible, a **Share** button packages the event as a single `.zip`. The file can be shared (WhatsApp, Bluetooth, etc.) so another EventApp user can relay it.

#### Relay Management
- The app ships with an initial list of relays.  
- It can query any relay for a list of other known, valid relays to improve network resilience.

---

## 2. EventAdminApp (PWA)

### General & Security Requirements
- **Key‑based Identity**  
  Generates a public/private key‑pair on first launch to sign administrative actions.

- **Admin Authorization**  
  - Administrative functions are locked by default and are unlocked by importing an *admin certificate*.  
  - A **SuperAdmin** (first admin) can authorize new admins:  
    1. Prospective admin shows a QR code with their public key.  
    2. SuperAdmin scans and signs it, producing an admin certificate.  
    3. The new admin imports the certificate.

### Functional Requirements

#### Label Configuration
- Create, modify, and delete labels.  
- Define data type for each label (text, number, date, etc.).  
- Provide bilingual text (initially **French** and **English**).

#### Enumeration Management
- For *enumeration* labels, add, edit, or remove selectable options.

#### Relay Management
- Form to add network addresses of new relays to the central server’s master list.

---

## 3. EventRelay

The EventRelay is a server‑side application acting as a gateway between EventApp users and the EventServer.

### Functional Requirements
- **Message Forwarding** – Receive authenticated event packages from users and forward them to the EventServer.  
- **Relay Discovery** – Expose an endpoint that returns a list of other known, valid relays.  
- **Shareable Addresses** – Make relay addresses easily shareable (e.g., QR code or text string).

### Security & Registration Requirements
- **Authenticated Endpoint** – Only process messages cryptographically signed by a key‑pair holding a valid certificate.  
- **PoW Registration Server**  
  1. Receives PoW solution from new users.  
  2. Validates the PoW.  
  3. Issues a signed, short‑lived client certificate bound to the user’s public key.

---

## 4. EventServer

The EventServer is the central **stateless** backend. It interacts only with trusted EventRelays.

### Functional Requirements

#### Stateless Architecture
- Maintains no session state; each relay request is independently authenticated.

#### Event Processing
1. Expose a secure, private endpoint to receive event data from authenticated relays.  
2. Validate the relay’s authenticity.  
3. Store the event’s primary document (image/video + annotations) on S3‑compatible storage.

#### Blockchain Integration
- For every stored event, calculate a cryptographic hash.  
- Push the hash to a designated blockchain to provide proof‑of‑existence and non‑repudiation.  
- EventApp users can later verify that their event hash exists on‑chain.

#### Relay Configuration & Provisioning
- Possess cloud credentials to **automatically launch new relay instances**.  
- After launching a relay, sign and return an SSL certificate based on the relay’s **public IP address**.  
- Provide a secure endpoint for EventAdminApp to manage the master list of approved relays.
