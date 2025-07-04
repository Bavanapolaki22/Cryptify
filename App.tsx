import React from 'react';
import { RandomGenerator } from './components/RandomGenerator';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <RandomGenerator />
      </div>
    </ThemeProvider>
  );
}

export default App;