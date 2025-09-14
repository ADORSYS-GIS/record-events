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

# Install dependencies
RUN npm install

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

# Create non-root user for nginx
RUN addgroup -g 1001 -S nginx-user && \
    adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin -G nginx-user -g nginx-user nginx-user

# Change ownership of nginx directories
RUN chown -R nginx-user:nginx-user /var/cache/nginx && \
    chown -R nginx-user:nginx-user /var/log/nginx && \
    chown -R nginx-user:nginx-user /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx-user:nginx-user /var/run/nginx.pid


# Copy startup script to root and make it executable
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Switch to non-root user
USER nginx-user

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Use custom entrypoint to fetch OpenAPI at runtime, then start nginx
ENTRYPOINT ["/start.sh"]