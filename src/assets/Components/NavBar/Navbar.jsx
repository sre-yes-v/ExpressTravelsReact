import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPlaneDeparture,faCaretDown,faLocationDot,faHandshake,faStar,faImage,faUser,faCircleQuestion,faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="logo">
                <a href="index.html"><img src={logo} id="logo_img"/></a>
            </div>
            <div className="links">
                <a href="index.html" className="NavHome"><FontAwesomeIcon icon={faHouse} /> Home</a>
                {/* Dropdown link  */}
                <a href="" className="dropdown-toggle"><FontAwesomeIcon icon={faPlaneDeparture} /> Trips <FontAwesomeIcon icon={faCaretDown} /> </a>
                {/* dropdown menu.... For now it is hidden */}
                    <ul className="dropdown">
                        <li><a href="#">Menu Item</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                <a href="#destination" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faLocationDot} />  Destinations</a>
                <a href="#services" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faHandshake} />  Our Services</a>
                <a href="#reviews" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faStar} />  Reviews</a>
                <a href="#gallery" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faImage} />  Gallery</a>
                <a href="" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faUser} />  Contacts</a>
                <a href="" className="nav-link nav-link-ltr"><FontAwesomeIcon icon={faCircleQuestion} />  FAQ</a>
                {/* hamburger Menu Icon */}
                <a href="" className="hamburger_menu">
                    <FontAwesomeIcon icon={faBars} />
                </a> 
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
