import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar.jsx';
import SubNavbar from './components/common/subnavbar.jsx';
import HospitalPage from './pages/Hospital/Hospitalpage.jsx';
import CharityPage from './pages/Charity/Charitypage.jsx';


function App() {
  const [activeTab, setActiveTab] = useState('hospital'); // Default to hospital

  return (
    <Router>
      <Navbar activeTab={activeTab} />
      <SubNavbar activeTab={activeTab} />
      <Routes>
        <Route exact path="/" element={<HospitalPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/charity" element={<CharityPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
