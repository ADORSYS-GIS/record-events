#!/bin/bash

# Start local development environment
echo "🚀 Starting EventServer Local Development Environment..."

# Initialize MinIO bucket
echo "📦 Initializing MinIO bucket..."
docker compose -f docker-compose.local.yml --profile init up minio-init

# Start backend services first (needed for OpenAPI spec)
echo "🔧 Starting backend services..."
docker compose -f docker-compose.local.yml up -d backend minio

# Wait for backend to be ready
echo "⏳ Waiting for backend to be ready..."
max_attempts=30
attempt=1
while [ $attempt -le $max_attempts ]; do
    if curl -f -s http://localhost:8080/health > /dev/null 2>&1; then
        echo "✅ Backend is ready!"
        break
    fi
    echo "   Attempt $attempt/$max_attempts - Backend not ready yet, waiting..."
    sleep 2
    attempt=$((attempt + 1))
done

if [ $attempt -gt $max_attempts ]; then
    echo "❌ Backend failed to start within 60 seconds"
    echo "   Check backend logs: docker compose -f docker-compose.local.yml logs backend"
    exit 1
fi

# Verify OpenAPI endpoint is accessible
echo "🔍 Verifying OpenAPI endpoint..."
if curl -f -s http://localhost:8080/openapi-json > /dev/null 2>&1; then
    echo "✅ OpenAPI endpoint is accessible"
else
    echo "❌ OpenAPI endpoint is not accessible"
    echo "   Check backend logs: docker compose -f docker-compose.local.yml logs backend"
    exit 1
fi

# Generate OpenAPI types locally (needed for frontend build)
echo "📝 Generating OpenAPI types..."
if [ -f ".env" ]; then
    export $(grep -v '^#' .env | xargs)
elif [ -f ".env.local" ]; then
    export $(grep -v '^#' .env.local | xargs)
fi

# Fetch OpenAPI spec directly from backend (not through nginx proxy)
EVENTSERVER_OPENAPI_URL=http://localhost:8080/openapi-json npm run fetch-and-codegen

# Start all services (including frontend build)
echo "🔧 Starting all services..."
docker compose -f docker-compose.local.yml up --build

echo "✅ Local development environment is running!"
echo ""
echo "🌐 Access points:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:8080"
echo "   MinIO Console: http://localhost:9001"
echo "   MinIO API: http://localhost:9000"
echo ""
echo "📚 API Documentation:"
echo "   OpenAPI JSON: http://localhost:8080/openapi-json"
echo "   API Docs: http://localhost:8080/docs"
echo ""
echo "🔑 MinIO Credentials:"
echo "   Username: minioadmin"
echo "   Password: minioadmin"
echo ""
echo "Press Ctrl+C to stop all services"
