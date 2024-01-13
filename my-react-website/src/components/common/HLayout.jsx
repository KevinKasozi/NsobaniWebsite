// HospitalLayout.jsx
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import hLogo from '../../assets/logos/hospital.jpg'; // Update with actual path

const HospitalLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header logo={hLogo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-80 py-4"> {/* Padding for main content */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HospitalLayout;
