import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_1nq66hu';
const TEMPLATE_ID = 'template_diu5nwm';
const PUBLIC_KEY = 'l_mVpIfVCAxuGZzZn';

export const sendContactEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || '',
      },
      PUBLIC_KEY
    );
    console.log('Email sent successfully:', result.text);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
