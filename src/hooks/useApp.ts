import { create } from "zustand";
import useAuthenticationFlow from "./useAuthenticationFlow";

interface AppState {
  reauthenticate: () => Promise<void>;
}

export const useApp = create<AppState>(() => ({
  reauthenticate: async () => {
    // This will be replaced by the actual reauthenticate function from useAuthenticationFlow
  },
}));

export const useInitializeApp = () => {
  const { reauthenticate } = useAuthenticationFlow();
  useApp.setState({ reauthenticate });
};
