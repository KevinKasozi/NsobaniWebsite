// Carousel.jsx
import React, { useState, useEffect } from 'react';

const quotes = [
  "Quote 1 text...",
  "Quote 2 text...",
  "Quote 3 text...",
  // Add more quotes as needed
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="slides">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            {quote}
          </div>
        ))}
      </div>
      <div className="dots">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
