import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Users } from "lucide-react";

interface WelcomeFeaturesProps {
  isDark: boolean;
}

const WelcomeFeatures: React.FC<WelcomeFeaturesProps> = () => {
  const { t } = useTranslation();

  return <></>;
};

export default WelcomeFeatures;
