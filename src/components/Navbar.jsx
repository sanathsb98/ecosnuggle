import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import gift from '../assets/gift.svg';
import ScrollBanner from './ScrollBanner';
import burgerMenu from '../assets/burger-menu.svg';
import closeIcon from '../assets/gift.svg'; // You'll need a close icon SVG
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='navbar-section'>
            <ScrollBanner />
            <div className='navbar-container container'>
                <div className='navbar-content maxscreenlimit'>
                    <div className='navbar-burger-menu' onClick={() => setIsMenuOpen(true)}>
                        <img src={burgerMenu} alt='burger-menu' className='burger-menu' />
                    </div>
                    <Link to="/" className='navbar-left'>
                        <img src={logo} alt='logo' className='logo' />
                    </Link>
                    <div className='navbar-center'>
                        <div className='navbar-links'>
                            <div className='navbar-link'>New Drops</div>
                            <Link to="our-story" className='navbar-link'>Our Story</Link>
                            <div className='navbar-link'>Benifits</div>
                            <div className='navbar-link'>Contact</div>
                            
                        </div>
                    </div>
                    <div className='navbar-right'>
                        <img src={gift} alt='gift-logo' className='gift-logo' />
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <img src={closeIcon} alt="close" className="close-icon" onClick={() => setIsMenuOpen(false)} />
                </div>
                <div className="mobile-menu-links">
                     <Link to="/" className='mobile-link' onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <div className='mobile-link' onClick={() => setIsMenuOpen(false)}>New Drops</div>
                    <Link to="our-story" className='mobile-link' onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                    <div className='mobile-link' onClick={() => setIsMenuOpen(false)}>Benifits</div>
                    <div className='mobile-link' onClick={() => setIsMenuOpen(false)}>Contact</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

