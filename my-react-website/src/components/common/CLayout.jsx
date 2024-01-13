// CharityLayout.jsx
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import cLogo from '../../assets/logos/charity.png'; // Update with actual path


const CharityLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header logo={cLogo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-80 py-4"> {/* Padding for main content */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CharityLayout;