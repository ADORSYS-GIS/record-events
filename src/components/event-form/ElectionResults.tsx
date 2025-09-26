import { useTranslation } from "react-i18next";
import type { Label, LocalizedText } from "../../labels/label-manager";
import type { FieldValue } from "../../types/event";

type FormData = Record<string, FieldValue>;

interface ElectionResultsProps {
  labels: Label[];
  formData: FormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

// Helper to get localized text from a string or LocalizedText object
const getLocalizedText = (text: string | LocalizedText | undefined): string => {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text.en;
};

const ElectionResults: React.FC<ElectionResultsProps> = ({
  labels,
  formData,
  errors,
  isSubmitting,
  handleChange,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {labels
        .filter((label) => label.category === "election_results")
        .map((label) => {
          const labelName =
            i18n.language === "fr" ? label.name_fr : label.name_en;
          const labelId = `field-${label.labelId}`;
          const error = errors[label.labelId];
          return (
            <div key={label.labelId} className="space-y-2">
              <label
                htmlFor={labelId}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {labelName}
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {getLocalizedText(label.helpText)}
              </p>
              <input
                type="number"
                id={labelId}
                name={label.labelId}
                value={
                  formData[label.labelId] === null ||
                  formData[label.labelId] === undefined
                    ? ""
                    : String(formData[label.labelId])
                }
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-transparent dark:text-white rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cameroon-yellow focus:border-cameroon-yellow ${
                  error
                    ? "border-cameroon-red focus:border-cameroon-red focus:ring-cameroon-red"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                } ${
                  isSubmitting || label.labelId === "abstentions"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                min={0}
                max={30000000}
                disabled={isSubmitting || label.labelId === "abstentions"}
                placeholder=""
              />
              {error && <p className="text-sm text-cameroon-red">{error}</p>}
            </div>
          );
        })}
    </div>
  );
};

export default ElectionResults;
