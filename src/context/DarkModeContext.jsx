import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

// DarkModeProvider component to provide darkMode state and setDarkMode function to the app
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // Default to light mode (false)
  });

  // Log the darkMode value when it changes
  useEffect(() => {
    console.log('Dark mode state changed:', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode)); // Save darkMode state to localStorage
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use dark mode state in any component
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
