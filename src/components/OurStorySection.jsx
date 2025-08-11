import { useEffect,useRef } from 'react';
import './OurStorySection.css';
import motherWithBaby from '../assets/mother-with-baby.png';
import motherbabytab from '../assets/mother-baby-tab.png';
import motherbabymob from '../assets/mother-baby-mobile.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);


const OurStorySection = () => {

    const sectionRef = useRef(null);
    useEffect(()=>{
        const titleElement = sectionRef.current.querySelector('.ourstory-title');
        const descriptionElement = sectionRef.current.querySelector('.ourstory-des');
        const imageElement = sectionRef.current.querySelector('.ourstory-image img');
        const buttonElement = sectionRef.current.querySelector('.read-story-btn');

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


    },[])
    
    return (
        <div ref={sectionRef} className='ourstory-sec-container container'>
            <div className='ourstorysection maxscreenlimit'>
                <div className='ourstory-pill'>Our Story</div>
                <div className='ourstory-titledes'>
                    <div className='ourstory-title'>Spun from sleepless nights, forever weaved in our hearts</div>
                    <div className='ourstory-des'>We’re two sisters - and moms - who, like many parents, spent countless nights comforting our babies through tears, rashes, and restless sleep.</div>
                </div>
                <div className='ourstory-image'>
                    <img src={motherWithBaby} alt='Mother with Baby' className='ourstory-image-img ourstorydesktop' />
                      <img src={motherbabytab} alt='Mother with Baby' className='ourstory-image-img ourstorytablet' />
                        <img src={motherbabymob} alt='Mother with Baby' className='ourstory-image-img ourstorymobile' />
                </div>
                <div className='ourstory-des'>
                    Our little ones struggled with sleep, developed rashes, and fussed endlessly. No matter how many swaddle blankets we tried, nothing felt just right. They were too rough, too hot, too synthetic - or just too expensive. We kept asking ourselves:
                    Why can’t there be a better way? That’s when the idea was born - during one of those long, quiet midnight feeds. If we were struggling, we knew countless other moms were too. And we realized: maybe we were the ones meant to fix it.
                </div>
            </div>
        </div>
    )
}

export default OurStorySection
