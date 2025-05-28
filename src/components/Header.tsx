import React from 'react';
import { Moon, Sun, Type } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <Type className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          モノスペース <span className="text-indigo-600 dark:text-indigo-400">Preview</span>
        </h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-indigo-600" />
        )}
      </button>
    </header>
  );
};

export default Header;