import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-bold text-lg mb-2">NsobaniMemorialHospital</h4>
          <p>Amref Health Africa is Africa's leading health NGO, working with communities in 35 countries to secure the right to health and break the cycle of poverty.</p>
          <p className="mt-4">Registered charity no. 261488</p>
          <p>Company no. 00982544</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Get in touch</h4>
          <p>7-14 Great Dover Street, London, SE1 4YR</p>
          <p>020 7269 5520</p>
          <p>info@amrefuk.org</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Follow us on</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Donate Now</h4>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-8">
        © {new Date().getFullYear()} NsobaniMemorialHospital. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
