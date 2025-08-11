import React, { use, useEffect, useRef } from 'react';
import './ReelSection.css';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';
import instagramlogo from '../assets/instagram-logo.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const ReelSection = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const stories = [
    { story: story1, link: 'https://www.instagram.com/reel/DMxcToasa6d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { story: story2, link: 'https://www.instagram.com/reel/DMnlVcSsdlU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { story: story3, link: 'https://www.instagram.com/reel/DLsS_JzSKPK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ];

  useEffect(() => {
    const title = sectionRef.current.querySelector('.reel-section-title');
    const description = sectionRef.current.querySelector('.reel-section-description');
    const button = sectionRef.current.querySelector('.reel-section-button');

     gsap.fromTo(
      title,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 0.3, // starts after card fade begins
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

     gsap.fromTo(
      description,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 0.3, // starts after card fade begins
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

     gsap.fromTo(
      button,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 0.3, // starts after card fade begins
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );




  }, [])

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
    <div ref={sectionRef} className="reel-section-container container">
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






