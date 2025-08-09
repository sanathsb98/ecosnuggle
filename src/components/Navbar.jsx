import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import gift from '../assets/gift.svg';
import ScrollBanner from './ScrollBanner';
import burgerMenu from '../assets/burger-menu.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import closeIcon from '../assets/close.svg'; // Assuming you have a close icon image
import { useLocation } from 'react-router-dom';

const Navbar = () => {
     const { hash } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='navbar-section'>
            <ScrollBanner />
            <div className='navbar-container container'>
                <div className='navbar-content maxscreenlimit'>
                    <div className='navbar-burger-menu' onClick={() => setIsMenuOpen(true)}>
                        <img src={burgerMenu} alt='burger-menu' className='burger-menu' />
                    </div>
                    <NavLink to="/" className='navbar-left'>
                        <img src={logo} alt='logo' className='logo' />
                    </NavLink>
                    <div className='navbar-center'>
                        <div className='navbar-links'>
                           <a
        href="/#new-drops"
        className={`navbar-link ${hash === '#new-drops' ? 'active' : ''}`}
      >
        New Drops
      </a>
                            <NavLink to="our-story" className='navbar-link'>Our Story</NavLink>
                            <a
        href="/#benefits"
        className={`navbar-link ${hash === '#benefits' ? 'active' : ''}`}
      >
        Benefits
      </a>
                            <NavLink to="/contact" className='navbar-link'>Contact</NavLink>
                            
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
                    <Link to="/#new-drops" className='mobile-link' onClick={() => setIsMenuOpen(false)}>New Drops</Link>
                    <Link to="our-story" className='mobile-link' onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                    <div className='mobile-link' onClick={() => setIsMenuOpen(false)}>Benifits</div>
                    <Link to="/contact" className='mobile-link' onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

