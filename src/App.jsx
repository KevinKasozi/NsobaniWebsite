import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import HospitalPage from "./pages/Hospital/HospitalPage";
import CharityPage from "./pages/Charity/CharityPage";
import OurServices from "./pages/Hospital/OurServices";
import ContactUs from "./pages/Hospital/ContactUs";
import AboutUs from "./pages/Hospital/AboutUs";
import EventsPage from "./pages/Charity/Events";
import NotFoundPage from "./pages/NotFound";
import SuccessPage from "./components/common/Success"; // Ensure this path is correct
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
            element={<SuccessPage />} // Ensure this path is correct
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
