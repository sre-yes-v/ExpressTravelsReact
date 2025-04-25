import React from 'react'
import './Gallery.css'
import SectionTitle from '../SectionTitle/SectionTitle'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


import GalleryImg1 from '../Assets/travel_gallery_img (1).jpg'
import GalleryImg2 from '../Assets/travel_gallery_img (2).jpg'
import GalleryImg3 from '../Assets/travel_gallery_img (12).jpg'
import GalleryImg4 from '../Assets/travel_gallery_img (4).jpg'
import GalleryImg5 from '../Assets/travel_gallery_img (6).jpg'
import GalleryImg6 from '../Assets/travel_gallery_img (5).jpg'
import GalleryImg7 from '../Assets/travel_gallery_img (7).jpg'
import GalleryImg8 from '../Assets/travel_gallery_img (8).jpg'
import GalleryImg9 from '../Assets/travel_gallery_img (9).jpg'





function Gallery() {
  return (
    <div>
        <a name="gallery"></a>
        <section class="section">
        {/* gallery section title  */}
           <SectionTitle />

            {/* Reviews */}
            <div class="gallery">
                {/* Coulmn 1  */}
                <div class="gallery_column">
                    <div class="image">
                        <img src={GalleryImg1} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg2} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg3} alt=""/>
                    </div>
                </div>

                {/* Coulmn 2 */}
                <div class="gallery_column">
                    <div class="image">
                        <img src={GalleryImg4} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg5} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg6} alt=""/>
                    </div>
                </div>

                {/* Coulmn 2 */}
                <div class="gallery_column">
                    <div class="image">
                        <img src={GalleryImg7} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg8} alt=""/>
                    </div>
                    <div class="image">
                        <img src={GalleryImg9} alt=""/>
                    </div>
                </div>
            </div>
            {/* View more button */}
            <div class="inner_button">
                <a href="" id="button">View More <FontAwesomeIcon icon={faAngleDown} /></a>
            </div>
        </section>
    </div>
  )
}

export default Gallery
