// ContactForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', formData);

      const result = response.data;
      console.log(result);

      if (result.success) {
        setFormStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', contact: '', message: '' });
      } else {
        setFormStatus({ success: false, message: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      setFormStatus({ success: false, message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <form className="bg-white bg-opacity-50 rounded-lg shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          className="w-full p-3 bg-gray-100 dark:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          className="w-full p-3 bg-gray-100 dark:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          className="w-full p-3 bg-gray-100 dark:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="contact"
          name="contact"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          className="w-full p-3 bg-gray-100 dark:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <button className="w-full p-3 bg-[#C8A26B] text-white font-semi rounded-3xl hover:bg-[#b8945e] transition duration-300">
          Send Message
        </button>
      </div>
      {formStatus.message && (
        <p className={`text-center mt-4 ${formStatus.success ? 'text-green-500' : 'text-red-500'}`}>
          {formStatus.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
