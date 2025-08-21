import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Camera, Upload, Send, Save } from "lucide-react";
import { toast } from "sonner";
import type { Label, LocalizedText } from "../labels/label-manager";
import { createEventPackage, validateFormData } from "../utils/event-packer";
import {
  exportEventPackageAsZip,
  downloadEventPackage,
} from "../utils/zip-exporter";
import type { KeyPair } from "../hooks/useKeyInitialization";

type FieldValue = string | number | boolean | null;

type FormData = Record<string, FieldValue>;

// Helper to get localized text from a string or LocalizedText object
const getLocalizedText = (text: string | LocalizedText | undefined): string => {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text.en;
};

interface EventFormProps {
  labels: Label[];
  keyPair?: KeyPair;
  createdBy?: string;
}

const EventForm: React.FC<EventFormProps> = ({ labels, createdBy }) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<FormData>({});
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setMediaFile(e.target.files[0]);
      setErrors((prev) => ({ ...prev, media: "" }));
    }
  };

  const handleTakePhoto = () => {
    // Create a hidden file input that will trigger the camera
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment"; // Use the rear-facing camera on mobile

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setMediaFile(file);
      }
    };

    input.click();
  };

  const renderMediaSection = () => {
    if (mediaFile) {
      return (
        <div className="relative">
          <img
            src={URL.createObjectURL(mediaFile)}
            alt="Preview"
            className="max-h-64 mx-auto mb-4 rounded-lg shadow-medium"
          />
          <button
            type="button"
            onClick={() => setMediaFile(null)}
            className="absolute top-2 right-2 bg-error-500 text-white rounded-full p-2 hover:bg-error-600 transition-colors duration-200 shadow-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-neutral-400" />
          </div>
          <h3 className="text-lg font-medium text-neutral-900 mb-2">
            {t("eventForm.media.title", "Add Media to Your Report")}
          </h3>
          <p className="text-neutral-500 mb-6">
            {t("eventForm.media.description", "Capture a photo or upload an image to provide visual context")}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Upload Image</span>
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
            className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 border border-blue-300"
          >
            <Camera className="w-5 h-5" />
            <span>Take Photo</span>
          </button>
        </div>
      </div>
    );
  };

  const validate = useCallback((): boolean => {
    // Create a clean data object with only the fields that match our labels
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
      // Create a clean data object with only the fields that match our labels
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

      const zipBlob = await exportEventPackageAsZip(eventPackage);
      const filename = `event-${eventPackage.id}.zip`;
      const contentType = "application/zip";

      // Validate required fields
      if (!filename || !contentType) {
        throw new Error(
          `Missing required fields. Filename: ${filename}, ContentType: ${contentType}`,
        );
      }

      console.log("Requesting pre-signed URL...");

      // 1. First, get the pre-signed URL
      const requestBody = JSON.stringify({
        body: JSON.stringify({
          filename: filename,
          contentType: contentType,
        }),
      });

      console.log("Sending request with body:", requestBody);

      const response = await fetch(
        "https://46af8nd05j.execute-api.eu-north-1.amazonaws.com/prod",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: requestBody,
        },
      );

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      if (!response.ok) {
        let errorData;
        try {
          errorData = responseText ? JSON.parse(responseText) : {};
        } catch (e) {
          console.error("Error parsing response:", e);
          errorData = { message: responseText };
        }
        console.error("API Error:", response.status, errorData);
        throw new Error(
          errorData.message ||
            `Failed to get upload URL: ${response.status} ${response.statusText}`,
        );
      }

      let responseData;
      try {
        responseData = responseText ? JSON.parse(responseText) : {};
        console.log("Parsed response data:", responseData);

        // Parse the response body which is a stringified JSON
        const responseBody =
          typeof responseData.body === "string"
            ? JSON.parse(responseData.body)
            : responseData;

        console.log("Response body:", responseBody);

        // Extract the uploadUrl from the parsed response body
        const { uploadUrl } = responseBody;

        if (!uploadUrl) {
          console.error("No uploadUrl in response:", responseData);
          throw new Error("Server did not provide an upload URL");
        }

        console.log("Uploading to URL:", uploadUrl);

        // --- Step 2: Upload the file directly to S3 using the pre-signed URL ---
        const uploadResponse = await fetch(uploadUrl, {
          method: "PUT",
          body: zipBlob,
          headers: {
            "Content-Type": contentType,
          },
        });

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error("Upload error:", uploadResponse.status, errorText);
          throw new Error(
            `Failed to upload the file to S3: ${uploadResponse.status} ${uploadResponse.statusText}`,
          );
        }
        setFormData({});
        setMediaFile(null);
        toast.success(t("eventSaved"));

        return uploadResponse;
      } catch (e) {
        console.error("Failed to process response:", e);
        throw new Error("Failed to process the server response");
      }
    } catch (error) {
      console.error("Error saving event:", error);
      toast.error(
        error instanceof Error ? error.message : String(t("saveError")),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handler for saving the current form data as a draft
  const handleSaveDraft = useCallback(async () => {
    try {
      const cleanData: Record<string, FieldValue> = {};

      labels.forEach((label) => {
        if (formData[label.labelId] !== undefined) {
          cleanData[label.labelId] = formData[label.labelId];
        }
      });

      cleanData.description = formData.description || null;
      cleanData.priority = formData.priority || "medium";

      const eventPackage = await createEventPackage(
        cleanData,
        labels,
        mediaFile || null, // Make mediaFile optional
        {
          createdBy,
          source: "web",
        },
      );

      await downloadEventPackage(eventPackage);
      toast.success(t("draftSaved"));
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error(t("saveError"));
    }
  }, [formData, mediaFile, labels, createdBy, t]);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-xl font-semibold text-blue-900">
                  New Event Report
                </h1>
                <p className="text-sm text-blue-600">
                  Capture and submit your event
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields Section */}
          <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-6">
              Event Details
            </h2>
            <div className="space-y-6">
              {labels.map((label) => {
                const labelName =
                  i18n.language === "fr" ? label.name_fr : label.name_en;
                const labelId = `field-${label.labelId}`;
                const error = errors[label.labelId];

                return (
                  <div key={label.labelId} className="space-y-2">
                    <label
                      htmlFor={labelId}
                      className="block text-sm font-medium text-neutral-700"
                    >
                      {labelName}{" "}
                      {label.required && <span className="text-error-500">*</span>}
                    </label>

                    {/* Text Field */}
                    {label.type === "text" && (
                      <input
                        type="text"
                        id={labelId}
                        name={label.labelId}
                        value={String(formData[label.labelId] || "")}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border transition-colors duration-200"
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
                        className="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border transition-colors duration-200"
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
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={labelId}
                          name={label.labelId}
                          checked={!!formData[label.labelId]}
                          onChange={handleChange}
                          className="h-5 w-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 transition-colors duration-200"
                          disabled={isSubmitting}
                        />
                        <label htmlFor={labelId} className="ml-3 text-sm text-blue-700">
                          {labelName}
                        </label>
                      </div>
                    )}

                    {/* Enum Field */}
                    {label.type === "enum" && label.options && (
                      <select
                        id={labelId}
                        name={label.labelId}
                        value={(formData[label.labelId] as string) || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg transition-colors duration-200"
                        disabled={isSubmitting}
                      >
                        <option value="">Select an option</option>
                        {label.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
                    {label.helpText && (
                      <p className="mt-1 text-xs text-neutral-500">
                        {typeof label.helpText === "string"
                          ? t(label.helpText)
                          : t(label.helpText[i18n.language] || label.helpText.en)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Media Upload Section */}
          <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-6">
              Add Media
            </h2>
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200">
              {renderMediaSection()}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 border border-blue-300 shadow-sm text-sm font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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
                  Saving...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit
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
