import React from "react";
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";
import '../styles/Home.css';

const Home = () => {
  const { language } = useLanguage();
  const texts = languageData[language];


  return (
    <div>
      <section class="home-intro">
        <h1 class="home-subtitle">{texts.home.welcome} {texts.brand}</h1>
        <p class="home-description">{texts.home.description}</p>

        <p class="home-description">Web Developer | Designer | Creative Thinker</p>
        <p class="home-description">Let's build something amazing together!</p>
      </section>
      <section class="home-about">
        <h2 class="home-subtitle">About Me</h2>
        <p class="home-description">I am a passionate developer with expertise in front-end and back-end technologies. I love creating user-centric, responsive websites.</p>
      </section>
      <h2>{texts.welcome}</h2>
      <p>{texts.explore}</p>
      <div className="home-aboutme">
        <div className="profile">
          <img className="profile-image" src="your-image-url.jpg" alt={texts.name} />
          <div className="intro-text">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
