import React from 'react';
import { FaHeart, FaHandsHelping, FaRegSmileBeam, FaDollarSign } from 'react-icons/fa';

const OurImpact = ({ theme }) => {
  const textColor = theme === 'charity' ? 'text-red-600' : 'text-blue-600';
  const bgColor = theme === 'charity' ? 'bg-red-100' : 'bg-blue-100';

  return (
    <div className={`${bgColor} py-16`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Our Impact</h2>
          <p className="text-lg">See the difference we are making together.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <FaHeart className={`${textColor} text-6xl mb-4`} />
            <h3 className="text-2xl font-bold mb-2">5,000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <FaHandsHelping className={`${textColor} text-6xl mb-4`} />
            <h3 className="text-2xl font-bold mb-2">1,200+</h3>
            <p>Volunteers</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <FaRegSmileBeam className={`${textColor} text-6xl mb-4`} />
            <h3 className="text-2xl font-bold mb-2">800+</h3>
            <p>Events Held</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <FaDollarSign className={`${textColor} text-6xl mb-4`} />
            <h3 className="text-2xl font-bold mb-2">$2M+</h3>
            <p>Funds Raised</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
