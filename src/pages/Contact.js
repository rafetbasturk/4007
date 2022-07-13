import { FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact__title">
        <h1>İletişim</h1>
        <span className="material-icons">contacts</span>
      </div>

      <div className="contact__info">
        <a href="mailto:evrimaksoycan@gmail.com" className="contact__email">
          <FaEnvelope className="contact-icon" />
          <span>evrimaksoycan@gmail.com</span>
        </a>

        <a href="tel:+90 553 309 28 24" className="contact__phone">
          <FaPhone className="contact-icon" style={{ transform: "rotate(225deg" }} />
          <span>+90 553 309 28 24</span>
        </a>
      </div>
    </main>
  )
}

export default Contact
