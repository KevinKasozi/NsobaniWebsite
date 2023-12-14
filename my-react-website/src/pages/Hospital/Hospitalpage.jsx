import React from 'react';
import HospitalLayout from '../../components/common/HLayout.jsx';
import AboutUs from '../Hospital/Aboutus.jsx';
import ContactUs from '../Hospital/Contactus.jsx';

function HospitalPage() {
  return (
    <HospitalLayout>
      <Carousel />
      <div className="p-6">
        <AboutUs />
        <ContactUs />
        {/* Add more components as needed */}
      </div>
    </HospitalLayout>
  );
}

export default HospitalPage;
