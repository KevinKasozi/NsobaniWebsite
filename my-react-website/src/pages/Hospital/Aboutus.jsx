import React from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import Jumbotron from './jumbotron.jsx'
import Logo1 from '../../assets/CharityImages/logo.png'

function AboutUs() {
  return (
    <HospitalLayout>
      <Jumbotron />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Logo */}
            <div className="lg:w-1/3">
              <img
                src={Logo1}
                alt="Company Logo"
                className="mx-auto lg:ml-0 lg:mr-auto h-24 w-24 rounded-full p-4"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-2/3 lg:ml-8">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to Our Company</h2>
              <p className="text-gray-600 text-lg mb-6">
                Striving to provide the high-quality integrated health services to the local populace and surrounding areas.
              </p>

              {/* Add the provided text here */}
              <div className="text-gray-600 text-lg mb-6">
                Nsobani Memorial Community Hospital (NMCH) is a community-based hospital with the intent to provide and deliver quality primary Healthcare Services addressing the existing gaps within the health care services in Iganga district by providing accessible, equitable, affordable, and high-quality Primary Health Care Services to the communities in and around Iganga district. NMCH improves access and increases demand for services aimed at enhancing and expanding health care for underserved communities, empowerment of youth, women, and children in using sustainable mechanisms. NMCHI intends to be a role model health promotion organization dedicated to serving the poor and vulnerable in Iganga, Uganda, and beyond. We utilize the firm foundation and experience established to bring our full expertise, set higher standards, and facilitate communities to meet their needs. The organization attracts a significant number of professionals including health, law social work, community development, education, environment, and economics among others. This is in recognition of the fact that community health problems are multi-causal and therefore need multi-sectoral approaches with strong community participation. A healthy community can work hard to reduce poverty levels and improve their livelihood.
              </div>

              {/* Call-to-Action Links */}


              {/* Image */}
              <img
                src="about-us-image.jpg"
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
