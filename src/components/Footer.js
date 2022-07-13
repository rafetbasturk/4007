import React from "react"
import { Link } from "react-router-dom"
import { pages, social } from "../data"
import logo from "../images/logo.jpeg"

const Footer = ({ setPage }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-wrapper" >
          <img
            className="footer__logo"
            src={logo}
            alt="company logo"
          />
        </div>
        <div className="footer__nav">
          {pages.map(item => {
            const { id, url, text } = item
            return (
              <Link
                className="footer__link"
                to={url}
                key={id}
                onClick={() => {
                  setPage(text)
                  window.scrollTo(0, 0)
                }}
              >
                {text}
              </Link>
            )
          })}
        </div>
        <div className="footer__social">
          {
            social.map(item => {
              const { id, url, icon, name } = item
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >{icon}
                </a>
              )
            })
          }
        </div>
        <p className="footer__copy">
          <span>© {new Date().getFullYear()}</span>
          <span>Tüm hakları saklıdır.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
