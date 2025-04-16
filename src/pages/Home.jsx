import React from "react";
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";
import '../styles/Home.css';
import profilePic from '../assets/profilePicture.jpg'; // Make sure to replace with your actual image path

const Home = () => {
  const { language } = useLanguage();
  const texts = languageData[language];


  return (
    <div className="home-container">
      <div className="profile">
        <img className="profile-image" src={profilePic} alt={texts.name} />
      </div>
      <div className="home-intro-container">
        <section class="home-intro">
          <h1 class="home-subtitle">{texts.home.welcome} {texts.brand}</h1>
          <p class="home-description">{texts.home.description}</p>
        </section>
        <section class="home-about">
          <h2 class="home-subtitle">{texts.home.about.title}</h2>
          <p class="home-description">{texts.home.about.description}</p>
        </section>
        <h2>{texts.welcome}</h2>
        <p>{texts.explore}</p>
      </div>
    </div>
  );
};

export default Home;
