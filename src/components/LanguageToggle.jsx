import React from 'react';
import { useLanguage } from '../context/LanguageContext';  // Import the useLanguage hook
import '../styles/LanguageToggle.css';  // Your custom CSS file
import englishFlag from '../assets/english-flag.svg'; // Path to English flag icon
import finnishFlag from '../assets/finnish-flag.svg'; // Path to Finnish flag icon

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();  // Get language state and toggle function
  
  // Handles language toggle on change of the switch
  const handleToggle = () => {
    toggleLanguage(); // Toggle between English and Finnish
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={language === 'fi'}  // If the language is 'fi', the checkbox will be checked
        onChange={handleToggle}  // Toggle the language when the checkbox changes
      />
      <span className="slider round">
        {/* Center flags inside the toggle */}
        <img 
          src={englishFlag} 
          alt="English Flag" 
          className={`icon ${language === 'en' ? 'active' : ''}`} 
        />
        <img 
          src={finnishFlag} 
          alt="Finnish Flag" 
          className={`icon ${language === 'fi' ? 'active' : ''}`} 
        />
      </span>
    </label>
  );
};

export default LanguageToggle;
