import React from 'react'
import './SectionTitle.css'

function SectionTitle(props) {
  return (
    <div>
        <h1 class="section_heading">
            {props.subHeading} 
                <div>
                    <span>{props.heading}</span>
                </div>
        </h1>

            <h3 class="section_title">{props.caption}</h3>
    </div>
  )
}

export default SectionTitle
