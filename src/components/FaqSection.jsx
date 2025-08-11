import React, { useState,useEffect,useRef } from 'react';
import './FaqSection.css';
import expandicon from '../assets/expand-icon.svg';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

useEffect(()=>{
  const faqQuestions = sectionRef.current.querySelectorAll('.faq-question');
  const title = sectionRef.current.querySelector('.faqtitle');
  const answers = sectionRef.current.querySelectorAll('.faq-answer');

   gsap.fromTo(
      title,
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

     gsap.fromTo(
      faqQuestions,
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

     gsap.fromTo(
      answers,
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

},[])

  return (
    <div ref={sectionRef} className='faq-container container'>
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
