import React from 'react';

const TestimonialsSection = ({ theme }) => {
  const bgColor = theme === 'charity' ? 'bg-red-600' : 'bg-blue-600';
  const textColor = theme === 'charity' ? 'text-red-600' : 'text-blue-600';

  return (
    <div className={`${bgColor} text-white py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white ${textColor} rounded-lg shadow-lg">
            <p className="mb-4">"This charity has changed my life for the better. I am so grateful for their support and dedication."</p>
            <p className="font-bold">- Jane Doe</p>
          </div>
          <div className="p-8 bg-white ${textColor} rounded-lg shadow-lg">
            <p className="mb-4">"The staff is incredibly compassionate and skilled. I can't thank them enough for the care I've received."</p>
            <p className="font-bold">- John Smith</p>
          </div>
          <div className="p-8 bg-white ${textColor} rounded-lg shadow-lg">
            <p className="mb-4">"Thanks to this charity, I have access to the treatments I need. They truly make a difference."</p>
            <p className="font-bold">- Emily Johnson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
