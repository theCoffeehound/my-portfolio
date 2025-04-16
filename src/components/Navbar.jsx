import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import languageData from '../data/language.json';
import LanguageToggle from './LanguageToggle';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const texts = languageData[language].navbar;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <h1 className="brand">{languageData[language].brand}</h1>
        </Link>

      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>
          {texts.home}
        </Link>
        <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>
          {texts.about}
        </Link>
        <Link to="/projects" className="navbar-link" onClick={() => setMenuOpen(false)}>
          {texts.projects}
        </Link>
        <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
          {texts.contact}
        </Link>
        <div className="navbar-actions">
          <div className="divider" />
          <LanguageToggle />
          <div className="divider" />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
