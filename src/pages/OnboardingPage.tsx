import React from "react";
import OnboardingFlow from "../components/OnboardingFlow";
import type { AuthenticationStatus } from "../hooks/useAuthenticationFlow";

interface OnboardingPageProps {
  onComplete: () => void;
  keyStatus?: string;
  powStatus?: string;
  authStatus: AuthenticationStatus;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({
  onComplete,
  keyStatus,
  powStatus,
  authStatus,
}) => {
  return (
    <OnboardingFlow
      onComplete={onComplete}
      keyStatus={keyStatus}
      powStatus={powStatus}
      authStatus={authStatus}
    />
  );
};

export default OnboardingPage;
