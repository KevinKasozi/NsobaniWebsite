import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HospitalPage from './pages/Hospital/Hospitalpage.jsx';
import CharityPage from './pages/Charity/Charitypage.jsx';
import OurServices from './pages/Hospital/OurServices.jsx';
import Contactus from './pages/Hospital/Contactus.jsx';
import AboutUs from './pages/Hospital/Aboutus.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('hospital'); // Default to hospital

  const handleSearch = (searchTerm) => {
    const allElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  
    allElements.forEach((element) => {
      if (element.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        element.style.display = ''; // Show element
      } else {
        element.style.display = 'none'; // Hide element
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/NsobaniWebsite//hospital"
          element={<HospitalPage />}
        />
        <Route
          path="/NsobaniWebsite//charity"
          element={<CharityPage />}
        />
        {/* Routes for Hospital Sub-Pages */}
        <Route path="/hospital/about" element={<AboutUs />} />
        <Route path="/hospital/contact" element={<Contactus />} />
        <Route path="/hospital/ourservices" element={<OurServices />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
