import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="copyright">
        <h2>Express Travels</h2>
        <p>2025 &copy;All Rights Reserved</p>
    </div>
    <div className="links">
        <ul id="footerlinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trips</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</footer>
  )
}

export default Footer