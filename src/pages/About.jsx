import React from "react";
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";
import "../styles/About.css";

const getIconUrl = (name) => {
  if (name.toLowerCase() === "c#") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
  }
  if (name.toLowerCase() === "java") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
  }
  if (name.toLowerCase() === "azure") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg";
  }
  if (name.toLowerCase() === "aws") {
    return "https://cdn.simpleicons.org/amazonwebservices";
  }

  const formatted = name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "dot")
    .replace(/\s/g, "");
  return `https://cdn.simpleicons.org/${formatted}`;
};

const About = () => {
  const { language } = useLanguage();
  const texts = languageData[language];

  const renderTechGrid = (items) => (
    <div className="about-grid">
      {items.map((item, index) => (
        <div key={index} className="tech-item">
          <img
            src={getIconUrl(item)}
            alt={item}
            className="tech-icon"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span className="tech-name">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="about-container">
      <h1 className="about-title">{texts.about.title}</h1>
      <p className="about-text">{texts.about.description}</p>

      <h2 className="about-subtitle">{texts.about.techTitle}</h2>
      {renderTechGrid(texts.about.techList)}

      <h2 className="about-subtitle">{texts.about.cloudServices}</h2>
      {renderTechGrid(texts.about.cloudServicesList)}

      <h2 className="about-subtitle">{texts.about.ai}</h2>
      <p className="about-text">{texts.about.noteAboutAI}</p>

      <h2 className="about-subtitle">{texts.about.languagesTitle}</h2>
      <ul className="about-list">
        {texts.about.languages.map((item, index) => (
          <li key={index} className="about-list-item">{item}</li>
        ))}
      </ul>

      <h2 className="about-subtitle">{texts.about.osTitle}</h2>
      <ul className="about-list">
        {texts.about.os.map((item, index) => (
          <li key={index} className="about-list-item">{item}</li>
        ))}
      </ul>

      <h2 className="about-subtitle">{texts.about.hobbiesTitle}</h2>
      <ul className="about-list">
        {texts.about.hobbies.map((item, index) => (
          <li key={index} className="about-list-item">{item}</li>
        ))}
      </ul>

      <h2 className="about-subtitle">{texts.about.educationTitle}</h2>
      <ul className="about-list">
        {texts.about.education.map((item, index) => (
          <li key={index} className="about-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
