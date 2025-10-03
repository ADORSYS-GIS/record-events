import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext.tsx";

interface DeferredPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallPrompt: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [deferredPrompt, setDeferredPrompt] =
    useState<DeferredPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false); // New state to control visibility for animation

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as DeferredPromptEvent);
      setShowPrompt(true); // Show the prompt when beforeinstallprompt fires
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as { standalone?: boolean }).standalone
    ) {
      setShowPrompt(false); // If installed, don't show the prompt
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        // console.log("User accepted the install prompt");
      } else {
        // console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setShowPrompt(false); // Hide after interaction
    }
  };

  const handleClose = () => {
    setShowPrompt(false); // Hide on close
  };

  // Render the component, but control its visibility and position with classes
  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 py-2.5 px-4 rounded-full shadow-lg flex items-center justify-between space-x-3 transition-all duration-500 ease-out transform-gpu w-[75vw] max-w-screen-lg
        ${showPrompt ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}
        ${
          isDark
            ? "bg-gray-800 text-white border border-gray-700"
            : "bg-white text-gray-900 border border-gray-200"
        }
      }`}
    >
      <div className="flex items-center space-x-2">
        <Download className="w-5 h-5 text-blue-500" />
        <div>
          <p className="font-semibold text-sm">{t("installPrompt.title")}</p>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <button
          onClick={handleInstallClick}
          className="px-3.5 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t("installPrompt.installButton")}
        </button>
        <button
          onClick={handleClose}
          aria-label={t("installPrompt.closeButton")}
          className={`p-1.5 rounded-full ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
          } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
        >
          <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
