import React from "react";
import { useTheme } from "../hooks/useTheme.tsx";

interface LoadingSpinnerProps {
  message: string;
  subMessage?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message,
  subMessage,
}) => {
  const { isDark } = useTheme();

  return (
    <>
      <style>{`
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Image container with spinning border */}
          <div
            className="relative w-64 h-64 mb-8"
            style={{
              animation: "float-subtle 4s ease-in-out infinite",
            }}
          >
            {/* Spinning border */}
            <div
              className="absolute inset-0 border-4 border-transparent rounded-full"
              style={{
                animation: "spin 2s linear infinite",
                borderTopColor: "rgb(239 68 68)", // cameroon-red
                borderRightColor: "rgb(252 211 77)", // cameroon-yellow
                borderBottomColor: "rgb(34 197 94)", // cameroon-green
              }}
            ></div>
            {/* Image */}
            <img
              src="/loading.png"
              alt="Loading"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Message */}
          <div className="relative z-10">
            <p
              className={`text-lg leading-relaxed max-w-md mx-auto font-semibold ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {message}
            </p>
            {subMessage && (
              <p
                className={`text-sm mt-4 max-w-md mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {subMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
