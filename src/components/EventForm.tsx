import { Camera } from "lucide-react";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import type { KeyPair } from "../hooks/useKeyInitialization";
import type { Label } from "../labels/label-manager";
import { createEventPackage, validateFormData } from "../utils/event-packer";
import { useEventSubmission } from "../hooks/useEventSubmission";
import { generateEventJWT } from "../services/keyManagement/jwtService";
import type { EventPackage as LocalEventPackage } from "../types/event";
import type { EventPackage } from "../openapi-rq/requests/types.gen";
import { LocalEvent } from "../hooks/useEventHistory";
import { apiAuthService } from "../services/keyManagement/apiAuthService";
import { useTheme } from "../hooks/useTheme";
import CameraCapture from "./CameraCapture";
import { FieldValue } from "../types/event";
import FormHeader from "./event-form/FormHeader";
import MediaSection from "./event-form/MediaSection";
import ActionBar from "./event-form/ActionBar";
import FormFields from "./event-form/FormFields";
import ElectionResults from "./event-form/ElectionResults";

type FormData = Record<string, FieldValue>;

interface EventFormProps {
  labels: Label[];
  keyPair: KeyPair; // Make keyPair required for authorization
  createdBy?: string;
  onGoBack?: () => void;
  initialEvent?: LocalEvent;
  addEvent: (eventPackage: EventPackage, hash?: string) => void;
  saveDraft: (eventPackage: EventPackage, image?: Blob) => void;
  updateDraft: (eventPackage: EventPackage, image?: Blob) => void;
}

const EventForm: React.FC<EventFormProps> = ({
  labels,
  keyPair: _keyPair,
  createdBy,
  onGoBack = () => window.history.back(),
  initialEvent,
  addEvent,
  saveDraft,
  updateDraft,
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<FormData>({});
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragActive, setDragActive] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const { submitEvent, isSubmitting: isApiSubmitting } = useEventSubmission();

  useEffect(() => {
    if (initialEvent) {
      const initialFormData: FormData = {};
      initialEvent.eventPackage.annotations.forEach((annotation) => {
        initialFormData[annotation.labelId] = annotation.value;
      });
      setFormData(initialFormData);
      if (initialEvent.image) {
        setMediaFile(initialEvent.image as File);
      }
    }
  }, [initialEvent]);

  useEffect(() => {
    return () => {
      if (initialEvent) {
        setFormData({});
      }
    };
  }, [initialEvent]);

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
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: value };

      // Reset dependent fields
      const resetDependentFields = (
        fieldName: string,
        data: Record<string, FieldValue>,
      ) => {
        labels.forEach((label) => {
          if (label.dependsOn === fieldName) {
            data[label.labelId] = null;
            resetDependentFields(label.labelId, data);
          }
        });
      };
      resetDependentFields(name, newFormData);

      return newFormData;
    });

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
    setIsCameraOpen(true);
  };

  const handleCapture = (blob: Blob) => {
    const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
    setMediaFile(file);
    setIsCameraOpen(false);
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

      // Get the token from PoW verification
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error(
          "Authentication token not found. Please complete initialization first.",
        );
      }

      // Set the token as Bearer token for API requests
      apiAuthService.setBearerToken(token);

      if (!_keyPair || !_keyPair.privateKey || !_keyPair.publicKey) {
        throw new Error("Key pair is not available for signing the event.");
      }

      // Generate JWT with event data
      const jwtEventData = await generateEventJWT(
        _keyPair.privateKey,
        _keyPair.publicKey,
        eventPackage,
        token,
      );

      // Submit to backend using the generated API (with Bearer token in header)
      await submitEvent(jwtEventData);

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
        {
          createdBy,
          source: "web",
          existingPackage:
            initialEvent?.eventPackage as unknown as LocalEventPackage,
        },
      );

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

      if (initialEvent) {
        updateDraft(historyEventPackage, mediaFile || undefined);
      } else {
        saveDraft(historyEventPackage, mediaFile || undefined);
      }
      toast.success(t("draftSaved"));
      onGoBack();
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error(t("saveError"));
    }
  }, [
    formData,
    mediaFile,
    labels,
    createdBy,
    t,
    saveDraft,
    initialEvent,
    updateDraft,
    onGoBack,
  ]);

  return (
    <>
      {isCameraOpen && (
        <CameraCapture
          onCapture={handleCapture}
          onClose={() => setIsCameraOpen(false)}
        />
      )}
      <div
        className={`min-h-screen transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
        }`}
      >
        <FormHeader onGoBack={onGoBack} />

        {/* Form Content */}
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-32">
          <form id="event-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Form Fields Section */}
            <div className="relative z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-cameroon-green/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cameroon-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t("eventForm.fields.title")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("eventForm.fields.description")}
                  </p>
                </div>
              </div>

              <FormFields
                labels={labels}
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                handleDropdownChange={handleDropdownChange}
              />
            </div>

            {/* Election Results Section */}
            <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-cameroon-yellow/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cameroon-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t("eventForm.electionResults.title")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("eventForm.electionResults.description")}
                  </p>
                </div>
              </div>
              <ElectionResults
                labels={labels}
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
              />
            </div>

            {/* Media Upload Section */}
            <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-cameroon-red/20 rounded-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 text-cameroon-red" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t("eventForm.media.title")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("eventForm.media.description")}
                  </p>
                </div>
              </div>
              <MediaSection
                mediaFile={mediaFile}
                setMediaFile={setMediaFile}
                dragActive={dragActive}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                handleFileChange={handleFileChange}
                handleTakePhoto={handleTakePhoto}
              />
            </div>
          </form>
        </div>
        <ActionBar
          isSubmitting={isSubmitting}
          isApiSubmitting={isApiSubmitting}
          handleSaveDraft={handleSaveDraft}
        />
      </div>
    </>
  );
};

export default EventForm;
