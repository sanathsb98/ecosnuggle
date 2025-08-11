import './OurStory.css';
import { useEffect,useRef } from 'react';
import curvedline from '../assets/curved-line.svg';
import { Link } from 'react-router-dom';
import runnerinner from '../assets/runner-inner.svg';
import runnerouter from '../assets/runner-outer.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const OurStory = ({title,description,image,buttonText}) => {

    const sectionRef = useRef(null);

    useEffect(()=>{
        const titleElement = sectionRef.current.querySelector('.our-story-title');
        const descriptionElement = sectionRef.current.querySelector('.our-story-description');
        const imageElement = sectionRef.current.querySelector('.our-story-image img');
        const buttonElement = sectionRef.current.querySelector('.read-story-btn');
        const curvedLineElement = sectionRef.current.querySelector('.curved-line img');

         gsap.fromTo(
      titleElement,
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
      descriptionElement,
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
      imageElement,
      { opacity: 0, y: 60 }, // Start invisible & lower
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.3, // Delay between boxes
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%', // When section is near viewport
          toggleActions: 'play none none reverse',
        },
      }
    );

     gsap.fromTo(
      buttonElement,
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

    },[]);

    return (
        <div ref={sectionRef} id="mission" className='our-story-container container' style={title == "Our Mission" ? { backgroundColor: "#F3F2F2" } : {}}>
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
