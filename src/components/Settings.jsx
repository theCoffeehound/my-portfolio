import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import DarkModeToggle from "./DarkModeToggle"; // Reusable DarkModeToggle component
import LanguageToggle from "./LanguageToggle"; // Reusable LanguageToggle component
import "../styles/Settings.css"; // Your custom CSS for dropdown and styling
import SettingsIcon from "./SettingsIcon";

const Settings = ({ darkMode, setDarkMode }) => {
    const { language, setLanguage } = useLanguage();
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => setShowSettings(!showSettings);

    return (
        <div className="settings">
            {/* Button to open settings dropdown */}
            <button onClick={toggleSettings} className="settings-button">
                <SettingsIcon />
            </button>

            {/* Dropdown that contains the Dark Mode and Language options */}
            {showSettings && (
                <div className="settings-dropdown">
                    {/* Dark Mode Toggle */}
                    <div className="dropdown-item">
                        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>

                    {/* Language Toggle */}
                    <div className="dropdown-item">
                        <LanguageToggle />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
