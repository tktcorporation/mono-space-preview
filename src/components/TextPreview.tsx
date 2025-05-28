import React, { useState } from 'react';
import { Copy, Check, Code, Maximize2, Minimize2 } from 'lucide-react';

interface TextPreviewProps {
  text: string;
}

const FONTS = {
  'noto-jp': "'Noto Sans Mono', monospace",
  'mplus': "'M PLUS 1 Code', monospace",
  'ibm-jp': "'IBM Plex Mono', monospace",
} as const;

const TextPreview: React.FC<TextPreviewProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('plain');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedFont, setSelectedFont] = useState<keyof typeof FONTS>('noto-jp');

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-50 dark:bg-gray-900 p-4' : 'h-full'}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Code className="h-4 w-4 mr-1 text-indigo-600 dark:text-indigo-400" />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Preview
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value as keyof typeof FONTS)}
            className="text-xs bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                      rounded px-2 py-1 text-gray-700 dark:text-gray-300 focus:outline-none 
                      focus:ring-1 focus:ring-indigo-500"
          >
            <option value="noto-jp">Noto Sans Mono</option>
            <option value="mplus">M PLUS 1 Code</option>
            <option value="ibm-jp">IBM Plex Mono</option>
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-xs bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                      rounded px-2 py-1 text-gray-700 dark:text-gray-300 focus:outline-none 
                      focus:ring-1 focus:ring-indigo-500"
          >
            <option value="plain">Plain Text</option>
            <option value="js">JavaScript</option>
            <option value="ts">TypeScript</option>
            <option value="jsx">JSX</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center text-xs bg-gray-100 dark:bg-gray-700 
                      hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300
                      rounded px-2 py-1 transition-colors duration-200 focus:outline-none 
                      focus:ring-2 focus:ring-indigo-500"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5 mr-1" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center text-xs bg-gray-100 dark:bg-gray-700 
                      hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300
                      rounded px-2 py-1 transition-colors duration-200 focus:outline-none 
                      focus:ring-2 focus:ring-indigo-500"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-3.5 w-3.5 mr-1" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5 mr-1" />
            )}
            {isFullscreen ? 'Exit' : 'Fullscreen'}
          </button>
        </div>
      </div>
      <div className={`flex-grow ${isFullscreen ? 'overflow-hidden' : ''}`}>
        <pre 
          className={`h-full min-h-[300px] overflow-x-auto p-4 rounded-lg bg-gray-100 dark:bg-gray-800 
                     border border-gray-300 dark:border-gray-700 text-sm
                     whitespace-pre text-gray-800 dark:text-gray-200`}
          style={{ fontFamily: FONTS[selectedFont] }}
        >
          <code className={`language-${language}`}>
            {text || '// Preview will appear here'}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TextPreview;