import React, { useRef, useState, useCallback } from "react";
import { Camera, X, Check } from "lucide-react";

interface CameraCaptureProps {
  onCapture: (blob: Blob) => void;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({
  onCapture,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access camera. Please check permissions.");
      onClose();
    }
  }, [onClose]);

  const stopCamera = useCallback(() => {
    setStream((stream) => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      return null;
    });
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        setCapturedImage(canvas.toDataURL("image/jpeg"));
        stopCamera();
      }
    }
  };

  const handleConfirm = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          onCapture(blob);
        }
        onClose();
      }, "image/jpeg");
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    startCamera();
  };

  React.useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, [startCamera, stopCamera]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        {capturedImage ? (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 flex items-center justify-center">
        {capturedImage ? (
          <div className="flex items-center space-x-8">
            <button onClick={handleRetake} className="text-white font-semibold">
              Retake
            </button>
            <button
              onClick={handleConfirm}
              className="bg-cameroon-green text-white rounded-full p-4"
            >
              <Check className="w-8 h-8" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleCapture}
            className="w-20 h-20 rounded-full border-4 border-white bg-white/30 flex items-center justify-center"
          >
            <Camera className="w-8 h-8 text-white" />
          </button>
        )}
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraCapture;
