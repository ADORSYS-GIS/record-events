import React from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import i18n from "../i18n";

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  return <WelcomeScreen onGetStarted={onGetStarted} i18n={i18n} />;
};

export default WelcomePage;
