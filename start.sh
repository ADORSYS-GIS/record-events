#!/bin/sh
set -e

# Fetch the OpenAPI spec at container startup
node scripts/fetch_openapi.js

# Start nginx in the foreground
exec nginx -g 'daemon off;'