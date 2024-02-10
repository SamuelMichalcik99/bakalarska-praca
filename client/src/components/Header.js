/************************************************************
*                          HEADER                           *
*                                                           *
*   Component renders a responsive header with a logo,      *
*   a navigation bar with links to different                *
*   routes - subpages, and a button that toggles the        *
*   display of the navigation bar on mobile devices.        *
*   It uses React hooks to manage state.                    *
*   React-icons installed.                                  *
*                                                           *
************************************************************/

import "./Header.css"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";

export default function Header() {

  const [showMobileNavbar, setshowMobileNavbar] = useState(false);

  return (
    <header>
      <div id="max-width-header">
        <div id="logo-container">
          <img id="header-desktop-logo" src={"images/logo.jpg"} alt="logo"></img>
          <img id="header-mobile-logo" src={"images/icon.jpg"} alt="logo"></img>
        </div>
        <nav className="navbar">
          <ul className={showMobileNavbar ? "navbar-nav mobile-navbar-nav" : "navbar-nav"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setshowMobileNavbar(false)}>Domov</Link>
            </li>
            <li className="nav-item">
              <Link to="/computers" className="nav-link" onClick={() => setshowMobileNavbar(false)}>Počítače</Link>
            </li>
            <li className="nav-item">
              <Link to="/compare" className="nav-link" onClick={() => setshowMobileNavbar(false)}>Porovnania</Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link" onClick={() => setshowMobileNavbar(false)}>Návod</Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link" onClick={() => setshowMobileNavbar(false)}>Kontakt</Link>
            </li>
            <button className="nav-btn nav-close-btn" onClick={() => setshowMobileNavbar(false)}>
              <FaTimes size={30}></FaTimes>
            </button>
          </ul>
        </nav>
        <button className="nav-btn" onClick={() => setshowMobileNavbar(true)}>
          <FaBars size={40}></FaBars>
        </button>
      </div>
      <div className={showMobileNavbar ? "bg-overlay-mobile-navbar" : null}></div>
    </header>
  )
} 
