import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Great Ormond Street Hospital</p>
    </footer>
  );
};

export default Footer;
