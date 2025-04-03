"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import LanguageSwitcher from "./LanguageSwitcher"
import { LanguageContext } from "../App"
import "./Navbar.css"

function Navbar() {
  const { translations } = useContext(LanguageContext)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          {translations.site_name}
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            {translations.nav_home}
          </Link>
          <Link to="/about" className="navbar-link">
            {translations.nav_about}
          </Link>
          <Link to="/contact" className="navbar-link">
            {translations.nav_contact}
          </Link>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  )
}

export default Navbar

