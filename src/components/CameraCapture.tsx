/**
 * CameraCapture component allows users to capture an image using their device's camera
 * or select an image from their gallery. It provides a preview of the captured or selected image,
 * and handles camera access, errors, and file uploads.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {(file: File) => void} props.onCapture - Callback invoked with the captured or selected image file.
 * @param {(error: Error) => void} [props.onError] - Optional callback invoked when an error occurs.
 * @param {string} [props.className] - Optional additional CSS classes for the root element.
 * @param {boolean} [props.disabled] - Optional flag to disable all interactions.
 *
 * @example
 * <CameraCapture
 *   onCapture={file => console.log(file)}
 *   onError={error => alert(error.message)}
 * />
 *
 * @remarks
 * - Uses `navigator.mediaDevices.getUserMedia` for camera access.
 * - Supports both camera capture and file upload from gallery.
 * - Displays a preview and allows resetting/removing the selected image.
 * - Handles cleanup of media streams and object URLs.
 */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface CameraCaptureProps {
  onCapture: (file: File) => void;
  onError?: (error: Error) => void;
  className?: string;
  disabled?: boolean;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({
  onCapture,
  onError,
  className = "",
  disabled = false,
}) => {
  const { t } = useTranslation();

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // State
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isCameraLoading, setIsCameraLoading] = useState(false);

  // Start Camera
  const startCamera = useCallback(async () => {
    if (disabled) return;

    setIsCameraLoading(true);
    setCameraError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      const error = err as Error;
      console.error("Camera error:", error);
      setCameraError(t("cameraAccessError"));
      onError?.(error);
    } finally {
      setIsCameraLoading(false);
    }
  }, [disabled, onError, t]);

  // Stop Camera
  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setIsCameraActive(false);
  }, []);

  // Capture Photo
  const capturePhoto = useCallback(() => {
    if (disabled || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        const file = new File([blob], `capture-${Date.now()}.jpg`, {
          type: "image/jpeg",
          lastModified: Date.now(),
        });

        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
        onCapture(file);
        stopCamera();
      },
      "image/jpeg",
      0.9,
    );
  }, [disabled, onCapture, stopCamera]);

  // Handle File Upload
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        const error = new Error("Selected file is not an image");
        setCameraError(t("invalidImageFile"));
        onError?.(error);
        return;
      }

      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onCapture(file);
    },
    [disabled, onCapture, onError, t],
  );

  // Cleanup
  useEffect(() => {
    return () => {
      stopCamera();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl, stopCamera]);

  // Reset Preview
  const resetPreview = useCallback(() => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <div className={className}>
      {/* Preview Area */}
      <div className="mb-4 h-36 border-2 border-dashed border-gray-300 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400">
        {!previewUrl && !isCameraActive && (
          <div className="flex flex-col items-center text-gray-500">
            <svg
              className="w-8 h-8 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
              />
            </svg>
            <span>{t("cameraPreviewPlaceholder")}</span>
          </div>
        )}

        {isCameraActive && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover rounded"
          />
        )}

        {previewUrl && (
          <div className="relative w-full h-full">
            <img
              src={previewUrl}
              alt="Captured preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={resetPreview}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={t("removeImage")}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
        <button
          type="button"
          onClick={startCamera}
          disabled={disabled || isCameraLoading}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow transition duration-300 flex items-center justify-center gap-2"
        >
          {t("openCamera")}
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="w-full bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow transition duration-300 flex items-center justify-center gap-2"
        >
          {t("chooseFromGallery")}
        </button>
      </div>

      {/* Capture Controls */}
      {isCameraActive && (
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={capturePhoto}
            disabled={disabled}
            className="w-full rounded-full bg-primary-500 p-3 text-white shadow hover:bg-primary-600 focus:outline-none transition hover:scale-105 flex items-center justify-center"
            aria-label={t("takePhoto")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={stopCamera}
            className="w-full px-3 py-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition hover:scale-105 flex items-center justify-center"
          >
            {t("cancel")}
          </button>
        </div>
      )}

      {/* Error Message */}
      {cameraError && (
        <div className="text-red-500 text-sm mt-2">{cameraError}</div>
      )}

      {/* Hidden Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        capture="environment"
      />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraCapture;
