import React, { useState } from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import ambulanceImage from '../../assets/img2/ambulance.jpg';  //  Adjust the path to your assets folder
import labtest from '../../assets/img2/medicaltests.jpg';  //  Adjust the path to your assets folder
import waitRoom from '../../assets/img2/reception.jpg';  //  Adjust the path to your assets folder
import lab2 from '../../assets/img2/research.jpg';  //  Adjust the path to your assets folder
import xray from '../../assets/img2/xray.jpg';  //  Adjust the path to your assets folder
import maternal from '../../assets/CharityImages/doctor.jpg';
import nurses from '../../assets/img2/nurses.jpg';
import laptop from '../../assets/img2/laptop.jpg';
//  Adjust the path to your assets folder


// Separate Card component
const Card = ({ data, isExpanded, onToggle }) => (
  <div className={`relative bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${isExpanded ? 'scale-110 z-10' : ''}`}>
    <img src={data.imageUrl} alt={data.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
      <p className="text-gray-600">{data.description}</p>
      {isExpanded && (
        <div className="text-gray-700 mt-4">
          {data.additionalContent}
        </div>
      )}
      <div className="mt-4">
        <button onClick={onToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isExpanded ? 'Close' : 'Find Out More'}
        </button>
      </div>
    </div>
  </div>
);


function OurServices() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const servicesData = [
    {
      title: 'Minor to Moderate Surgical Operations',
      description: 'We perform minor surgeries under local anesthesia, providing convenient access, thorough explanations, and adherence to hospital standards for various procedures.',
      additionalContent: 'Detailed information about Minor to Moderate Surgical Operations, including procedure types, recovery times, and patient testimonials.',
      imageUrl: xray,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'SEXUAL REPRODUCTIVE HEALTH',
      description: 'Accessible adolescent sexual and reproductive health services are essential for prevention and promotion of adolescents sexual well-being.',
      additionalContent: 'In-depth look at our programs and services tailored for adolescent sexual and reproductive health, including counseling and educational resources.',
      icon: 'camera',
      imageUrl: nurses,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'Maternal Child Health Care',
      description: 'A goal-oriented antenatal care approach with at least four visits includes preventive measures for malaria, deworming, iron supplements, and health screenings.',
      additionalContent: 'Overview of our maternal child health care services, focusing on prenatal and postnatal care, neonatal health, and early childhood development.',
      icon: 'heart',
      imageUrl: maternal,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'HIV/AIDS, eMTCT and ART SERVICES',
      description: 'The service covers HIV testing, prevention, treatment, and care, with a focus on expanding ART access and optimizing treatment.',
      additionalContent: 'Comprehensive guide to our HIV/AIDS services, including treatment options, support groups, and community outreach initiatives.',
      icon: 'heart',
      imageUrl: labtest,
      iconColor: 'purple', // Tailwind color classes
    },
    // Add more service entries as needed
  ];

  const facilitiesData = [
    {
      title: 'Emergency Department',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices libero.',
      additionalContent: 'Further details on our state-of-the-art Emergency Department, including patient stories, staff qualifications, and treatment protocols.',
      icon: 'hospital',
      imageUrl: ambulanceImage,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'Laboratory Facilities',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices libero.',
      additionalContent: 'Insights into our advanced laboratory facilities, featuring the latest in diagnostic technology and a team of experienced technicians and specialists.',
      icon: 'flask',
      imageUrl: lab2,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'Out Patient Department',
      description: 'First point of contact and a place for implementing preventive & promote health activities.',
      additionalContent: 'Explore our Out Patient Department services, from routine check-ups to specialized care, all designed with patient comfort and convenience in mind.',
      icon: 'flask',
      imageUrl: waitRoom,
      iconColor: 'purple', // Tailwind color classes
    },
    {
      title: 'Waiting Areas',
      description: 'Our waiting areas are designed for comfort and tranquility. Featuring ergonomic seating, soft, warm lighting, and serene décor, they offer a peaceful retreat. Equipped with Wi-Fi, current magazines, and refreshments, we ensure a pleasant, stress-free wait, reflecting our commitment to exceptional care and service.',
      additionalContent: 'A closer look at our waiting areas, designed to provide a relaxing and comfortable environment for patients and visitors alike.',
      icon: 'flask',
      imageUrl: laptop,
      iconColor: 'purple', // Tailwind color classes
    },
    // Add more facility entries as needed
  ];

  const handleExpandCard = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? -1 : index);
  };

  return (
    <HospitalLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          At <strong>Nsobani Memorial Community Hospital</strong>, we are dedicated to providing compassionate and exceptional medical care to our community. Our state-of-the-art facilities and a team of experienced healthcare professionals are committed to delivering a wide range of services tailored to meet the unique needs of each patient. From routine check-ups to advanced surgical procedures, our hospital is equipped to handle both minor ailments and complex conditions with the utmost attention to patient comfort and safety.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              data={service}
              isExpanded={expandedCardIndex === index}
              onToggle={() => handleExpandCard(index)}
            />
          ))}

          {facilitiesData.map((facility, index) => (
            <Card
              key={index + servicesData.length}
              data={facility}
              isExpanded={expandedCardIndex === index + servicesData.length}
              onToggle={() => handleExpandCard(index + servicesData.length)}
            />
          ))}
        </div>
      </div>
    </HospitalLayout>
  );
}

export default OurServices;





