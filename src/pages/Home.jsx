import React, { useState } from 'react';
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

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div  className="home-page-container">
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
       title="Born from Sleepless Nights, Built with Heart"
       description="We’re two sisters - and moms - who turned our late-night struggles into something meaningful.<br/><br/>
       Eco Snuggle was created to bring breathable, skin-loving, and eco-conscious swaddles to families like yours. Each blanket is thoughtfully made for your baby’s comfort-and another baby’s care."
       image={ourstoryimage}
         buttonText={"Read Our Story"}
      />
      <ReelSection/>
      <FaqSection/>
    </div>
  );
};

export default Home;























