// src/components/common/HospitalLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import hLogo from '../../assets/logos/logo.png';


const HospitalLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="layout">
      <Header logo={hLogo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Navbar />
      <SubNavbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HospitalLayout;
