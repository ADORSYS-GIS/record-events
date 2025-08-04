# 📦 **EventApp Ecosystem – Full System Description**

## 🔧 **Overview**

The EventApp ecosystem is a **decentralized event reporting system** designed to work under constrained or unreliable network conditions. It is made up of four key components:

1. **EventApp (Progressive Web App - PWA)** – Used by regular users to capture and annotate real-world events using a mobile device.
2. **EventAdminApp (PWA)** – Used by administrators to define event structure (labels), manage relays, and authorize other admins.
3. **EventRelay (Server Application)** – A network of semi-trusted gateways that handle Proof-of-Work (PoW), certificate issuance, and message forwarding.
4. **EventServer (Central Backend)** – A stateless, fully trusted backend that stores validated events and pushes cryptographic hashes to a blockchain for proof-of-existence.

The system is designed to function **offline-first**, with **end-to-end cryptographic security**, **no traditional login system**, and **resilient, discoverable relays**.

---

## 🔐 **Identity & Authentication Model**

- **No registration with email/username/password.**
- Upon first app launch, both **EventApp** and **AdminApp** generate a **public/private key pair**.
- Users must solve a **Proof-of-Work (PoW)** challenge and submit it to a **relay**.
- Upon PoW validation, the relay issues a **short-lived certificate**, cryptographically binding the user’s public key.
- All requests to relays and the EventServer are **signed** using this key + certificate for validation.

---

## 📲 **EventApp (User-Facing PWA)**

### Purpose:

To let users report events (images/videos + structured annotations) securely and reliably.

### Key Features:

1. **Identity & Certificate Flow**
   - Generate public/private key pair on first launch.
   - Solve PoW and obtain a short-lived certificate from a relay.

2. **Label Configuration**
   - On first launch, the app downloads all label configurations (field definitions) from a relay.
   - These labels define what data the user must fill when reporting an event.
   - App checks daily for updated or new label configurations.

3. **Event Creation Flow**
   - Capture image or short video via device camera.
   - Fill out annotations via dynamically generated form (based on labels).
   - Labels can include:
     - Date
     - Text (with constraints like max 35 characters)
     - Number
     - Enumeration (dropdowns defined by admins)
     - Optional image/video field

4. **Data Submission**
   - Create two packages:
     - **Light package:** Annotations only (small payload)
     - **Full package:** Image/video + annotations (large)

   - User can either:
     - **Send**: Transmit the package directly to a relay (if online)
     - **Share**: Export a `.zip` containing the package via Bluetooth/WhatsApp so another EventApp user can send it later

5. **Relay Discovery**
   - App includes a bootstrap list of relay addresses.
   - It can query any relay to obtain a list of other known relays for network resilience.

---

## 🧑‍💼 **EventAdminApp (Admin PWA)**

### Purpose:

To give authorized admins the ability to configure labels, manage relay addresses, and authorize other admins.

### Key Features:

1. **Key Management & SuperAdmin Flow**
   - On first launch, generates a key pair.
   - Admin functionality is locked until a certificate is imported.
   - A **SuperAdmin** (first admin) can authorize others by:
     - Scanning their public key (via QR code)
     - Signing it to produce an admin certificate
     - The new admin then imports the signed certificate

2. **Label Management**
   - Admins define the **structure of events** by creating/modifying **labels**:
     - Each label has a name, data type (text, number, date, enum, media), and constraints
     - Labels support **bilingual definitions** (French + English)
     - Enumeration labels allow admins to define selectable options

3. **Relay Management**
   - Admins can add the address of new EventRelay servers to the EventServer’s master list.

---

## 🛰️ **EventRelay (Edge Gateway Backend)**

### Purpose:

To serve as a **middleware** between EventApps and the central EventServer, acting as a gatekeeper and forwarder.

### Key Features:

1. **PoW Registration Server**
   - Exposes a PoW challenge endpoint
   - Validates submitted PoW solutions from new users
   - Issues **signed, short-lived client certificates** for authenticated event submission

2. **Message Processing**
   - Receives **signed event packages** from users
   - Verifies the client certificate and package integrity
   - Forwards validated packages to the EventServer

3. **Relay Discovery**
   - Exposes an endpoint that returns a list of other known, valid relays
   - Relay addresses are also shareable via QR codes or simple text strings

---

## 🧠 **EventServer (Central Stateless Backend)**

### Purpose:

To act as the **final destination** for validated event data, providing secure storage and blockchain verification.

### Key Features:

1. **Stateless Architecture**
   - Does not maintain sessions
   - Each request is **independently authenticated** based on the relay’s certificate and signature

2. **Event Validation & Storage**
   - Validates that incoming events are from trusted relays
   - Extracts event metadata and media
   - Stores the full package (image + annotation) in **S3-compatible storage**

3. **Blockchain Integration**
   - Calculates a **cryptographic hash** of each event package
   - Pushes the hash to a **public blockchain** (e.g., Ethereum, Polygon) to provide **proof-of-existence**
   - This allows users to later verify their event was not tampered with

4. **Relay Provisioning**
   - Has cloud credentials to provision and launch new relay instances
   - Issues SSL certificates for relays based on public IPs
   - Exposes secure API for AdminApp to update the list of approved relays

---

## 📊 **Label System Design**

A **label** is a field that the user must fill when reporting an event.

Each label contains:

- `labelId`
- `name_en` and `name_fr`
- `type` (e.g. date, text, number, enum, media)
- `required`: true/false
- `constraints`: like max length
- `options`: for enum fields only

Admins define these labels and push them to relays → EventApps pull them and render UI dynamically.

---

## 🌐 **Offline & Sharing Features**

- **Offline support** is built-in:
  - Cached label configurations
  - Locally stored event packages

- If a user can’t send an event directly:
  - They can **share** it as a `.zip` file
  - Another EventApp user can forward it later when online

---

## 🔐 **Security Summary**

- No passwords; only key-based identity.
- All data is signed before being sent.
- Only clients with valid certificates can send data.
- All relays are trusted via SSL certificates signed by EventServer.
- All stored data is hashed and published on-chain to guarantee immutability.

---

## 🛠️ **Tech Stack Recommendations**

| Component  | Suggested Stack                                                  |
| ---------- | ---------------------------------------------------------------- |
| EventApp   | React / react typescritp (PWA), IndexedDB, Service Workers       |
| AdminApp   | React / react typescrip (PWA), Tailwind, QR Scanner              |
| Relay      | Node.js / Go / Python (REST API, HTTPS, cert handling)           |
| Server     | Go / Node.js / Rust (stateless APIs, blockchain, S3 integration) |
| Storage    | AWS S3, MinIO, Backblaze                                         |
| Blockchain | Ethereum, Polygon, or any public chain with REST RPC             |
| Deployment | Docker, CI/CD pipelines, NGINX, LetsEncrypt                      |

---

## 📚 Docs You Should Include

- `architecture.md` – Full system design
- `api-spec.yaml` – OpenAPI/Swagger for all endpoints
- `admin-guide.md` – How to onboard admins
- `dev-guide.md` – How to set up and contribute
- `security-model.md` – Full key/cert/PoW flow
- `infra.md` – How to deploy relays + server (Docker, cloud)
