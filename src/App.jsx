import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TalentProfile from "./components/TalentProfileCard"
import TalentSearch from "./components/TalentSearch";
import JobBoard from "./components/JobBoard";
import Footer from "./components/Footer";
import "./index.css"; // If you use Tailwind, keep this

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.title = "Black Talent";
    const link = document.querySelector('link[rel="icon"]');
    if (link) {
      link.href = './src/assets/black.ico'
    }
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <TalentProfile />
      <TalentSearch />
      <JobBoard />  
      <Footer />
    </div>
  );
}

export default App;
