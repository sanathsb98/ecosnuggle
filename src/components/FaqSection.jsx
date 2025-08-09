import React, { useState } from 'react';
import './FaqSection.css';
import expandicon from '../assets/expand-icon.svg';

const faqs = [
  {
    question: 'What makes Eco Snuggle blankets different from others?',
    answer: 'Eco Snuggle blankets use sustainable materials and ethical manufacturing, ensuring softness, durability, and minimal environmental impact.',
  },
  {
    question: 'When is Eco Snuggle launching and how can I stay updated?',
    answer: 'Eco Snuggle will launch this fall. Subscribe to our newsletter or follow us on social media to get updates!',
  },
  {
    question: 'How does every purchase support moms and babies in need?',
    answer: 'A portion of each sale is donated to organizations providing essential supplies and care for new mothers and infants.',
  },
  {
    question: 'Are your products truly 100% eco-friendly?',
    answer: 'Yes! Our blankets are made from organic materials and shipped in recyclable packaging.',
  },
  {
    question: "How do I place an order once you're live?",
    answer: 'Visit our website, select your favorite blanket, and check out with our secure payment options.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faq-container container'>
      <div className='faq-section maxscreenlimit'>
        <h2 className='faqtitle'>FAQs</h2>
        <div className='faq-line'></div>
        <div className='faq-questions-section'>
          {faqs.map((item, index) => (
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className='faq-question-header'>
                <p className='faq-question-text'>{item.question}</p>
                <img
                  src={expandicon}
                  alt='Expand Icon'
                  className={`expand-icon ${activeIndex === index ? 'rotated' : ''}`}
                />
              </div>
              <div className='faq-answer'>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
