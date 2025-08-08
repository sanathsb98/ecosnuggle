import React from 'react';
import './OurSpeciality.css';
import heartin from '../assets/heartin.svg';
import echofriendly from '../assets/echo-friendly.svg';
import babysafe from '../assets/baby-safe.svg';
import wegiveback from '../assets/we-give-back.svg';

const OurSpeciality = ({features,title}) => {
  
 
  return (
    <div className='our-speciality-container container' style={ title === "none" ? { backgroundColor : "#ffff",backgroundImage:"none"} : {} }>
      <div className='our-speciality-content maxscreenlimit'>

        {title == "none" ? "" : <div className='our-speciality-header'>
          <div className='our-speciality-title'>What Makes Us Special</div>
          <div className='our-speciality-img'>
            <img src={heartin} alt='Heart Icon' className='heart-icon' />
          </div>
        </div>}
      

        <div className='our-speciality-features'>
            {features.map((feature,index)=>(
                 <div className='speciality-feature-box'>
                <div className='feature-image-box'>
                    <img src={feature.image} alt='Feature Icon' className='feature-image' />
                </div>
                <div className='feature-title'>{feature.title}</div>
                <div className='feature-description'>{feature.description}</div>
            </div>
            ))}
           
        </div>

        </div>
    </div>
  )
}

export default OurSpeciality
