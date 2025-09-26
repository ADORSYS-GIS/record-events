import { Save, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ActionBarProps {
  isSubmitting: boolean;
  handleSaveDraft: () => void;
  isReadOnly?: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({
  isSubmitting,
  handleSaveDraft,
  isReadOnly,
}) => {
  const { t } = useTranslation();

  if (isReadOnly) {
    return null;
  }

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Save className="h-4 w-4 mr-2" />
            {t("saveDraft", "Save Draft")}
          </button>
          <button
            type="submit"
            form="event-form"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-cameroon-green to-cameroon-red hover:from-cameroon-red hover:to-cameroon-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-yellow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("submitting", "Submitting...")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                {t("submitReport", "Submit Report")}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
