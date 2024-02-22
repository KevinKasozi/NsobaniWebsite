import React from 'react';
import charity from '../../assets/img2/charity.jpg';
import DonateSection from '../../pages/Charity/donatesection.jsx';

const CharityHeroSection = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="font-bold text-5xl leading-tight mb-4">
            We help you overcome digital obstacles
          </h1>
          <p className="text-lg mb-8">
            Autem voluptas quis facere et qui voluptate earum. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
              Start now
            </button>
            <button className="bg-transparent hover:bg-red-100 text-red-600 font-semibold hover:text-red-700 py-2 px-6 border border-red-500 hover:border-transparent rounded">
              Request a demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Here you would put an <img> tag with the src set to your image path. */}
          {/* Example: */}
          {/* <img src="path-to-your-image.jpg" alt="Hero Image" /> */}
          <DonateSection/>

        </div>
      </div>
    </div>
  );
};

export default CharityHeroSection;
