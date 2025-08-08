import React from 'react';
import './OurStory.css';
import babyBanner from '../assets/baby-banner.png';
import motherWithBaby from '../assets/mother-with-baby.png';
import OurStorySection from '../components/OurStorySection';
import babymobilebanner from '../assets/baby-mobile-banner.png';
import EcoSnuggleStory from '../components/OurStory';
import ourstoryimage from '../assets/our-story-image.png';
import ourmissionimg from '../assets/ourmission-img.png';
import affordable from '../assets/affordable.svg';
import premiumquality from '../assets/premiumquality.svg';
import ecofriendly from '../assets/ecofriendly.svg';
import OurSpeciality from '../components/OurSpeciality';
import FaqSection from '../components/FaqSection';


const OurStory = () => {
  return (
    <div className="home-page-container">
      <div className="home-banner-wrapper">
        <img src={babyBanner} alt="Our Story Banner" className="baby-banner" />
        <img src={babymobilebanner} alt="Our Story Mobile Banner" className="baby-banner-mobile" />
      </div>
      <OurStorySection/>
      <EcoSnuggleStory
       title="Our Mission"
             description="At Eco Snuggle, our mission goes beyond crafting soft, organic baby blankets - we believe every baby deserves warmth, comfort, and care, especially during their most vulnerable moments.<br/><br/>As part of our commitment to giving back, we’re honored to support babies and families in need by donating essentials like diapers, baby food, clothing, medicine, and more to hospital NICUs, pediatric oncology units, and children's care facilities.<br/><br/>With every blanket purchased, a portion helps us provide these vital supplies - wrapping little ones in the same comfort and love that inspired Eco Snuggle.<br/><br/>Join us in this journey - because every baby deserves to <b>feel safe, loved, and warm.</b>"
             image={ourmissionimg}
           
      />
      <OurSpeciality
      title = "none"
       features={[
              {
                        image: affordable,
                        title: '100% Eco-Friendly',
                        description: 'We chose eco-friendly, sustainable materials - because we care about the world our children will grow up in.',
                    },
                    {
                        image: premiumquality,
                        title: 'Premium Quality',
                        description: 'We focused on premium quality - because every baby deserves restful sleep.',
                    },
                    {
                        image: ecofriendly,
                        title: 'Affordable for All',
                        description: 'We chose eco-friendly, sustainable materials - because we care about the world our children will grow up in.',
                    }
            ]}    
      />
      <FaqSection/>
    </div>
  )
}

export default OurStory
