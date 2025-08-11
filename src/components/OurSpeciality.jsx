import './OurSpeciality.css';
import heartin from '../assets/heartin.svg';
import { useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const OurSpeciality = ({features,title}) => {

  const sectionRef = useRef(null);

  useEffect(()=>{

    const header = sectionRef.current.querySelector('.our-speciality-header');
    const featureBoxes = sectionRef.current.querySelectorAll('.speciality-feature-box');

    
    gsap.fromTo(
      header,
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
      featureBoxes,
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
    <div ref={sectionRef} id='benefits' className='our-speciality-container container' style={ title === "none" ? { backgroundColor : "#ffff",backgroundImage:"none"} : {} }>
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
