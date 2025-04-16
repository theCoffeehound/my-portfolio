import englishFlag from '../assets/english-flag.svg'; // Path to English flag icon
import finnishFlag from '../assets/finnish-flag.svg'; // Path to Finnish flag icon
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      className="language-dropdown"
      value={language}
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="fi">Suomi</option>
    </select>
  );
};

export default LanguageToggle;
