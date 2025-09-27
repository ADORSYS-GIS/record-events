import { QueryClient } from "@tanstack/react-query";
import { useApp } from "../hooks/useApp";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      onError: (error: unknown) => {
        // eslint-disable-next-line no-console
        console.error("Mutation error:", error);
        if ((error as { status?: number }).status === 401) {
          // eslint-disable-next-line no-console
          console.log("401 error detected, re-authenticating...");
          useApp.getState().reauthenticate();
        }
      },
    },
  },
});
