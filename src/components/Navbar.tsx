import React, { useState } from "react";
import {
  ChevronDown,
  User,
  Settings,
  LayoutDashboard,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-white flex justify-between items-center shadow-md dark:shadow-none border-b border-gray-200 dark:border-gray-700 relative ">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Employee Management System
        </h1>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          <User size={18} className="mr-2" />
          <ChevronDown size={18} className="ml-2" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? (
                <>
                  <Sun size={16} className="mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={16} className="mr-2" />
                  Dark Mode
                </>
              )}
            </button>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LayoutDashboard size={16} className="mr-2" />
              Dashboard
            </Link>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings size={16} className="mr-2" />
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
