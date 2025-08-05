import React from 'react';
import './ReelSection.css';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';

const ReelSection = () => {
    const stories = [
        {
            story : story1,
            link : 'https://www.instagram.com/yourpage1'
        },
         {
            story : story2,
            link : 'https://www.instagram.com/yourpage1'
        },
         {
            story : story3,
            link : 'https://www.instagram.com/yourpage1'
        },
    ]
    return (
        <div className='reel-section-container container'>
            <div className='reel-section maxscreenlimit'>
               <div className='reel-titledes'>
                 <div className='reel-section-title'>See the Snuggle, Frame by Frame</div>
                <div className='reel-section-description'>Every reel highlights the texture, quality, and charm of Eco Snuggle blankets.</div>
               </div>
                <div className='reel-section-content'>
                    {stories.map((story,index)=>(
                        <div className='reel-video'>
                     <img src={story.story} alt='Reel Story' className='reel-image' />
                    </div>
                    ))}
                </div>
                <div className='reel-section-button'>
                    Follow us on Instagram
                </div>
            </div>
        </div>
    )
}

export default ReelSection
