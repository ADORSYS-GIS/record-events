import React from "react";

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className="min-h-screen bg-primary-100 flex items-center justify-center font-[Inter] antialiased">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-2xl px-6 py-8 max-w-md w-full text-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
