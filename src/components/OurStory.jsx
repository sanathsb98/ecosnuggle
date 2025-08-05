import React from 'react';
import './OurStory.css';
import ourstoryimage from '../assets/our-story-image.png';
import curvedline from '../assets/curved-line.svg';

const OurStory = () => {
    return (
        <div className='our-story-container container'>
            <div className='our-story-section maxscreenlimit'>
                 <div className='our-story-title mobtitle'>Born from Sleepless Nights,Built with Heart</div>
                 <div className='curved-line'>
                    <img src={curvedline} alt='Curved Line' className='curved-line-img' />
                 </div>
                <div className='our-story-image'>
                    <img src={ourstoryimage} alt='Our Story' className='our-story-image-img' />
                </div>
                <div className='our-story-content'>
                    <div className='our-story-title desktitle'>Born from Sleepless Nights,Built with Heart</div>
                    <div className='our-story-description'>We’re two sisters - and moms - who turned our late-night struggles into something meaningful.<br/><br/>
                        Eco Snuggle was created to bring breathable, skin-loving, and eco-conscious swaddles to families like yours. Each blanket is thoughtfully made for your baby’s comfort-and another baby’s care.</div>
                    <div className='read-story-btn'>Read Our Story</div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
