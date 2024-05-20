// src/components/common/CharityHeroSection.jsx
import React from 'react';
import charityImage from '../../assets/img2/charity.jpg'; // Ensure the image path reflects impactful, charity-focused imagery
import DonationForm from '../../pages/Charity/Donate';

const CharityHeroSection = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="font-bold text-5xl leading-tight mb-4">
            Your Support Saves Lives
          </h1>
          <p className="text-lg mb-8">
            Each donation to our hospital goes directly towards life-saving treatments, cutting-edge medical research, and the care of our most vulnerable patients. Help us continue to provide exceptional medical care and innovative health solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Donate Now
            </button>
            <button className="bg-transparent hover:bg-blue-100 text-blue-600 font-semibold hover:text-blue-700 py-2 px-6 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={charityImage} alt="Impactful Care" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CharityHeroSection;
