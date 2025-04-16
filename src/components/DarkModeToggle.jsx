import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/DarkModeToggle.css';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="dark-mode-button" onClick={handleToggle}>
      <img
        src={darkMode ? sun : moon}
        alt={darkMode ? 'Sun (Light Mode)' : 'Moon (Dark Mode)'}
        className="dark-mode-icon"
      />
    </button>
  );
};

export default DarkModeToggle;
