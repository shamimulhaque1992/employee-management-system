import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="min-h-[400px] flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center border border-red-200 dark:border-red-900">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
