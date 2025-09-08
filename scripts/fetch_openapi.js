/**
 * Fetches the latest openapi.json from the eventserver and writes it to the project root.
 * Overwrites any existing openapi.json file.
 */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change this to the correct eventserver OpenAPI endpoint if needed
const OPENAPI_URL = process.env.EVENTSERVER_OPENAPI_URL || 'http://localhost:3000/openapi-json';
const OUTPUT_PATH = path.resolve(__dirname, '..', 'openapi.json');

function fetchOpenApiJson(openapiUrl, outputPath) {
  const protocol = openapiUrl.startsWith('https:') ? https : http;

  protocol.get(openapiUrl, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to fetch openapi.json: ${res.statusCode} ${res.statusMessage}`);
      process.exit(1);
    }

    let data = '';
    res.setEncoding('utf8');
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(outputPath, data, 'utf8');
      console.log(`Fetched and saved openapi.json to ${outputPath}`);
    });
  }).on('error', (err) => {
    console.error(`Error fetching openapi.json: ${err.message}`);
    process.exit(1);
  });
}

fetchOpenApiJson(OPENAPI_URL, OUTPUT_PATH);