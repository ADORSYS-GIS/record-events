import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";

interface LoadingPageProps {
  message?: string;
  subMessage?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  message = "Generating cryptographic keys...",
  subMessage = "We are performing a device verification process. This might take a few seconds. Please be patient.",
}) => {
  return <LoadingSpinner message={message} subMessage={subMessage} />;
};

export default LoadingPage;
