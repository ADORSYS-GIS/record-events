# EventServer Architecture

## System Overview

The EventServer ecosystem consists of four main components working together to provide a secure, scalable, and stateless event processing system:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   EventApp      │    │ EventAdminApp   │    │   EventRelay    │    │   EventServer   │
│     (PWA)       │    │     (PWA)       │    │   (Gateway)     │    │   (Backend)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Detailed Architecture Diagram

```
                                    EventApp Ecosystem
                                    ==================

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                  Client Layer                                           │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  ┌─────────────────┐                           ┌─────────────────┐                     │
│  │   EventApp      │                           │ EventAdminApp   │                     │
│  │     (PWA)       │                           │     (PWA)       │                     │
│  │                 │                           │                 │                     │
│  │ • Camera        │                           │ • Label Config  │                     │
│  │ • Annotations   │                           │ • Relay Mgmt    │                     │
│  │ • Local Storage │                           │ • Admin Auth    │                     │
│  │ • PoW Challenge │                           │ • QR Scanning   │                     │
│  │ • Event Export  │                           │ • Certificate   │                     │
│  └─────────────────┘                           └─────────────────┘                     │
│           │                                             │                               │
│           │ HTTPS/WSS                                   │ HTTPS                         │
│           │ (Certificate Auth)                          │ (Admin Certificate)           │
└───────────┼─────────────────────────────────────────────┼───────────────────────────────┘
            │                                             │
            ▼                                             ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                Gateway Layer                                            │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│                    ┌─────────────────────────────────────────┐                         │
│                    │           EventRelay                    │                         │
│                    │          (Load Balanced)                │                         │
│                    │                                         │                         │
│                    │  ┌─────────────┐  ┌─────────────┐      │                         │
│                    │  │   Relay 1   │  │   Relay 2   │ ...  │                         │
│                    │  │             │  │             │      │                         │
│                    │  │ • PoW Auth  │  │ • PoW Auth  │      │                         │
│                    │  │ • Rate Limit│  │ • Rate Limit│      │                         │
│                    │  │ • SSL Cert  │  │ • SSL Cert  │      │                         │
│                    │  │ • Discovery │  │ • Discovery │      │                         │
│                    │  └─────────────┘  └─────────────┘      │                         │
│                    └─────────────────────────────────────────┘                         │
│                                     │                                                  │
│                                     │ HTTPS                                            │
│                                     │ (Relay Certificate Auth)                         │
└─────────────────────────────────────┼────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              Backend Layer                                              │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│                         ┌─────────────────────────────────────┐                        │
│                         │           EventServer               │                        │
│                         │         (Stateless Rust)           │                        │
│                         │                                     │                        │
│                         │  ┌─────────────────────────────┐    │                        │
│                         │  │      API Layer             │    │                        │
│                         │  │                             │    │                        │
│                         │  │ • Event Processing          │    │                        │
│                         │  │ • Relay Management          │    │                        │
│                         │  │ • Health Checks             │    │                        │
│                         │  │ • Authentication            │    │                        │
│                         │  └─────────────────────────────┘    │                        │
│                         │                                     │                        │
│                         │  ┌─────────────────────────────┐    │                        │
│                         │  │    Business Logic           │    │                        │
│                         │  │                             │    │                        │
│                         │  │ • Event Validation          │    │                        │
│                         │  │ • Cryptographic Hashing     │    │                        │
│                         │  │ • Certificate Management    │    │                        │
│                         │  │ • Relay Provisioning        │    │                        │
│                         │  └─────────────────────────────┘    │                        │
│                         └─────────────────────────────────────┘                        │
│                                       │                                                │
│                                       │                                                │
└───────────────────────────────────────┼────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                             Storage & External Layer                                    │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │
│  │     S3      │  │ PostgreSQL  │  │    Redis    │  │ Blockchain  │                   │
│  │  Storage    │  │  Database   │  │   Cache     │  │  Network    │                   │
│  │             │  │             │  │             │  │             │                   │
│  │ • Events    │  │ • Config    │  │ • Rate      │  │ • Hash      │                   │
│  │ • Media     │  │ • Relays    │  │   Limiting  │  │   Storage   │                   │
│  │ • Archives  │  │ • Logs      │  │ • Sessions  │  │ • Proof of  │                   │
│  │             │  │             │  │             │  │   Existence │                   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘                   │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Event Processing Flow

```
1. EventApp captures image + annotations
2. EventApp performs PoW challenge with EventRelay
3. EventRelay issues short-lived certificate
4. EventApp sends event package to EventRelay (authenticated)
5. EventRelay forwards to EventServer (relay-authenticated)
6. EventServer processes event:
   ├── Validates event structure
   ├── Generates cryptographic hash
   ├── Stores event + media to S3
   ├── Submits hash to blockchain
   └── Returns processing result
