import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme.tsx";

interface FormHeaderProps {
  onGoBack: () => void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ onGoBack }) => {
  const { t } = useTranslation();
  const { theme, changeTheme, isDark } = useTheme();

  return (
    <header className="bg-gradient-to-r from-cameroon-green via-cameroon-red to-cameroon-yellow sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onGoBack}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200"
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
            <div>
              <h1 className="text-lg font-semibold text-white">
                {t("eventForm.title")}
              </h1>
              <p className="text-xs text-gray-200">{t("eventForm.subtitle")}</p>
            </div>
          </div>
          {/* Theme Toggle */}
          <div
            className={`flex items-center space-x-1 rounded-xl p-1 shadow-lg transition-all duration-300 ${
              isDark ? "bg-gray-700" : "bg-white/20"
            }`}
          >
            <button
              onClick={() => changeTheme("light")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "light"
                  ? "bg-cameroon-yellow text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("system")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "system"
                  ? "bg-cameroon-yellow text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "bg-cameroon-yellow text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FormHeader;
