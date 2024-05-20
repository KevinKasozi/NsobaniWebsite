import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import hLogo from '../../assets/logos/logo.png';

const HospitalLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header logo={hLogo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Navbar />
      <SubNavbar theme="hospital" />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </main>
      <Footer theme="hospital" />
    </div>
  );
};

export default HospitalLayout;
