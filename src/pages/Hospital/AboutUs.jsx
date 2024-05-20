import React from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import Jumbotron from './jumbotron.jsx';
import Timeline from './Timeline.jsx';
import aboutus from '../../assets/CharityImages/aboutus.jpeg';

function AboutUs() {
  return (
    <HospitalLayout>
      <Jumbotron />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our History</h2>
              <p className="text-gray-600 mb-6">
                Nsobani Memorial Community Hospital (NMCH) is a community-based hospital with the intent to provide and deliver quality primary healthcare services. We address the existing gaps within healthcare services in Iganga district by offering accessible, equitable, affordable, and high-quality care to the communities in and around the district.
              </p>
              <p className="text-gray-600 mb-6">
                NMCH improves access and increases demand for services aimed at enhancing healthcare for underserved communities. We focus on the empowerment of youth, women, and children, using sustainable mechanisms to achieve our goals.
              </p>
              <p className="text-gray-600 mb-6">
                Intending to be a role model health promotion organization, NMCH is dedicated to serving the poor and vulnerable in Iganga, Uganda, and beyond. We build on a firm foundation and experience to bring our full expertise, set higher standards, and facilitate communities in meeting their health needs.
              </p>
              <img
                src={aboutus}
                alt="About Us"
                className="w-2/3 mx-auto rounded-lg shadow-lg mb-8" // Adjusted size and centered image
              />
            </div>

            {/* Timeline Section */}
            <div className="lg:w-1/3 lg:pl-16 mt-8 lg:mt-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Our Journey</h3>
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HospitalLayout>
  );
}

export default AboutUs;
