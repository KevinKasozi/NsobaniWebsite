import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from './navbar.jsx'
import SubNavbar from './subnavbar.jsx';

const HospitalLayout = ({ children }) => {
  return (
    <div>
      <Header hospital />
      {children}
      <Footer />
    </div>
  );
};

export default HospitalLayout;
