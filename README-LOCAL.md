# EventServer Local Development Setup

This setup provides a simplified local development environment that runs everything on HTTP without requiring SSL certificates.

## Quick Start

1. **Start the local environment:**
   ```bash
   ./start-local.sh
   ```

2. **Or manually:**
   ```bash
   # Initialize MinIO bucket (required for file uploads)
   docker compose -f docker-compose.local.yml --profile init up minio-init
   
   # Start all services
   docker compose -f docker-compose.local.yml up --build
   ```

**Note:** The MinIO bucket initialization is required for the backend to be able to upload files. The `start-local.sh` script automatically runs this step.

## Environment Configuration

The startup scripts automatically load environment variables from:
- `.env` file (if present)
- `.env.local` file (if present, for local development)

You can create a `.env.local` file using the template:
```bash
cp env.local.example .env.local
```

This allows you to customize settings like MinIO credentials, JWT secrets, and API endpoints without modifying the docker-compose files.

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **MinIO Console**: http://localhost:9001
- **MinIO API**: http://localhost:9000

## API Documentation

- **OpenAPI JSON**: http://localhost:8080/openapi-json
- **API Docs**: http://localhost:8080/docs

## MinIO Credentials

- **Username**: `minioadmin`
- **Password**: `minioadmin`

## Services

- **Backend**: Rust EventServer running on port 8080
- **Frontend**: React app served by Nginx on port 3000
- **MinIO**: S3-compatible storage on ports 9000 (API) and 9001 (Console)
- **OpenAPI Fetcher**: Automatically fetches API documentation

## Key Differences from Production

- No SSL/TLS certificates required
- All services run on HTTP
- Simplified nginx configuration
- Pre-configured environment variables
- Automatic MinIO bucket initialization

## Stopping Services

Press `Ctrl+C` in the terminal where services are running, or:

```bash
docker compose -f docker-compose.local.yml down
```

## Clean Restart

To completely reset the environment:

```bash
docker compose -f docker-compose.local.yml down -v
./start-local.sh
```

## Troubleshooting

If you encounter network conflicts, clean up existing networks:

```bash
docker network prune
docker compose -f docker-compose.local.yml down -v
```
