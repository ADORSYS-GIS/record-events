# Multi-stage build for React frontend
FROM node:22-alpine as builder

# NOTE: Network access to the OpenAPI endpoint is required during build.
# The endpoint specified by EVENTSERVER_OPENAPI_URL must be reachable from inside the build container.
ENV EVENTSERVER_OPENAPI_URL="http://host.docker.internal:8080/openapi-json"

# Set working directory
WORKDIR /app

# Copy package files for dependency caching
COPY package*.json ./

# Copy source code
COPY . .

# Copy openapi.json explicitly to ensure it's present in the image
COPY openapi.json ./openapi.json

# Copy startup script
COPY start.sh ./start.sh

# Install dependencies (without running postinstall scripts)
RUN npm install --ignore-scripts

# Copy openapi.json if it exists (for cases where it's pre-generated)
COPY openapi.json* ./

# Generate types from existing openapi.json (if available)
RUN if [ -f "openapi.json" ]; then npm run codegen; else echo "No openapi.json found, will be fetched at runtime"; fi

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