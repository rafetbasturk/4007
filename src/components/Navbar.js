import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"

import { pages } from "../data"

const Navbar = ({ isNavOpen, handleLinks, setIsNavOpen }) => {
  // hamburger menu
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    isNavOpen ?
      linksContainerRef.current.style.height = `${linksHeight}px` :
      linksContainerRef.current.style.height = "0"
  }, [isNavOpen])

  return (
    <>
      <div className="header__menu">
        {isNavOpen &&
          <FaTimes
            className="header__close"
            alt="close icon"
            onClick={() => {
              setIsNavOpen(!isNavOpen)
            }}
          />
        }
        {!isNavOpen &&
          <FaBars
            className="header__ham"
            alt="menu icon"
            onClick={() => {
              setIsNavOpen(!isNavOpen)
            }}
          />
        }
      </div>
      <nav className="header__nav" ref={linksContainerRef} >
        <div className="header__nav-container" ref={linksRef} >
          {pages.map(item => {
            const { id, url, text } = item
            return (
              <NavLink
                to={url}
                key={id}
                onClick={() => handleLinks(text)}
              >
                <p>{text}</p>
              </NavLink>
            )
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;