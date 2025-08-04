import React from 'react';
import './Home.css';

import homebanner from '../assets/home-banner.png'; 
import mobilebanner from '../assets/home-mobile-banner.png';
import tabbanner from '../assets/home-tab-banner.png';

const Home = () => {
  return (
    <div className='home-container page'>
      <img src={homebanner} alt='Desktop Banner' className='home-banner desktop-only' />
      <img src={tabbanner} alt='Tablet Banner' className='home-banner tab-only' />
      <img src={mobilebanner} alt='Mobile Banner' className='home-banner mobile-only' />
    </div>
  );
};

export default Home;













