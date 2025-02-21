import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 flex flex-col items-center justify-center">
      <div className="text-center">
        <SettingsIcon className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Settings</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Coming Soon!</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          We're working hard to bring you amazing settings features.
        </p>
      </div>
    </div>
  );
};

export default Settings; 