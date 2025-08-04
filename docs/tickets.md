## 🗂️ MASTER ROADMAP STRUCTURE

### 📦 Main Components:

1. `📱 EventApp (User PWA)`
2. `🧑‍💼 AdminApp (Admin PWA)`
3. `🛰️ EventRelay (Edge Gateway Backend)`
4. `🧠 EventServer (Central Backend)`
5. `📚 Documentation & Design`
6. `☁️ Infrastructure / Deployment`

## 📱 **EventApp (User PWA)** – Frontend (React recta typscrip tailwindcss)

| ID        | Ticket                                                                      |
| --------- | --------------------------------------------------------------------------- |
| `EAPP-01` | 🎯 Setup PWA base with offline support and service workers                  |
| `EAPP-02` | 🎯 Generate public/private key-pair on first launch and store securely      |
| `EAPP-03` | 🎯 Implement Proof-of-Work challenge logic and submission to Relay          |
| `EAPP-04` | 🎯 Fetch, cache, and sync label configurations from relay                   |
| `EAPP-05` | 🎯 Build UI for event creation: capture image, fill labels, validate inputs |
| `EAPP-06` | 🎯 Package event: Annotations-only + Full package with media                |
| `EAPP-07` | 🎯 Implement authenticated “Send” button to transmit event to relay         |
| `EAPP-08` | 🎯 Implement “Share” button: export .zip for offline transfer               |
| `EAPP-09` | 🎯 Relay discovery: get alternative relay list from known relays            |
| `EAPP-10` | 🎯 Multilingual support (French/English) for all UI and labels              |

---

## 🧑‍💼 **AdminApp (Admin PWA)** – Frontend

| ID         | Ticket                                                         |
| ---------- | -------------------------------------------------------------- |
| `ADAPP-01` | 🎯 Setup AdminApp PWA with routing and auth layout             |
| `ADAPP-02` | 🎯 Generate key-pair and support SuperAdmin certificate import |
| `ADAPP-03` | 🎯 Implement QR-based SuperAdmin approval flow                 |
| `ADAPP-04` | 🎯 Build UI to create/edit/delete label configurations         |
| `ADAPP-05` | 🎯 Add support for bilingual fields (French/English)           |
| `ADAPP-06` | 🎯 Manage enumeration options for dropdown labels              |
| `ADAPP-07` | 🎯 Relay management panel: add new relays to master list       |
| `ADAPP-08` | 🎯 Securely sign and submit admin requests to EventServer      |

---

## 🛰️ **EventRelay** – Backend (Node.js / Go / Python)

| ID         | Ticket                                                       |
| ---------- | ------------------------------------------------------------ |
| `RELAY-01` | 🎯 Setup REST API base and certificate config                |
| `RELAY-02` | 🎯 Implement PoW challenge receiver and validator            |
| `RELAY-03` | 🎯 Issue short-lived client certificate after successful PoW |
| `RELAY-04` | 🎯 Receive and validate signed events from EventApp          |
| `RELAY-05` | 🎯 Forward validated events to EventServer                   |
| `RELAY-06` | 🎯 Implement relay discovery endpoint (list other relays)    |
| `RELAY-07` | 🎯 Provide QR-code/text-shareable relay address feature      |
| `RELAY-08` | 🎯 Logging & basic monitoring setup for relays               |

---

## 🧠 **EventServer** – Backend (Stateless Core)

| ID          | Ticket                                                                 |
| ----------- | ---------------------------------------------------------------------- |
| `SERVER-01` | 🎯 Setup secure REST API gateway with SSL and relay auth               |
| `SERVER-02` | 🎯 Receive and validate incoming events from relays                    |
| `SERVER-03` | 🎯 Store image/video + annotations to S3-compatible storage            |
| `SERVER-04` | 🎯 Generate cryptographic hash of events                               |
| `SERVER-05` | 🎯 Push event hashes to blockchain (Ethereum/Polygon/etc.)             |
| `SERVER-06` | 🎯 Implement relay provisioning: sign and return SSL cert for relay IP |
| `SERVER-07` | 🎯 Provide endpoint for AdminApp to manage master relay list           |
| `SERVER-08` | 🎯 Write integration tests for all API endpoints                       |

---

## 📚 **Documentation & Design**

| ID        | Ticket                                                       |
| --------- | ------------------------------------------------------------ |
| `DOCS-01` | 🎯 System architecture diagram (Mermaid + PDF version)       |
| `DOCS-02` | 🎯 User flowchart: EventApp flow from key generation to send |
| `DOCS-03` | 🎯 Admin flowchart: Label management and relay provisioning  |
| `DOCS-04` | 🎯 Create OpenAPI / Swagger docs for all backend APIs        |
| `DOCS-05` | 🎯 Developer guide: Setup, environments, key formats         |
| `DOCS-06` | 🎯 Security document: key storage, cert rotation, PoW logic  |
| `DOCS-07` | 🎯 README files for each repo (App, AdminApp, Relay, Server) |

---

## ☁️ **Infrastructure / Deployment**

| ID         | Ticket                                                        |
| ---------- | ------------------------------------------------------------- |
| `INFRA-01` | 🎯 Setup CI/CD pipelines for all components                   |
| `INFRA-02` | 🎯 Dockerize all services (Relay, Server)                     |
| `INFRA-03` | 🎯 Setup staging environment for testing full flow            |
| `INFRA-04` | 🎯 Provision cloud storage (S3-compatible) for media          |
| `INFRA-05` | 🎯 Setup blockchain endpoint and wallet for hash publishing   |
| `INFRA-06` | 🎯 SSL certificates and cert signing flow for relays          |
| `INFRA-07` | 🎯 Monitoring (Grafana, Prometheus) for relay and server logs |

technolog for frontend is react typoescritp tailwind css
