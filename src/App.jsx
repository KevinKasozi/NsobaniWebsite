// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import HospitalPage from "./pages/Hospital/Hospitalpage";
import CharityPage from "./pages/Charity/Charitypage";
import OurServices from "./pages/Hospital/OurServices";
import ContactUs from "./pages/Hospital/Contactus";
import AboutUs from "./pages/Hospital/Aboutus";
import EventsPage from "./pages/Charity/events";
import NotFoundPage from "./pages/notfound";
import SuccessPage from "./components/common/Success"; // Make sure to import SuccessPage
import ErrorBoundary from './components/Errorhandling';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [activeTab, setActiveTab] = useState('hospital');

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <Elements stripe={stripePromise}>
                <HospitalPage activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/hospital"
            element={
              <Elements stripe={stripePromise}>
                <HospitalPage activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/charity"
            element={
              <Elements stripe={stripePromise}>
                <CharityPage activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/hospital/about"
            element={
              <Elements stripe={stripePromise}>
                <AboutUs activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/hospital/contact"
            element={
              <Elements stripe={stripePromise}>
                <ContactUs activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/hospital/ourservices"
            element={
              <Elements stripe={stripePromise}>
                <OurServices activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/charity/events"
            element={
              <Elements stripe={stripePromise}>
                <EventsPage activeTab={activeTab} setActiveTab={setActiveTab} />
              </Elements>
            }
          />
          <Route
            path="/success"
            element={<SuccessPage />} // Add this route to handle success redirects
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
