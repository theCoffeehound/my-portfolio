import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="about-page">
      <h1>{language === 'en' ? 'About Me' : 'Tietoa minusta'}</h1>
      <p>
        {language === 'en'
          ? 'Hello! I am a programmer passionate about creating innovative solutions with code.'
          : 'Hei! Olen ohjelmoija, joka on intohimoinen luomaan innovatiivisia ratkaisuja koodin avulla.'}
      </p>
    </div>
  );
};

export default About;
