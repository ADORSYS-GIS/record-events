import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

interface FormHeaderProps {
  onGoBack: () => void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ onGoBack }) => {
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-to-r from-cameroon-green via-cameroon-red to-cameroon-yellow sticky top-0 z-40 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onGoBack}
            className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200"
            aria-label={t("goBack")}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/elecamair.jpeg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default FormHeader;
