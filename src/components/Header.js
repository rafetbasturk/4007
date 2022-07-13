import { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import Navbar from './Navbar'
import logo from "../images/logo.jpeg"

const Header = ({ page, setPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // scroll and close header__top & shrink header__logo
  const topContainerRef = useRef(null)
  const logoContainer = useRef(null)

  const listenToScroll = () => {
    const heightToHide = 10
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    (winScroll > heightToHide) ? setIsVisible(false) : setIsVisible(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    if (isVisible) {
      topContainerRef.current.style.height = `28px`
      logoContainer.current.style.width = "80px"
    } else {
      topContainerRef.current.style.height = "0"
      logoContainer.current.style.width = "60px"
    }

    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [isVisible])

  const handleLinks = (name) => {
    if (page === name) return
    setPage(name)
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0)
      setIsNavOpen(!isNavOpen)
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <header className="header">

      <div className="header__top" ref={topContainerRef}>
        <div className="header__info">
          <a href="mailto:teknobilim2022@gmail.com" className="header__email">
            <FaEnvelope className="header-icon" />
            <span>teknobilim2022@gmail.com</span>
          </a>


          <a href="tel:+90 553 309 28 24" className="header__phone">
            <FaPhone className="header-icon" />
            <span>+90 553 309 28 24</span>
          </a>
        </div>
      </div>

      <div className="header__bottom">
        <Link to="/">
          <img
            width="80"
            height="auto"
            className="header__logo"
            src={logo}
            alt="company logo"
            ref={logoContainer}
            onClick={() => handleLinks("Ana Sayfa")}
          />
        </Link>

        <Navbar
          page={page}
          setPage={setPage}
          isNavOpen={isNavOpen}
          handleLinks={handleLinks}
          setIsNavOpen={setIsNavOpen} />
      </div>
    </header>
  )
}

export default Header
