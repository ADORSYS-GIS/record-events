import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/queryClient";
import i18n from "./i18n";
import "./index.css";
import App from "./App.tsx";
import { OpenAPI } from "./openapi-rq/requests/core/OpenAPI";

async function initializeAndRenderApp() {
  try {
    const res = await fetch("/openapi.json");
    if (!res.ok) throw new Error("Failed to fetch OpenAPI spec");
    const spec = await res.json();
    // Extract first server URL from OpenAPI spec
    const serverUrl =
      Array.isArray(spec.servers) && spec.servers.length > 0
        ? spec.servers[0].url
        : undefined;
    if (serverUrl) {
      OpenAPI.BASE = serverUrl;
    }
  } catch (err) {
    // If fetch fails, fallback to default BASE in OpenAPI.ts
    // Optionally, you could show an error or warning here
    // eslint-disable-next-line no-console
    console.warn(
      "Could not fetch OpenAPI server URL, using default. Error:",
      err,
    );
  } finally {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </StrictMode>,
    );
  }
}

initializeAndRenderApp();
