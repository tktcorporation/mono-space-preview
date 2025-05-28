import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TextPreview from './components/TextPreview';

function App() {
  const [inputText, setInputText] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user previously set a preference
    const savedMode = localStorage.getItem('darkMode');
    // Check if system prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode ? savedMode === 'true' : prefersDark;
  });

  // Update body class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTextChange = (text: string) => {
    setInputText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter Japanese-English mixed text in the input area to see it previewed in monospace font
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:min-h-[500px]">
          <TextInput value={inputText} onChange={handleTextChange} />
          <TextPreview text={inputText} />
        </div>
        
        <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
          <h2 className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mb-2">Usage Tips</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Type or paste any Japanese-English mixed text in the input area</li>
            <li>The preview shows your text in monospace font with horizontal scrolling</li>
            <li>Use the fullscreen button to expand the preview to full screen</li>
            <li>Use the copy button to copy the formatted text to your clipboard</li>
            <li>Change the syntax highlighting by selecting a language from the dropdown</li>
            <li>Toggle between light and dark mode using the button in the header</li>
          </ul>
        </div>
      </main>
      <footer className="py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>モノスペース Preview © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;