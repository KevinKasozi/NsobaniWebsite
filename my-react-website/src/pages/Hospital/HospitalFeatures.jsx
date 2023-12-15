import React from 'react';

const HospitalFeatures = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Key Features of Nsobani Memorial Community Hospital
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="/feature-icon-1.png"  // Replace with your icon image
                alt="Feature 1 Icon"
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
                src="/feature-icon-2.png"  // Replace with your icon image
                alt="Feature 2 Icon"
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
                src="/feature-icon-3.png"  // Replace with your icon image
                alt="Feature 3 Icon"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Comprehensive Services</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer a wide range of medical services, from primary care to specialized treatments.
              </p>
            </div>
          </div>
          {/* Add more features as needed */}
        </div>
      </div>
    </section>
  );
};

export default HospitalFeatures;
