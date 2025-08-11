import React, { useEffect, useRef } from 'react';
import './OurProducts.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import whale from '../assets/whale.svg';
import flower from '../assets/flower.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurProducts = ({ openModal }) => {
  const sectionRef = useRef(null);

  const productData = [
    {
      image: product1,
      title: 'NatureNest - Muslin Wraps',
      description: 'Earthy. Soft. Gentle.',
      price: '$ Price to be revealed soon',
    },
    {
      image: product2,
      title: 'BlushBloom - Muslin Duo',
      description: 'Light. Cozy. Sweet.',
      price: '$ Price to be revealed soon',
    },
    {
      image: product3,
      title: 'CloudKiss - Essentials Trio',
      description: 'Soft hues. comfort.',
      price: '$ Price to be revealed soon',
    }
  ];

  useEffect(() => {
    const boxes = sectionRef.current.querySelectorAll('.product-box');
    const titles = sectionRef.current.querySelectorAll('.our-products-title');
    const descriptions = sectionRef.current.querySelectorAll('.our-products-description');

    gsap.fromTo(
      boxes,
      { opacity: 0, y: 60 }, // Start invisible & lower
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.3, // Delay between boxes
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%', // When section is near viewport
          toggleActions: 'play none none reverse',
        },
      }
    );
       // Animate titles
    gsap.fromTo(
      titles,
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
        // Animate descriptions
    gsap.fromTo(
      descriptions,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 0.6, // starts after titles
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div id="new-drops" className='our-products-container container' ref={sectionRef}>
      <div className='our-products-section maxscreenlimit'>
        <div className='our-products-title'>A First Look at What’s Coming</div>
        <div className='our-products-description'>
          Here’s a sneak peek at our upcoming collection - soft, sustainable essentials designed for your newborn’s comfort and your peace of mind. Be the first to know when we launch.
        </div>

        <div className='our-product-collections'>
          {productData.map((product, index) => (
            <div className='product-box' key={index}>
              {index === 0 && <img src={whale} alt="Whale Icon" className="bg-image whale desktop-only" />}
              {index === 0 && <img src={flower} alt="Flower Icon" className="bg-image flower mobile-only mobflower" />}
              {index === 2 && <img src={flower} alt="Flower Icon" className="bg-image flower desk-tab-only" />}

              <div className='product-image'>
                <img src={product.image} alt={product.title} className='product-image-img' />
              </div>
              <div className='product-box-title'>{product.title}</div>
              <div className='product-box-description'>{product.description}</div>
              <div className='product-box-pricing'>
                <div className='product-box-price'>{product.price}</div>
                <div className='product-box-pill'>GET EXTRA OFF</div>
              </div>
              <div onClick={() => openModal()} className='product-box-btn'>Notify Me</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;


