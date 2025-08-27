import { Camera, Save, Send, Upload, X, ChevronDown, Check } from "lucide-react";
import { useCallback, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import type { KeyPair } from "../hooks/useKeyInitialization";
import type { Label, LocalizedText } from "../labels/label-manager";
import { createEventPackage, validateFormData } from "../utils/event-packer";
import { useEventSubmission } from "../hooks/useEventSubmission";
import { useEventHistory } from "../hooks/useEventHistory";
import type { EventPackage as LocalEventPackage } from "../types/event";
import type { EventPackage, SignedEventPackage } from "../openapi-rq/requests/types.gen";
import { apiAuthService } from "../services/keyManagement/apiAuthService";

type FieldValue = string | number | boolean | null;

type FormData = Record<string, FieldValue>;

// Helper to get localized text from a string or LocalizedText object
const getLocalizedText = (text: string | LocalizedText | undefined): string => {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text.en;
};

// Custom Dropdown Component
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 text-left bg-white border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error 
            ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
            : "border-gray-200 hover:border-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div className="flex items-center justify-between">
          <span className={`${selectedOption ? "text-gray-900" : "text-gray-500"}`}>
            {selectedOption || placeholder}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`} 
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 flex items-center justify-between"
            >
              <span className="text-gray-900">{option}</span>
              {selectedOption === option && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface EventFormProps {
  labels: Label[];
  keyPair: KeyPair; // Make keyPair required for authorization
  createdBy?: string;
}

const EventForm: React.FC<EventFormProps> = ({ labels, keyPair, createdBy }) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<FormData>({});
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragActive, setDragActive] = useState(false);

  const { submitEvent, isSubmitting: isApiSubmitting } = useEventSubmission();
  const { addEvent } = useEventHistory();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, type } = e.target;
    const target = e.target as HTMLInputElement;
    let value: FieldValue;
    if (type === "checkbox") {
      value = target.checked;
    } else if (type === "number") {
      value = target.value === "" ? null : Number(target.value);
    } else {
      value = target.value === "" ? null : target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setMediaFile(e.target.files[0]);
      setErrors((prev) => ({ ...prev, media: "" }));
    }
  };

  const handleTakePhoto = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setMediaFile(file);
      }
    };

    input.click();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setMediaFile(e.dataTransfer.files[0]);
      setErrors((prev) => ({ ...prev, media: "" }));
    }
  };

  const validate = useCallback((): boolean => {
    const cleanData: Record<string, FieldValue> = {};
    labels.forEach((label) => {
      if (formData[label.labelId] !== undefined) {
        cleanData[label.labelId] = formData[label.labelId];
      }
    });
    const { isValid: isFormDataValid, errors: formErrors } = validateFormData(
      cleanData,
      labels,
    );
    const newErrors: Record<string, string> = { ...formErrors };
    setErrors(newErrors);
    return isFormDataValid && Object.keys(newErrors).length === 0;
  }, [formData, labels]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error(t("validationError"));
      return;
    }
    setIsSubmitting(true);

    try {
      const cleanData: Record<string, FieldValue> = {};
      labels.forEach((label) => {
        if (formData[label.labelId] !== undefined) {
          cleanData[label.labelId] = formData[label.labelId];
        }
      });

      const eventPackage = await createEventPackage(
        cleanData,
        labels,
        mediaFile,
        { createdBy, source: "web" },
      );

      // Generate Bearer token for authorization
      const eventDataString = JSON.stringify(eventPackage);
      await apiAuthService.generateAndSetEventToken(
        keyPair.privateKey,
        keyPair.publicKey,
        eventDataString
      );

      // Create a SignedEventPackage for submission (now just contains the event)
      const signedEventPackage: SignedEventPackage = {
        event: {
          id: eventPackage.id,
          version: eventPackage.version,
          annotations: eventPackage.annotations,
          media: eventPackage.media,
          metadata: {
            createdAt: eventPackage.metadata.createdAt,
            createdBy: eventPackage.metadata.createdBy,
            source: eventPackage.metadata.source as "web" | "mobile",
          },
        },
      };

      // Submit to backend using the generated API (with Bearer token in header)
      await submitEvent(signedEventPackage);
      
      // Add to local history using the generated EventPackage type
      const historyEventPackage: EventPackage = {
        id: eventPackage.id,
        version: eventPackage.version,
        annotations: eventPackage.annotations,
        media: eventPackage.media,
        metadata: {
          createdAt: eventPackage.metadata.createdAt,
          createdBy: eventPackage.metadata.createdBy,
          source: eventPackage.metadata.source as "web" | "mobile",
        },
      };
      addEvent(historyEventPackage);

        setFormData({});
        setMediaFile(null);
        toast.success(t("eventSaved"));
    } catch (error) {
      console.error("Error saving event:", error);
      toast.error(
        error instanceof Error ? error.message : String(t("saveError")),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = useCallback(async () => {
    try {
      const cleanData: Record<string, FieldValue> = {};
      labels.forEach((label) => {
        if (formData[label.labelId] !== undefined) {
          cleanData[label.labelId] = formData[label.labelId];
        }
      });

      const eventPackage = await createEventPackage(
        cleanData,
        labels,
        mediaFile || null,
        { createdBy, source: "web" },
      );

      // Convert to generated EventPackage type for history
      const historyEventPackage: EventPackage = {
        id: eventPackage.id,
        version: eventPackage.version,
        annotations: eventPackage.annotations,
        media: eventPackage.media,
        metadata: {
          createdAt: eventPackage.metadata.createdAt,
          createdBy: eventPackage.metadata.createdBy,
          source: eventPackage.metadata.source as "web" | "mobile",
        },
      };

      addEvent(historyEventPackage);
      toast.success(t("draftSaved"));
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error(t("saveError"));
    }
  }, [formData, mediaFile, labels, createdBy, t, addEvent]);

  const renderMediaSection = () => {
    if (mediaFile) {
      return (
        <div className="relative group">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={URL.createObjectURL(mediaFile)}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setMediaFile(null)}
                className="opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all duration-200 shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">{mediaFile.name}</p>
            <p className="text-xs text-gray-400">
              {(mediaFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          dragActive
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Camera className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t("eventForm.media.title", "Add Media to Your Report")}
            </h3>
            <p className="text-gray-500 mb-6">
              {t(
                "eventForm.media.description",
                "Drag and drop an image here, or click to browse",
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 font-medium">
              <Upload className="w-5 h-5" />
              <span>Browse Files</span>
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <button
              type="button"
              onClick={handleTakePhoto}
              className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-300 font-medium"
            >
              <Camera className="w-5 h-5" />
              <span>Take Photo</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
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
                <h1 className="text-xl font-semibold text-gray-900">
                  New Event Report
                </h1>
                <p className="text-sm text-gray-600">
                  Capture and submit your event securely
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form Fields Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                Event Details
              </h2>
                <p className="text-sm text-gray-600">
                  Provide comprehensive information about the event
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {labels.map((label) => {
                const labelName =
                  i18n.language === "fr" ? label.name_fr : label.name_en;
                const labelId = `field-${label.labelId}`;
                const error = errors[label.labelId];

                return (
                  <div key={label.labelId} className="space-y-2">
                    <label
                      htmlFor={labelId}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {labelName}{" "}
                      {label.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>

                    {/* Text Field */}
                    {label.type === "text" && (
                      <input
                        type="text"
                        id={labelId}
                        name={label.labelId}
                        value={String(formData[label.labelId] || "")}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          error 
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
                            : "border-gray-200 hover:border-gray-300"
                        } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                        required={label.required}
                        placeholder={t("describeEventPlaceholder")}
                      />
                    )}

                    {/* Number Field */}
                    {label.type === "number" && (
                      <input
                        type="number"
                        id={labelId}
                        name={label.labelId}
                        value={Number(formData[label.labelId] || 0)}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          error 
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
                            : "border-gray-200 hover:border-gray-300"
                        } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        min={label.constraints?.min}
                        max={label.constraints?.max}
                        step={label.constraints?.step}
                        disabled={isSubmitting}
                        required={label.required}
                        placeholder={getLocalizedText(label.placeholder)}
                      />
                    )}

                    {/* Boolean Field */}
                    {label.type === "boolean" && (
                      <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200">
                        <input
                          type="checkbox"
                          id={labelId}
                          name={label.labelId}
                          checked={!!formData[label.labelId]}
                          onChange={handleChange}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors duration-200"
                          disabled={isSubmitting}
                        />
                        <label
                          htmlFor={labelId}
                          className="text-sm text-gray-700 font-medium"
                        >
                          {labelName}
                        </label>
                      </div>
                    )}

                    {/* Enum Field with Custom Dropdown */}
                    {label.type === "enum" && label.options && (
                      <Dropdown
                        value={(formData[label.labelId] as string) || ""}
                        onChange={(value) => handleDropdownChange(label.labelId, value)}
                        options={label.options}
                        placeholder="Select an option"
                        disabled={isSubmitting}
                        error={error}
                      />
                    )}

                    {error && (
                      <p className="text-sm text-red-600 flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{error}</span>
                      </p>
                    )}
                    
                    {label.helpText && (
                      <p className="text-xs text-gray-500 flex items-start space-x-1">
                        <svg className="w-3 h-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span>
                          {typeof label.helpText === "string"
                            ? t(label.helpText)
                            : t(
                                label.helpText[i18n.language] ||
                                  label.helpText.en,
                              )}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Media Upload Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                Add Media
              </h2>
                <p className="text-sm text-gray-600">
                  Include photos or videos to provide visual context
                </p>
              </div>
            </div>
            {renderMediaSection()}
            </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
              <button
                type="button"
                onClick={handleSaveDraft}
              disabled={isSubmitting || isApiSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </button>
                <button
                  type="submit"
              disabled={isSubmitting || isApiSubmitting}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
              {isSubmitting || isApiSubmitting ? (
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Report
                    </>
                  )}
                </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
