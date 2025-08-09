import React from 'react';
import './ScrollBanner.css';
import smileEmoji from '../assets/smile-emoji.svg';

const items = [
  'LAUNCHING SOON',
  'GET 10% EXTRA OFF',
];

const ScrollBanner = () => {
  const repeatedItems = [...items, ...items, ...items]; // duplicated
  
  return (
    <div className="scroll-banner">
      <div className="scroll-banner-track">
        <div className="scroll-banner-content">
          {repeatedItems.map((item, idx) => (
            <span key={idx} className="scroll-banner-item">
              <img src={smileEmoji} alt="smile" className="smile-emoji" />
              {item}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
        {/* Duplicate the entire content block again */}
        <div className="scroll-banner-content">
          {repeatedItems.map((item, idx) => (
            <span key={`dup-${idx}`} className="scroll-banner-item">
              <img src={smileEmoji} alt="smile" className="smile-emoji" />
              {item}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;


