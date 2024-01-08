import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img2/wdoctor.jpg';
import img2 from '../../assets/img2/reception.jpg';
import img3 from '../../assets/img2/medicaltests.jpg';


function CustomCarousel() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 px-4 max-w-screen-xl">
        <Carousel
          showThumbs={true} // Show dot indicators
          dynamicHeight={false} // Set to true for different slide heights
          infiniteLoop={true} // Infinite loop
          autoPlay={true} // Auto-play the carousel
          interval={5000} // Interval between slides in milliseconds (adjust as needed)
          className="max-w-3xl mx-auto" // Add a max-width to the carousel container
        >
          {/* Slide 1 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                Healing is a matter of time, but it is sometimes also a matter of opportunity.
                </h2>
                <p className="mb-4">
                
                </p>
                <p>
                  We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img className="w-full h-70 rounded-lg" src={img1} alt="office content 1" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                Healing is a matter of time, but it is sometimes also a matter of opportunity.
                </h2>
                <p className="mb-4">
                
                </p>
                <p>
                  We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img className="w-full h-70 rounded-lg" src={img1} alt="office content 1" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                Healing is a matter of time, but it is sometimes also a matter of opportunity.
                </h2>
                <p className="mb-4">
                
                </p>
                <p>
                  We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img className="w-full h-70 rounded-lg" src={img1} alt="office content 1" />
            </div>
          </div>

        </Carousel>
      </div>
    </section>
  );
}

export default CustomCarousel;
