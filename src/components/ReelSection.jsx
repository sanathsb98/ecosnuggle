import React, { useEffect, useRef } from 'react';
import './ReelSection.css';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';
import instagramlogo from '../assets/instagram-logo.svg';

const ReelSection = () => {
  const scrollRef = useRef(null);

  const stories = [
    { story: story1, link: 'https://www.instagram.com/reel/DMxcToasa6d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { story: story2, link: 'https://www.instagram.com/reel/DMnlVcSsdlU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { story: story3, link: 'https://www.instagram.com/reel/DLsS_JzSKPK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ];

  useEffect(() => {
    const container = scrollRef.current;

    // Duplicate content in the DOM itself
    if (container) {
      container.innerHTML += container.innerHTML; // doubles the visuals
    }

    let animationFrameId;
    const speed = 0.5;

    const scrollLoop = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // Reset invisibly to the middle when half is passed
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="reel-section-container container">
      <div className="reel-section maxscreenlimit">
        <div className="reel-titledes">
          <div className="reel-section-title">See the Snuggle, Frame by Frame</div>
          <div className="reel-section-description">
            Every reel highlights the texture, quality, and charm of Eco Snuggle blankets.
          </div>
        </div>

        <div className="reel-section-content" ref={scrollRef}>
          {stories.map((story, index) => (
            <div className="reel-video" key={index}>
              <a href={story.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={story.story}
                  alt={`Reel ${index}`}
                  className="reel-image"
                />
              </a>
            </div>
          ))}
        </div>

          
        <div  onClick={() => window.open("https://www.instagram.com/ecosnugglebaby/reels/", "_blank")} className="reel-section-button">
            <div>Follow us on Insta</div>
            <div className='insta-logo'><img src={instagramlogo} alt="Instagram Logo" className="instagram-logo" /></div>
        </div>
      </div>
    </div>
  );
};

export default ReelSection;






