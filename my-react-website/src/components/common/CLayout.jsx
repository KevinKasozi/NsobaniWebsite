import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from './navbar.jsx'
import SubNavbar from './subnavbar.jsx';

const CharityLayout = ({ children }) => {
  return (
    <div>
      <Header charity />
      {children}
      <Footer />
    </div>
  );
};

export default CharityLayout;
