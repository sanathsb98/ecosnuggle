import React from 'react';
import './Home.css';

import homeBannerDesktop from '../assets/home-banner.png';
import homeBannerTablet from '../assets/home-tab-banner.png';
import homeBannerMobile from '../assets/home-mobile-banner.png';

const Home = () => {
  return (
    <div className="home-page-container">
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
                <button className="notify-button">Notify me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;























