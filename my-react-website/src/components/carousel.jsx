import React, { useState, useEffect } from 'react';
import groupDoctors from '../assets/CharityImages/groupdoctors.jpg';
import doctor from '../assets/CharityImages/doctor.jpg';
import doctor2 from '../assets/CharityImages/doctor2.jpg';

// Sample data for carousel
const carouselItems = [
  { quote: "Quote 1", image: groupDoctors },
  { quote: "Quote 2", image: doctor },
  { quote: "Quote 3", image: doctor2 },
  // Add more items as needed
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[85vh] overflow-hidden relative">
      {carouselItems.map((item, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
          <img src={item.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />

          {/* Quote */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white text-xl lg:text-2xl bg-black bg-opacity-50 p-4 rounded">{item.quote}</p>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {carouselItems.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot w-3 h-3 md:w-4 md:h-4 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-gray-500'} focus:outline-none`}
                  onClick={() => setActiveIndex(idx)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
