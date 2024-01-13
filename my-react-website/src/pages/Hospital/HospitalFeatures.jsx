import React from 'react';
import svgImg1 from '../../assets/svg/laptop-medical.svg';  // Update these paths to your actual SVG file locations
import svgImg2 from '../../assets/svg/medical-files.svg';      // Update these paths to your actual SVG file locations
import svgImg3 from '../../assets/svg/outpatient.svg';   // Update these paths to your actual SVG file locations
import svgImg4 from '../../assets/svg/doctor.svg';  // Update these paths to your actual SVG file locations
import svgImg5 from '../../assets/svg/medical-files.svg';      // Update these paths to your actual SVG file locations
import svgImg6 from '../../assets/svg/cardiogram.svg';   // Update these paths to your actual SVG file locations

const HospitalFeatures = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What We Have To Offer
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg1}
                alt="Advanced Medical Technology"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Advanced Medical Technology</h3>
              <p className="mt-2 text-base text-gray-500">
                We utilize cutting-edge medical technology to provide accurate diagnostics and treatments.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg2}
                alt="Experienced Medical Staff"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Experienced Medical Staff</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team of experienced doctors and nurses ensures high-quality patient care.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg3}
                alt="Comprehensive Services"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Comprehensive Services</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a wide range of medical services, from primary care to specialized treatments.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg4}
                alt="Comprehensive Services"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Comprehensive Services</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a wide range of medical services, from primary care to specialized treatments.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg5}
                alt="Comprehensive Services"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Comprehensive Services</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a wide range of medical services, from primary care to specialized treatments.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={svgImg6}
                alt="Comprehensive Services"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Comprehensive Services</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a wide range of medical services, from primary care to specialized treatments.
              </p>
            </div>
          </div>



          {/* Additional features can be added here */}
        </div>
      </div>
    </section>
  );
};

export default HospitalFeatures;
