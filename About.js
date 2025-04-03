"use client"

import { useContext } from "react"
import { LanguageContext } from "../App"

function About() {
  const { translations } = useContext(LanguageContext)

  return (
    <div>
      <section className="hero">
        <h1>{translations.about_title}</h1>
        <p>{translations.about_subtitle}</p>
      </section>

      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{translations.about_story_title}</h2>
            <p>{translations.about_story_text}</p>
            <p>{translations.about_mission_text}</p>
          </div>
          <div className="about-image">
            {/* Placeholder for an image */}
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                borderRadius: "8px",
              }}
            >
              {translations.image_placeholder}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

