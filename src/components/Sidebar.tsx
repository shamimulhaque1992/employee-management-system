import React from "react";
import { Link } from "react-router-dom";
import {
  PanelLeftClose,
  PanelRightClose,
  IdCard,
  Grid2x2Plus,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-white dark:bg-gray-800 p-4 transition-all duration-300 
        w-20 ${isOpen ? "md:w-60" : "md:w-20"}
        flex flex-col border-r border-gray-200 dark:border-gray-700`}
    >
      <div
        className={`flex items-center mb-4 ${
          isOpen ? "md:justify-end" : "justify-center"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors hidden md:block"
        >
          {isOpen ? (
            <PanelLeftClose size={24} />
          ) : (
            <PanelRightClose size={24} />
          )}
        </button>
      </div>
      <div className="flex justify-center items-center mb-20">
        <Link to="/">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/performance.png"
              className={`max-w-12 ${isOpen ? "md:max-w-24" : "md:max-w-12"}`}
              alt="EMS Logo"
            />
            <h2
              className={`text-gray-800 dark:text-white font-bold text-lg hidden ${
                isOpen ? "md:block" : "md:hidden"
              }`}
            >
              EMS
            </h2>
          </div>
        </Link>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/card-view"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-colors flex items-center border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md
              p-3 ${isOpen ? "md:p-5" : "md:p-3"}
              justify-center ${isOpen ? "md:justify-start" : "md:justify-center"}`}
          >
            <IdCard className={isOpen ? "md:mr-2" : ""} />
            <span className={`hidden ${isOpen ? "md:inline" : "md:hidden"}`}>
              Card View
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/table-view"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-colors flex items-center border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md
              p-3 ${isOpen ? "md:p-5" : "md:p-3"}
              justify-center ${isOpen ? "md:justify-start" : "md:justify-center"}`}
          >
            <Grid2x2Plus className={isOpen ? "md:mr-2" : ""} />
            <span className={`hidden ${isOpen ? "md:inline" : "md:hidden"}`}>
              Table View
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
