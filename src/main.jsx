import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext'; // Import the DarkMode context


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider> {/* Wrap your app with DarkModeProvider */}
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>
  </StrictMode>,
)
