import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar.jsx';
import SubNavbar from './components/common/subnavbar.jsx';
import HospitalPage from './pages/Hospital/Hospitalpage.jsx';
import CharityPage from './pages/Charity/Charitypage.jsx';
import OurServices from './pages/Hospital/OurServices.jsx'; // Import the OurServices component
import Contactus from './pages/Hospital/Contactus.jsx'; // Import the OurServices component
import AboutUs from './pages/Hospital/Aboutus.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('hospital'); // Default to hospital
// Default to hospital
  return (
    <Router>
      <Navbar activeTab={activeTab} />
      <SubNavbar activeTab={activeTab} />
      <Routes>
        <Route
          exact
          path="/hospital"
          element={<HospitalPage />}
          onClick={() => setActiveTab('hospital')} // Set activeTab to 'hospital' for the default route
        />
        <Route
          path="/hospital"
          element={<HospitalPage />}
          onClick={() => setActiveTab('hospital')} // Set activeTab to 'hospital' for /hospital route
        />
        <Route
          path="/charity"
          element={<CharityPage />}
          onClick={() => setActiveTab('charity')} // Set activeTab to 'charity' for /charity route
        />
        {/* Add route for About */}
        <Route
          path="/hospital/about"
          element={<AboutUs/>}
          onClick={() => setActiveTab('hospital')} // Set activeTab to 'hospital' for /hospital/our-services route
        />
        {/* Add route for Contact */}
        <Route
          path="/hospital/contact"
          element={<Contactus />}
          onClick={() => setActiveTab('hospital')} // Set activeTab to 'hospital' for /hospital/our-services route
        />
        {/* Add route for Our Services */}
        <Route
          path="/hospital/ourservices"
          element={<OurServices />}
          onClick={() => setActiveTab('hospital')} // Set activeTab to 'hospital' for /hospital/our-services route
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
