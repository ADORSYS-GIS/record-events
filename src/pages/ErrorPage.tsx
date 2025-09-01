import React from "react";

interface ErrorPageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ 
  title = "Initialization Failed",
  message = "An error occurred during initialization",
  onRetry 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;

