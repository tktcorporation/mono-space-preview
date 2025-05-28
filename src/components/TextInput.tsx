import React from 'react';
import { Copy } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="text-input\" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Input Text
        </label>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {value.length} characters | {value.split('\n').length} lines
        </div>
      </div>
      <div className="relative flex-grow">
        <textarea
          id="text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type or paste Japanese-English mixed text here..."
          className="w-full h-full min-h-[300px] p-4 border border-gray-300 dark:border-gray-700 rounded-lg 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400
                    transition-all duration-200 resize-none"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default TextInput;