import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import { useDarkMode } from './context/DarkModeContext'; // Import the DarkMode context
import './styles/App.css';

function App() {
  const { darkMode, setDarkMode } = useDarkMode(); // Get dark mode from context

  useEffect(() => {
    // Apply dark mode class to body when darkMode changes
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (

        <div className='wrapper'>
          <Router>
            <Navbar />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
  );
}

export default App;
