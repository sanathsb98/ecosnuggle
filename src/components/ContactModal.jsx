import React, { useEffect, useState } from 'react';
import './ContactModal.css';
import logo from '../assets/logo.svg';
import modalemoji from '../assets/modal-emoji.svg';
import modalbutterfly from '../assets/modal-butterfly.svg';
import closeicon from '../assets/close.svg';
import { sendContactEmail } from '../services/emailService';

const ContactModal = ({ onClose }) => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    whatsapp: false
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const handleInputChange = (name) => (e) => {
    const value = name === "whatsapp" ? e.target.checked : e.target.value;
    setEmailData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameError = touched.name && !emailData.name.trim() ? "Name is required" : "";
  const emailError = touched.email && !emailPattern.test(emailData.email) ? "Enter a valid email" : "";

  const isFormValid = emailData.name.trim() !== "" && emailPattern.test(emailData.email) && emailData.whatsapp;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);
    setSubmitMessage("");

    const result = await sendContactEmail(emailData);

    if (result.success) {
      setSubmitMessage("✅ ecosuggle baby received your enquiry! We will contact you shortly");
      setEmailData({ name: "", email: "", phone: "", message: "", whatsapp: false });
      setTouched({ name: false, email: false, phone: false }); // Reset touched so errors don't show
    } else {
      setSubmitMessage("❌ Failed to send email. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className='contact-modal-container'>
      <div className='contact-modal-content'>
        {/* Banner */}
        <div className='contact-modal-banner'>
          <img onClick={onClose} src={closeicon} alt='Close' className='contact-modal-close-icon' />
          <div className='contact-modal-title'>Be the First to Know! With a Special 10% Discount!</div>
          <div className='contact-modal-description'>
            Get early access and an exclusive 10% launch discount. We’ll notify you by email and WhatsApp.
          </div>
          <img src={modalbutterfly} alt='Butterfly' className='contact-modal-butterfly' />
        </div>

        {/* Form Section */}
        <div className='contact-modal-section'>
          <div className='contact-modal-fields'>
            <div className='contact-modal-logo'>
              <img src={logo} alt='Logo' className='contact-modal-logo-img' />
            </div>

            {/* Name Field */}
            <input
              value={emailData.name}
              onChange={handleInputChange("name")}
              onBlur={() => handleBlur("name")}
              type='text'
              name='name'
              placeholder='Name*'
              className='contact-input contact-modal-input'
            />
            {nameError && <div className="error-text">{nameError}</div>}

            {/* Email Field */}
            <input
              value={emailData.email}
              onChange={handleInputChange("email")}
              onBlur={() => handleBlur("email")}
              type='email'
              name='email'
              placeholder='Email*'
              className='contact-input contact-modal-input'
            />
            {emailError && <div className="error-text">{emailError}</div>}

            {/* Phone Field */}
            <input
              value={emailData.phone}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, '');
                setEmailData({ ...emailData, phone: numericValue });
              }}
              onBlur={() => handleBlur("phone")}
              type='tel'
              name='phone'
              placeholder='Phone'
              className='contact-input contact-modal-input'
            />

            {/* Checkbox */}
            <label className='contact-modal-checkbox'>
              <input
                type='checkbox'
                name='whatsapp'
                checked={emailData.whatsapp}
                onChange={handleInputChange("whatsapp")}
                className='contact-modal-checkbox-input'
              />
              <span className='contact-modal-checkbox-label'>
                I agree to receive launch updates and emails.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div
            className='contactmodal-submit-btn'
            style={{
              backgroundColor: isFormValid ? "var(--primary-color)" : "var(--secondary-color)",
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.7
            }}
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Submit"}
          </div>

          {/* Status Message */}
          {submitMessage && <div className="submit-status">{submitMessage}</div>}

          {/* Extra Info */}
          <div className='additional-info'>
            <div className='additional-info-logo'>
              <img src={modalemoji} alt='Smile Emoji' className='modal-emoji' />
            </div>
            <div className='additional-info-text'>
              We’ll never spam you or share your info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;


