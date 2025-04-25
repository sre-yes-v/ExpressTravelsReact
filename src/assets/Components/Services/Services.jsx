import React from 'react'
import './Services.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import HotelGif from '../Assets/hotel.gif'
import GuideGif from '../Assets/tour-guide.gif'
import VisaGif from '../Assets/nomad-visa.gif'


function Services() {

    const subHeading = "Our";
    const heading = "Services";
    const caption = '"Explore top destinations with our experts"'; 

  return (
    <div>
        <a name="services"></a>
        <section className="section">
            <SectionTitle subHeading={subHeading} heading={heading} caption={caption}/>


        
            <div className="service">

            {/* Hotel Booking */}
                <div className="service_box">
                    <center>
                        <h1>Hotel Booking</h1>
                        <img src={HotelGif} alt="" id="gif"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur nisi mollitia totam laborum! Et,voluptas neque ab ipsa, aut dolore maiores veniam velit obcaecati quia culpa quas possimus  quaerat.</p><br/>
                        <a href="" id="button">Know More</a>
                    </center>
                </div>

            {/* Guides */}
                <div className="service_box">
                    <center>
                        <h1>Friendly Guides</h1>
                        <img src={GuideGif} alt="" id="gif"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur nisi mollitia totam laborum! Et,voluptas neque ab ipsa, aut dolore maiores veniam velit obcaecati quia culpa quas possimus  quaerat.</p><br/>
                        <a href="" id="button">Know More</a>
                    </center>
                </div>

            {/* Visa */}
                <div className="service_box">
                    <center>
                        <h1>Visa Assistance</h1>
                        <img src={VisaGif} alt="" id="gif"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur nisi mollitia totam laborum! Et,voluptas neque ab ipsa, aut dolore maiores veniam velit obcaecati quia culpa quas possimus  quaerat.</p><br/>
                        <a href="" id="button">Know More</a>
                    </center>
                </div>
            </div>        
        </section>
    </div>
  )
}

export default Services