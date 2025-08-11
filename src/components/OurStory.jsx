import React from 'react';
import './OurStory.css';
import ourstoryimage from '../assets/our-story-image.png';
import curvedline from '../assets/curved-line.svg';
import { Link } from 'react-router-dom';
import runnerinner from '../assets/runner-inner.svg';
import runnerouter from '../assets/runner-outer.svg';

const OurStory = ({title,description,image,buttonText}) => {
    return (
        <div id="mission" className='our-story-container container' style={title == "Our Mission" ? { backgroundColor: "#F3F2F2" } : {}}>
            <div className='our-story-section maxscreenlimit'>
                 <div className='our-story-title mobtitle'>{title}</div>
                 <div className='curved-line'>
                    <img src={curvedline} alt='Curved Line' className='curved-line-img' />
                 </div>
                <div className='our-story-image'>
                    <img src={image} alt='Our Story' className='our-story-image-img xx' />

                    <div className='runner-section'>
                       <img src={runnerinner} alt='Runner Inner' className='runner-inner' />
                          <img src={runnerouter} alt='Runner Outer' className='runner-outer' />
                    </div>
                    

                </div>
                <div className='our-story-content'>
                    <div className='our-story-title desktitle'>{title}</div>
                    <div
                        className='our-story-description'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {buttonText && <Link to="/our-story" className='read-story-btn'>{buttonText}</Link> }
                    
                </div>
            </div>
        </div>
    )
}

export default OurStory
