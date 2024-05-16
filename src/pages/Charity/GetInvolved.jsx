import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = ({ theme }) => {
  const bgColor = theme === 'charity' ? 'bg-red-600' : 'bg-blue-600';
  const textColor = theme === 'charity' ? 'text-red-600' : 'text-blue-600';
  const buttonBgColor = theme === 'charity' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className={`${bgColor} text-white py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-8">Join us in making a difference. Here are some ways you can help.</p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white ${textColor} p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
            <p className="mb-6">Become a part of our volunteer team and help us with our events and campaigns.</p>
            <Link to="/volunteer" className={`${buttonBgColor} text-white font-bold py-2 px-4 rounded-full transition duration-300`}>
              Learn More
            </Link>
          </div>
          <div className="bg-white ${textColor} p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Donate</h3>
            <p className="mb-6">Your donations help us provide essential services to those in need.</p>
            <Link to="/donate" className={`${buttonBgColor} text-white font-bold py-2 px-4 rounded-full transition duration-300`}>
              Donate Now
            </Link>
          </div>
          <div className="bg-white ${textColor} p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Fundraise</h3>
            <p className="mb-6">Organize a fundraising event to support our cause and make a bigger impact.</p>
            <Link to="/fundraise" className={`${buttonBgColor} text-white font-bold py-2 px-4 rounded-full transition duration-300`}>
              Start Fundraising
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
