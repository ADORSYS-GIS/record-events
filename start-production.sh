#!/bin/bash

# Start production environment
echo "🚀 Starting EventServer Production Environment..."

# Load environment variables from .env file if it exists
if [ -f ".env" ]; then
    echo "📄 Loading environment variables from .env file..."
    export $(grep -v '^#' .env | xargs)
elif [ -f ".env.production" ]; then
    echo "📄 Loading environment variables from .env.production file..."
    export $(grep -v '^#' .env.production | xargs)
else
    echo "⚠️  WARNING: No .env or .env.production file found."
    echo "   Please create a .env file with your production configuration."
    echo "   You can use env.production.example as a template."
    echo ""
fi

# Check if required environment variables are set
if [ -z "$JWT_SECRET" ]; then
    echo "⚠️  WARNING: JWT_SECRET environment variable is not set. Using default value."
    echo "   For production, please set a secure JWT_SECRET in your .env file:"
    echo "   JWT_SECRET='your-secure-secret-here'"
    echo ""
fi

if [ -z "$MINIO_ROOT_PASSWORD" ]; then
    echo "⚠️  WARNING: MINIO_ROOT_PASSWORD environment variable is not set. Using default value."
    echo "   For production, please set a secure MinIO password in your .env file:"
    echo "   MINIO_ROOT_PASSWORD='your-secure-password'"
    echo ""
fi

# Initialize MinIO bucket
echo "📦 Initializing MinIO bucket..."
if [ -f ".env" ]; then
    docker compose --env-file .env --profile init up minio-init
elif [ -f ".env.production" ]; then
    docker compose --env-file .env.production --profile init up minio-init
else
    docker compose --profile init up minio-init
fi

# Start backend services first (needed for OpenAPI spec)
echo "🔧 Starting backend services..."
if [ -f ".env" ]; then
    docker compose --env-file .env up -d backend minio
elif [ -f ".env.production" ]; then
    docker compose --env-file .env.production up -d backend minio
else
    docker compose up -d backend minio
fi

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
    echo "   Check backend logs: docker compose logs backend"
    exit 1
fi

# Verify OpenAPI endpoint is accessible
echo "🔍 Verifying OpenAPI endpoint..."
if curl -f -s http://localhost:8080/openapi-json > /dev/null 2>&1; then
    echo "✅ OpenAPI endpoint is accessible"
else
    echo "❌ OpenAPI endpoint is not accessible"
    echo "   Check backend logs: docker compose logs backend"
    exit 1
fi

# Generate OpenAPI types locally (needed for frontend build)
echo "📝 Generating OpenAPI types..."
if [ -f ".env" ]; then
    export $(grep -v '^#' .env | xargs)
elif [ -f ".env.production" ]; then
    export $(grep -v '^#' .env.production | xargs)
fi

# Fetch OpenAPI spec directly from backend (not through nginx proxy)
EVENTSERVER_OPENAPI_URL=http://localhost:8080/openapi-json npm run fetch-and-codegen

# Start all services (including frontend build)
echo "🔧 Starting all services..."
if [ -f ".env" ]; then
    docker compose --env-file .env up --build
elif [ -f ".env.production" ]; then
    docker compose --env-file .env.production up --build
else
    docker compose up --build
fi

echo "✅ Production environment is running!"
echo ""
echo "🌐 Access points:"
echo "   Frontend: ${VITE_API_BASE_URL:-https://localhost}"
echo "   Backend API: http://localhost:8080"
echo "   MinIO Console: http://localhost:9001"
echo "   MinIO API: http://localhost:9000"
echo ""
echo "📚 API Documentation:"
echo "   OpenAPI JSON: http://localhost:8080/openapi-json"
echo "   API Docs: ${VITE_API_BASE_URL:-https://localhost}/docs"
echo ""
echo "🔑 MinIO Credentials:"
echo "   Username: ${MINIO_ROOT_USER:-minioadmin}"
echo "   Password: ${MINIO_ROOT_PASSWORD:-minioadmin}"
echo ""
echo "🔒 Security Notes:"
echo "   - Make sure to set JWT_SECRET in your .env file"
echo "   - Change default MinIO credentials in your .env file"
echo "   - Configure proper SSL certificates"
echo "   - Set up proper firewall rules"
echo ""
echo "📄 Environment file used: $([ -f ".env" ] && echo ".env" || echo ".env.production")"
