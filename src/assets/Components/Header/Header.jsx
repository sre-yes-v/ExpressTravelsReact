import React from 'react'
import './Header.css'
import headerBgImg from '../Assets/header_img5.png'
import headerBgImgMobile from '../Assets/travel_gallery_img (6).jpg'
import expressTravelTextImg from '../Assets/expressTravelText.png'
import testimonialImg from '../Assets/testimonial2.png'


function Header() {
  return (
    <div>
       <header>
        {/* background img */}
        <div className="header_img">
                <img src={headerBgImg} id="header_img"  width="100%"/>
        </div>
        <div className="header_img1">
            <img src={headerBgImgMobile} id="header_img"  width="100%"/>
        </div>
        {/* header text button and testimonial image */}
        <div className="header_text">
            <img src={expressTravelTextImg} alt=""/>
        </div>
        <div className="header_paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, aut veniam 
            nemo nihil et laborum voluptatibus.
        </div>
        <div className="button">
            <a href="" id="button">Book A Trip Now <i className="fa-solid fa-up-right-from-square"></i></a>
        </div>
            
        <div className="testimonial">
            <img src={testimonialImg} alt=""/>
        </div>
    </header>
    </div>
  )
}

export default Header
