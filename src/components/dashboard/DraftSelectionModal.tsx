import React from "react";
import { useTranslation } from "react-i18next";
import { type LocalEvent } from "../../hooks/useEventHistory";
import { useTheme } from "../../hooks/useTheme";
import { FileText, ChevronRight, X, Inbox } from "lucide-react";
import { EventAnnotation } from "../../types/event";

interface DraftSelectionModalProps {
  drafts: LocalEvent[];
  onSelectDraft: (event: LocalEvent) => void;
  onClose: () => void;
  isOpen: boolean;
}

const DraftSelectionModal: React.FC<DraftSelectionModalProps> = ({
  drafts,
  onSelectDraft,
  onClose,
  isOpen,
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`relative rounded-2xl shadow-2xl border w-full max-w-lg m-4 transition-all duration-300 transform ${
          isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200/80"
        } ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-full ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <FileText
                  className={`w-6 h-6 ${isDark ? "text-cameroon-yellow" : "text-cameroon-green"}`}
                />
              </div>
              <h2 className="text-xl font-bold">{t("draftSelection.title")}</h2>
            </div>
            <button
              onClick={onClose}
              aria-label={t("cancel")}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p
            className={`mb-6 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {t("draftSelection.description")}
          </p>

          <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 -mr-2">
            {drafts.length > 0 ? (
              drafts.map((draft, index) => {
                const regionValue = draft.eventPackage.annotations?.find(
                  (l: EventAnnotation) => l.labelId === "region",
                )?.value;

                return (
                  <div
                    key={draft.id}
                    onClick={() => onSelectDraft(draft)}
                    className={`rounded-lg border p-4 flex items-center justify-between cursor-pointer transition-all duration-200 group ${
                      isDark
                        ? "bg-gray-800/60 border-gray-700 hover:border-cameroon-yellow/50 hover:bg-gray-800"
                        : "bg-gray-50/80 border-gray-200 hover:border-cameroon-green/50 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="font-semibold group-hover:text-cameroon-yellow transition-colors">
                          {draft.title ||
                            t("draftSelection.untitled", { count: index + 1 })}
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {t("draftSelection.lastModified")}:{" "}
                          {new Date(draft.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cameroon-yellow transition-colors" />
                  </div>
                );
              })
            ) : (
              <div
                className={`text-center p-8 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-gray-50/80"}`}
              >
                <Inbox className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="font-semibold">
                  {t("draftSelection.noDrafts")}
                </h3>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {t("draftSelection.noDraftsDescription")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftSelectionModal;
