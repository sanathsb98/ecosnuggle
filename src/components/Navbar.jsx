import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import gift from '../assets/gift.svg';
import ScrollBanner from './ScrollBanner';
import burgerMenu from '../assets/burger-menu.svg';

const Navbar = () => {
    return (
        <div className='navbar-section'>
        <ScrollBanner/>
        <div className='navbar-container container'>
            
            <div className='navbar-content maxscreenlimit'>
                <div className='navbar-burger-menu'>
                    <img src={burgerMenu} alt='burger-menu' className='burger-menu' />
                </div>
                <div className='navbar-left'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <div className='navbar-center'>
                    <div className='navbar-links'>
                        <div className='navbar-link'>New Drops</div>
                        <div className='navbar-link'>Our Story</div>
                        <div className='navbar-link'>Benifits</div>
                        <div className='navbar-link'>Contact</div>
                    </div>
                </div>
                <div className='navbar-right'>
                    <img src={gift} alt='gift-logo' className='gift-logo' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
