
import React from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import HeroCarousel from '../../components/carousel.jsx';
import HospitalFeatures from '../Hospital/HospitalFeatures.jsx';
import Stats from '../Hospital/Statistic.jsx'

function HospitalPage() {
  return (
    <HospitalLayout> {/* Wrap only the content that needs the layout */}
      <HeroCarousel />
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Nsobani Memorial Community Hospital
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At Nsobani Memorial Community Hospital, we stand as a beacon of hope and excellence in primary health care, deeply rooted in the heart of Iganga district. Our mission transcends beyond mere medical services; we are dedicated to bridging the critical gaps in health care accessibility and quality that have long challenged our community.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our hospital is not just an institution; it's a community-driven endeavor committed to uplifting the well-being of every individual in and around Iganga. We pride ourselves on delivering a spectrum of primary health care services that are not only of the highest standard but also equitable, affordable, and within easy reach of all.
            </p>
            {/* Add more paragraphs as needed */}
        </div>
      </div>
      <HospitalFeatures />
      <Stats />
    </HospitalLayout>
  );
}

export default HospitalPage;
