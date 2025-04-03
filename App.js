"use client"

import { createContext, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { translations } from "./data/translations"
import "./App.css"

// Create language context
export const LanguageContext = createContext()

function App() {
  // Get language from localStorage or default to English
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en")
  const [translations_data, setTranslationsData] = useState(translations[language])

  // Update translations when language changes
  useEffect(() => {
    setTranslationsData(translations[language])
    localStorage.setItem("lang", language)

    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language

    // Update font family based on language
    if (language === "en") {
      document.body.style.fontFamily = "'Roboto', sans-serif"
    } else {
      document.body.style.fontFamily = "'Noto Sans', sans-serif"
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations_data }}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App

