import React, { useState } from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';

function OurServices() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const servicesData = [
    {
      title: 'Minor to Moderate Surgical Operations',
      description: 'We perform minor surgeries under local anesthesia, providing convenient access, thorough explanations, and adherence to hospital standards for various procedures.',
      icon: 'heart',
    },
    {
      title: 'SEXUAL REPRODUCTIVE HEALTH',
      description: 'Accessible adolescent sexual and reproductive health services are essential for prevention and promotion of adolescents sexual well-being.',
      icon: 'camera',
    },
    {
      title: 'Maternal Child Health care',
      description: 'A goal-oriented antenatal care approach with at least four visits includes preventive measures for malaria, deworming, iron supplements, and health screenings.',
      icon: 'heart',
    },
    {
      title: 'HIV/AIDS, eMTCT and ART SERVICES',
      description: 'The service covers HIV testing, prevention, treatment, and care, with a focus on expanding ART access and optimizing treatment.',
      icon: 'heart',
    },
    // Add more service entries as needed
  ];

  const facilitiesData = [
    {
      title: 'Emergency Department',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices libero.',
      icon: 'hospital',
    },
    {
      title: 'Laboratory Facilities',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices libero.',
      icon: 'flask',
    },
    {
      title: 'Out Patient Department',
      description: 'First point of contact and a place for implementing preventive & promote health activities.',
      icon: 'flask',
    },
    {
      title: 'Waiting Areas',
      description: 'Our waiting areas are designed for comfort and tranquility. Featuring ergonomic seating, soft, warm lighting, and serene décor, they offer a peaceful retreat. Equipped with Wi-Fi, current magazines, and refreshments, we ensure a pleasant, stress-free wait, reflecting our commitment to exceptional care and service.',
      icon: 'flask',
    },
    // Add more facility entries as needed
  ];

  const handleExpandCard = (index) => {
    setExpandedCardIndex(index);
  };

  const handleCloseCard = () => {
    setExpandedCardIndex(-1);
  };

  return (
    <HospitalLayout>  
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <div key={index} className={`relative bg-white rounded-lg shadow-md p-4 overflow-hidden ${expandedCardIndex === index ? 'transform scale-105 shadow-lg' : ''}`}>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className={`text-gray-600 ${expandedCardIndex === index ? 'mb-8' : ''}`}>{service.description}</p>
            {expandedCardIndex === index ? (
              <button onClick={handleCloseCard} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">
                Close
              </button>
            ) : (
              <div className="flex flex-col items-center justify-end h-full absolute bottom-0 left-0 w-full">
                <button onClick={() => handleExpandCard(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full mb-2">
                  Find Out More
                </button>
              </div>
            )}
          </div>
        ))}

        {facilitiesData.map((facility, index) => (
          <div key={index} className={`relative bg-white rounded-lg shadow-md p-4 overflow-hidden ${expandedCardIndex === index + servicesData.length ? 'transform scale-105 shadow-lg' : ''}`}>
            <div className="text-4xl mb-4">{facility.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{facility.title}</h2>
            <p className={`text-gray-600 ${expandedCardIndex === index + servicesData.length ? 'mb-4' : ''}`}>{facility.description}</p>
            {expandedCardIndex === index + servicesData.length ? (
              <button onClick={handleCloseCard} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">
                Close
              </button>
            ) : (
              <div className="flex flex-col items-center justify-end h-full absolute bottom-0 left-0 w-full">
                <button onClick={() => handleExpandCard(index + servicesData.length)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full mb-2">
                  Find Out More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </HospitalLayout>
  );
}

export default OurServices;
