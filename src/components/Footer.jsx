import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";
import '../styles/Footer.css'; // Optional, for custom styles if you want

const Footer = () => {
  const { language } = useLanguage();
  const texts = languageData[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} {texts.brand}. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/iirovalimaa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://github.com/thecoffeehound" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/iiro-v%C3%A4limaa-18aa01206/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
