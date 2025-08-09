import React, { useState } from 'react';
import './Contact.css';
import mailicon from '../assets/mailicon.svg';
import { sendContactEmail } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameError = touched.name && !formData.name.trim() ? "Name is required" : "";
  const emailError = touched.email && !emailPattern.test(formData.email) ? "Enter a valid email" : "";
  const messageError = touched.message && !formData.message.trim() ? "Message is required" : "";

  const isFormValid =
    formData.name.trim() !== "" &&
    emailPattern.test(formData.email) &&
    formData.message.trim() !== "";

  // Handle change
  const handleChange = (field) => (e) => {
    const value = field === "phone" ? e.target.value.replace(/\D/g, "") : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle blur
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Handle submit
  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);
    setSubmitMessage("");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitMessage("✅ ecosuggle baby received your enquiry! We will contact you shortly");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({ name: false, email: false, phone: false, message: false });
    } else {
      setSubmitMessage("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className='home-page-container container'>
        <div className='contact-page-section maxscreenlimit'>

          {/* Header */}
          <div className='contact-header'>
            <div className='contact-pill'>Get in Touch with us</div>
            <div className='contact-titledes'>
              <div className='contact-title'>We’d Love to Hear From You</div>
              <div className='contact-description'>
                Whether you have a question, a story to share, or just want to say hi - we’re always here for you.
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='contact-form-section'>
            <div className='contact-form'>
              <div className='contact-form-title'>Fill out the form below or reach out to us directly.</div>

              <input
                type='text'
                name='name'
                placeholder='Name*'
                className='contact-input'
                value={formData.name}
                onChange={handleChange("name")}
                onBlur={() => handleBlur("name")}
              />
              {nameError && <div className="error-text">{nameError}</div>}

              <input
                type='email'
                name='email'
                placeholder='Email*'
                className='contact-input'
                value={formData.email}
                onChange={handleChange("email")}
                onBlur={() => handleBlur("email")}
              />
              {emailError && <div className="error-text">{emailError}</div>}

              <input
                type='tel'
                name='phone'
                placeholder='Phone*'
                className='contact-input'
                value={formData.phone}
                onChange={handleChange("phone")}
                onBlur={() => handleBlur("phone")}
              />

              <textarea
                name='message'
                placeholder="What's on your mind*"
                rows={4}
                className='contact-textarea'
                value={formData.message}
                onChange={handleChange("message")}
                onBlur={() => handleBlur("message")}
              ></textarea>
              {messageError && <div className="error-text">{messageError}</div>}

              <div className='btn-space'>
                <div
                  className='submit-btn'
                  style={{
                    backgroundColor: isFormValid ? "var(--primary-color)" : "var(--secondary-color)",
                    cursor: isFormValid ? "pointer" : "not-allowed",
                    opacity: isFormValid ? 1 : 0.7
                  }}
                  onClick={handleSubmit}
                >
                  {loading ? "Sending..." : "Submit"}
                </div>
              </div>

              {submitMessage && <div className="submit-status">{submitMessage}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Email Banner */}
      <div className='contact-mail-banner'>
        <div className='contact-mail-contents'>
          <div className='contact-mail-image'>
            <img src={mailicon} alt='Mail Icon' className='mail-icon' />
          </div>
          <div className='contact-mail-text'>support@ecosnugglebaby.com</div>
        </div>
      </div>
    </>
  );
};

export default Contact;

