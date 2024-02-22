import React from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import Jumbotron from './jumbotron.jsx'
import Logo1 from '../../assets/CharityImages/logo.png'
import aboutus from '../../assets/CharityImages/aboutus.jpeg'

function AboutUs() {
  return (
    <HospitalLayout>
      <Jumbotron />
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Logo */}
            <div className="lg:w-1/3">

            </div>

            {/* Text Content */}
            <div className="lg:w-2/3 lg:ml-8">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to Clinic</h2>
              <p className="text-gray-600 text-lg mb-6">
                Striving to provide the high-quality integrated health services to the local populace and surrounding areas.
              </p>

              {/* Add the provided text here */}
              <div className="text-gray-600 text-lg mb-6">
                <p className="text-gray-600 text-lg mb-6">Nsobani Memorial Community Hospital (NMCH) is a community-based hospital with the intent to provide and deliver quality primary healthcare services. We address the existing gaps within healthcare services in Iganga district by offering accessible, equitable, affordable, and high-quality care to the communities in and around the district.</p>

                <p className="text-gray-600 text-lg mb-6">NMCH improves access and increases demand for services aimed at enhancing healthcare for underserved communities. We focus on the empowerment of youth, women, and children, using sustainable mechanisms to achieve our goals.</p>

                <p className="text-gray-600 text-lg mb-6">Intending to be a role model health promotion organization, NMCH is dedicated to serving the poor and vulnerable in Iganga, Uganda, and beyond. We build on a firm foundation and experience to bring our full expertise, set higher standards, and facilitate communities in meeting their health needs.</p>

              </div>

              {/* Call-to-Action Links */}


              {/* Image */}
              <img
                src={aboutus}
                alt="About Us Image"
                className="rounded-lg shadow-lg mb-8"
              />

              {/* Feature List */}
              <ul className="list-disc pl-6 text-gray-700 text-lg">
                <li className="mb-2">Lorem ipsum dolor sit amet</li>
                <li className="mb-2">Consectetur adipiscing elit</li>
                <li className="mb-2">Sed do eiusmod tempor incididunt ut labore</li>
                <li className="mb-2">Dolore magna aliqua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </HospitalLayout>
  );
}

export default AboutUs;
