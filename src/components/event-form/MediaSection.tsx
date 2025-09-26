import { Camera, Upload, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MediaSectionProps {
  mediaFile: File | null;
  setMediaFile: (file: File | null) => void;
  dragActive: boolean;
  handleDrag: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTakePhoto: () => void;
}

const MediaSection: React.FC<MediaSectionProps> = ({
  mediaFile,
  setMediaFile,
  dragActive,
  handleDrag,
  handleDrop,
  handleFileChange,
  handleTakePhoto,
}) => {
  const { t } = useTranslation();

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
              className="opacity-0 group-hover:opacity-100 bg-error-500 text-white rounded-full p-2 hover:bg-error-600 transition-all duration-200 shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {mediaFile.name}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
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
          ? "border-cameroon-yellow bg-cameroon-yellow/10"
          : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        <div className="w-16 h-16 bg-cameroon-green/20 dark:bg-cameroon-green/30 rounded-full flex items-center justify-center mx-auto">
          <Camera className="w-8 h-8 text-cameroon-green" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {t("eventForm.media.title", "Add Media to Your Report")}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {t(
              "eventForm.media.description",
              "Drag and drop an image here, or click to browse",
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <label className="cursor-pointer bg-cameroon-green hover:bg-cameroon-green/90 text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 font-medium">
            <Upload className="w-5 h-5" />
            <span>{t("eventForm.media.browseFiles")}</span>
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
            className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600 font-medium"
          >
            <Camera className="w-5 h-5" />
            <span>{t("eventForm.media.takePhoto")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
