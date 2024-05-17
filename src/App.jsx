import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'tailwindcss/tailwind.css';

import HospitalPage from "./pages/Hospital/HospitalPage";
import CharityPage from "./pages/Charity/CharityPage";
import OurServices from "./pages/Hospital/OurServices";
import ContactUs from "./pages/Hospital/ContactUs";
import AboutUs from "./pages/Hospital/AboutUs";
import EventsPage from "./pages/Charity/Events";
import NotFoundPage from "./pages/NotFound";
import ErrorBoundary from './components/Errorhandling';
import DonationForm from './pages/Charity/Donate'; // Adjust the import path as needed

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [activeTab, setActiveTab] = useState('hospital');

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HospitalPage activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/hospital" element={<HospitalPage activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/charity" element={<CharityPage activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/hospital/about" element={<AboutUs activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/hospital/contact" element={<ContactUs activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/hospital/ourservices" element={<OurServices activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/charity/events" element={<EventsPage activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/charity/donate" element={
            <Elements stripe={stripePromise}>
              <DonationForm />
            </Elements>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
