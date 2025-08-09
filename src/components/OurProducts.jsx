import React from 'react';
import './OurProducts.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import whale from '../assets/whale.svg';
import flower from '../assets/flower.svg';

const OurProducts = ({openModal}) => {
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
    ]
    return (
        <div id="new-drops" className='our-products-container container'>
            <div className='our-products-section maxscreenlimit'>
                <div className='our-products-title'>A First Look at What’s Coming</div>
                <div className='our-products-description'>Here’s a sneak peek at our upcoming collection - soft, sustainable essentials designed for your newborn’s comfort and your peace of mind. Be the first to know when we launch.</div>
              
                <div className='our-product-collections'>
{productData.map((product, index) => (
  <div className='product-box' key={index}>
    {/* Whale for first card (desktop) */}
    {index === 0 && (
      <img src={whale} alt="Whale Icon" className="bg-image whale desktop-only" />
    )}

    {/* Flower for first card (mobile < 780px) */}
    {index === 0 && (
      <img src={flower} alt="Flower Icon" className="bg-image flower mobile-only mobflower" />
    )}

    {/* Flower behind third card always */}
    {index === 2 && (
      <img src={flower} alt="Flower Icon" className="bg-image flower desk-tab-only" />
    )}

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
    )
}

export default OurProducts
