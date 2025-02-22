import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

export type FilterOption = 'all' | 'name-asc' | 'name-desc' | 'email-asc' | 'email-desc';

interface FilterDropdownProps {
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const options = [
  { value: 'all', label: 'All Employees' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'email-asc', label: 'Email (A-Z)' },
  { value: 'email-desc', label: 'Email (Z-A)' },
] as const;

const FilterDropdown: React.FC<FilterDropdownProps> = ({ currentFilter, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = options.find(opt => opt.value === currentFilter)?.label;

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
      >
        <Filter size={18} className="text-gray-600 dark:text-gray-300" />
        <span className="flex-1 text-left text-gray-800 dark:text-white">{currentLabel}</span>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 dark:text-gray-300 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onFilterChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  ${currentFilter === option.value ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterDropdown; 