import React, { useState } from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle form submission, such as sending an email or saving the data.
    console.log('Form submitted:', formData);
    // You can reset the form data if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <HospitalLayout>
      <div className="container mx-auto py-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">Say Hi!</h2>
            <p className="text-gray-700 mb-6">We'd like to talk with you.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  My name is
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border rounded-lg py-2 px-3 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border rounded-lg py-2 px-3 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  I'm looking for
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What you love"
                  className="border rounded-lg py-2 px-3 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I want to say that..."
                  rows="6"
                  className="border rounded-lg py-2 px-3 w-full resize-none"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="relative p-8 bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/background/image.jpg')` }}>
            <div className="absolute inset-0 bg-blue-600 opacity-75"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <p className="mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  <span>(+40) 772 100 200</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>hello@creative-tim.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Dyonisie Wolf Bucharest, RO 010458</span>
                </div>
              </div>
              <div className="mt-6 flex space-x-2">
                <a href="#" className="bg-white text-blue-600 rounded-full p-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-white text-blue-600 rounded-full p-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-white text-blue-600 rounded-full p-2">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#" className="bg-white text-blue-600 rounded-full p-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HospitalLayout>
  );
};

export default ContactUs;
