// src/components/common/CLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import cLogo from '../../assets/logos/logo.png';

const CharityLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header logo={cLogo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Navbar />
      <SubNavbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CharityLayout;
