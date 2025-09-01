import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";

interface LoadingPageProps {
  message?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  message = "Please wait while we secure your device...",
}) => {
  return <LoadingSpinner message={message} />;
};

export default LoadingPage;
