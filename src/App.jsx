import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Page Components
import HospitalPage from "./pages/Hospital/Hospitalpage";
import CharityPage from "./pages/Charity/Charitypage";
import OurServices from "./pages/Hospital/OurServices";
import ContactUs from "./pages/Hospital/Contactus";
import AboutUs from "./pages/Hospital/Aboutus";
import EventsPage from "./pages/Charity/events";
import NotFoundPage from "./pages/notfound";

// Load Stripe with your public key (ensure this key is correctly configured in your environment)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

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
          path="/"
          element={
            <Elements stripe={stripePromise}>
              <HospitalPage />
            </Elements>
          }
        />
        <Route
          path="/hospital"
          element={
            <Elements stripe={stripePromise}>
              <HospitalPage />
            </Elements>
          }
        />
        <Route
          path="/charity"
          element={
            <Elements stripe={stripePromise}>
              <CharityPage />
            </Elements>
          }
        />
        {/* Routes for Hospital Sub-Pages */}
        <Route
          path="/hospital/about"
          element={
            <Elements stripe={stripePromise}>
              <AboutUs />
            </Elements>
          }
        />
        <Route
          path="/hospital/contact"
          element={
            <Elements stripe={stripePromise}>
              <ContactUs />
            </Elements>
          }
        />
        <Route
          path="/hospital/ourservices"
          element={
            <Elements stripe={stripePromise}>
              <OurServices />
            </Elements>
          }
        />
        {/* Define other routes here */}
        <Route
          path="/charity/events"
          element={
            <Elements stripe={stripePromise}>
              <EventsPage />
            </Elements>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
