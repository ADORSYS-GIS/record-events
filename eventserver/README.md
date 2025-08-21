# EventServer - Stateless Rust Backend

A high-performance, stateless backend server for the EventApp ecosystem, built with Rust and designed for horizontal scalability.

## Overview

EventServer is the central, authoritative backend that processes events from EventRelay servers. It maintains no session data or user state between requests, making it perfectly suited for cloud-native deployments and horizontal scaling.

### Key Features

- **Stateless Architecture**: No session storage, each request is independent
- **High Performance**: Built with Rust and async/await for maximum throughput
- **Horizontal Scaling**: Deploy multiple identical instances behind a load balancer
- **Secure**: Certificate-based authentication with cryptographic verification
- **Cloud Native**: S3-compatible storage and blockchain integration
- **Production Ready**: Comprehensive error handling, logging, and monitoring

## Architecture

See [ARCHITECTURE.md](../docs/event-server.md) for detailed system architecture and component interactions.

## Quick Start

### Prerequisites

- Rust 1.70+ (install via [rustup](https://rustup.rs/))
- PostgreSQL 13+
- Redis 6+
- S3-compatible storage (AWS S3, MinIO, etc.)
- Blockchain RPC endpoint (Ethereum, Polygon, etc.)

### Installation

1. **Clone and build the project:**
   ```bash
   cd eventserver
   cargo build --release
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Run database migrations:**
   ```bash
   cargo install sqlx-cli
   sqlx migrate run
   ```

4. **Start the server:**
   ```bash
   cargo run --release
   ```

The server will start on `http://0.0.0.0:3000` by default.

## Configuration

EventServer uses a hierarchical configuration system that supports:
- Default values
- Configuration files (TOML/YAML)
- Environment variables (highest priority)

### Environment Variables

#### Required Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost/eventserver

# JWT Secret for certificate signing
JWT_SECRET=your-super-secret-jwt-key-here

# Storage (S3-compatible)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key

# Blockchain
BLOCKCHAIN_RPC_URL=https://mainnet.infura.io/v3/your-project-id
```

#### Optional Variables

```bash
# Server Configuration
EVENTSERVER__SERVER__HOST=0.0.0.0
EVENTSERVER__SERVER__PORT=3000
EVENTSERVER__SERVER__WORKERS=4

# Database Pool
EVENTSERVER__DATABASE__MAX_CONNECTIONS=10
EVENTSERVER__DATABASE__CONNECTION_TIMEOUT=30

# Storage Configuration
EVENTSERVER__STORAGE__REGION=us-east-1
EVENTSERVER__STORAGE__BUCKET=eventserver-storage
EVENTSERVER__STORAGE__MAX_FILE_SIZE=104857600  # 100MB

# Redis Configuration
EVENTSERVER__REDIS__URL=redis://127.0.0.1:6379
EVENTSERVER__REDIS__POOL_SIZE=10

# Security
EVENTSERVER__SECURITY__RATE_LIMIT_PER_MINUTE=100
EVENTSERVER__SECURITY__POW_DIFFICULTY=4
EVENTSERVER__SECURITY__CERTIFICATE_VALIDITY_HOURS=24

# Blockchain
EVENTSERVER__BLOCKCHAIN__NETWORK=mainnet
EVENTSERVER__BLOCKCHAIN__GAS_LIMIT=100000
EVENTSERVER__BLOCKCHAIN__CONFIRMATION_BLOCKS=3

# Logging
EVENTSERVER__LOGGING__LEVEL=info
EVENTSERVER__LOGGING__FORMAT=pretty
```

### Configuration Files

Create configuration files in the `config/` directory:

**config/default.toml:**
```toml
[server]
host = "0.0.0.0"
port = 3000
workers = 4

[database]
max_connections = 10
connection_timeout = 30

[storage]
region = "us-east-1"
bucket = "eventserver-storage"
max_file_size = 104857600

[security]
rate_limit_per_minute = 100
pow_difficulty = 4
certificate_validity_hours = 24
```

**config/production.toml:**
```toml
[server]
workers = 8

[logging]
level = "warn"
format = "json"

[security]
rate_limit_per_minute = 1000
```

## API Endpoints

### Health Check
```
GET /health
```
Returns server health status and service dependencies.

### Event Processing
```
POST /api/v1/events
Authorization: Bearer <relay-certificate>
Content-Type: application/json

{
  "id": "uuid",
  "version": "1.0",
  "annotations": [...],
  "media": {...},
  "metadata": {...}
}
```

### Event Verification
```
GET /api/v1/events/{hash}/verify
```
Verify if an event hash exists on the blockchain.

### Relay Management
```
POST /api/v1/relays/provision
Authorization: Bearer <admin-certificate>

{
  "region": "us-east-1",
  "instance_type": "t3.micro"
}
```

## Development

### Project Structure

```
eventserver/
├── src/
│   ├── main.rs              # Application entry point
│   ├── controllers/         # HTTP request handlers
│   ├── middleware/          # Request processing middleware
│   ├── services/            # Business logic
│   ├── types/               # Data structures
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration management
│   └── error.rs             # Error handling
├── migrations/              # Database migrations
├── config/                  # Configuration files
├── tests/                   # Integration tests
└── Cargo.toml              # Dependencies and metadata
```

### Running Tests

```bash
# Unit tests
cargo test

# Integration tests
cargo test --test integration

# With coverage
cargo install cargo-tarpaulin
cargo tarpaulin --out html
```

### Development Server

```bash
# Run with auto-reload
cargo install cargo-watch
cargo watch -x run

# Run with debug logging
RUST_LOG=debug cargo run
```

### Database Migrations

```bash
# Create new migration
sqlx migrate add create_events_table

# Run migrations
sqlx migrate run

# Revert last migration
sqlx migrate revert
```

## Deployment

### Docker

```dockerfile
FROM rust:1.70 as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/target/release/eventserver /usr/local/bin/eventserver
EXPOSE 3000
CMD ["eventserver"]
```

Build and run:
```bash
docker build -t eventserver .
docker run -p 3000:3000 --env-file .env eventserver
```

### Kubernetes

```yaml
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
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: eventserver-service
spec:
  selector:
    app: eventserver
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

### Production Checklist

- [ ] Set strong JWT_SECRET
- [ ] Configure proper database connection pooling
- [ ] Set up Redis for rate limiting
- [ ] Configure S3 bucket with proper permissions
- [ ] Set up blockchain RPC endpoint
- [ ] Configure logging aggregation
- [ ] Set up monitoring and alerting
- [ ] Configure load balancer health checks
- [ ] Set up SSL/TLS termination
- [ ] Configure backup strategies

## Monitoring

### Health Checks

The `/health` endpoint provides detailed health information:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z",
  "services": {
    "storage": true,
    "blockchain": true,
    "database": true,
    "redis": true
  },
  "version": "0.1.0"
}
```

### Metrics

EventServer exposes metrics for monitoring:

- Request throughput and latency
- Event processing success/failure rates
- Storage operation metrics
- Blockchain transaction metrics
- Database connection pool status
- Memory and CPU usage

### Logging

Structured JSON logging in production:

```json
{
  "timestamp": "2024-01-01T00:00:00Z",
  "level": "INFO",
  "message": "Event processed successfully",
  "event_id": "uuid",
  "relay_id": "relay-uuid",
  "processing_time_ms": 150,
  "storage_location": "s3://bucket/key"
}
```

## Security

### Authentication

EventServer uses certificate-based authentication:

1. **Relay Authentication**: EventRelay servers authenticate using signed certificates
2. **Admin Authentication**: EventAdminApp uses admin certificates for management operations
3. **Rate Limiting**: Redis-based rate limiting per relay/admin

### Data Protection

- All event data is encrypted at rest in S3
- Database connections use SSL/TLS
- Blockchain transactions provide immutable proof-of-existence
- No sensitive data in logs

### Security Best Practices

- Regular security updates
- Principle of least privilege
- Network segmentation
- Regular security audits
- Incident response procedures

## Troubleshooting

### Common Issues

**Server won't start:**
```bash
# Check configuration
cargo run -- --check-config

# Verify database connection
psql $DATABASE_URL -c "SELECT 1;"

# Check Redis connection
redis-cli -u $REDIS_URL ping
```

**High memory usage:**
- Reduce database connection pool size
- Adjust file upload limits
- Check for memory leaks in logs

**Slow performance:**
- Monitor database query performance
- Check Redis latency
- Verify S3 upload speeds
- Review blockchain RPC response times

### Debug Mode

```bash
# Enable debug logging
RUST_LOG=debug cargo run

# Enable SQL query logging
RUST_LOG=sqlx=debug cargo run

# Profile memory usage
cargo install cargo-profiler
cargo profiler callgrind --bin eventserver
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run `cargo fmt` and `cargo clippy`
6. Submit a pull request

### Code Style

- Use `cargo fmt` for formatting
- Follow Rust naming conventions
- Add documentation for public APIs
- Write comprehensive tests
- Use meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the [ARCHITECTURE.md](../docs/event-server.md) for system details
- Review the configuration examples above