7. Response flows back through EventRelay to EventApp
```

### Admin Configuration Flow

```
1. EventAdminApp authenticates with admin certificate
2. Admin creates/modifies label configurations
3. EventAdminApp sends config to EventServer
4. EventServer validates and stores configuration
5. EventApps periodically fetch updated configurations
```

### Relay Management Flow

```
1. EventAdminApp requests new relay provisioning
2. EventServer launches cloud instance
3. EventServer generates SSL certificate for relay IP
4. EventServer returns relay credentials
5. New relay registers with EventServer
6. EventServer adds relay to approved list
```

## Component Details

### EventServer (Rust Backend)

**Architecture Principles:**

- **Stateless**: No session data between requests
- **Horizontally Scalable**: Multiple identical instances
- **Secure**: Certificate-based authentication
- **Resilient**: Comprehensive error handling

**Core Modules:**

```rust
eventserver/
├── src/
│   ├── controllers/          # HTTP request handlers
│   │   ├── event.rs         # Event processing endpoints
│   │   ├── relay.rs         # Relay management endpoints
│   │   └── health.rs        # Health check endpoints
│   ├── middleware/          # Request processing middleware
│   │   ├── auth.rs          # Certificate authentication
│   │   ├── rate_limit.rs    # Rate limiting
│   │   └── validation.rs    # Request validation
│   ├── services/            # Business logic
│   │   ├── event.rs         # Event processing service
│   │   ├── storage.rs       # S3 storage service
│   │   ├── blockchain.rs    # Blockchain integration
│   │   ├── crypto.rs        # Cryptographic operations
│   │   └── relay.rs         # Relay management service
│   ├── types/               # Data structures
│   │   ├── event.rs         # Event-related types
│   │   ├── relay.rs         # Relay-related types
│   │   └── api.rs           # API request/response types
│   └── config/              # Configuration management
│       ├── database.rs      # Database configuration
│       ├── storage.rs       # S3 configuration
│       └── blockchain.rs    # Blockchain configuration
```

### Security Model

**Authentication Chain:**

1. **EventApp ↔ EventRelay**: PoW-based certificate authentication
2. **EventRelay ↔ EventServer**: Relay certificate authentication
3. **EventAdminApp ↔ EventServer**: Admin certificate authentication

**Certificate Lifecycle:**

- EventApp certificates: Short-lived (hours)
- Relay certificates: Medium-lived (days)
- Admin certificates: Long-lived (months)

**Cryptographic Operations:**

- Event hashing: SHA-256
- Certificate signing: Ed25519
- PoW algorithm: Configurable difficulty

### Scalability Features

**Horizontal Scaling:**

- Stateless design enables unlimited horizontal scaling
- Load balancer distributes requests across instances
- No shared state between server instances

**Performance Optimizations:**

- Async/await throughout the stack
- Connection pooling for database and Redis
- Efficient binary serialization
- Streaming for large file uploads

**Resource Management:**

- Configurable connection limits
- Request timeout handling
- Memory-efficient event processing
- Automatic relay provisioning

### Monitoring & Observability

**Health Checks:**

- `/health` endpoint for load balancer
- Service dependency health monitoring
- Automatic failover capabilities

**Logging:**

- Structured JSON logging
- Request tracing with correlation IDs
- Performance metrics collection
- Error aggregation and alerting

**Metrics:**

- Request throughput and latency
- Event processing success rates
- Storage and blockchain operation metrics
- Resource utilization monitoring

## Deployment Architecture

### Production Deployment

```
                    Internet
                       │
                       ▼
                ┌─────────────┐
                │Load Balancer│
                └─────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│EventServer 1│ │EventServer 2│ │EventServer N│
└─────────────┘ └─────────────┘ └─────────────┘
        │              │              │
        └──────────────┼──────────────┘
                       ▼
              ┌─────────────────┐
              │   Shared        │
              │   Resources     │
              │                 │
              │ • PostgreSQL    │
              │ • Redis Cluster │
              │ • S3 Storage    │
              │ • Blockchain    │
              └─────────────────┘
```

### Container Orchestration (Kubernetes)

```yaml
# Example Kubernetes deployment structure
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eventserver
spec:
  replicas: 3
  selector:
    matchLabels:
      app: eventserver
  template:
    metadata:
      labels:
        app: eventserver
    spec:
      containers:
        - name: eventserver
          image: eventserver:latest
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: eventserver-secrets
                  key: database-url
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
```

This architecture ensures high availability, scalability, and security while maintaining the stateless design principles required for the EventServer ecosystem.
