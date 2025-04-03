"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../App"

function Home() {
  const { translations } = useContext(LanguageContext)

  return (
    <div>
      <section className="hero">
        <h1>{translations.home_title}</h1>
        <p>{translations.home_subtitle}</p>
        <Link to="/about" className="btn">
          {translations.home_learn_more}
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">{translations.home_features_title}</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>{translations.home_feature1_title}</h3>
            <p>{translations.home_feature1_desc}</p>
          </div>
          <div className="feature">
            <h3>{translations.home_feature2_title}</h3>
            <p>{translations.home_feature2_desc}</p>
          </div>
          <div className="feature">
            <h3>{translations.home_feature3_title}</h3>
            <p>{translations.home_feature3_desc}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

