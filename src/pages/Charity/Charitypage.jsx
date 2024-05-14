// src/pages/Charity/Charitypage.jsx
import React, { useState, useEffect } from 'react';
import CharityLayout from '../../components/common/CLayout.jsx';
import HeroCarousel from '../../components/common/ChartiyHeroSection.jsx';
import CardSection from './cards.jsx';
import DonationForm from './donatesection.jsx';

const CharityPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch the client secret from your backend
    fetch('http://localhost:4242/create-payment-intent', { // Use the full URL here
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }] }) // Replace with actual items and amounts
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error('Error fetching client secret:', err));
  }, []);

  return (
    <CharityLayout>
      <HeroCarousel />
      <CardSection />
      <div className="p-6">
        {/* Render DonationForm if clientSecret is available */}
        {clientSecret && <DonationForm clientSecret={clientSecret} />}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
