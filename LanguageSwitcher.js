"use client"

import { useContext } from "react"
import { LanguageContext } from "../App"
import "./LanguageSwitcher.css"

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext)

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
  ]

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <div className="language-switcher">
      <select value={language} onChange={handleLanguageChange} className="language-select">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher

