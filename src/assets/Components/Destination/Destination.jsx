import React from 'react'
import './Destination.css' 
import DestinationImg1 from '../Assets/beach.jpg'
import DestinationImg2 from '../Assets/canal.jpg'
import DestinationImg3 from '../Assets/sky.jpg'
import DestinationImg4 from '../Assets/mountain.jpg'
import DestinationImg5 from '../Assets/beach3.jpg'
import DestinationImg6 from '../Assets/watterfall.jpg'
import SectionTitle from '../SectionTitle/SectionTitle'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function Destination() {

    const subHeading = "Popular";
    const heading = "Destinations";
    const caption = '"Dive into the Beauty of World"'; 

  return (
    <div>
        <a name="destination"></a>
        <section className="section">
            <SectionTitle subHeading={subHeading} heading={heading} caption={caption}/>
            <div className="destination">

{/* first destination */}
                <div className="destination_img">
                    <img src={DestinationImg1} alt=""/>
                    <div className="img_location">
                        <h1>Thailand</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> Beach Resort</h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p>
                        <br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 2 Nights/ 3 Days</p>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 30000/-</p>
                    </div>
                </div>

{/* second destination */}
                <div className="destination_img">
                    <img src={DestinationImg2} alt=""/>
                    <div className="img_location">
                        <h1>Italy</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> Canal Boating</h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p><br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 2 Hours Boating</p>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 300/- (per head)</p>
                    </div>
                </div>

{/* third destination */}
                <div className="destination_img">
                    <img src={DestinationImg3} alt=""/>
                    <div className="img_location">
                        <h1>Manali</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> View Point</h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p><br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 2 Hours</p>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 200/- (per head)</p>
                    </div>
                </div>

{/* fourth destination */}
                <div className="destination_img">
                    <img src={DestinationImg4} alt=""/>
                    <div className="img_location">
                        <h1>Kilimanjaro</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> Trekking</h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p><br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 9:00 AM to 5:00 PM</p>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> 100/- (Per Head)</p>
                    </div>
                </div>

{/* fifth destination */}
                <div className="destination_img">
                    <img src={DestinationImg5} alt=""/>
                    <div className="img_location">
                        <h1>Varkala Beach</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> Beach Sunset View </h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p><br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> Any Time</p>
                    </div>
                </div>    

{/* sixth destination */}
                <div className="destination_img">
                    <img src={DestinationImg6} alt=""/>
                    <div className="img_location">
                        <h1>Canada</h1>
                    </div>
                    <div className="img_des">
                        <h1><FontAwesomeIcon icon={faLocationDot} /> Virginia Falls </h1>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Omnis <br/>architecto sequi molestiae ea <br/>nesciunt, sint , tenetur!</p><br/>
                        <p align="left"><FontAwesomeIcon icon={faCircleCheck} /> Any Time</p>
                    </div>
                </div>      
            </div>
        </section>
    </div>
  )
}

export default Destination
