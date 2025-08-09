import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import youtubeIcon from '../assets/youtube.svg';
import copyrightIcon from '../assets/copyright.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
        const { hash } = useLocation();
    return (
        <footer className='footer-section'>
            <div className='footer-container container'>
                <div className='footer-content maxscreenlimit'>

                    {/* Left Section */}
                    <div className='footer-left'>
                        <img src={logo} alt="Eco Snuggle Logo" className="footer-logo" />
                        <p className='footer-tagline'>Soft beginnings, made with love.</p>
                    </div>

                    {/* Middle Section */}
                    <div className='footer-links'>

                        <div className='footer-column'>
                            <h4 className='footer-heading'>QUICK LINKS</h4>
                            <a
                                href="/#new-drops"
                                className={`footer-link ${hash === '#new-drops' ? 'active' : ''}`}
                            >
                                New Drops
                            </a>
                            <NavLink to="/our-story" className='footer-link'>Our Story</NavLink>
                              <a
                                href="/#benefits"
                                className={`footer-link ${hash === '#benefits' ? 'active' : ''}`}
                            >
                                Benefits
                            </a>
                            <NavLink to="/contact" className='footer-link'>Contact</NavLink>
                        </div>

                        <div className='footer-column'>
                            <h4 className='footer-heading'>ABOUT US</h4>
                            <NavLink to="/our-story" className='footer-link'>Our Story</NavLink>
                            <NavLink to="/terms" className='footer-link'>Terms & Conditions</NavLink>
                             <a
                                href="/#mission"
                                className={`footer-link ${hash === '#mission' ? 'active' : ''}`}
                            >
                                Mission
                            </a>
                        </div>

                        <div className='footer-social'>
                            <div className='footer-heading'>FOLLOW US ON</div>
                            <div className='social-icons'>
                                <a href="https://www.instagram.com/p/DKC1RrGgEHR/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img src={youtubeIcon} alt="YouTube" />
                                </a>
                            </div>
                        </div>

                    </div>



                </div>

                {/* Bottom Copyright */}
                <div className="footer-bottom maxscreenlimit">
                    <img src={copyrightIcon} alt="Copyright" className="copyright-icon" />
                    <span>2025, Eco Snuggle Baby. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


