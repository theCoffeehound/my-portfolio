import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';  // Import the useDarkMode hook
import '../styles/DarkModeToggle.css';  // Your custom CSS file
import moon from '../assets/moon.svg'; // Path to moon icon
import sun from '../assets/sun.svg';   // Path to sun icon

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();  // Get darkMode state and setDarkMode function
  
  const handleToggle = () => {
    setDarkMode(!darkMode);  // Toggle between dark and light mode
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={darkMode}  // If darkMode is true, checkbox will be checked
        onChange={handleToggle}  // Toggle dark mode when checkbox changes
      />
      <span className="slider round">
        {/* Display moon and sun icons */}
        <img src={moon} alt="Moon" className={`icon-moon ${darkMode ? 'active' : ''}`} />
        <img src={sun} alt="Sun" className={`icon-sun ${!darkMode ? 'active' : ''}`} />
      </span>
    </label>
  );
};

export default DarkModeToggle;
