# Multi-stage build for React frontend
# Use standard node image instead of Alpine for better compatibility with native dependencies
FROM node:22-slim as builder

# NOTE: Network access to the OpenAPI endpoint is required during build.
# The endpoint specified by EVENTSERVER_OPENAPI_URL must be reachable from inside the build container.
ENV EVENTSERVER_OPENAPI_URL="http://host.docker.internal:8080/openapi-json"

# Set working directory
WORKDIR /app

# Install Python and build tools required for native dependencies
# This is needed for packages that compile native bindings
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files for dependency caching
COPY package*.json ./

# Install dependencies with increased memory limit and fallback options
# The --max-old-space-size helps with memory-intensive installations
# The --legacy-peer-deps helps with dependency conflicts
RUN NODE_OPTIONS="--max-old-space-size=4096" npm ci --legacy-peer-deps || \
    NODE_OPTIONS="--max-old-space-size=4096" npm install --legacy-peer-deps

# Copy source code after dependencies are installed
COPY . .

# Copy openapi.json explicitly to ensure it's present in the image
COPY openapi.json ./openapi.json

# Copy startup script
COPY start.sh ./start.sh

# Fetch OpenAPI spec during build (not runtime)
RUN node scripts/fetch_openapi.js

# Build the application
RUN npm run build

# Production stage with nginx
FROM nginx:alpine as production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy startup script to root and make it executable
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 8080 (changed from 80 for non-privileged port)
EXPOSE 8080

# Health check (updated for port 8080)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Use custom entrypoint to fetch OpenAPI at runtime, then start nginx
ENTRYPOINT ["/start.sh"]