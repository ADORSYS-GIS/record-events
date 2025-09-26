#!/bin/sh
set -e

# Start nginx in the foreground
exec nginx -g 'daemon off;'