import React, { useEffect, useRef } from 'react';
import './ReelSection.css';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';

const ReelSection = () => {
  const scrollRef = useRef(null);

  const stories = [
    { story: story1, link: 'https://www.instagram.com/yourpage1' },
    { story: story2, link: 'https://www.instagram.com/yourpage2' },
    { story: story3, link: 'https://www.instagram.com/yourpage3' },
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
              <img
                src={story.story}
                alt={`Reel ${index}`}
                className="reel-image"
              />
            </div>
          ))}
        </div>

        <div className="reel-section-button">Follow us on Instagram</div>
      </div>
    </div>
  );
};

export default ReelSection;






