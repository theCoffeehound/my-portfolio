import React from "react";
import "../styles/Contact.css";
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";

const Contact = () => {
  const { language } = useLanguage();
  const texts = languageData[language];

  return (
    <div className="contact-container">
      <h1 className="contact-title">{texts.contact.title}</h1>
      <p className="contact-subtext">{texts.contact.subtitle}</p>

      <div className="contact-links">
        <a
          href="https://github.com/iirovalimaa"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="https://cdn.simpleicons.org/github/fff" alt="GitHub" />
          <span>{texts.contact.mainGitHub}</span>
        </a>

        <a
          href="https://github.com/thecoffeehound"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="https://cdn.simpleicons.org/github/fff" alt="GitHub" />
          <span>{texts.contact.secondGitHub}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/iiro-v%C3%A4limaa-18aa01206/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          <span>{texts.contact.linkedin}</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
