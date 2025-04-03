"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../App"
import "./Footer.css"

function Footer() {
  const { translations } = useContext(LanguageContext)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <Link to="/" className="footer-link">
            {translations.nav_home}
          </Link>
          <Link to="/about" className="footer-link">
            {translations.nav_about}
          </Link>
          <Link to="/contact" className="footer-link">
            {translations.nav_contact}
          </Link>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {currentYear} {translations.footer_copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

