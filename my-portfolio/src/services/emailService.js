// Email service using backend API with Nodemailer
const API_BASE_URL = 'http://localhost:5000/api';

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error('All fields are required');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    // Send request to backend
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true, message: result.message };
    } else {
      throw new Error(result.message || 'Failed to send email');
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to send message. Please try again later.' 
    };
  }
};
