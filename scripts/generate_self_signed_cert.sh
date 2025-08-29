#!/usr/bin/env bash
set -euo pipefail

# Configurable parameters (set via env or defaults)
SERVER_NAME="${SERVER_NAME:-localhost}"          # Primary DNS name (CN)
ALT_NAMES="${ALT_NAMES:-}"                       # Comma-separated list of extra SANs (DNS or IP)
OUT_DIR="${OUT_DIR:-certs}"                      # Output directory
DAYS="${DAYS:-825}"                              # Validity in days (825 ~ 27 months, common dev default)
KEY_ALG="${KEY_ALG:-rsa}"                        # rsa | ec
KEY_BITS="${KEY_BITS:-2048}"                     # RSA key size if KEY_ALG=rsa
EC_CURVE="${EC_CURVE:-prime256v1}"               # EC curve if KEY_ALG=ec (e.g., prime256v1, secp384r1)

# Ensure output directory is creatable/writable; give helpful instructions if not
if ! mkdir -p "${OUT_DIR}" 2>/dev/null; then
  echo "ERROR: Cannot create output directory '${OUT_DIR}' (permission denied or invalid path)." >&2
  echo "Fix options:" >&2
  echo "  1) Use a user-writable path (recommended):" >&2
  echo "       OUT_DIR=./certs ./scripts/generate_self_signed_cert.sh" >&2
  echo "     Then, copy to system directory if needed:" >&2
  echo "       sudo mkdir -p ${OUT_DIR}" >&2
  echo "       sudo cp ./certs/server.crt ./certs/server.key ${OUT_DIR%/}/" >&2
  echo "  2) Prepare the system directory with proper ownership:" >&2
  echo "       sudo mkdir -p ${OUT_DIR}" >&2
  echo "       sudo chown \"\$USER\":\"\$USER\" ${OUT_DIR}" >&2
  echo "     Re-run the script." >&2
  exit 1
fi

# Build a temporary OpenSSL config that includes SANs
TMP_CONF="$(mktemp)"
trap 'rm -f "$TMP_CONF" "$OUT_DIR/server.csr" 2>/dev/null || true' EXIT

# Base config; default_bits is relevant for RSA; harmless otherwise
cat > "$TMP_CONF" <<EOF
[req]
default_bits = ${KEY_BITS}
prompt = no
default_md = sha256
distinguished_name = dn
x509_extensions = v3_req
req_extensions = v3_req

[dn]
CN = ${SERVER_NAME}
O = Self-Signed
OU = Dev
C = US

[v3_req]
subjectAltName = @alt_names
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth

[alt_names]
DNS.1 = ${SERVER_NAME}
DNS.2 = localhost
IP.1 = 127.0.0.1
EOF

# Append additional ALT_NAMES (comma-separated). Detect IP vs DNS.
if [[ -n "${ALT_NAMES}" ]]; then
  IFS=',' read -ra NAMES <<< "${ALT_NAMES}"
  dns_idx=3
  ip_idx=2
  for name in "${NAMES[@]}"; do
    n="$(echo "$name" | xargs)" # trim
    [[ -z "$n" ]] && continue
    if [[ "$n" =~ ^([0-9]{1,3}\.){3}[0-9]{1,3}$ ]]; then
      echo "IP.${ip_idx} = ${n}" >> "$TMP_CONF"
      ip_idx=$((ip_idx+1))
    else
      echo "DNS.${dns_idx} = ${n}" >> "$TMP_CONF"
      dns_idx=$((dns_idx+1))
    fi
  done
fi

KEY_PATH="${OUT_DIR}/server.key"
CRT_PATH="${OUT_DIR}/server.crt"
PEM_PATH="${OUT_DIR}/server.pem"

echo "Generating self-signed certificate:"
echo "  SERVER_NAME=${SERVER_NAME}"
echo "  ALT_NAMES=${ALT_NAMES}"
echo "  KEY_ALG=${KEY_ALG}"
echo "  OUTPUT: ${CRT_PATH}, ${KEY_PATH}"

if [[ "${KEY_ALG}" == "rsa" ]]; then
  # Single-shot RSA key and self-signed cert
  openssl req -x509 -newkey "rsa:${KEY_BITS}" -sha256 -days "${DAYS}" -nodes \
    -keyout "${KEY_PATH}" -out "${CRT_PATH}" -config "${TMP_CONF}"
elif [[ "${KEY_ALG}" == "ec" ]]; then
  # Generate EC key and sign CSR with itself
  openssl ecparam -name "${EC_CURVE}" -genkey -noout -out "${KEY_PATH}"
  openssl req -new -key "${KEY_PATH}" -sha256 -out "${OUT_DIR}/server.csr" -config "${TMP_CONF}"
  openssl x509 -req -in "${OUT_DIR}/server.csr" -signkey "${KEY_PATH}" -out "${CRT_PATH}" \
    -days "${DAYS}" -extensions v3_req -extfile "${TMP_CONF}"
else
  echo "Unsupported KEY_ALG='${KEY_ALG}'. Use 'rsa' or 'ec'." >&2
  exit 1
fi

# Optional combined PEM (some tools like having both in one file)
cat "${CRT_PATH}" "${KEY_PATH}" > "${PEM_PATH}"

# Restrictive permissions on the private key
chmod 600 "${KEY_PATH}"

echo "Done."
echo "Certificate: ${CRT_PATH}"
echo "Private key: ${KEY_PATH}"
echo "Combined PEM: ${PEM_PATH}"
echo
echo "Tips:"
echo "- Most servers need the cert (.crt/.pem) and the key (.key) referenced in their TLS config."
echo "- Browsers will show a warning for self-signed certs; add to trust store for local dev if desired."
