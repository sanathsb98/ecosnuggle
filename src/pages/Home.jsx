import React, { useState,useRef, useEffect } from 'react';
import './Home.css';

import homeBannerDesktop from '../assets/home-banner.png';
import homeBannerTablet from '../assets/home-tab-banner.png';
import homeBannerMobile from '../assets/home-mobile-banner.png';
import OurProducts from '../components/OurProducts';
import OurSpeciality from '../components/OurSpeciality';
import OurStory from '../components/OurStory';
import ReelSection from '../components/ReelSection';
import FaqSection from '../components/FaqSection';
import ourstoryimage from '../assets/our-story-image.png';
import echofriendly from '../assets/echo-friendly.svg';
import babysafe from '../assets/baby-safe.svg';
import wegiveback from '../assets/we-give-back.svg';
import ContactModal from '../components/ContactModal';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(()=>{
  const title = sectionRef.current.querySelector('.home-banner-title');
  const description = sectionRef.current.querySelector('.home-banner-des');
  const button = sectionRef.current.querySelector('.notify-button');

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


 
  },[]);

  return (
    <div  className="home-page-container" ref={sectionRef}>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      <div className="home-banner-wrapper">
        <img src={homeBannerDesktop} alt="Home Banner Desktop" className="home-banner desktop" />
        <img src={homeBannerTablet} alt="Home Banner Tablet" className="home-banner tablet" />
        <img src={homeBannerMobile} alt="Home Banner Mobile" className="home-banner mobile" />

        <div className="home-overlay">
          <div className="container">
            <div className="maxscreenlimit">
              <div className="home-text">
                <h1 className="home-banner-title">
                  Soft beginnings,<br /> made with love.
                </h1>
                <p className="home-banner-des">
                  Sustainable essentials for your<br />
                  newborn – gentle on the planet,<br />
                  perfect for your baby. Coming Soon!
                </p>
                <button onClick={()=>{setIsModalOpen(true)}} className="notify-button">Notify me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurProducts openModal={()=>{setIsModalOpen(true)}}/>
      <OurSpeciality
      title=""
      features={[
        {
                  image: echofriendly,
                  title: 'Eco-friendly fabrics',
                  description: 'Chemical-free for pure, breathable comfort.',
              },
              {
                  image: babysafe,
                  title: 'Baby-safe materials',
                  description: 'Gentle on your baby’s skin, safe for snuggles.',
              },
              {
                  image: wegiveback,
                  title: 'We give back',
                  description: 'A portion of every purchase supports newborn care initiatives.',
              }
      ]}      />
      <OurStory
       title="Spun from sleepless nights, forever weaved in our hearts"
       description="We’re two sisters - and moms - who turned late-night struggles into something meaningful. Eco Snuggle was born to bring breathable, skin-loving, eco-conscious swaddles to families like yours.<br/><br/>
       But our mission goes beyond blankets. With every purchase, we help provide warmth, comfort, and essential care to babies in need - from NICUs to children’s hospitals - wrapping little ones in the same love that inspired Eco Snuggle."
       image={ourstoryimage}
         buttonText={"Read Our Story"}
      />
      <ReelSection/>
      <FaqSection/>
    </div>
  );
};

export default Home;























