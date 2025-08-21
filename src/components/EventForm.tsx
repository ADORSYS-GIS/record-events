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
            className="max-h-64 mx-auto mb-4 rounded"
          />
          <button
            type="button"
            onClick={() => setMediaFile(null)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
          >
            &times;
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-center space-x-4 mb-4">
          <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Upload className="inline mr-2" size={16} />
            {t("uploadImage")}
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
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            <Camera className="mr-2" size={16} />
            {t("takePhoto")}
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto"
    >
      {/* Dynamic Form Fields from Labels */}
      <div className="space-y-4">
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
                {label.required && <span className="text-red-500">*</span>}
              </label>

              {/* Text Field */}
              {label.type === "text" && (
                <input
                  type="text"
                  id={labelId}
                  name={label.labelId}
                  value={String(formData[label.labelId] || "")}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>
              )}

              {/* Enum Field */}
              {label.type === "enum" && label.options && (
                <select
                  id={labelId}
                  name={label.labelId}
                  value={(formData[label.labelId] as string) || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  disabled={isSubmitting}
                >
                  <option value="">{t("selectAnOption")}</option>
                  {label.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              {label.helpText && (
                <p className="mt-1 text-xs text-gray-500">
                  {typeof label.helpText === "string"
                    ? t(label.helpText)
                    : t(label.helpText[i18n.language] || label.helpText.en)}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Media Upload Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t("addMedia")}
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {renderMediaSection()}
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="button"
          onClick={handleSaveDraft}
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="h-4 w-4 mr-2" />
          {t("save")}
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
              {t("saving")}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {t("submit")}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EventForm;
