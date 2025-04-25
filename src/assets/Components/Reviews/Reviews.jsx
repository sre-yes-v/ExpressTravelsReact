import React from 'react'
import './Reviews.css'
import SectionTitle from '../SectionTitle/SectionTitle';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Reviews() {

    
    const subHeading = "Our";
    const heading = "Services";
    const caption = '"Explore top destinations with our experts"'; 
    
    

  return (
    <div>
        <a name="reviews"></a>
        <section className="section">
            <SectionTitle subHeading={subHeading} heading={heading} caption={caption}/>
            {/* Reviews */}
            <div className="review">

                {/* First Review */}
                <div className="review_of_a_person">
                    <div className="profile">LD</div>
                    <div className="review_text">
                            Lori David<br/>
                            <span>loridavid1402@gmail.com</span><br/>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <p>Express Travels, I must say, I was thoroughly impressed.As a travel agency, they offer a wide range of options and packages to suit different preferences and budgets.</p>
                    </div>
                </div>

                {/* Second review */}
                <div className="review_of_a_person">
                    <div className="profile">ML</div>
                    <div className="review_text">
                            Mary Lorence<br/>
                            <span>mary123@gmail.com</span><br/>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 
                            <p>One thing that stood out to me was the professionalism and friendliness of their guides. They were knowledgeable about the destinations we visited.</p>
                    </div>
                </div>

                  {/* third review */}
                  <div className="review_of_a_person">
                    <div className="profile">RJ</div>
                    <div className="review_text">
                            Rick Johnson<br/>
                            <span>rickisalive@gmail.com</span><br/>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 
                            <p>The booking process was smooth and hassle-free. Their team was also prompt in responding to any inquiries or concerns I had prior to the trip.</p>
                    </div>
                </div>

                  {/* fourth review */}
                <div className="review_of_a_person mobile_visibility">
                    <div className="profile">AR</div>
                    <div className="review_text">
                            Arjun Raghavan<br/>
                            <span>arjun2332@gmail.com</span><br/>
                             <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 
                            <p>My experience with Express Travels was excellent, and I would highly recommend them to anyone looking for a reliable and friendly travel agency.</p>
                    </div>
                </div>

                   {/* fifth review */}
                <div className="review_of_a_person mobile_visibility">
                    <div className="profile">AR</div>
                    <div className="review_text">
                            Arjun Raghavan<br/>
                            <span>arjun2332@gmail.com</span><br/>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 
                            <p>My experience with Express Travels was excellent, and I would highly recommend them to anyone looking for a reliable and friendly travel agency.</p>
                    </div>
                </div>
            
                   {/* sixth review */}
                   <div className="review_of_a_person mobile_visibility">
                    <div className="profile">AR</div>
                    <div className="review_text">
                            Arjun Raghavan<br/>
                            <span>arjun2332@gmail.com</span><br/>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> 
                            <p>My experience with Express Travels was excellent, and I would highly recommend them to anyone looking for a reliable and friendly travel agency.</p>
                    </div>
                </div>

                  
            </div>
            <br/><br/>
            
            {/* Read more button */}

            <div className="inner_button">
                <a href="" id="button">Read More <i className="fa-solid fa-angle-down"></i></a>
            </div>
        </section>

    </div>
  )
}

export default Reviews
