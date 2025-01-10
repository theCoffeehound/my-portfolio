import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';  // Import the useDarkMode hook
import languageData from '../data/language.json';
import '../styles/Navbar.css';
import Settings from './Settings';

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();  // Get darkMode state and setDarkMode function
  const { language } = useLanguage();  // Assuming useLanguage is set up similarly for language context
  const texts = languageData[language].navbar;

  // Log the dark mode state
  console.log('Navbar darkMode state:', darkMode);

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-brand">
        <h1 className="brand">{languageData[language].brand}</h1>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          {texts.home}
        </Link>
        <Link to="/about" className="navbar-link">
          {texts.about}
        </Link>
        <Link to="/projects" className="navbar-link">
          {texts.projects}
        </Link>
        <Link to="/contact" className="navbar-link">
          {texts.contact}
        </Link>
      </div>
      <div className='navbar-actions'>
        <Settings />
      </div>
    </nav>
  );
};

export default Navbar;
