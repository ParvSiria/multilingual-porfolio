"use client"

import { useContext, useState } from "react"
import { LanguageContext } from "../App"

function Contact() {
  const { translations } = useContext(LanguageContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send the form data to a server here
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      <section className="hero">
        <h1>{translations.contact_title}</h1>
        <p>{translations.contact_subtitle}</p>
      </section>

      <section className="section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title">{translations.contact_info_title}</h2>
            <p>{translations.contact_info_text}</p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>{translations.contact_phone}:</strong> +1 234 567 890
            </p>
          </div>

          <div className="contact-form">
            <h2 className="section-title">{translations.contact_form_title}</h2>

            {submitted ? (
              <div className="success-message">{translations.contact_success}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{translations.contact_name}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{translations.contact_email}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{translations.contact_message}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn">
                  {translations.contact_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

