import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 rounded-xl p-1 shadow-lg bg-white/30">
        <button
          onClick={() => changeLanguage("en")}
          className={`p-2 rounded-lg transition-all duration-200 font-semibold ${
            i18n.language === "en"
              ? "bg-cameroon-yellow text-black shadow-md"
              : "text-white hover:text-gray-200"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className={`p-2 rounded-lg transition-all duration-200 font-semibold ${
            i18n.language === "fr"
              ? "bg-cameroon-yellow text-black shadow-md"
              : "text-white hover:text-gray-200"
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;