import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 flex flex-col items-center justify-center">
      <div className="text-center">
        <LayoutDashboard className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Dashboard</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Coming Soon!</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          We're building an amazing dashboard experience for you.
        </p>
      </div>
    </div>
  );
};

export default Dashboard; 