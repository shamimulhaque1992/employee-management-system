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
      className={`bg-white dark:bg-gray-800 p-4 transition-all duration-300 ${
        isOpen ? "w-60" : "w-20"
      } flex flex-col border-r border-gray-200 dark:border-gray-700`}
    >
      <div
        className={`flex ${
          isOpen ? "justify-end" : "justify-center"
        } items-center mb-4`}
      >
        <button
          onClick={toggleSidebar}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          {isOpen ? (
            <PanelLeftClose size={24} />
          ) : (
            <PanelRightClose size={24} />
          )}
        </button>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/images/performance.png"
            className={`${isOpen ? "max-w-24" : "max-w-12"}`}
            alt="EMS Logo"
          />
          <h2
            className={`text-gray-800 dark:text-white font-bold text-lg ${
              isOpen ? "block" : "hidden"
            }`}
          >
            EMS
          </h2>
        </div>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/card-view"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center ${
              isOpen ? "p-5" : "p-3"
            } border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <IdCard className={`${isOpen ? "mr-2" : ""}`} />
            {isOpen && "Card View"}
          </Link>
        </li>
        <li>
          <Link
            to="/table-view"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center ${
              isOpen ? "p-5" : "p-3"
            } border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <Grid2x2Plus className={`${isOpen ? "mr-2" : ""}`} />
            {isOpen && "Table View"}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
