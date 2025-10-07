import { useTranslation } from "react-i18next";
import type { Label, LocalizedText } from "../../labels/label-manager";
import {
  cameroonData,
  getDivisions,
  getSubdivisions,
  getRegions,
  LocationNames,
} from "../../labels/cameroon-data";
import { FieldValue } from "../../types/event"; // Import FieldValue
import { useEffect } from "react";
import Dropdown from "./Dropdown";

type FormData = Record<string, FieldValue>;

interface FormFieldsProps {
  labels: Label[];
  formData: FormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleDropdownChange: (name: string, value: string) => void;
}

// Helper to get localized text from a string or LocalizedText object
const getLocalizedText = (
  text: string | LocalizedText | undefined,
  lang: string,
): string => {
  if (!text) return "";
  if (typeof text === "string") return text;

  // Fallback to English if the current language is not French
  const displayLang = lang === "fr" ? "fr" : "en";
  return text[displayLang];
};

const FormFields: React.FC<FormFieldsProps> = ({
  labels,
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleDropdownChange,
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as keyof LocationNames;
  const displayLang = currentLang === "fr" ? "fr" : "en";

  const findRegionKey = (regionValue: string): string | undefined => {
    if (!regionValue) return undefined;
    return Object.keys(cameroonData).find((key) => {
      const region = cameroonData[key as keyof typeof cameroonData];
      return region.name.en === regionValue || region.name.fr === regionValue;
    });
  };

  useEffect(() => {
    const region = formData["1"] as string;
    if (region === "Foreign" || region === "Étranger") {
      const foreignValue = displayLang === "en" ? "Foreign" : "Étranger";
      handleDropdownChange("2", foreignValue);
      handleDropdownChange("3", foreignValue);
    }
  }, [formData["1"], displayLang]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {labels
        .filter(
          (label) =>
            (label.category === "event_details" || !label.category) &&
            (!label.showIf || label.showIf(formData)),
        )
        .map((label) => {
          const labelName =
            i18n.language === "fr" ? label.name_fr : label.name_en;
          const labelId = `field-${label.labelId}`;
          const error = errors[label.labelId];

          let options = label.options || [];
          if (label.labelId === "1") {
            // For the Region dropdown
            options = getRegions().map((name) => name[displayLang]);
          } else if (label.dependsOn === "1") {
            const regionValue = formData["1"] as string;
            if (regionValue === "Foreign" || regionValue === "Étranger") {
              options = [displayLang === "en" ? "Foreign" : "Étranger"];
            } else {
              const regionKey = findRegionKey(regionValue);
              options = getDivisions(regionKey || "");
            }
          } else if (label.dependsOn === "2") {
            const regionValue = formData["1"] as string;
            const divisionValue = formData["2"] as string;
            if (regionValue === "Foreign" || regionValue === "Étranger") {
              options = [displayLang === "en" ? "Foreign" : "Étranger"];
            } else {
              const regionKey = findRegionKey(regionValue);
              options = getSubdivisions(regionKey || "", divisionValue);
            }
          }

          return (
            <div key={label.labelId} className="space-y-2">
              <label
                htmlFor={labelId}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {labelName}{" "}
                {label.required && <span className="text-cameroon-red">*</span>}
              </label>

              {/* Text Field */}
              {label.type === "text" && (
                <input
                  type="text"
                  id={labelId}
                  name={label.labelId}
                  value={String(formData[label.labelId] || "")}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-transparent dark:text-white rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cameroon-yellow focus:border-cameroon-yellow ${
                    error
                      ? "border-cameroon-red focus:border-cameroon-red focus:ring-cameroon-red"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                  required={label.required}
                  placeholder={
                    label.placeholder ? t(label.placeholder as string) : ""
                  }
                />
              )}

              {/* Number Field */}
              {label.type === "number" && (
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
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  min={label.constraints?.min}
                  max={30000000}
                  step={label.constraints?.step}
                  disabled={isSubmitting}
                  required={label.required}
                  placeholder={getLocalizedText(
                    label.placeholder,
                    i18n.language,
                  )}
                />
              )}

              {/* Boolean Field */}
              {label.type === "boolean" && (
                <div className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
                  <input
                    type="checkbox"
                    id={labelId}
                    name={label.labelId}
                    checked={!!formData[label.labelId]}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-transparent dark:focus:ring-offset-gray-800 text-cameroon-green focus:ring-cameroon-green transition-colors duration-200"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor={labelId}
                    className="text-sm text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {labelName}
                  </label>
                </div>
              )}

              {/* Enum Field with Custom Dropdown */}
              {label.type === "enum" && (
                <Dropdown
                  value={(formData[label.labelId] as string) || ""}
                  onChange={(value: string) =>
                    handleDropdownChange(label.labelId, value)
                  }
                  options={options}
                  placeholder={
                    label.placeholder
                      ? t(label.placeholder as string)
                      : t("selectAnOption")
                  }
                  disabled={
                    isSubmitting ||
                    !!(label.dependsOn && !formData[label.dependsOn])
                  }
                  error={error}
                />
              )}

              {error && (
                <p className="text-sm text-cameroon-red flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{error}</span>
                </p>
              )}

              {label.helpText && (
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-start space-x-1">
                  <svg
                    className="w-3 h-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    {typeof label.helpText === "string"
                      ? t(label.helpText)
                      : t(
                          label.helpText[displayLang] ||
                            (label.helpText as LocalizedText).en,
                        )}
                  </span>
                </p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default FormFields;
