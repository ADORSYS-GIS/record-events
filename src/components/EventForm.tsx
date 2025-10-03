import { Camera } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../context/ThemeContext.tsx";
import { LocalEvent } from "../hooks/useEventHistory";
import type { KeyPair } from "../hooks/useKeyInitialization";
import { useOnlineStatus } from "../hooks/useOnlineStatus.ts";
import type { Label } from "../labels/label-manager";
import type { EventPackage } from "../openapi-rq/requests/types.gen";
import { apiAuthService } from "../services/keyManagement/apiAuthService";
import { generateEventJWT } from "../services/keyManagement/jwtService";
import type { EventPackage as LocalEventPackage } from "../types/event";
import { FieldValue } from "../types/event";
import { createEventPackage, validateFormData } from "../utils/event-packer";
import CameraCapture from "./CameraCapture";
import ActionBar from "./event-form/ActionBar";
import ElectionResults from "./event-form/ElectionResults";
import FormFields from "./event-form/FormFields";
import MediaSection from "./event-form/MediaSection";

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
  submitEventAsync: (signedEventPackage: string) => Promise<void>;
  submitEventDataAsync: (signedEventPackage: string) => Promise<void>;
  submitEventImageAsync: (signedEventPackage: string) => Promise<void>;
  isSubmitting: boolean;
  isSubmittingData: boolean;
  isSubmittingImage: boolean;
  updateEventStatus: (eventId: string, status: LocalEvent["status"]) => void;
  removeEvent: (eventId: string) => void;
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
  submitEventAsync,
  submitEventDataAsync,
  submitEventImageAsync,
  isSubmitting,
  isSubmittingData,
  isSubmittingImage,
  updateEventStatus,
  removeEvent,
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { isOnline } = useOnlineStatus();
  const [formData, setFormData] = useState<FormData>({});
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragActive, setDragActive] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const isReadOnly = initialEvent?.status === "submitted";

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

  useEffect(() => {
    const registeredVoters = formData.votants_inscrits
      ? Number(formData.votants_inscrits)
      : 0;
    if (registeredVoters > 0) {
      const candidateVotes = labels
        .filter((label) => label.category === "election_results")
        .reduce((total, label) => {
          if (
            label.labelId !== "votants_inscrits" &&
            label.labelId !== "abstentions" &&
            label.labelId !== "bulletins_nuls"
          ) {
            return total + (Number(formData[label.labelId]) || 0);
          }
          return total;
        }, 0);

      const nullBulletins = Number(formData.bulletins_nuls) || 0;
      const abstentions = registeredVoters - candidateVotes - nullBulletins;
      setFormData((prev) => ({
        ...prev,
        abstentions: abstentions >= 0 ? abstentions : 0,
      }));
    }
  }, [formData, labels]);

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
      let numValue = target.value === "" ? null : Number(target.value);
      if (numValue !== null && numValue > 30000000) {
        numValue = 30000000;
      }
      value = numValue;
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

    try {
      const cleanData: Record<string, FieldValue> = {};
      labels.forEach((label) => {
        if (formData[label.labelId] !== undefined) {
          cleanData[label.labelId] = formData[label.labelId];
        }
      });

      const eventId = uuidv4();

      const eventPackage = await createEventPackage(
        cleanData,
        labels,
        null, // No media file in the main package
        { createdBy, source: "web", eventId },
      );

      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error(t("eventForm.authTokenNotFound"));
      }

      apiAuthService.setBearerToken(token);

      if (!_keyPair || !_keyPair.privateKey || !_keyPair.publicKey) {
        throw new Error(t("eventForm.keyPairNotAvailable"));
      }

      const jwtEventData = await generateEventJWT(
        _keyPair.privateKey,
        _keyPair.publicKey,
        eventPackage,
        token,
      );

      if (!isOnline) {
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
        saveDraft(historyEventPackage, mediaFile || undefined);
        updateEventStatus(eventPackage.id, "pending");
        toast.info(t("eventForm.media.offlineSubmissionMessage"));
        onGoBack();
        return;
      }

      try {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error(t("eventForm.submissionTimeout"))),
            5000,
          ),
        );

        await Promise.race([
          (async () => {
            await submitEventDataAsync(jwtEventData);
            if (mediaFile) {
              const imagePackage = await createEventPackage({}, [], mediaFile, {
                createdBy,
                source: "web",
                eventId,
              });
              const jwtImageEventData = await generateEventJWT(
                _keyPair.privateKey,
                _keyPair.publicKey,
                imagePackage,
                token,
              );
              await submitEventImageAsync(jwtImageEventData);
            }
          })(),
          timeoutPromise,
        ]);

        if (initialEvent) {
          if (initialEvent.status === "draft") {
            updateEventStatus(initialEvent.id, "submitted");
            toast.success(t("eventForm.media.eventSubmitted"));
          } else {
            removeEvent(initialEvent.id);
            toast.success(t("eventForm.media.eventResubmitted"));
          }
        } else {
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
          addEvent(historyEventPackage); // Add as pending
          updateEventStatus(historyEventPackage.id, "submitted");
          toast.success(t("eventForm.media.eventSubmitted"));
        }
      } catch (error) {
        if (initialEvent) {
          if (initialEvent.status === "draft") {
            updateEventStatus(initialEvent.id, "failed");
            toast.error(t("eventForm.media.eventSubmissionFailed"));
          } else {
            toast.error(t("eventForm.media.eventResubmissionFailed"));
          }
        } else {
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
          saveDraft(historyEventPackage, mediaFile || undefined);
          updateEventStatus(eventPackage.id, "failed");
          toast.error(t("eventForm.media.eventSubmissionFailed"));
        }
      }

      setFormData({});
      setMediaFile(null);
      onGoBack();
    } catch (error) {
      console.error("Error saving event:", error);
      toast.error(
        error instanceof Error ? error.message : String(t("saveError")),
      );
    }
  };

  const handleSaveDraft = useCallback(async () => {
    if (!validate()) {
      toast.error(t("validationError"));
      return;
    }
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
        {/* Form Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-32">
          <form id="event-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Form Fields Section */}
            <div className="relative z-20 p-0 sm:bg-white/80 sm:dark:bg-gray-800/80 sm:backdrop-blur-sm sm:rounded-2xl sm:shadow-xl sm:border sm:border-gray-200/50 sm:dark:border-gray-700/50 sm:p-6 md:p-8">
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
                isSubmitting={isSubmitting || isReadOnly}
                handleChange={handleChange}
                handleDropdownChange={handleDropdownChange}
              />
            </div>

            {/* Election Results Section */}
            <div className="relative z-10 p-0 sm:bg-white/80 sm:dark:bg-gray-800/80 sm:backdrop-blur-sm sm:rounded-2xl sm:shadow-xl sm:border sm:border-gray-200/50 sm:dark:border-gray-700/50 sm:p-6 md:p-8">
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
                isSubmitting={isSubmitting || isReadOnly}
                handleChange={handleChange}
              />
            </div>

            {/* Media Upload Section */}
            <div className="relative z-10 p-0 sm:bg-white/80 sm:dark:bg-gray-800/80 sm:backdrop-blur-sm sm:rounded-2xl sm:shadow-xl sm:border sm:border-gray-200/50 sm:dark:border-gray-700/50 sm:p-6 md:p-8">
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
                isReadOnly={isReadOnly}
              />
            </div>
            <ActionBar
              isSubmitting={isSubmitting}
              handleSaveDraft={handleSaveDraft}
              isReadOnly={isReadOnly}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EventForm;
